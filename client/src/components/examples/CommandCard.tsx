import CommandCard from '../CommandCard'
import { ShoppingCart } from 'lucide-react'

export default function CommandCardExample() {
  return (
    <div className="p-8 bg-background">
      <CommandCard 
        icon={ShoppingCart}
        command="/buy"
        description="Purchase a subscription plan with QPay integration"
      />
    </div>
  )
}
