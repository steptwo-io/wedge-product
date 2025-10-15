import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, description, allocations } = body

    // Validate required fields
    if (!name || !allocations || !Array.isArray(allocations)) {
      return NextResponse.json(
        { error: 'Name and allocations are required' },
        { status: 400 }
      )
    }

    // Validate allocations
    const totalPercentage = allocations.reduce((sum: number, a: any) => sum + (a.percentage || 0), 0)
    if (totalPercentage !== 100) {
      return NextResponse.json(
        { error: 'Total allocation must equal 100%' },
        { status: 400 }
      )
    }

    // For now, use a default user ID (in a real app, this would come from authentication)
    const defaultUserId = '1' // This should be replaced with actual user authentication

    // Create the model portfolio
    const modelPortfolio = await prisma.modelPortfolio.create({
      data: {
        name: name.trim(),
        description: description?.trim() || '',
        isPublic: true,
        creatorId: defaultUserId,
        allocations: {
          create: allocations.map((allocation: any) => ({
            ticker: allocation.ticker.trim().toUpperCase(),
            percentage: allocation.percentage
          }))
        }
      },
      include: {
        creator: {
          select: {
            username: true,
            name: true
          }
        },
        allocations: true
      }
    })

    return NextResponse.json(modelPortfolio, { status: 201 })
  } catch (error) {
    console.error('Error creating model portfolio:', error)
    return NextResponse.json(
      { error: 'Failed to create model portfolio' },
      { status: 500 }
    )
  }
}
