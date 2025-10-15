import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  BarChart3, 
  Users, 
  Calendar,
  Target,
  Eye
} from 'lucide-react'
import { formatCurrency, formatPercentage, formatDate } from '@/lib/utils'

// Sample portfolio data
const portfolios = [
  {
    id: '1',
    name: 'Tech Growth Portfolio',
    description: 'Focused on high-growth technology companies with strong fundamentals',
    owner: {
      username: 'TechInvestor',
      name: 'Sarah Chen'
    },
    totalValue: 125000,
    totalReturn: 15.2,
    totalReturnAmount: 16500,
    periodReturn: 3.4,
    holdings: 12,
    followers: 234,
    createdAt: new Date('2024-01-01'),
    isPublic: true,
    tags: ['Technology', 'Growth', 'Large Cap']
  },
  {
    id: '2',
    name: 'Dividend Aristocrats',
    description: 'Conservative portfolio focused on dividend-paying blue-chip stocks',
    owner: {
      username: 'DividendKing',
      name: 'Robert Johnson'
    },
    totalValue: 89000,
    totalReturn: 8.7,
    totalReturnAmount: 7743,
    periodReturn: 1.2,
    holdings: 20,
    followers: 189,
    createdAt: new Date('2023-12-15'),
    isPublic: true,
    tags: ['Dividend', 'Value', 'Blue Chip']
  },
  {
    id: '3',
    name: 'ESG Impact Fund',
    description: 'Environmental, Social, and Governance focused investments',
    owner: {
      username: 'GreenInvestor',
      name: 'Emma Wilson'
    },
    totalValue: 156000,
    totalReturn: 22.1,
    totalReturnAmount: 28236,
    periodReturn: 5.8,
    holdings: 15,
    followers: 156,
    createdAt: new Date('2024-01-05'),
    isPublic: true,
    tags: ['ESG', 'Sustainable', 'Mid Cap']
  }
]

function PortfolioCard({ portfolio }: { portfolio: typeof portfolios[0] }) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl">{portfolio.name}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              by {portfolio.owner.username}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary">
              {portfolio.holdings} holdings
            </Badge>
            <Badge variant="outline">
              <Eye className="h-3 w-3 mr-1" />
              {portfolio.followers}
            </Badge>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          {portfolio.description}
        </p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Performance Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-muted-foreground">Total Value</div>
            <div className="text-2xl font-bold">{formatCurrency(portfolio.totalValue)}</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Total Return</div>
            <div className={`text-2xl font-bold flex items-center ${
              portfolio.totalReturn >= 0 ? 'text-green-500' : 'text-red-500'
            }`}>
              {portfolio.totalReturn >= 0 ? (
                <TrendingUp className="h-5 w-5 mr-1" />
              ) : (
                <TrendingDown className="h-5 w-5 mr-1" />
              )}
              {formatPercentage(portfolio.totalReturn)}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-muted-foreground">Return Amount</div>
            <div className={`text-lg font-semibold ${
              portfolio.totalReturnAmount >= 0 ? 'text-green-500' : 'text-red-500'
            }`}>
              {formatCurrency(portfolio.totalReturnAmount)}
            </div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">This Month</div>
            <div className={`text-lg font-semibold ${
              portfolio.periodReturn >= 0 ? 'text-green-500' : 'text-red-500'
            }`}>
              {formatPercentage(portfolio.periodReturn)}
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {portfolio.tags.map((tag) => (
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
              <span>Created {formatDate(portfolio.createdAt)}</span>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <BarChart3 className="h-4 w-4 mr-1" />
              View Details
            </Button>
            <Button size="sm">
              <Users className="h-4 w-4 mr-1" />
              Follow
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function PortfoliosPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Portfolios</h1>
          <p className="text-muted-foreground">
            Discover and follow investment portfolios from successful investors
          </p>
        </div>
        <Button className="w-fit">
          <DollarSign className="h-4 w-4 mr-2" />
          Create Portfolio
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-card p-4 rounded-lg border">
          <div className="text-2xl font-bold">456</div>
          <div className="text-sm text-muted-foreground">Total Portfolios</div>
        </div>
        <div className="bg-card p-4 rounded-lg border">
          <div className="text-2xl font-bold text-green-500">+12.4%</div>
          <div className="text-sm text-muted-foreground">Avg Return</div>
        </div>
        <div className="bg-card p-4 rounded-lg border">
          <div className="text-2xl font-bold">$2.1M</div>
          <div className="text-sm text-muted-foreground">Total AUM</div>
        </div>
        <div className="bg-card p-4 rounded-lg border">
          <div className="text-2xl font-bold">1,234</div>
          <div className="text-sm text-muted-foreground">Active Followers</div>
        </div>
      </div>

      {/* Featured Portfolios */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Featured Portfolios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolios.map((portfolio) => (
            <PortfolioCard key={portfolio.id} portfolio={portfolio} />
          ))}
        </div>
      </div>

      {/* Load More */}
      <div className="flex justify-center">
        <Button variant="outline">
          Load More Portfolios
        </Button>
      </div>
    </div>
  )
}
