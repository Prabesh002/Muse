import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { PenLine } from 'lucide-react';

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
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/40 bg-muse-background/80 backdrop-blur-md",
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
            <div className="flex items-center gap-2">
              <div className="rounded-md bg-muse-logo p-1">
                <PenLine className="h-6 w-6" />
              </div>
            </div>
          )}
          <span className="text-xl font-bold">Muse</span> 
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            Sign In
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default MuNavbar;