import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  BarChart3, 
  Eye,
  Copy,
  Calendar
} from 'lucide-react'
import { formatDate } from '@/lib/utils'
import { prisma } from '@/lib/db'
import { CreateModelForm } from '@/components/forms/create-model-form'

// This function runs on the server and fetches real data
async function getModelPortfolios() {
  const models = await prisma.modelPortfolio.findMany({
    where: { isPublic: true },
    include: {
      creator: {
        select: {
          username: true,
          name: true
        }
      },
      allocations: {
        orderBy: {
          percentage: 'desc'
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  return models
}

function ModelPortfolioCard({ model }: { model: Awaited<ReturnType<typeof getModelPortfolios>>[0] }) {
  const totalAllocations = model.allocations.reduce((sum, a) => sum + a.percentage, 0)
  
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl">{model.name}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              by {model.creator.username}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary">
              {model.allocations.length} assets
            </Badge>
          </div>
        </div>
        {model.description && (
          <p className="text-sm text-muted-foreground">
            {model.description}
          </p>
        )}
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Top Holdings */}
        <div>
          <div className="text-sm font-medium mb-2">Holdings</div>
          <div className="space-y-2">
            {model.allocations.map((allocation) => (
              <div key={allocation.id} className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <span className="font-mono font-bold">{allocation.ticker}</span>
                </div>
                <span className="font-semibold">{allocation.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Total Check */}
        <div className="text-xs text-muted-foreground">
          Total allocation: {totalAllocations}%
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>Created {formatDate(model.createdAt)}</span>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <BarChart3 className="h-4 w-4 mr-1" />
              View Details
            </Button>
            <Button size="sm">
              <Copy className="h-4 w-4 mr-1" />
              Copy Model
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default async function ModelPortfoliosPage() {
  const modelPortfolios = await getModelPortfolios()

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Model Portfolios</h1>
          <p className="text-muted-foreground">
            Discover and copy proven investment strategies from successful investors
          </p>
        </div>
        <CreateModelForm />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card p-4 rounded-lg border">
          <div className="text-2xl font-bold">{modelPortfolios.length}</div>
          <div className="text-sm text-muted-foreground">Model Portfolios</div>
        </div>
        <div className="bg-card p-4 rounded-lg border">
          <div className="text-2xl font-bold">
            {modelPortfolios.reduce((sum, m) => sum + m.allocations.length, 0)}
          </div>
          <div className="text-sm text-muted-foreground">Total Holdings</div>
        </div>
        <div className="bg-card p-4 rounded-lg border">
          <div className="text-2xl font-bold">3</div>
          <div className="text-sm text-muted-foreground">Active Investors</div>
        </div>
      </div>

      {/* Model Portfolios */}
      <div>
        <h2 className="text-2xl font-bold mb-4">All Models</h2>
        {modelPortfolios.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modelPortfolios.map((model) => (
              <ModelPortfolioCard key={model.id} model={model} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            No model portfolios yet. Be the first to create one!
          </div>
        )}
      </div>
    </div>
  )
}