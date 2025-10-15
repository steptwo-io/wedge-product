'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { TrendingUp, TrendingDown, Users, BarChart3, DollarSign, Target } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="w-64 space-y-6">
      {/* Market Overview */}
      <Card className="p-4">
        <h3 className="font-semibold mb-4">Market Overview</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">S&P 500</span>
            <span className="text-sm font-medium stock-up">+0.45%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">NASDAQ</span>
            <span className="text-sm font-medium stock-up">+0.32%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">DOW</span>
            <span className="text-sm font-medium stock-down">-0.12%</span>
          </div>
        </div>
      </Card>

      {/* Trending Topics */}
      <Card className="p-4">
        <h3 className="font-semibold mb-4">Trending Topics</h3>
        <div className="space-y-2">
          {['#AAPL', '#TSLA', '#NVDA', '#AI', '#Earnings'].map((topic) => (
            <Link
              key={topic}
              href={`/search?q=${topic}`}
              className="block text-sm text-primary hover:underline"
            >
              {topic}
            </Link>
          ))}
        </div>
      </Card>

      {/* Quick Stats */}
      <Card className="p-4">
        <h3 className="font-semibold mb-4">Today&apos;s Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4 text-green-500" />
            <span className="text-sm">127 new picks</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-blue-500" />
            <span className="text-sm">89 active users</span>
          </div>
          <div className="flex items-center space-x-2">
            <BarChart3 className="h-4 w-4 text-purple-500" />
            <span className="text-sm">23 portfolios shared</span>
          </div>
        </div>
      </Card>

      {/* Quick Actions */}
      <Card className="p-4">
        <h3 className="font-semibold mb-4">Quick Actions</h3>
        <div className="space-y-2">
          <Link
            href="/picks/new"
            className="flex items-center space-x-2 text-sm text-primary hover:underline"
          >
            <Target className="h-4 w-4" />
            <span>Share a Stock Pick</span>
          </Link>
          <Link
            href="/portfolios/new"
            className="flex items-center space-x-2 text-sm text-primary hover:underline"
          >
            <DollarSign className="h-4 w-4" />
            <span>Create Portfolio</span>
          </Link>
          <Link
            href="/models/new"
            className="flex items-center space-x-2 text-sm text-primary hover:underline"
          >
            <BarChart3 className="h-4 w-4" />
            <span>Build Model Portfolio</span>
          </Link>
        </div>
      </Card>
    </aside>
  )
}
