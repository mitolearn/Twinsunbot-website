import { Button } from "@/components/ui/button";
import BinaryStarOrbit from "@/components/BinaryStarOrbit";
import PricingCard from "@/components/PricingCard";
import { Card } from "@/components/ui/card";
import { CreditCard, Brain, DollarSign, MessageSquare, Users, Shield, Zap } from "lucide-react";

export default function Home() {
  const keyFeatures = [
    {
      icon: CreditCard,
      title: "QPay Integration",
      description: "Real-time payment processing with automatic role assignment",
    },
    {
      icon: Brain,
      title: "AI Analytics",
      description: "GPT-4o powered insights with weekly automated reports",
    },
    {
      icon: DollarSign,
      title: "97% Revenue Share",
      description: "Keep nearly all profits with easy payout requests",
    },
    {
      icon: MessageSquare,
      title: "DM Renewals",
      description: "Automatic renewal reminders with smart time extension",
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: "For Members",
      description: "Buy and manage multiple role memberships with QPay. Automatic DM renewals and expiry warnings keep you in the loop.",
    },
    {
      icon: Shield,
      title: "For Admins",
      description: "Rent the bot, create role plans, and earn 97% of every sale. AI analytics and payout requests make revenue management effortless.",
    },
    {
      icon: Zap,
      title: "For Communities",
      description: "Complete monetization platform built for Mongolian Discord servers with native QPay integration and automated management.",
    },
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "59,900",
      period: "30 days",
      features: [
        "Complete bot access",
        "QPay payment integration",
        "Multi-role membership system",
        "Revenue tracking (97% to you)",
      ],
    },
    {
      name: "Pro",
      price: "149,900",
      period: "30 days",
      features: [
        "Everything in Basic",
        "AI-powered analytics (GPT-4o)",
        "Growth dashboard & charts",
        "Weekly automated reports",
      ],
      isPremium: true,
    },
    {
      name: "Premium",
      price: "279,900",
      period: "30 days",
      features: [
        "Everything in Pro",
        "Advanced AI insights",
        "Payout requests (min 100k₮)",
        "Dedicated support",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <BinaryStarOrbit />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-stellar-blue to-solar-orange bg-clip-text text-transparent tracking-tight">
            Twin Sun Bot
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Monetize Your Discord Community with Ease
          </p>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Automated role sales • QPay integration • AI-powered analytics • Keep 97% of revenue
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg" data-testid="button-hero-add-bot">
              Add Bot to Discord
            </Button>
            <Button size="lg" variant="outline" className="text-lg" data-testid="button-hero-view-features">
              View Features
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Twin Sun Bot?
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to monetize your Discord community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature) => (
              <Card key={feature.title} className="p-6 hover-elevate transition-all duration-300" data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="w-12 h-12 rounded-lg bg-stellar-blue/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-stellar-blue" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built for Everyone
            </h2>
            <p className="text-lg text-muted-foreground">
              Benefits for users, admins, and communities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center" data-testid={`card-benefit-${benefit.title.toLowerCase().replace(' ', '-')}`}>
                <div className="w-16 h-16 rounded-full bg-stellar-blue/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-stellar-blue" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Pay with QPay, get started instantly
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Discord Community?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of communities using Twin Sun Bot for seamless payments and management
          </p>
          <Button size="lg" className="text-lg" data-testid="button-cta-final">
            Add Bot to Discord
          </Button>
        </div>
      </section>
    </div>
  );
}
