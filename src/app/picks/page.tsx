import { PostCard } from '@/components/post/post-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Filter, TrendingUp } from 'lucide-react'
import { prisma } from '@/lib/db'

// This function runs on the server and fetches real stock picks
async function getStockPicks() {
  const picks = await prisma.post.findMany({
    where: { 
      type: 'STOCK_PICK' 
    },
    include: {
      author: {
        select: {
          id: true,
          username: true,
          name: true,
          avatar: true
        }
      },
      _count: {
        select: {
          comments: true,
          votes: true
        }
      },
      votes: {
        select: {
          type: true
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  return picks
}

export default async function StockPicksPage() {
  const stockPicks = await getStockPicks()

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
          <div className="text-2xl font-bold">{stockPicks.length}</div>
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
        {stockPicks.length > 0 ? (
          stockPicks.map((pick) => (
            <PostCard key={pick.id} post={pick} />
          ))
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            No stock picks yet. Be the first to share your analysis!
          </div>
        )}
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
