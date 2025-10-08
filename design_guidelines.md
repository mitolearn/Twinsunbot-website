# Twin Sun Bot Website - Design Guidelines

## Design Approach
**Reference-Based Approach** - Drawing inspiration from leading Discord bot platforms (MEE6, Dyno) and SaaS landing pages, with a unique cosmic binary star visual identity that sets Twin Sun Bot apart.

## Core Design Elements

### A. Color Palette

**Dark Mode (Primary)**
- Background Base: `218 45% 5%` (Navy Black #0D0D1A)
- Surface: `218 40% 8%` for cards and elevated elements
- Stellar Blue: `202 100% 62%` (#3AA7FF) - Primary brand color for CTAs and key highlights
- Solar Orange: `28 100% 62%` (#FF9B3A) - Secondary accent for energy moments
- Gold Highlight: `45 100% 71%` (#FFD369) - Premium tier indicators and special callouts
- Text Primary: `0 0% 98%` for headings
- Text Secondary: `0 0% 70%` for body text

**Strategic Color Usage:**
- Stellar Blue: Primary CTAs, links, key feature highlights, command badges
- Solar Orange: Secondary actions, hover states, notification indicators
- Gold: Premium plan badges, verified checkmarks, special achievements
- Use gradients sparingly - only for hero section orbit animation and pricing premium tier

### B. Typography

**Font Family:** Inter (Google Fonts)
- Headings (H1): 48px/56px, font-weight 800, tracking tight
- Headings (H2): 36px/44px, font-weight 700
- Headings (H3): 24px/32px, font-weight 600
- Body Large: 18px/28px, font-weight 400
- Body: 16px/24px, font-weight 400
- Small/Captions: 14px/20px, font-weight 500

### C. Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Section padding vertical: py-20 (desktop), py-12 (mobile)
- Card padding: p-6 or p-8
- Element spacing: gap-4, gap-6, gap-8
- Container: max-w-7xl with px-4 on mobile, px-8 on desktop

### D. Component Library

**Navigation:**
- Sticky header with backdrop blur (backdrop-blur-lg bg-[#0D0D1A]/80)
- Logo with binary star icon (two orbiting circles)
- Nav links with subtle hover glow effect (Stellar Blue)
- Dark mode toggle (moon/sun icons)
- "Add to Discord" CTA button (Stellar Blue bg, prominent)

**Hero Section:**
- Full viewport height (min-h-screen) with animated binary star orbit background
- Large heading with gradient text effect (Stellar Blue to Solar Orange)
- Subtitle in text-secondary
- Two CTAs: Primary "Add Bot to Discord" + Secondary "View Features"
- Background: Canvas-based particle system showing two suns orbiting with connecting energy trails

**Feature Cards:**
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Each card: rounded-2xl border border-white/10 bg-surface p-6
- Icon at top (48x48) with Stellar Blue glow
- Command name in heading style
- Brief description in body text
- Hover: subtle lift with border glow (Stellar Blue)

**Pricing Cards:**
- Three tiers side-by-side: grid-cols-1 md:grid-cols-3
- Premium tier elevated: scale-105 border-2 border-gold
- Each card: pricing at top, feature list with checkmarks, CTA at bottom
- QPay logo/mention below pricing
- Hover: subtle Solar Orange glow on non-premium cards

**Command Documentation:**
- Searchable list with command syntax highlighting
- Code blocks: rounded-lg bg-[#0D0D1A] border border-Stellar-Blue/30 p-4 font-mono
- Example bot message outputs as cards with Discord-style formatting
- Command categories with collapsible sections

**Contact Form:**
- Two-column layout (form + contact info/social links)
- Input fields: rounded-lg border border-white/20 bg-surface px-4 py-3
- Focus states: border-Stellar-Blue ring-2 ring-Stellar-Blue/20
- Submit button: Full-width Stellar Blue with Solar Orange hover

**Footer:**
- Full-width with border-t border-white/10
- Four columns: About Twin Sun, Quick Links, Resources, Social/Contact
- Discord server invite button prominent
- Copyright and cosmic tagline at bottom

### E. Animations

**Strategic Use Only:**
- Hero orbit animation (two suns with energy trails) - continuous subtle motion
- Card hover lift: transform transition-transform duration-300
- Navigation link underline slide effect
- Smooth page transitions: transition-all duration-200
- Scroll-triggered fade-in for feature cards (stagger effect)
- No excessive animations - maintain professional SaaS feel

## Page-Specific Guidelines

**Homepage Flow:**
1. Hero with orbit animation + dual CTAs
2. Social proof bar ("Trusted by X communities")
3. Feature showcase (4-column grid of commands)
4. Benefits for Users/Admins/Communities (3-column)
5. Pricing preview (simplified 3-tier cards)
6. Community testimonials/reviews (if available)
7. Final CTA section with Discord invite

**Features Page:**
- Command-focused with visual examples
- Before/after showcase of bot interactions
- Use case scenarios with screenshots

**Pricing Page:**
- Detailed comparison table below cards
- QPay integration highlight section
- FAQ accordion for common questions

**Docs/Commands:**
- Sidebar navigation for command categories
- Search bar with instant filtering
- Copy-to-clipboard buttons for commands

## Images

**Hero Section:** No large hero image - use animated binary star orbit visualization (canvas/SVG)

**Supporting Imagery:**
- Discord bot message screenshots for command examples (Features, Docs pages)
- Community server screenshots showing bot in action
- QPay logo for payment integration sections
- Discord server banner preview on Contact page

## Accessibility & Interaction

- Maintain high contrast ratios (WCAG AA) with Navy Black backgrounds
- Focus indicators: 2px Stellar Blue ring
- Keyboard navigation fully supported
- Dark mode as default with toggle option
- Responsive breakpoints: sm:640px, md:768px, lg:1024px, xl:1280px