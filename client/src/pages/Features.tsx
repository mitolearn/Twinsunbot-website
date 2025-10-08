import { Card } from "@/components/ui/card";
import { Users, CreditCard, BarChart3, Bell, DollarSign, Brain, Shield, MessageSquare, Layers, TrendingUp, Repeat, FileEdit } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Users,
      title: "Multi-Role Membership System",
      description: "Users can purchase and hold multiple roles simultaneously, each with independent expiry dates. Smart expiry handling ensures active roles remain untouched when others expire.",
    },
    {
      icon: CreditCard,
      title: "QPay Payment Integration",
      description: "Real-time payment processing with QPay Mongolia. Automatic invoice generation, instant payment verification, and immediate role assignment upon confirmation.",
    },
    {
      icon: MessageSquare,
      title: "DM Renewal System",
      description: "Complete payment flow works in Direct Messages. 3-day expiry warnings, renewal options, and smart time extension that never loses existing days when renewing early.",
    },
    {
      icon: Layers,
      title: "Dual Purchase Flow",
      description: "Members can buy roles via admin-posted /paywall buttons in channels, or privately with /buy command. Flexible purchasing options for every use case.",
    },
    {
      icon: DollarSign,
      title: "Revenue & Payout System",
      description: "Admins keep 97% of role sales (3% platform fee). Track revenue with /status, request payouts (min 100,000₮) with bank details, and get instant confirmation when processed.",
    },
    {
      icon: Brain,
      title: "AI-Powered Analytics (GPT-4o)",
      description: "Growth dashboard with 30-day revenue charts, pie charts, and AI business recommendations. Weekly automated reports every Monday with actionable insights.",
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics Suite",
      description: "Top members leaderboard, revenue breakdown by plan, growth percentage tracking, and real-time member activity monitoring.",
    },
    {
      icon: Shield,
      title: "Manager Role System",
      description: "Three permission levels: Admin (full access), Manager (view-only analytics), and User (purchase only). Flexible team management for large communities.",
    },
    {
      icon: Bell,
      title: "Smart Expiry Notifications",
      description: "Automated DM warnings 3 days before role expiration. Two renewal options: QPay payment or pay with collected balance. Never miss a renewal.",
    },
    {
      icon: Repeat,
      title: "Bot Subscription System",
      description: "Rent the bot with tiered subscriptions (Basic/Pro/Premium). Automatic expiry warnings, flexible renewal options (QPay or balance), and seamless 30-day access periods.",
    },
    {
      icon: FileEdit,
      title: "Plan Description System",
      description: "Add custom marketing descriptions to your role plans. Explain benefits and perks to buyers in /buy, /paywall, and renewal DMs. Edit anytime to optimize conversions.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Powerful Features for Your Community
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to monetize your Discord community with automated role management and AI-powered analytics
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="p-6 hover-elevate transition-all duration-300" data-testid={`card-feature-${feature.title.toLowerCase().replace(' ', '-')}`}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-stellar-blue/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-stellar-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-lg p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Built for Mongolian Communities
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Twin Sun Bot is designed specifically for Mongolian Discord communities, with native QPay support and features tailored to local needs.
            </p>
            <p className="text-muted-foreground italic">
              "Created from dust, burned as stars, traveled together, died as black holes, merged, then disappeared without trace."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
