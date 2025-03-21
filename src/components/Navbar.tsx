import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Startseite", path: "/" },
  { name: "Über Uns", path: "/about" },
  { name: "Leistungen", path: "/services" },
  { name: "Projekte", path: "/projects" },
  { name: "Arbeitsweise", path: "/process" },
  { name: "Kontakt", path: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <nav className="sticky top-0 bg-background/80 backdrop-blur-lg border-b border-border z-40">
        <div className="container mx-auto px-4 py-1">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src="/favicon.png" alt="Nutaro Logo" className="h-24 w-auto" />
              <span className="font-bold text-xl">
              <span className="text-primary">Nut</span>aro
            </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <ul className="flex space-x-6">
                {navItems.map((item) => (
                    <li key={item.path}>
                      <Link
                          to={item.path}
                          className={cn(
                              "relative py-2 transition-colors duration-300 hover:text-primary",
                              location.pathname === item.path
                                  ? "text-primary after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:bottom-0 after:left-0"
                                  : ""
                          )}
                      >
                        {item.name}
                      </Link>
                    </li>
                ))}
              </ul>
              <ThemeToggle className="ml-4" />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <ThemeToggle className="mr-4" />
              <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menu">
                {isMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
            <div className="md:hidden animate-fade-in">
              <ul className="flex flex-col space-y-4 p-4 bg-background border-b border-border">
                {navItems.map((item) => (
                    <li key={item.path}>
                      <Link
                          to={item.path}
                          className={cn(
                              "block py-2 hover:text-primary transition-colors duration-300",
                              location.pathname === item.path ? "text-primary font-medium" : ""
                          )}
                          onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>
        )}
      </nav>
  );
};

export default Navbar;
