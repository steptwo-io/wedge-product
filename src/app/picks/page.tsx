import { PostCard } from '@/components/post/post-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Filter, TrendingUp } from 'lucide-react'

// Sample stock picks data
const stockPicks = [
  {
    id: '1',
    title: 'Why I\'m Bullish on NVIDIA (NVDA) for Q4 2024',
    content: 'NVIDIA continues to dominate the AI chip market with their latest H200 series. The demand for AI infrastructure is only growing, and NVDA is perfectly positioned to capitalize on this trend. Their data center revenue is up 409% YoY, and I don\'t see this slowing down anytime soon.',
    type: 'STOCK_PICK' as const,
    ticker: 'NVDA',
    priceTarget: 850,
    timeframe: '6 months',
    reasoning: 'Strong AI demand, market leadership, expanding data center business',
    riskLevel: 'HIGH' as const,
    createdAt: new Date('2024-01-10T10:30:00Z'),
    author: {
      id: '1',
      username: 'TechInvestor',
      name: 'Sarah Chen',
      avatar: null
    },
    _count: {
      comments: 23,
      votes: 45
    },
    votes: [
      { type: 'UPVOTE' as const },
      { type: 'UPVOTE' as const },
      { type: 'UPVOTE' as const },
      { type: 'DOWNVOTE' as const }
    ]
  },
  {
    id: '2',
    title: 'Apple (AAPL) - Strong Buy for Long-term Growth',
    content: 'Apple\'s ecosystem continues to strengthen with services revenue growing 16% YoY. The iPhone 15 series shows strong demand, and the Vision Pro represents a new growth vector. Trading at a reasonable P/E of 28, this is a solid long-term hold.',
    type: 'STOCK_PICK' as const,
    ticker: 'AAPL',
    priceTarget: 200,
    timeframe: '12 months',
    reasoning: 'Strong ecosystem, growing services revenue, reasonable valuation',
    riskLevel: 'MEDIUM' as const,
    createdAt: new Date('2024-01-09T15:20:00Z'),
    author: {
      id: '2',
      username: 'ValueHunter',
      name: 'Mike Johnson',
      avatar: null
    },
    _count: {
      comments: 18,
      votes: 32
    },
    votes: [
      { type: 'UPVOTE' as const },
      { type: 'UPVOTE' as const },
      { type: 'UPVOTE' as const }
    ]
  },
  {
    id: '3',
    title: 'Tesla (TSLA) - High Risk, High Reward Play',
    content: 'Tesla\'s energy business is the hidden gem. With solar and storage growing 40% YoY, this could be the next major revenue driver. However, the stock is volatile and highly dependent on Elon\'s decisions. Only for risk-tolerant investors.',
    type: 'STOCK_PICK' as const,
    ticker: 'TSLA',
    priceTarget: 300,
    timeframe: '18 months',
    reasoning: 'Energy business growth, EV market leadership, but high volatility',
    riskLevel: 'VERY_HIGH' as const,
    createdAt: new Date('2024-01-08T11:45:00Z'),
    author: {
      id: '3',
      username: 'RiskTaker',
      name: 'Alex Rodriguez',
      avatar: null
    },
    _count: {
      comments: 31,
      votes: 28
    },
    votes: [
      { type: 'UPVOTE' as const },
      { type: 'DOWNVOTE' as const },
      { type: 'DOWNVOTE' as const }
    ]
  }
]

export default function StockPicksPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Stock Picks</h1>
          <p className="text-muted-foreground">
            Discover and share investment opportunities with the community
          </p>
        </div>
        <Button className="w-fit">
          <TrendingUp className="h-4 w-4 mr-2" />
          Share Your Pick
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by ticker, company, or analysis..."
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="w-fit">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-card p-4 rounded-lg border">
          <div className="text-2xl font-bold text-green-500">+12.4%</div>
          <div className="text-sm text-muted-foreground">Avg Return</div>
        </div>
        <div className="bg-card p-4 rounded-lg border">
          <div className="text-2xl font-bold">1,247</div>
          <div className="text-sm text-muted-foreground">Total Picks</div>
        </div>
        <div className="bg-card p-4 rounded-lg border">
          <div className="text-2xl font-bold text-blue-500">68%</div>
          <div className="text-sm text-muted-foreground">Success Rate</div>
        </div>
        <div className="bg-card p-4 rounded-lg border">
          <div className="text-2xl font-bold">23</div>
          <div className="text-sm text-muted-foreground">This Week</div>
        </div>
      </div>

      {/* Stock Picks */}
      <div className="space-y-4">
        {stockPicks.map((pick) => (
          <PostCard key={pick.id} post={pick} />
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center">
        <Button variant="outline">
          Load More Picks
        </Button>
      </div>
    </div>
  )
}
