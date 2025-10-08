import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { SiDiscord } from "react-icons/si";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [location] = useLocation();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/features", label: "Features" },
    { path: "/pricing", label: "Pricing" },
    { path: "/commands", label: "Commands" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" className="flex items-center gap-3" data-testid="link-home">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-stellar-blue rounded-full blur-sm opacity-70"></div>
              <div className="absolute inset-0 bg-stellar-blue rounded-full"></div>
              <div className="absolute top-1 right-1 w-4 h-4 bg-solar-orange rounded-full"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-stellar-blue to-solar-orange bg-clip-text text-transparent">
              Twin Sun Bot
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant="ghost"
                  className={location === item.path ? "text-stellar-blue" : ""}
                  data-testid={`link-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDark(!isDark)}
              data-testid="button-theme-toggle"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button className="gap-2" data-testid="button-add-to-discord">
              <SiDiscord className="w-5 h-5" />
              <span className="hidden sm:inline">Add to Discord</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
