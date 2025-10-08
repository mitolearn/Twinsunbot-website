import PricingCard from "@/components/PricingCard";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Pricing() {
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
        "Auto role assignment",
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
        "Custom notifications",
        "Export data & reports",
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
        "White-label options",
        "Unlimited API calls",
      ],
    },
  ];

  const comparisonFeatures = [
    { name: "QPay Integration", basic: true, pro: true, premium: true },
    { name: "Core Bot Commands", basic: true, pro: true, premium: true },
    { name: "Email Support", basic: true, pro: true, premium: true },
    { name: "Advanced Analytics", basic: false, pro: true, premium: true },
    { name: "API Access", basic: false, pro: true, premium: true },
    { name: "Priority Support", basic: false, pro: true, premium: true },
    { name: "Custom Branding", basic: false, pro: false, premium: true },
    { name: "Dedicated Resources", basic: false, pro: false, premium: true },
    { name: "24/7 Premium Support", basic: false, pro: false, premium: true },
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
