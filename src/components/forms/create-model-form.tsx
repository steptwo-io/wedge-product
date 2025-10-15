'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Plus, X, Trash2 } from 'lucide-react'

interface Allocation {
  id: string
  ticker: string
  percentage: number
}

export function CreateModelForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [allocations, setAllocations] = useState<Allocation[]>([
    { id: '1', ticker: '', percentage: 0 }
  ])

  const addAllocation = () => {
    const newId = (allocations.length + 1).toString()
    setAllocations([...allocations, { id: newId, ticker: '', percentage: 0 }])
  }

  const removeAllocation = (id: string) => {
    if (allocations.length > 1) {
      setAllocations(allocations.filter(a => a.id !== id))
    }
  }

  const updateAllocation = (id: string, field: 'ticker' | 'percentage', value: string | number) => {
    setAllocations(allocations.map(a => 
      a.id === id ? { ...a, [field]: value } : a
    ))
  }

  const totalPercentage = allocations.reduce((sum, a) => sum + (a.percentage || 0), 0)
  const isValid = name.trim() && 
                 allocations.every(a => a.ticker.trim() && a.percentage > 0) && 
                 totalPercentage === 100

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValid) return

    try {
      const response = await fetch('/api/model-portfolios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          description: description.trim(),
          allocations: allocations.map(a => ({
            ticker: a.ticker.trim().toUpperCase(),
            percentage: a.percentage
          }))
        })
      })

      if (response.ok) {
        // Reset form and close modal
        setName('')
        setDescription('')
        setAllocations([{ id: '1', ticker: '', percentage: 0 }])
        setIsOpen(false)
        // Refresh the page to show new model
        window.location.reload()
      }
    } catch (error) {
      console.error('Error creating model portfolio:', error)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Model
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create Model Portfolio</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Portfolio Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Growth Tech Portfolio"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe your investment strategy..."
                rows={3}
              />
            </div>
          </div>

          {/* Allocations */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Asset Allocations</Label>
              <Button type="button" variant="outline" size="sm" onClick={addAllocation}>
                <Plus className="h-4 w-4 mr-1" />
                Add Asset
              </Button>
            </div>

            <div className="space-y-3">
              {allocations.map((allocation, index) => (
                <div key={allocation.id} className="flex items-center space-x-3">
                  <div className="flex-1">
                    <Input
                      placeholder="Ticker (e.g., AAPL)"
                      value={allocation.ticker}
                      onChange={(e) => updateAllocation(allocation.id, 'ticker', e.target.value)}
                      className="uppercase"
                    />
                  </div>
                  <div className="w-24">
                    <Input
                      type="number"
                      placeholder="%"
                      min="0"
                      max="100"
                      value={allocation.percentage || ''}
                      onChange={(e) => updateAllocation(allocation.id, 'percentage', Number(e.target.value))}
                    />
                  </div>
                  {allocations.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeAllocation(allocation.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>

            {/* Total Percentage */}
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <span className="font-medium">Total Allocation:</span>
              <Badge variant={totalPercentage === 100 ? "default" : "destructive"}>
                {totalPercentage}%
              </Badge>
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-end space-x-3">
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={!isValid}>
              Create Model Portfolio
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
