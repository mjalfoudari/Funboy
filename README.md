# FunboyKW.com - Middle Eastern Dropshipping Website

A premium e-commerce website for pool floats and inflatables, designed specifically for Middle Eastern customers. This is an exact copy of funboy.com's design and functionality, adapted for the Kuwait and GCC market as a dropshipping operation.

## 🌟 Features

### Frontend
- **Exact Visual Copy**: Replicates funboy.com's design, layout, and user experience
- **Responsive Design**: Mobile-first approach with perfect mobile experience
- **Modern Tech Stack**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Performance Optimized**: Fast loading times with image optimization
- **Middle Eastern Branding**: FunboyKW branding with regional adaptations

### E-commerce Functionality
- **Product Catalog**: Complete product listings with variants, images, and descriptions
- **Shopping Cart**: Full cart functionality with quantity management
- **Secure Checkout**: Stripe integration for payments
- **User Accounts**: Customer registration, login, order history
- **Order Tracking**: Real-time order status updates

### Dropshipping Operations
- **Admin Dashboard**: Order management and fulfillment interface
- **Manual Fulfillment**: System for placing orders on Amazon/funboy.com
- **Inventory Sync**: Track product availability from source
- **Pricing Management**: Automated markup calculations
- **Regional Shipping**: Kuwait and GCC shipping integration

### Middle Eastern Adaptations
- **Regional Pricing**: USD pricing with local payment methods
- **Kuwait Support**: Local customer service information
- **GCC Shipping**: Shipping options for Gulf countries
- **Cultural Considerations**: Appropriate content and imagery

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Payments**: Stripe
- **Email**: Nodemailer for notifications
- **Image Optimization**: Next.js Image component
- **Deployment**: Vercel (recommended)

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Stripe account
- Email service (Gmail/SMTP)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd funboykw
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/funboykw"
   NEXTAUTH_SECRET="your-secret-key"
   STRIPE_PUBLISHABLE_KEY="pk_test_..."
   STRIPE_SECRET_KEY="sk_test_..."
   SMTP_HOST="smtp.gmail.com"
   SMTP_USER="your-email@gmail.com"
   SMTP_PASS="your-app-password"
   ```

4. **Set up the database**
   ```bash
   npm run db:push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open the application**
   Visit [http://localhost:3000](http://localhost:3000)

## 📦 Project Structure

```
src/
├── app/                    # App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── products/          # Product pages
│   ├── cart/              # Shopping cart
│   └── admin/             # Admin dashboard
├── components/            # React components
│   ├── home/              # Homepage sections
│   ├── layout/            # Layout components
│   ├── ui/                # Reusable UI components
│   └── admin/             # Admin components
├── lib/                   # Utility functions
├── types/                 # TypeScript definitions
└── data/                  # Static data
```

## 🎨 Design System

The design system closely matches funboy.com with these key elements:

### Colors
- **Funboy Yellow**: `#FFD700` - Primary brand color
- **Funboy Pink**: `#FF69B4` - Secondary accent
- **Funboy Blue**: `#1E90FF` - Supporting color
- **Navy**: `#001F3F` - Text and contrast
- **Additional colors**: Orange, Green, Coral, Purple, Mint, Cream

### Typography
- **Primary Font**: System fonts (-apple-system, BlinkMacSystemFont)
- **Display Font**: Helvetica Neue for headings

### Components
- **Buttons**: Primary (black) and secondary (outlined) styles
- **Cards**: Clean white cards with subtle shadows
- **Forms**: Consistent input styling with focus states
- **Navigation**: Mobile-responsive with search functionality

## 🛒 E-commerce Features

### Product Management
- Product variants (colors, sizes)
- Image galleries with zoom
- SEO optimization (meta titles, descriptions)
- Inventory tracking
- Pricing with compare-at prices

### Order Processing
- Shopping cart with persistence
- Guest and registered checkout
- Multiple payment methods (Stripe)
- Order confirmation emails
- Order tracking and history

### Customer Features
- User registration and login
- Address management
- Order history and tracking
- Wishlist functionality
- Customer reviews

## 🔧 Admin Dashboard

### Order Management
- View all orders
- Update order status
- Add tracking information
- Manual fulfillment workflow
- Order analytics

### Product Management
- Add/edit products
- Manage inventory
- Update pricing
- Image upload and management
- SEO optimization

### Customer Management
- View customer accounts
- Order history
- Customer support tools

## 🚚 Dropshipping Workflow

1. **Customer Places Order**: Customer completes checkout on funboykw.com
2. **Order Notification**: Admin receives email notification of new order
3. **Manual Fulfillment**: Admin places order on Amazon/funboy.com with customer's address
4. **Tracking Update**: Admin updates order with tracking information
5. **Customer Notification**: Customer receives tracking information via email
6. **Delivery Confirmation**: Order marked as delivered when confirmed

## 💳 Payment Integration

### Stripe Configuration
- Supports major credit cards
- Middle Eastern payment methods
- Secure payment processing
- Webhook handling for order updates
- Refund management

### Regional Considerations
- USD pricing (international standard)
- Local payment method support
- Currency conversion awareness
- Tax calculation (if applicable)

## 🌍 Deployment

### Vercel Deployment (Recommended)
1. Connect GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy with automatic builds on push

### Environment Variables for Production
```env
DATABASE_URL="your-production-database-url"
NEXTAUTH_SECRET="secure-production-secret"
STRIPE_PUBLISHABLE_KEY="pk_live_..."
STRIPE_SECRET_KEY="sk_live_..."
SITE_URL="https://funboykw.com"
```

## 📱 Mobile Optimization

- Mobile-first responsive design
- Touch-friendly navigation
- Optimized images for mobile
- Fast loading on mobile networks
- Progressive Web App features

## 🔐 Security Features

- Secure authentication with NextAuth.js
- HTTPS enforcement
- Input validation and sanitization
- SQL injection prevention with Prisma
- XSS protection
- CSRF protection

## 📈 Analytics & Monitoring

- Built-in analytics dashboard
- Order tracking and reporting
- Customer behavior insights
- Performance monitoring
- Error tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is proprietary software created for FunboyKW. All rights reserved.

## 📞 Support

For technical support or questions:
- Email: dev@funboykw.com
- Documentation: [Project Wiki](link-to-wiki)

---

Built with ❤️ for the Middle Eastern market 