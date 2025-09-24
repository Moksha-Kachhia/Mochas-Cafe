import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";

export const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Experience & Projects", path: "/experience" },
    // { name: "Projects", path: "/projects" },
    { name: "Testimonials", path: "/testimonials" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Coffee className="h-6 w-6 text-mocha" />
            <span className="font-serif text-xl font-bold text-mocha">Moksha Kachhia</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-mocha ${
                  location.pathname === item.path
                    ? "text-mocha border-b-2 border-mocha"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Button variant="outline" size="sm" className="hidden md:flex">
            Contact Me
          </Button>
        </div>
      </div>
    </nav>
  );
};