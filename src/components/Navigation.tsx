import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Bot,
  ChevronDown
} from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Özellikler", href: "#features", type: "scroll" },
    { label: "Dashboard", href: "#dashboard", type: "scroll" },
    { label: "Pro", href: "/pro", type: "link" },
    { label: "Hakkımızda", href: "/about", type: "link" },
    { label: "İletişim", href: "/contact", type: "link" }
  ];

  const handleNavClick = (href: string, type: string) => {
    if (type === "scroll") {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">
              AI Finance
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.href, item.type)}
                className="text-muted-foreground hover:text-primary transition-smooth font-medium relative group cursor-pointer"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-smooth group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => window.location.href = '/login'}
              className="px-4 py-2 text-muted-foreground hover:text-primary transition-smooth font-medium"
            >
              Giriş Yap
            </button>
            <button 
              onClick={() => window.location.href = '/register'}
              className="px-4 py-2 gradient-hero text-white rounded-lg hover:shadow-glow transition-smooth font-medium"
            >
              Kayıt Ol
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-smooth"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/20">
            <div className="space-y-4">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(item.href, item.type)}
                  className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-smooth font-medium"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="pt-4 space-y-2 border-t border-border/20">
                <button 
                  onClick={() => window.location.href = '/login'}
                  className="w-full py-2 text-muted-foreground hover:text-primary transition-smooth font-medium"
                >
                  Giriş Yap
                </button>
                <button 
                  onClick={() => window.location.href = '/register'}
                  className="w-full py-2 gradient-hero text-white rounded-lg hover:shadow-glow transition-smooth font-medium"
                >
                  Kayıt Ol
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;