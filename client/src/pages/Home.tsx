import { Button } from "@/components/ui/button";
import BinaryStarOrbit from "@/components/BinaryStarOrbit";
import CommandCard from "@/components/CommandCard";
import PricingCard from "@/components/PricingCard";
import { ShoppingCart, FileText, Activity, Star, Users, Shield, Zap } from "lucide-react";

export default function Home() {
  const commands = [
    {
      icon: ShoppingCart,
      command: "/buy",
      description: "Purchase a subscription plan with QPay integration",
    },
    {
      icon: FileText,
      command: "/myplan",
      description: "View your current subscription details and status",
    },
    {
      icon: Activity,
      command: "/status",
      description: "Check bot status and community analytics",
    },
    {
      icon: Star,
      command: "/review",
      description: "Leave a review and rate your experience",
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: "For Users",
      description: "Easy subscription management with QPay integration for seamless payments",
    },
    {
      icon: Shield,
      title: "For Admins",
      description: "Complete community data system with automated payment tracking",
    },
    {
      icon: Zap,
      title: "For Communities",
      description: "Independent payment ecosystem built for Mongolian Discord servers",
    },
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "100",
      period: "month",
      features: [
        "Access to core bot commands",
        "QPay payment integration",
        "Basic community analytics",
        "Email support",
      ],
    },
    {
      name: "Pro",
      price: "200",
      period: "6 months",
      features: [
        "All Basic features",
        "Advanced payment tracking",
        "Custom community reports",
        "Priority support",
        "API access",
      ],
      isPremium: true,
    },
    {
      name: "Premium",
      price: "300",
      period: "year",
      features: [
        "All Pro features",
        "Dedicated server resources",
        "Custom bot branding",
        "24/7 premium support",
        "Advanced analytics dashboard",
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
            The bot that makes every community shine
          </p>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Automated payments + community data system for Discord
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
              Powerful Bot Commands
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to manage your community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commands.map((cmd) => (
              <CommandCard key={cmd.command} {...cmd} />
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
