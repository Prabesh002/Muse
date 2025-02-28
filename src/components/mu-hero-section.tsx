import React from 'react';
import { cn } from '@/lib/utils';

export interface MuHeroSectionProps extends React.HTMLAttributes<HTMLElement> {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  children?: React.ReactNode;
}

const MuHeroSection: React.FC<MuHeroSectionProps> = ({
  title,
  subtitle,
  align = 'center',
  children,
  className,
  ...props
}) => {
  return (
    <section
      className={cn(
        "w-full py-12 md:py-24 lg:py-32",
        className
      )}
      {...props}
    >
      <div className="container px-4 md:px-6">
        <div 
          className={cn(
            "flex flex-col gap-4",
            {
              "items-center text-center": align === 'center',
              "items-start text-left": align === 'left',
              "items-end text-right": align === 'right',
            }
          )}
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl animate-fade-in">
            {title}
          </h1>
          
          {subtitle && (
            <p className="max-w-[700px] text-muted-foreground md:text-xl animate-slide-up">
              {subtitle}
            </p>
          )}
          
          {children && (
            <div className="flex flex-col sm:flex-row gap-4 mt-4 animate-slide-up">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MuHeroSection;