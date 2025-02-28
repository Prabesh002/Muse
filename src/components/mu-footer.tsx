import React from 'react';
import { cn } from '@/lib/utils';

export interface MuFooterProps extends React.HTMLAttributes<HTMLElement> {
  copyright?: string;
}

const MuFooter: React.FC<MuFooterProps> = ({
  copyright = `© ${new Date().getFullYear()} Muse. All rights reserved.`,
  className,
  ...props
}) => {
  return (
    <footer
      className={cn(
        "w-full border-t border-border/40 bg-muse-background py-8",
        className
      )}
      {...props}
    >
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
        <img src={'/src/assets/logo/muse_ai.svg'} className="h-12 w-auto md:h-16"></img>
          <span className="text-sm font-medium">Muse</span>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <nav className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
          
          <p className="text-sm text-muted-foreground">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MuFooter;