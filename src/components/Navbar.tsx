import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import gmuLogo from "@/assets/gmu-logo.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/events" },
  { name: "Quiz", path: "/quiz" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Certifications", path: "/certifications" },
  { name: "Join Us", path: "/join" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-premium to-premium-glow rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <img src={gmuLogo} alt="GMU Logo" className="relative h-10 w-10 object-contain rounded-full ring-2 ring-premium/30 group-hover:ring-premium/60 transition-all" />
            </div>
            <span className="font-bold text-xl gradient-text">GMU Coding Club</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  className="text-sm"
                >
                  {item.name}
                </Button>
              </Link>
            ))}
            
            {/* Social Media Links */}
            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-border">
              <a
                href="https://www.instagram.com/gmit_dvg/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/company/gmuniversitydvg/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="https://gmu.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 animate-slide-up">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
              >
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
