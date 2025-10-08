import PricingCard from "@/components/PricingCard";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Pricing() {
  const pricingPlans = [
    {
      name: "Basic",
      price: "59,900",
      period: "30 days",
      features: [
        "Complete bot access for 30 days",
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
      period: "30 days",
      features: [
        "Everything in Basic",
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
      period: "30 days",
      features: [
        "Everything in Pro",
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
    { name: "AI-Powered Analytics (GPT-4o)", basic: false, pro: true, premium: true },
    { name: "Growth Dashboard & Charts", basic: false, pro: true, premium: true },
    { name: "Weekly Automated Reports", basic: false, pro: true, premium: true },
    { name: "Manager Role System", basic: false, pro: true, premium: true },
    { name: "Payout Requests", basic: false, pro: false, premium: true },
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
            Choose the perfect plan for your community. Pay with QPay and get started instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
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
            How the Business Model Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-8" data-testid="card-revenue-model">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Revenue Sharing</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-stellar-blue/20 flex items-center justify-center text-stellar-blue font-bold shrink-0">97%</div>
                  <div>
                    <p className="font-semibold text-foreground">Admin Revenue</p>
                    <p className="text-sm text-muted-foreground">You keep 97% of all role sales in your community</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-stellar-orange/20 flex items-center justify-center text-stellar-orange font-bold shrink-0">3%</div>
                  <div>
                    <p className="font-semibold text-foreground">Platform Fee</p>
                    <p className="text-sm text-muted-foreground">Small fee covers bot hosting and development</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold shrink-0">0%</div>
                  <div>
                    <p className="font-semibold text-foreground">Subscription Fee</p>
                    <p className="text-sm text-muted-foreground">No platform fee on your bot subscription payments</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8" data-testid="card-payout-process">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Payout Process</h3>
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
            All Plans Include QPay Integration
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Seamless payment processing with QPay. Support for all major Mongolian payment methods with instant confirmation and automated subscription management.
          </p>
        </div>
      </div>
    </div>
  );
}
