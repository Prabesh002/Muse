import React from 'react';
import { cn } from '@/lib/utils';

// MuSection component for creating sections with muse-background
export interface MuSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  containerized?: boolean;
  paddingY?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export const MuSection: React.FC<MuSectionProps> = ({
  children,
  containerized = true,
  paddingY = 'lg',
  className,
  ...props
}) => {
  const paddingClasses = {
    none: '',
    sm: 'py-4',
    md: 'py-8',
    lg: 'py-12',
    xl: 'py-16'
  };

  return (
    <section 
      className={cn(
        "bg-muse-background w-full",
        paddingClasses[paddingY],
        className
      )}
      {...props}
    >
      {containerized ? (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      ) : children}
    </section>
  );
};

// MuPanel component for smaller content blocks
export interface MuPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  rounded?: boolean;
  bordered?: boolean;
  shadow?: 'none' | 'sm' | 'md' | 'lg';
}

export const MuPanel: React.FC<MuPanelProps> = ({
  children,
  rounded = true,
  bordered = false,
  shadow = 'sm',
  className,
  ...props
}) => {
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow',
    lg: 'shadow-lg'
  };

  return (
    <div
      className={cn(
        "bg-muse-background p-6",
        rounded && "rounded-lg",
        bordered && "border border-muse-logo/30",
        shadowClasses[shadow],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// MuBox for simple containers
export interface MuBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'outlined' | 'filled';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const MuBox: React.FC<MuBoxProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  className,
  ...props
}) => {
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-2',
    md: 'p-4',
    lg: 'p-6'
  };

  const variantClasses = {
    default: 'bg-muse-background',
    outlined: 'bg-transparent border border-muse-logo/30',
    filled: 'bg-muse-logo/20'
  };

  return (
    <div
      className={cn(
        paddingClasses[padding],
        variantClasses[variant],
        "rounded-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// MuGrid for creating grid layouts with muse background
export interface MuGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: 'none' | 'sm' | 'md' | 'lg';
  itemsCenter?: boolean;
}

export const MuGrid: React.FC<MuGridProps> = ({
  children,
  cols = 3,
  gap = 'md',
  itemsCenter = false,
  className,
  ...props
}) => {
  const colClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
    12: 'grid-cols-3 md:grid-cols-6 lg:grid-cols-12'
  };

  const gapClasses = {
    none: 'gap-0',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6'
  };

  return (
    <div
      className={cn(
        "bg-muse-background grid",
        colClasses[cols],
        gapClasses[gap],
        itemsCenter && "items-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};