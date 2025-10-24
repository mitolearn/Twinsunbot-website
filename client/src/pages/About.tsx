import { Card } from "@/components/ui/card";
import { Sparkles, Globe, Heart, Code, Database, Shield, Zap } from "lucide-react";

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
                Twin Sun Bot was built with one mission — to make every Mongolian community truly independent. 
                In a world where most digital tools depend on foreign payment systems and scattered data, 
                Twin Sun Bot gives local communities full control over their economy and analytics.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Our bot unites Discord community management, structured payment automation, and data tracking 
                into one intelligent system. Through native QPay integration, every transaction, member action, 
                and growth metric becomes part of a transparent ecosystem — helping community leaders understand 
                their audience, manage revenue, and build trust.
              </p>

              <p className="text-lg text-foreground leading-relaxed mb-6">
                We believe that Mongolian creators and community owners can run fully self-sustaining systems — 
                without relying on external platforms. Twin Sun Bot is more than a bot — it's the foundation of 
                a new digital infrastructure where communities own their data, automate their operations, and grow 
                together with measurable impact.
              </p>

              <blockquote className="border-l-4 border-stellar-blue pl-6 my-8 italic text-xl text-muted-foreground">
                "Created from dust, burned as stars, traveled together, died as black holes, merged, 
                then disappeared without trace."
              </blockquote>
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

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Technical Architecture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6" data-testid="card-tech-stack">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-stellar-blue/10 flex items-center justify-center">
                  <Code className="w-6 h-6 text-stellar-blue" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Technology Stack</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li><span className="text-foreground font-semibold">Language:</span> Python 3.11</li>
                <li><span className="text-foreground font-semibold">Framework:</span> Discord.py (Slash commands)</li>
                <li><span className="text-foreground font-semibold">Database:</span> SQLite (file-based)</li>
                <li><span className="text-foreground font-semibold">Payment API:</span> QPay Mongolia</li>
                <li><span className="text-foreground font-semibold">AI Engine:</span> OpenAI GPT-4o</li>
                <li><span className="text-foreground font-semibold">Charts:</span> QuickChart.io API</li>
              </ul>
            </Card>

            <Card className="p-6" data-testid="card-deployment">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-stellar-orange/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-stellar-orange" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Deployment</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li><span className="text-foreground font-semibold">Production:</span> Railway hosting with production.db</li>
                <li><span className="text-foreground font-semibold">Testing:</span> Replit environment with test pricing</li>
                <li><span className="text-foreground font-semibold">Prices:</span> Auto-switch via environment variables</li>
                <li><span className="text-foreground font-semibold">Database:</span> Separate test/production databases</li>
                <li><span className="text-foreground font-semibold">Uptime:</span> 24/7 availability with auto-recovery</li>
              </ul>
            </Card>

            <Card className="p-6" data-testid="card-database">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <Database className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Database Structure</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li><span className="text-foreground font-semibold">servers:</span> Subscription data & balance tracking</li>
                <li><span className="text-foreground font-semibold">plans:</span> Role pricing & descriptions</li>
                <li><span className="text-foreground font-semibold">memberships:</span> User role assignments & expiry</li>
                <li><span className="text-foreground font-semibold">payments:</span> Transaction history & QPay IDs</li>
                <li><span className="text-foreground font-semibold">payouts:</span> Admin payout requests & status</li>
                <li><span className="text-foreground font-semibold">manager_roles:</span> Permission system</li>
              </ul>
            </Card>

            <Card className="p-6" data-testid="card-security">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Security Features</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li><span className="text-foreground font-semibold">Permissions:</span> Admin/Manager/User hierarchy</li>
                <li><span className="text-foreground font-semibold">Payment Verification:</span> Real-time QPay checks</li>
                <li><span className="text-foreground font-semibold">Database Integrity:</span> Foreign key constraints</li>
                <li><span className="text-foreground font-semibold">Environment Secrets:</span> Secure API key management</li>
                <li><span className="text-foreground font-semibold">Owner Commands:</span> Critical operations protected</li>
              </ul>
            </Card>
          </div>
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
