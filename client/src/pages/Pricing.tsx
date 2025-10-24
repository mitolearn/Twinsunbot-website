import PricingCard from "@/components/PricingCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

export default function Pricing() {
  const pricingPlans = [
    {
      name: "Basic",
      price: "59,900",
      period: "1 month",
      features: [
        "Complete bot access for 1 month",
        "QPay payment integration",
        "Multi-role membership system",
        "Automated role assignment",
        "Payment verification & tracking",
        "DM renewal system",
        "Expiry notifications (3 days before)",
        "Revenue tracking (keep 97% of sales)",
      ],
    },
    {
      name: "Pro",
      price: "149,900",
      period: "3 months",
      features: [
        "Everything in Basic",
        "Complete bot access for 3 months",
        "AI-powered analytics (GPT-4o)",
        "Growth dashboard with charts",
        "Top members leaderboard",
        "Weekly automated reports",
        "Custom plan descriptions",
        "Manager role system",
        "Priority support",
      ],
      isPremium: true,
    },
    {
      name: "Premium",
      price: "279,900",
      period: "6 months",
      features: [
        "Everything in Pro",
        "Complete bot access for 6 months",
        "Advanced AI business insights",
        "Unlimited role plans",
        "Payout requests (min 100k₮)",
        "Real-time revenue analytics",
        "Custom banking integration",
        "Dedicated support",
        "Early access to new features",
      ],
    },
  ];

  const comparisonFeatures = [
    { name: "QPay Payment Integration", basic: true, pro: true, premium: true },
    { name: "Multi-Role Membership System", basic: true, pro: true, premium: true },
    { name: "Automated Role Assignment", basic: true, pro: true, premium: true },
    { name: "DM Renewal System", basic: true, pro: true, premium: true },
    { name: "Revenue Tracking (97% to you)", basic: true, pro: true, premium: true },
    { name: "Payout Requests", basic: true, pro: true, premium: true },
    { name: "AI-Powered Analytics (GPT-4o)", basic: false, pro: true, premium: true },
    { name: "Growth Dashboard & Charts", basic: false, pro: true, premium: true },
    { name: "Weekly Automated Reports", basic: false, pro: true, premium: true },
    { name: "Manager Role System", basic: false, pro: true, premium: true },
    { name: "Advanced AI Business Insights", basic: false, pro: false, premium: true },
    { name: "Dedicated Support", basic: false, pro: false, premium: true },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your community. Subscribe directly through the bot using QPay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>

        <div className="mb-20">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-stellar-blue/5 to-solar-orange/5 border-2 border-stellar-blue/20" data-testid="card-how-to-subscribe">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-3">
                How to Subscribe
              </h2>
              <p className="text-lg text-muted-foreground">
                All subscriptions are managed through Discord bot commands
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-stellar-blue text-white flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                    1
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Add Bot</h3>
                  <p className="text-sm text-muted-foreground">
                    Click the button below to add Twin Sun Bot to your Discord server
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-stellar-blue text-white flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                    2
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Run /setup</h3>
                  <p className="text-sm text-muted-foreground">
                    Use the <code className="bg-muted px-2 py-1 rounded text-stellar-blue">/setup</code> command in your server
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-stellar-blue text-white flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                    3
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Choose & Pay</h3>
                  <p className="text-sm text-muted-foreground">
                    Select your plan and complete payment with QPay
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <a 
                  href="https://discord.com/oauth2/authorize?client_id=1422480366085734430&permissions=1126314640006144&integration_type=0&scope=applications.commands+bot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="gap-2" data-testid="button-add-bot-pricing">
                    Add Bot to Discord
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
              </div>

              <p className="text-center text-sm text-muted-foreground mt-6">
                Need help? Use <code className="bg-muted px-2 py-1 rounded text-stellar-blue">/bot_info</code> command after adding the bot for a complete guide
              </p>
            </div>
          </Card>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Compare Plans
          </h2>
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-semibold text-foreground">Feature</th>
                    <th className="text-center p-4 font-semibold text-foreground">Basic</th>
                    <th className="text-center p-4 font-semibold text-foreground">Pro</th>
                    <th className="text-center p-4 font-semibold text-foreground">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={feature.name} className={index % 2 === 0 ? "bg-muted/30" : ""} data-testid={`row-comparison-${index}`}>
                      <td className="p-4 text-foreground">{feature.name}</td>
                      <td className="p-4 text-center">
                        {feature.basic ? (
                          <Check className="w-5 h-5 text-stellar-blue mx-auto" data-testid="icon-check-basic" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {feature.pro ? (
                          <Check className="w-5 h-5 text-stellar-blue mx-auto" data-testid="icon-check-pro" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {feature.premium ? (
                          <Check className="w-5 h-5 text-stellar-blue mx-auto" data-testid="icon-check-premium" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Payout Process
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card className="p-8" data-testid="card-payout-process">
              <ol className="space-y-4 list-decimal list-inside">
                <li className="text-foreground">
                  <span className="font-semibold">Earn Revenue</span>
                  <p className="text-sm text-muted-foreground ml-6 mt-1">Members buy roles, you earn 97% of each sale</p>
                </li>
                <li className="text-foreground">
                  <span className="font-semibold">Track Balance</span>
                  <p className="text-sm text-muted-foreground ml-6 mt-1">Check available balance with /status command</p>
                </li>
                <li className="text-foreground">
                  <span className="font-semibold">Request Payout</span>
                  <p className="text-sm text-muted-foreground ml-6 mt-1">Minimum 100,000₮ - enter bank details via modal</p>
                </li>
                <li className="text-foreground">
                  <span className="font-semibold">Get Approved</span>
                  <p className="text-sm text-muted-foreground ml-6 mt-1">Owner reviews and processes your request</p>
                </li>
                <li className="text-foreground">
                  <span className="font-semibold">Receive Confirmation</span>
                  <p className="text-sm text-muted-foreground ml-6 mt-1">Both parties get DM with transaction details</p>
                </li>
              </ol>
            </Card>
          </div>
        </div>

        <div className="bg-card rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Seamless QPay Integration
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            All plans include native QPay payment processing. Members can purchase roles directly through Discord with instant confirmation and automated role assignment.
          </p>
        </div>
      </div>
    </div>
  );
}
