'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  TrendingUp, 
  Search, 
  User, 
  Bell, 
  Plus, 
  ChevronDown,
  BarChart3,
  Target,
  DollarSign,
  Menu,
  X
} from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeUsers, setActiveUsers] = useState<number | null>(null)
  const clientId = useMemo(() => {
    if (typeof window === 'undefined') return 'srv'
    const key = 'wedge_client_id'
    const existing = window.localStorage.getItem(key)
    if (existing) return existing
    const id = crypto.randomUUID()
    window.localStorage.setItem(key, id)
    return id
  }, [])

  useEffect(() => {
    let mounted = true
    async function heartbeat() {
      try {
        const res = await fetch('/api/presence', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ clientId }),
          cache: 'no-store',
        })
        if (!mounted) return
        if (res.ok) {
          const data = await res.json()
          setActiveUsers(data.activeUsers ?? null)
        }
      } catch {
        // ignore network errors in heartbeat
      }
    }
    // initial call and interval
    heartbeat()
    const id = setInterval(heartbeat, 15_000)
    return () => {
      mounted = false
      clearInterval(id)
    }
  }, [clientId])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-secondary group-hover:scale-105 transition-transform">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold gradient-text">Pulses</span>
              <span className="text-sm text-muted-foreground font-medium">by StepTwo</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-sm font-medium hover:text-primary transition-colors">
                <Target className="h-4 w-4" />
                <span>Investing</span>
                <ChevronDown className="h-3 w-3" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  <Link href="/picks" className="block px-3 py-2 text-sm hover:bg-accent rounded-lg">
                    Stock Picks
                  </Link>
                  <Link href="/portfolios" className="block px-3 py-2 text-sm hover:bg-accent rounded-lg">
                    Portfolios
                  </Link>
                  <Link href="/models" className="block px-3 py-2 text-sm hover:bg-accent rounded-lg">
                    Model Portfolios
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/market" className="text-sm font-medium hover:text-primary transition-colors">
              Market
            </Link>
            <Link href="/education" className="text-sm font-medium hover:text-primary transition-colors">
              Education
            </Link>
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center space-x-4">
            {/* Live presence indicator */}
            <div className="hidden md:flex items-center space-x-2 px-3 py-2 rounded-xl bg-muted/40 border border-border/50" suppressHydrationWarning>
              <span className="relative inline-flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-40 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs text-muted-foreground">Online</span>
              <span className="text-sm font-semibold">{activeUsers ?? '—'}</span>
            </div>
            {/* Search */}
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search stocks, users..."
                className="w-72 pl-10 pr-4 py-3 text-sm bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
              />
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              <Button size="icon" variant="ghost" className="h-10 w-10 rounded-xl">
                <Bell className="h-4 w-4" />
              </Button>
              
              <Button size="icon" variant="ghost" className="h-10 w-10 rounded-xl">
                <User className="h-4 w-4" />
              </Button>
              
              <Button className="hidden md:flex bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-0 rounded-xl px-6 py-3 font-medium">
                <Plus className="h-4 w-4 mr-2" />
                New Post
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              size="icon"
              variant="ghost"
              className="lg:hidden h-10 w-10 rounded-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border/40 py-4">
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-lg">
                Home
              </Link>
              <Link href="/picks" className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-lg">
                Stock Picks
              </Link>
              <Link href="/portfolios" className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-lg">
                Portfolios
              </Link>
              <Link href="/models" className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-lg">
                Model Portfolios
              </Link>
              <Link href="/market" className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-lg">
                Market
              </Link>
              <Link href="/education" className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-lg">
                Education
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
