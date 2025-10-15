'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { 
  ArrowUp, 
  ArrowDown, 
  MessageCircle, 
  Share, 
  Bookmark,
  TrendingUp,
  TrendingDown,
  Clock,
  Target
} from 'lucide-react'
import { formatRelativeTime, formatCurrency, formatPercentage } from '@/lib/utils'
import { PostType, RiskLevel } from '@prisma/client'
import { useEffect, useState } from 'react'

interface PostCardProps {
  post: {
    id: string
    title: string
    content: string
    type: PostType
    ticker?: string | null
    priceTarget?: number | null
    timeframe?: string | null
    reasoning?: string | null
    riskLevel?: RiskLevel | null
    createdAt: Date
    author: {
      id: string
      username: string
      name?: string | null
      avatar?: string | null
    }
    _count: {
      comments: number
      votes: number
    }
    votes: Array<{
      type: 'UPVOTE' | 'DOWNVOTE'
    }>
  }
}

export function PostCard({ post }: PostCardProps) {
  const upvotes = post.votes.filter(v => v.type === 'UPVOTE').length
  const downvotes = post.votes.filter(v => v.type === 'DOWNVOTE').length
  const netVotes = upvotes - downvotes

  // Compute relative time on client to avoid hydration mismatches
  const [relativeTime, setRelativeTime] = useState<string>('')
  useEffect(() => {
    const compute = () => setRelativeTime(formatRelativeTime(new Date(post.createdAt)))
    compute()
    const id = setInterval(compute, 60_000)
    return () => clearInterval(id)
  }, [post.createdAt])

  const getRiskColor = (risk: RiskLevel) => {
    switch (risk) {
      case 'LOW': return 'risk-low'
      case 'MEDIUM': return 'risk-medium'
      case 'HIGH': return 'risk-high'
      case 'VERY_HIGH': return 'risk-very-high'
      default: return 'risk-medium'
    }
  }

  return (
    <Card className="glass-card hover:shadow-xl transition-all duration-300 border-border/50">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-10 w-10 border-2 border-primary/20">
              <AvatarImage src={post.author.avatar || undefined} />
              <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-semibold">
                {post.author.username.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-3">
                <span className="font-semibold text-base">{post.author.username}</span>
                {post.type === 'STOCK_PICK' && (
                  <span className="text-xs bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full font-medium">
                    Stock Pick
                  </span>
                )}
              </div>
              <span className="text-sm text-muted-foreground" suppressHydrationWarning>
                {relativeTime || ''}
              </span>
            </div>
          </div>
          
          {post.type === 'STOCK_PICK' && post.riskLevel && (
            <span className={`text-xs px-3 py-1 rounded-full font-medium ${getRiskColor(post.riskLevel)}`}>
              {post.riskLevel.replace('_', ' ')}
            </span>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <h3 className="font-bold text-xl mb-3 leading-tight">{post.title}</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            {post.content}
          </p>
        </div>

        {post.type === 'STOCK_PICK' && (
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 p-6 rounded-2xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="font-mono font-bold text-2xl text-primary">${post.ticker}</span>
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
              {post.priceTarget && (
                <div className="text-right">
                  <div className="text-sm text-muted-foreground font-medium">Price Target</div>
                  <div className="font-bold text-xl text-primary">{formatCurrency(post.priceTarget)}</div>
                </div>
              )}
            </div>
            
            {post.timeframe && (
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span className="font-medium">Timeframe: {post.timeframe}</span>
              </div>
            )}
            
            {post.reasoning && (
              <div className="text-sm">
                <div className="font-semibold mb-2 text-foreground">Key Reasoning:</div>
                <p className="text-muted-foreground leading-relaxed">{post.reasoning}</p>
              </div>
            )}
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Button size="sm" variant="ghost" className="h-10 w-10 p-0 rounded-xl hover:bg-green-500/10 hover:text-green-500">
                <ArrowUp className="h-4 w-4" />
              </Button>
              <span className="text-base font-bold min-w-[24px] text-center text-foreground">
                {netVotes}
              </span>
              <Button size="sm" variant="ghost" className="h-10 w-10 p-0 rounded-xl hover:bg-red-500/10 hover:text-red-500">
                <ArrowDown className="h-4 w-4" />
              </Button>
            </div>
            
            <Button size="sm" variant="ghost" className="h-10 px-4 rounded-xl hover:bg-primary/10 hover:text-primary">
              <MessageCircle className="h-4 w-4 mr-2" />
              <span className="font-medium">{post._count.comments}</span>
            </Button>
            
            <Button size="sm" variant="ghost" className="h-10 px-4 rounded-xl hover:bg-accent">
              <Share className="h-4 w-4 mr-2" />
              <span className="font-medium">Share</span>
            </Button>
          </div>
          
          <Button size="sm" variant="ghost" className="h-10 px-4 rounded-xl hover:bg-accent">
            <Bookmark className="h-4 w-4 mr-2" />
            <span className="font-medium">Save</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
