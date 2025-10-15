import { PostCard } from '@/components/post/post-card'
import { Button } from '@/components/ui/button'
import { TrendingUp, Users, BarChart3 } from 'lucide-react'

// Sample data for demonstration
const samplePosts = [
  {
    id: '1',
    title: 'Why I&apos;m Bullish on NVIDIA (NVDA) for Q4 2024',
    content: 'NVIDIA continues to dominate the AI chip market with their latest H200 series. The demand for AI infrastructure is only growing, and NVDA is perfectly positioned to capitalize on this trend. Their data center revenue is up 409% YoY, and I don&apos;t see this slowing down anytime soon.',
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
    title: 'Market Analysis: Tech Sector Rotation Ahead?',
    content: 'With interest rates potentially peaking and the Fed signaling a more dovish stance, I believe we&apos;re seeing the beginning of a rotation back into growth stocks. The tech sector has been oversold, and quality companies with strong fundamentals are trading at attractive valuations.',
    type: 'ANALYSIS' as const,
    ticker: null,
    priceTarget: null,
    timeframe: null,
    reasoning: null,
    riskLevel: null,
    createdAt: new Date('2024-01-09T14:15:00Z'),
    author: {
      id: '2',
      username: 'MarketGuru',
      name: 'Michael Rodriguez',
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
    title: 'My Dividend Growth Portfolio - January 2024',
    content: 'Sharing my updated dividend growth portfolio. Focus on companies with strong moats, consistent dividend growth, and reasonable valuations. Current yield is 3.2% with 5-year average dividend growth of 8.5%.',
    type: 'PORTFOLIO_SHARE' as const,
    ticker: null,
    priceTarget: null,
    timeframe: null,
    reasoning: null,
    riskLevel: null,
    createdAt: new Date('2024-01-08T09:45:00Z'),
    author: {
      id: '3',
      username: 'DividendKing',
      name: 'Robert Johnson',
      avatar: null
    },
    _count: {
      comments: 31,
      votes: 28
    },
    votes: [
      { type: 'UPVOTE' as const },
      { type: 'UPVOTE' as const },
      { type: 'DOWNVOTE' as const }
    ]
  }
]

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent"></div>
        <div className="relative glass-card p-12 rounded-3xl">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-500">LIVE MARKET DATA</span>
            </div>
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              AMERICA'S FINANCIAL
              <br />
              <span className="gradient-text">COMMUNITY PLATFORM</span>
            </h1>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-lg text-muted-foreground">Powered by</span>
              <span className="text-xl font-bold text-primary">StepTwo</span>
            </div>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Connect with investors, share stock picks, and build wealth together. 
              Your bank won't do this.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-0 rounded-xl px-8 py-4 text-lg font-semibold hover-lift">
                <TrendingUp className="h-5 w-5 mr-2" />
                Start Investing
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl px-8 py-4 text-lg font-semibold hover-lift">
                <BarChart3 className="h-5 w-5 mr-2" />
                Browse Community
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="glass-card p-6 rounded-2xl hover-lift">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold text-green-500">1,247</div>
              <div className="text-sm text-muted-foreground font-medium">Stock Picks</div>
            </div>
            <TrendingUp className="h-8 w-8 text-green-500/60" />
          </div>
        </div>
        <div className="glass-card p-6 rounded-2xl hover-lift">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold text-blue-500">2,891</div>
              <div className="text-sm text-muted-foreground font-medium">Active Users</div>
            </div>
            <Users className="h-8 w-8 text-blue-500/60" />
          </div>
        </div>
        <div className="glass-card p-6 rounded-2xl hover-lift">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold text-purple-500">456</div>
              <div className="text-sm text-muted-foreground font-medium">Portfolios</div>
            </div>
            <BarChart3 className="h-8 w-8 text-purple-500/60" />
          </div>
        </div>
        <div className="glass-card p-6 rounded-2xl hover-lift">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold text-green-500">+12.4%</div>
              <div className="text-sm text-muted-foreground font-medium">Avg Return</div>
            </div>
            <TrendingUp className="h-8 w-8 text-green-500/60" />
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Recent Activity</h2>
          <Button variant="outline" className="rounded-xl px-6 py-3 font-medium hover-lift">
            View All
          </Button>
        </div>
        
        <div className="space-y-6">
          {samplePosts.map((post) => (
            <div key={post.id} className="hover-lift">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
