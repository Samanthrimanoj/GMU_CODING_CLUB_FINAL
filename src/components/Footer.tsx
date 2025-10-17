import { Code2, Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks for subscribing to our newsletter!");
      setEmail("");
    }
  };

  const socialLinks = [
    { icon: Facebook, url: "https://facebook.com/gmucodingclub", label: "Facebook" },
    { icon: Linkedin, url: "https://linkedin.com/company/gmucodingclub", label: "LinkedIn" },
    { icon: Instagram, url: "https://instagram.com/gmucodingclub", label: "Instagram" },
  ];

  return (
    <footer className="glass-card border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <span className="font-bold text-lg gradient-text">GMU Coding Club</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering students to code, create, and collaborate.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/events" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Events
              </Link>
              <Link to="/projects" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link to="/quiz" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Quiz
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-muted border-border"
              />
              <Button type="submit" variant="secondary" className="w-full">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} GMU Coding Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
