import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";

export const Navigation = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Experience & Projects", path: "/experience" },
    { name: "Testimonials & Awards", path: "/testimonials" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Coffee className="h-6 w-6 text-mocha" />
          <span className="font-serif text-xl font-bold text-mocha">Moksha Kachhia</span>
        </Link>

        {/* Desktop Menu */}
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
          <Button
          variant="outline"
          size="sm"
          onClick={() => {
            const footer = document.querySelector("footer");
            if (footer) {
              footer.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Contact Me
        </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-mocha"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col space-y-2 p-4 bg-background border-t border-border">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-mocha ${
                location.pathname === item.path
                  ? "text-mocha border-b-2 border-mocha"
                  : "text-muted-foreground"
              }`}
              onClick={() => setOpen(false)} // close menu after click
            >
              {item.name}
            </Link>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setOpen(false)}
          >
            Contact Me
          </Button>
        </div>
      )}
    </nav>
  );
};
