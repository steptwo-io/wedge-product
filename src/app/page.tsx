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
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="relative glass-card p-16 rounded-3xl border border-primary/20 shadow-2xl shadow-primary/10">
          <div className="max-w-5xl">
            <div className="flex items-center space-x-4 mb-8">
              <div className="relative">
                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 h-3 w-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-lg font-semibold text-green-400 tracking-wide">LIVE MARKET DATA</span>
              <div className="h-1 w-16 bg-gradient-to-r from-green-500 to-transparent"></div>
            </div>
            
            <h1 className="text-7xl font-black mb-8 leading-tight tracking-tight">
              AMERICA'S FINANCIAL
              <br />
              <span className="gradient-text bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent">
                COMMUNITY PLATFORM
              </span>
            </h1>
            
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-xl text-muted-foreground font-medium">Powered by</span>
              <div className="px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl border border-primary/30">
                <span className="text-2xl font-bold gradient-text">StepTwo</span>
              </div>
            </div>
            
            <p className="text-2xl text-muted-foreground mb-10 max-w-3xl leading-relaxed font-light">
              Connect with investors, share stock picks, and build wealth together. 
              <span className="text-foreground font-semibold">Your bank won't do this.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="bg-gradient-to-r from-primary via-purple-600 to-secondary hover:from-primary/90 hover:via-purple-600/90 hover:to-secondary/90 text-white border-0 rounded-2xl px-10 py-6 text-xl font-bold hover-lift shadow-lg shadow-primary/25">
                <TrendingUp className="h-6 w-6 mr-3" />
                Start Investing
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl px-10 py-6 text-xl font-bold hover-lift border-primary/30 hover:bg-primary/5 hover:border-primary/50">
                <BarChart3 className="h-6 w-6 mr-3" />
                Browse Community
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="glass-card p-8 rounded-3xl hover-lift border border-green-500/20 group">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-4xl font-black text-green-400 mb-2">1,247</div>
              <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">Stock Picks</div>
            </div>
            <div className="p-3 rounded-2xl bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
              <TrendingUp className="h-8 w-8 text-green-400" />
            </div>
          </div>
        </div>
        <div className="glass-card p-8 rounded-3xl hover-lift border border-blue-500/20 group">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-4xl font-black text-blue-400 mb-2">2,891</div>
              <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">Active Users</div>
            </div>
            <div className="p-3 rounded-2xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
              <Users className="h-8 w-8 text-blue-400" />
            </div>
          </div>
        </div>
        <div className="glass-card p-8 rounded-3xl hover-lift border border-purple-500/20 group">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-4xl font-black text-purple-400 mb-2">456</div>
              <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">Portfolios</div>
            </div>
            <div className="p-3 rounded-2xl bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
              <BarChart3 className="h-8 w-8 text-purple-400" />
            </div>
          </div>
        </div>
        <div className="glass-card p-8 rounded-3xl hover-lift border border-emerald-500/20 group">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-4xl font-black text-emerald-400 mb-2">+12.4%</div>
              <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">Avg Return</div>
            </div>
            <div className="p-3 rounded-2xl bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
              <TrendingUp className="h-8 w-8 text-emerald-400" />
            </div>
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
