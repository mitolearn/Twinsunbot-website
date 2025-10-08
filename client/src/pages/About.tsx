import { Card } from "@/components/ui/card";
import { Sparkles, Globe, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Twin Sun Bot
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The story of binary stars and independent communities
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 md:p-12">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Twin Sun Bot was born from a vision to create independence for Mongolian Discord communities. 
                Just like binary stars orbiting each other in perfect harmony, our bot brings together payments 
                and community management in one seamless system.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed mb-6">
                We built this platform specifically for Mongolian communities, with native QPay integration 
                and features designed around local needs. No more relying on international platforms with 
                complex payment systems. Twin Sun Bot makes it simple to manage subscriptions, track community 
                data, and grow your Discord server.
              </p>

              <blockquote className="border-l-4 border-stellar-blue pl-6 my-8 italic text-xl text-muted-foreground">
                "Created from dust, burned as stars, traveled together, died as black holes, merged, 
                then disappeared without trace."
              </blockquote>

              <p className="text-lg text-foreground leading-relaxed">
                This quote embodies our philosophy: communities are born, grow together, and create 
                something greater than the sum of their parts. Twin Sun Bot is here to support that 
                journey, from the first member to a thriving ecosystem.
              </p>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 text-center hover-elevate transition-all duration-300" data-testid="card-vision-independence">
            <div className="w-16 h-16 rounded-full bg-stellar-blue/10 flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-stellar-blue" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Independence</h3>
            <p className="text-muted-foreground">
              Empowering Mongolian communities with their own payment and management ecosystem
            </p>
          </Card>

          <Card className="p-6 text-center hover-elevate transition-all duration-300" data-testid="card-vision-community">
            <div className="w-16 h-16 rounded-full bg-solar-orange/10 flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-solar-orange" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Community First</h3>
            <p className="text-muted-foreground">
              Built by community members, for community members, with feedback at every step
            </p>
          </Card>

          <Card className="p-6 text-center hover-elevate transition-all duration-300" data-testid="card-vision-future">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-gold" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Future Ready</h3>
            <p className="text-muted-foreground">
              Constantly evolving with new features and integrations for the Mongolian ecosystem
            </p>
          </Card>
        </div>

        <div className="bg-card rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Join the Twin Sun Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Be part of the growing ecosystem of Mongolian Discord communities using Twin Sun Bot. 
            Together, we're building something special.
          </p>
        </div>
      </div>
    </div>
  );
}
