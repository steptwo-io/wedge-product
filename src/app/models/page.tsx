import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Calendar,
  Target,
  Eye,
  Copy
} from 'lucide-react'
import { formatPercentage, formatDate } from '@/lib/utils'

// Sample model portfolio data
const modelPortfolios = [
  {
    id: '1',
    name: 'Conservative Growth Model',
    description: 'Balanced portfolio for steady growth with moderate risk',
    creator: {
      username: 'ConservativeInvestor',
      name: 'John Smith'
    },
    totalReturn: 8.2,
    volatility: 12.5,
    sharpeRatio: 0.65,
    maxDrawdown: -8.3,
    allocations: [
      { ticker: 'VTI', percentage: 40, name: 'Total Stock Market' },
      { ticker: 'BND', percentage: 30, name: 'Total Bond Market' },
      { ticker: 'VXUS', percentage: 20, name: 'International Stocks' },
      { ticker: 'REIT', percentage: 10, name: 'Real Estate' }
    ],
    followers: 456,
    createdAt: new Date('2024-01-01'),
    isPublic: true,
    tags: ['Conservative', 'Balanced', 'ETF']
  },
  {
    id: '2',
    name: 'Tech Aggressive Model',
    description: 'High-growth technology focused portfolio for aggressive investors',
    creator: {
      username: 'TechGuru',
      name: 'Sarah Chen'
    },
    totalReturn: 24.7,
    volatility: 28.3,
    sharpeRatio: 0.87,
    maxDrawdown: -22.1,
    allocations: [
      { ticker: 'QQQ', percentage: 35, name: 'NASDAQ 100' },
      { ticker: 'ARKK', percentage: 25, name: 'Innovation ETF' },
      { ticker: 'XLK', percentage: 20, name: 'Technology Sector' },
      { ticker: 'VGT', percentage: 20, name: 'Information Technology' }
    ],
    followers: 234,
    createdAt: new Date('2024-01-05'),
    isPublic: true,
    tags: ['Aggressive', 'Technology', 'Growth']
  },
  {
    id: '3',
    name: 'Dividend Income Model',
    description: 'Focus on dividend-paying stocks for consistent income generation',
    creator: {
      username: 'DividendMaster',
      name: 'Robert Johnson'
    },
    totalReturn: 11.8,
    volatility: 15.2,
    sharpeRatio: 0.78,
    maxDrawdown: -12.4,
    allocations: [
      { ticker: 'VYM', percentage: 30, name: 'High Dividend Yield' },
      { ticker: 'SCHD', percentage: 25, name: 'Dividend Equity' },
      { ticker: 'DGRO', percentage: 20, name: 'Dividend Growth' },
      { ticker: 'VIG', percentage: 15, name: 'Dividend Appreciation' },
      { ticker: 'REIT', percentage: 10, name: 'Real Estate' }
    ],
    followers: 189,
    createdAt: new Date('2023-12-20'),
    isPublic: true,
    tags: ['Dividend', 'Income', 'Value']
  }
]

function ModelPortfolioCard({ model }: { model: typeof modelPortfolios[0] }) {
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
            <Badge variant="outline">
              <Eye className="h-3 w-3 mr-1" />
              {model.followers}
            </Badge>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          {model.description}
        </p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Performance Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-muted-foreground">Total Return</div>
            <div className="text-2xl font-bold text-green-500">
              {formatPercentage(model.totalReturn)}
            </div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Volatility</div>
            <div className="text-2xl font-bold">
              {formatPercentage(model.volatility)}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-muted-foreground">Sharpe Ratio</div>
            <div className="text-lg font-semibold">
              {model.sharpeRatio.toFixed(2)}
            </div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Max Drawdown</div>
            <div className="text-lg font-semibold text-red-500">
              {formatPercentage(model.maxDrawdown)}
            </div>
          </div>
        </div>

        {/* Top Holdings */}
        <div>
          <div className="text-sm font-medium mb-2">Top Holdings</div>
          <div className="space-y-2">
            {model.allocations.slice(0, 3).map((allocation) => (
              <div key={allocation.ticker} className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <span className="font-mono font-bold">{allocation.ticker}</span>
                  <span className="text-muted-foreground">{allocation.name}</span>
                </div>
                <span className="font-semibold">{formatPercentage(allocation.percentage)}</span>
              </div>
            ))}
            {model.allocations.length > 3 && (
              <div className="text-sm text-muted-foreground">
                +{model.allocations.length - 3} more holdings
              </div>
            )}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {model.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
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

export default function ModelPortfoliosPage() {
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
        <Button className="w-fit">
          <BarChart3 className="h-4 w-4 mr-2" />
          Create Model
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-card p-4 rounded-lg border">
          <div className="text-2xl font-bold">123</div>
          <div className="text-sm text-muted-foreground">Model Portfolios</div>
        </div>
        <div className="bg-card p-4 rounded-lg border">
          <div className="text-2xl font-bold text-green-500">+14.2%</div>
          <div className="text-sm text-muted-foreground">Avg Return</div>
        </div>
        <div className="bg-card p-4 rounded-lg border">
          <div className="text-2xl font-bold">0.72</div>
          <div className="text-sm text-muted-foreground">Avg Sharpe Ratio</div>
        </div>
        <div className="bg-card p-4 rounded-lg border">
          <div className="text-2xl font-bold">2,456</div>
          <div className="text-sm text-muted-foreground">Total Copies</div>
        </div>
      </div>

      {/* Model Portfolios */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Featured Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modelPortfolios.map((model) => (
            <ModelPortfolioCard key={model.id} model={model} />
          ))}
        </div>
      </div>

      {/* Load More */}
      <div className="flex justify-center">
        <Button variant="outline">
          Load More Models
        </Button>
      </div>
    </div>
  )
}
