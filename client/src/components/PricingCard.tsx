import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  features: string[];
  isPremium?: boolean;
}

export default function PricingCard({ name, price, period, features, isPremium = false }: PricingCardProps) {
  return (
    <Card 
      className={`p-6 flex flex-col h-full transition-all duration-300 ${
        isPremium ? "border-2 border-gold scale-105" : "hover-elevate"
      }`}
      data-testid={`card-pricing-${name.toLowerCase()}`}
    >
      {isPremium && (
        <Badge className="mb-4 w-fit bg-gold text-background" data-testid="badge-premium">
          Most Popular
        </Badge>
      )}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">{name}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-extrabold text-stellar-blue">{price}₮</span>
          <span className="text-muted-foreground">/{period}</span>
        </div>
      </div>
      <ul className="space-y-3 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2" data-testid={`text-feature-${index}`}>
            <Check className="w-5 h-5 text-stellar-blue shrink-0 mt-0.5" />
            <span className="text-sm text-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
