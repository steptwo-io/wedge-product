import { PrismaClient, PostType, RiskLevel } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting seed...')

  // Create users
  const user1 = await prisma.user.create({
    data: {
      email: 'sarah@example.com',
      username: 'TechGuru',
      name: 'Sarah Chen',
      bio: 'Tech investor focused on growth stocks. 10+ years experience.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
    }
  })

  const user2 = await prisma.user.create({
    data: {
      email: 'john@example.com',
      username: 'ConservativeInvestor',
      name: 'John Smith',
      bio: 'Conservative investor focused on dividends and value.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John'
    }
  })

  const user3 = await prisma.user.create({
    data: {
      email: 'robert@example.com',
      username: 'DividendMaster',
      name: 'Robert Johnson',
      bio: 'Dividend growth investor. Building passive income.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert'
    }
  })

  console.log('✅ Created users')

  // Create stock picks
  await prisma.post.create({
    data: {
      title: 'NVDA - AI Revolution Play',
      content: 'NVIDIA is positioned perfectly for the AI boom. Their GPUs are essential for training large language models and AI applications. Strong fundamentals with explosive growth.',
      type: PostType.STOCK_PICK,
      ticker: 'NVDA',
      priceTarget: 850,
      timeframe: '12 months',
      reasoning: 'AI market expected to grow 40% annually. NVIDIA has 80%+ market share in AI chips.',
      riskLevel: RiskLevel.HIGH,
      authorId: user1.id
    }
  })

  await prisma.post.create({
    data: {
      title: 'VOO - Safe Long-term Hold',
      content: 'S&P 500 index fund. Perfect for conservative investors. Low fees, diversified exposure to 500 largest US companies.',
      type: PostType.STOCK_PICK,
      ticker: 'VOO',
      priceTarget: 550,
      timeframe: '5 years',
      reasoning: 'Historical 10% annual returns. Set it and forget it.',
      riskLevel: RiskLevel.LOW,
      authorId: user2.id
    }
  })

  await prisma.post.create({
    data: {
      title: 'SCHD - Dividend Growth Champion',
      content: 'Best dividend growth ETF. Quality companies with 10+ years of dividend growth. 3.5% yield with solid growth.',
      type: PostType.STOCK_PICK,
      ticker: 'SCHD',
      priceTarget: 85,
      timeframe: '3 years',
      reasoning: 'Focus on quality dividend growers. Strong track record.',
      riskLevel: RiskLevel.LOW,
      authorId: user3.id
    }
  })

  await prisma.post.create({
    data: {
      title: 'TSLA - High Risk, High Reward',
      content: 'Tesla continues to dominate EV market. Energy storage and AI robotics provide additional growth vectors. Volatile but potential for massive upside.',
      type: PostType.STOCK_PICK,
      ticker: 'TSLA',
      priceTarget: 400,
      timeframe: '18 months',
      reasoning: 'EV adoption accelerating. Full self-driving potential. Energy business growing rapidly.',
      riskLevel: RiskLevel.VERY_HIGH,
      authorId: user1.id
    }
  })

  console.log('✅ Created stock picks')

  // Create model portfolios
  const conservativeModel = await prisma.modelPortfolio.create({
    data: {
      name: 'Conservative Growth Model',
      description: 'Balanced portfolio for steady growth with moderate risk',
      isPublic: true,
      creatorId: user2.id,
      allocations: {
        create: [
          { ticker: 'VTI', percentage: 40 },
          { ticker: 'BND', percentage: 30 },
          { ticker: 'VXUS', percentage: 20 },
          { ticker: 'VNQ', percentage: 10 }
        ]
      }
    }
  })

  const techModel = await prisma.modelPortfolio.create({
    data: {
      name: 'Tech Aggressive Model',
      description: 'High-growth technology focused portfolio for aggressive investors',
      isPublic: true,
      creatorId: user1.id,
      allocations: {
        create: [
          { ticker: 'QQQ', percentage: 35 },
          { ticker: 'ARKK', percentage: 25 },
          { ticker: 'XLK', percentage: 20 },
          { ticker: 'VGT', percentage: 20 }
        ]
      }
    }
  })

  const dividendModel = await prisma.modelPortfolio.create({
    data: {
      name: 'Dividend Income Model',
      description: 'Focus on dividend-paying stocks for consistent income generation',
      isPublic: true,
      creatorId: user3.id,
      allocations: {
        create: [
          { ticker: 'VYM', percentage: 30 },
          { ticker: 'SCHD', percentage: 25 },
          { ticker: 'DGRO', percentage: 20 },
          { ticker: 'VIG', percentage: 15 },
          { ticker: 'VNQ', percentage: 10 }
        ]
      }
    }
  })

  console.log('✅ Created model portfolios')

  // Create a sample portfolio with holdings
  await prisma.portfolio.create({
    data: {
      name: "Sarah's Tech Portfolio",
      description: 'My main growth portfolio focused on tech stocks',
      isPublic: true,
      ownerId: user1.id,
      holdings: {
        create: [
          { ticker: 'NVDA', shares: 50, avgPrice: 450.00 },
          { ticker: 'MSFT', shares: 100, avgPrice: 380.00 },
          { ticker: 'AAPL', shares: 75, avgPrice: 175.00 },
          { ticker: 'GOOGL', shares: 80, avgPrice: 140.00 }
        ]
      }
    }
  })

  await prisma.portfolio.create({
    data: {
      name: "John's Dividend Portfolio",
      description: 'Focused on steady dividend income',
      isPublic: true,
      ownerId: user2.id,
      holdings: {
        create: [
          { ticker: 'SCHD', shares: 200, avgPrice: 75.00 },
          { ticker: 'VYM', shares: 150, avgPrice: 105.00 },
          { ticker: 'VNQ', shares: 100, avgPrice: 85.00 }
        ]
      }
    }
  })

  console.log('✅ Created portfolios with holdings')

  console.log('🎉 Seed completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
