import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';  // Import Link

export interface NavItem {
  label: string;
  href: string;
}

export interface MuNavbarProps extends React.HTMLAttributes<HTMLElement> {
  items: NavItem[];
  logo?: React.ReactNode;
}

const MuNavbar: React.FC<MuNavbarProps> = ({
  items,
  logo,
  className,
  ...props
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/40 bg-muse-background/80 backdrop-blur-md transition-all duration-300",
        scrolled && "shadow-sm",
        className
      )}
      {...props}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          {logo ? (
            <img
              src={typeof logo === "string" ? logo : ""}
              alt="Muse Logo"
              className="h-12 w-auto md:h-16"
            />
          ) : (
            <span className="text-xl font-bold">Muse</span>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn("text-sm font-medium transition-colors hover:text-primary",
                            location.pathname === item.href ? "text-primary" : "")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button size="sm">Get Started</Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden bg-muse-background border-t overflow-hidden transition-all duration-300",
        isMenuOpen ? "max-h-96" : "max-h-0"
      )}>
        <div className="container py-4 flex flex-col space-y-4">
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm font-medium py-2 transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex flex-col space-y-2 pt-2 border-t">
            <Button variant="outline" size="sm" className="w-full">
              Sign In
            </Button>
            <Button size="sm" className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MuNavbar;