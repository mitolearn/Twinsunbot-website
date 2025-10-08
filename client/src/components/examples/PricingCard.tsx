import PricingCard from '../PricingCard'

export default function PricingCardExample() {
  return (
    <div className="p-8 bg-background">
      <PricingCard 
        name="Premium"
        price="300"
        period="year"
        features={[
          "All bot commands available",
          "Priority support",
          "Custom community analytics",
          "Advanced payment tracking",
          "Dedicated server resources"
        ]}
        isPremium={true}
      />
    </div>
  )
}
