import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SiDiscord, SiX } from "react-icons/si";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-stellar-blue rounded-full"></div>
                <div className="absolute top-1 right-1 w-4 h-4 bg-solar-orange rounded-full"></div>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-stellar-blue to-solar-orange bg-clip-text text-transparent">
                Twin Sun Bot
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              The bot that makes every community shine
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <button className="text-sm text-muted-foreground hover:text-stellar-blue transition-colors" data-testid="link-footer-home">
                    Home
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/features">
                  <button className="text-sm text-muted-foreground hover:text-stellar-blue transition-colors" data-testid="link-footer-features">
                    Features
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/pricing">
                  <button className="text-sm text-muted-foreground hover:text-stellar-blue transition-colors" data-testid="link-footer-pricing">
                    Pricing
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/commands">
                  <button className="text-sm text-muted-foreground hover:text-stellar-blue transition-colors" data-testid="link-footer-commands">
                    Commands
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <button className="text-sm text-muted-foreground hover:text-stellar-blue transition-colors" data-testid="link-footer-about">
                    About
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <button className="text-sm text-muted-foreground hover:text-stellar-blue transition-colors" data-testid="link-footer-contact">
                    Contact
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" data-testid="button-discord">
                <SiDiscord className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" data-testid="button-twitter">
                <SiX className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" data-testid="button-email">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Created from dust, burned as stars, traveled together, died as black holes, merged, then disappeared without trace.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © 2025 Twin Sun Bot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
