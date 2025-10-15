<<<<<<< HEAD
# Pulses by StepTwo - Financial Markets Community

A modern, full-featured financial markets community built with Next.js, TypeScript, and Prisma. Pulses by StepTwo serves as a centralized platform for investors to discuss stocks, share picks, showcase portfolios, and build model portfolios.

## 🚀 Features

### Core Forum Functionality
- **User Authentication & Profiles** - Secure user management with customizable profiles
- **Post System** - Create and share different types of financial content
- **Voting System** - Upvote/downvote posts and comments
- **Comments & Discussion** - Engage in meaningful financial discussions
- **Search & Filtering** - Find relevant content quickly

### Financial-Specific Features
- **Stock Picks** - Share investment recommendations with detailed analysis
- **Portfolio Sharing** - Showcase your investment portfolios
- **Model Portfolios** - Create and share investment strategies
- **Real-time Data** - Integration with stock market APIs
- **Performance Tracking** - Monitor returns and performance metrics

### User Experience
- **Responsive Design** - Works perfectly on desktop and mobile
- **Modern UI** - Clean, professional financial theme
- **Real-time Updates** - Live market data and activity feeds
- **Social Features** - Follow users, bookmark posts, and more

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: SQLite (development), PostgreSQL (production)
- **UI Components**: Radix UI, Lucide React icons
- **Styling**: Tailwind CSS with custom financial theme
- **Charts**: Recharts for data visualization

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd wedge-forum
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your configuration:
   ```env
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   ALPHA_VANTAGE_API_KEY="your-api-key"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Schema

The application uses a comprehensive database schema designed for financial forums:

### Core Entities
- **Users** - User profiles and authentication
- **Posts** - Forum posts with different types (discussion, stock pick, etc.)
- **Comments** - Post comments and replies
- **Votes** - Upvotes/downvotes for posts and comments

### Financial Entities
- **Portfolios** - User investment portfolios
- **Holdings** - Individual stock positions within portfolios
- **Model Portfolios** - Investment strategy templates
- **Model Allocations** - Asset allocations within model portfolios

### Social Features
- **Follows** - User following system
- **Tags** - Content categorization
- **Post Tags** - Many-to-many relationship between posts and tags

## 🎨 Design System

### Color Palette
- **Primary**: Green (#059669) - Represents growth and positive returns
- **Secondary**: Blue (#3B82F6) - Trust and stability
- **Accent**: Purple (#8B5CF6) - Innovation and technology
- **Success**: Green (#10B981) - Positive performance
- **Warning**: Yellow (#F59E0B) - Caution and risk
- **Error**: Red (#EF4444) - Losses and negative performance

### Typography
- **Headings**: Bold, clear hierarchy
- **Body**: Readable, professional font
- **Code**: Monospace for ticker symbols and numbers

### Components
- **Cards**: Clean, elevated design for content
- **Buttons**: Consistent styling with clear states
- **Forms**: User-friendly input components
- **Charts**: Professional data visualization

## 📱 Pages & Features

### Home Page
- Hero section with platform introduction
- Quick stats dashboard
- Recent activity feed
- Featured content

### Stock Picks
- Browse and search stock recommendations
- Detailed pick analysis with risk levels
- Performance tracking
- Community engagement

### Portfolios
- View shared investment portfolios
- Performance metrics and analytics
- Follow successful investors
- Portfolio comparison tools

### Model Portfolios
- Discover investment strategies
- Copy successful models
- Performance benchmarking
- Risk analysis

## 🔧 Development

### Project Structure
```
src/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   ├── picks/          # Stock picks pages
│   ├── portfolios/     # Portfolio pages
│   └── models/         # Model portfolio pages
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── layout/         # Layout components
│   ├── post/           # Post-related components
│   └── forms/          # Form components
├── lib/                # Utility functions
│   ├── db.ts          # Database client
│   └── utils.ts       # Helper functions
└── prisma/             # Database schema
    └── schema.prisma
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma studio` - Open database GUI
- `npx prisma generate` - Generate Prisma client
- `npx prisma db push` - Push schema changes

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
- **Netlify**: Static site generation
- **Railway**: Full-stack deployment
- **DigitalOcean**: VPS deployment

## 🔮 Future Enhancements

### Phase 2 Features
- **Real-time Chat** - Live discussion rooms
- **Advanced Analytics** - Portfolio performance tools
- **Mobile App** - React Native application
- **API Integration** - More financial data sources
- **Premium Features** - Subscription tiers

### Phase 3 Features
- **AI Insights** - Machine learning recommendations
- **Social Trading** - Copy trading functionality
- **Educational Content** - Learning resources
- **Community Events** - Virtual meetups and webinars

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js** - React framework
- **Prisma** - Database ORM
- **Tailwind CSS** - Utility-first CSS
- **Radix UI** - Accessible component primitives
- **Lucide** - Beautiful icons

## 📞 Support

For support, email support@steptwo.io or join our community discussions.

---

**Wedge** - Building the future of financial community platforms, one discussion at a time.
=======
# testing github sync

