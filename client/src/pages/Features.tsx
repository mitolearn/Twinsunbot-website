import CommandCard from "@/components/CommandCard";
import { Card } from "@/components/ui/card";
import { ShoppingCart, FileText, Activity, Star, Users, CreditCard, BarChart3, Bell } from "lucide-react";

export default function Features() {
  const commands = [
    {
      icon: ShoppingCart,
      command: "/buy",
      description: "Purchase a subscription plan with QPay integration. Supports monthly, 6-month, and yearly plans with automatic renewal.",
    },
    {
      icon: FileText,
      command: "/myplan",
      description: "View your current subscription details, renewal date, payment history, and upgrade options.",
    },
    {
      icon: Activity,
      command: "/status",
      description: "Check bot status, server uptime, community statistics, and real-time analytics dashboard.",
    },
    {
      icon: Star,
      command: "/review",
      description: "Leave a review and rate your experience. Help us improve and share your feedback with the community.",
    },
  ];

  const features = [
    {
      icon: CreditCard,
      title: "QPay Integration",
      description: "Seamless payment processing with QPay. Support for all major Mongolian payment methods with instant confirmation.",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Track community growth, payment trends, and user engagement with detailed analytics and reports.",
    },
    {
      icon: Users,
      title: "Community Management",
      description: "Automated user role assignment based on subscription tiers. Easy member management and moderation tools.",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Automated reminders for subscription renewals, payment confirmations, and important updates.",
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
            Everything you need to manage payments, track data, and grow your Discord community
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8">Bot Commands</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commands.map((cmd) => (
              <CommandCard key={cmd.command} {...cmd} />
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8">Key Features</h2>
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
