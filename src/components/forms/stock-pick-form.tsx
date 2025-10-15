'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Target, DollarSign, Clock, AlertTriangle } from 'lucide-react'

export function StockPickForm() {
  const [formData, setFormData] = useState({
    title: '',
    ticker: '',
    priceTarget: '',
    timeframe: '',
    reasoning: '',
    riskLevel: '',
    content: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Target className="h-5 w-5" />
          <span>Share Your Stock Pick</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              placeholder="e.g., Why I'm Bullish on Apple (AAPL)"
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="ticker">Ticker Symbol *</Label>
              <Input
                id="ticker"
                placeholder="AAPL"
                value={formData.ticker}
                onChange={(e) => handleChange('ticker', e.target.value.toUpperCase())}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="priceTarget">Price Target</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="priceTarget"
                  type="number"
                  step="0.01"
                  placeholder="150.00"
                  value={formData.priceTarget}
                  onChange={(e) => handleChange('priceTarget', e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="timeframe">Timeframe</Label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="timeframe"
                  placeholder="e.g., 3 months, 1 year"
                  value={formData.timeframe}
                  onChange={(e) => handleChange('timeframe', e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="riskLevel">Risk Level</Label>
              <Select value={formData.riskLevel} onValueChange={(value) => handleChange('riskLevel', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select risk level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="LOW">Low Risk</SelectItem>
                  <SelectItem value="MEDIUM">Medium Risk</SelectItem>
                  <SelectItem value="HIGH">High Risk</SelectItem>
                  <SelectItem value="VERY_HIGH">Very High Risk</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reasoning">Key Reasoning</Label>
            <Textarea
              id="reasoning"
              placeholder="Brief summary of your investment thesis..."
              value={formData.reasoning}
              onChange={(e) => handleChange('reasoning', e.target.value)}
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Detailed Analysis *</Label>
            <Textarea
              id="content"
              placeholder="Share your detailed analysis, research, and insights about this stock pick..."
              value={formData.content}
              onChange={(e) => handleChange('content', e.target.value)}
              rows={6}
              required
            />
          </div>

          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <AlertTriangle className="h-4 w-4" />
            <span>
              Remember: This is not financial advice. Always do your own research before investing.
            </span>
          </div>

          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline">
              Save Draft
            </Button>
            <Button type="submit">
              Publish Pick
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
