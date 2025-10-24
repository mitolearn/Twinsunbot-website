# Twin Sun Bot Website

## Overview

Twin Sun Bot is a comprehensive marketing and documentation website for a production-ready Discord bot rental platform designed for Mongolian communities. The bot enables server admins to monetize their Discord communities through role-based membership sales with automated QPay payment processing.

**Bot Rental Model:**
- Admins "rent" the bot through tiered subscriptions (Basic: 59,900₮/1 month, Pro: 149,900₮/3 months, Premium: 279,900₮/6 months)
- Create paid role plans and sell them to community members
- Automated payment verification and role assignment via QPay Mongolia
- Admins earn 97% of role sales (3% platform fee)
- Payout requests with bank details (minimum 100,000₮)

**Key Bot Features:**
- Multi-role membership system with independent expiry dates
- Dual purchase flow (/paywall public buttons + /buy private command)
- DM renewal system with smart time extension
- AI-powered analytics with GPT-4o (growth dashboards, weekly reports)
- Manager role system (Admin/Manager/User permissions)
- Real-time QPay payment integration

**Website Content:**
- **Home:** Value proposition, key features, pricing overview, benefits, working "Add Bot to Discord" button
- **Features:** 11 core capabilities with "How It Works" user flows (5 flows)
- **Pricing:** Production tiers (informational only), "How to Subscribe" guide, comparison table, payout process
  - No website payment buttons - subscriptions handled via Discord bot commands
  - Clear 3-step process: Add Bot → Run /setup → Choose & Pay with QPay
- **Commands:** Complete documentation (17 commands: Info, Admin, Manager, Analytics, User categories)
  - Command ordering prioritizes admin-focused features (bot_info first, user commands last)
  - Owner commands removed from public documentation (internal use only)
- **About:** Mission statement focused on Mongolian community independence, values, and comprehensive technical architecture
- **Contact:** Contact form and support information

**Discord Bot Integration:**
- Bot Client ID: 1422480366085734430
- OAuth URL embedded in both navbar and home page "Add Bot to Discord" buttons
- Opens Discord authorization in new tab with proper permissions

**Navigation Features:**
- Footer links automatically scroll to top of page when clicked
- Smooth scroll behavior for better user experience

The website follows a cosmic binary star visual theme (cyan/blue and yellow/orange orbiting stars) that reinforces the brand identity of bringing together payments and community management in one unified system.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for the UI layer
- **Vite** as the build tool and development server
- **Wouter** for client-side routing (lightweight alternative to React Router)
- **TanStack Query** (React Query) for server state management

**Styling System**
- **Tailwind CSS** for utility-first styling with custom design system
- **shadcn/ui** component library (New York style variant) for consistent UI components
- **CSS Variables** for theme management supporting dark mode (primary) and light mode
- Custom color palette including:
  - Stellar Blue (#3AA7FF) for primary CTAs
  - Solar Orange (#FF9B3A) for secondary accents
  - Gold (#FFD369) for premium indicators
  - Navy Black (#0D0D1A) for dark mode background

**Component Structure**
- Page-level components in `client/src/pages/` (Home, Features, Pricing, Commands, About, Contact, NotFound)
- Reusable components in `client/src/components/` (Navbar, Footer, PricingCard, CommandCard, BinaryStarOrbit)
- shadcn/ui components in `client/src/components/ui/` providing the design system foundation

**Visual Effects**
- Custom Canvas-based binary star orbit animation for hero section
- Hover elevation effects using CSS custom properties
- Dark mode as the default theme with light mode support

### Backend Architecture

**Server Framework**
- **Express.js** as the HTTP server
- **Node.js** runtime (ES modules via `"type": "module"`)
- Development and production build separation using environment-based configuration

**API Structure**
- RESTful API pattern with `/api` prefix for all routes
- Middleware stack including JSON parsing, URL encoding, request logging
- Centralized error handling middleware

**Development Workflow**
- Vite middleware integration for HMR in development
- SSR-ready template serving for production builds
- Request logging with response time tracking for API endpoints

**Storage Layer**
- In-memory storage implementation (`MemStorage`) as the base
- Interface-based design (`IStorage`) allowing easy swapping to database implementations
- User management CRUD operations (getUser, getUserByUsername, createUser)

### Data Storage Solutions

**Database Configuration**
- **Drizzle ORM** configured for PostgreSQL via `@neondatabase/serverless`
- Schema defined in `shared/schema.ts` with TypeScript type inference
- Zod validation schemas generated from Drizzle schemas
- Migration support via `drizzle-kit` with migrations output to `./migrations`

**Current Schema**
- Users table with UUID primary keys, username (unique), and password fields
- Schema uses `gen_random_uuid()` for automatic ID generation

**Database Client**
- Neon Serverless for serverless PostgreSQL connectivity
- Environment variable `DATABASE_URL` required for database connection

### Authentication & Authorization

Currently implemented as a basic foundation:
- User schema with username/password fields
- No active authentication middleware in routes
- Prepared for future implementation of session management or JWT

### Design System

**Component Library**
- Radix UI primitives for accessible, unstyled components
- shadcn/ui as the styled component layer
- Custom variants using `class-variance-authority`

**Typography**
- Inter font family from Google Fonts
- Defined font sizes and weights for headings (H1-H3), body text, and captions

**Spacing & Layout**
- Tailwind spacing units (2, 4, 6, 8, 12, 16, 20, 24)
- Container max-width: 7xl with responsive padding
- Section padding: py-20 (desktop), py-12 (mobile)

**Elevation System**
- Custom CSS properties for hover and active states (`--elevate-1`, `--elevate-2`)
- Utility classes: `hover-elevate`, `active-elevate-2`

## External Dependencies

### Payment Integration
- **QPay Mongolia** - Payment processing system for the Discord bot (referenced in content, not directly integrated in website code)

### Third-Party Services

**Fonts & Icons**
- Google Fonts (Inter font family)
- Lucide React for icon components
- React Icons (`react-icons/si`) for brand icons (Discord, X/Twitter)

**UI Component Libraries**
- Radix UI suite (@radix-ui/react-*) for 20+ accessible component primitives
- embla-carousel-react for carousel functionality
- cmdk for command palette UI
- vaul for drawer components

**Development Tools**
- Replit-specific plugins for development environment:
  - @replit/vite-plugin-runtime-error-modal
  - @replit/vite-plugin-cartographer (development only)
  - @replit/vite-plugin-dev-banner (development only)

**Form Management**
- react-hook-form with @hookform/resolvers for form state
- Zod for schema validation (via drizzle-zod)

**Utilities**
- clsx & tailwind-merge for className composition
- date-fns for date manipulation
- nanoid for ID generation

### Database & ORM
- @neondatabase/serverless - Serverless PostgreSQL client
- Drizzle ORM v0.39+ with drizzle-kit for migrations
- drizzle-zod for generating Zod schemas from database schema

### Session Management (Configured)
- connect-pg-simple for PostgreSQL session store (configured but not actively used)

### Build & Bundling
- esbuild for server-side bundling
- Vite for client-side bundling and development server
- PostCSS with Autoprefixer for CSS processing