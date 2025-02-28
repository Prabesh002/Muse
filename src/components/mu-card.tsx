import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export interface MuCardProps extends React.ComponentProps<typeof Card> {
  title?: React.ReactNode;
  content?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  icon?: React.ReactNode;
  hoverEffect?: boolean;
}

const MuCard: React.FC<MuCardProps> = ({
  title,
  content,
  description,
  footer,
  icon,
  hoverEffect = true,
  className,
  ...props
}) => {
  return (
    <Card 
      className={cn(
        "overflow-hidden",
        hoverEffect && "transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {(title || description || icon) && (
        <CardHeader>
          {icon && (
            <div className="mb-2 w-fit rounded-md bg-muse-logo/50 p-2">
              {icon}
            </div>
          )}
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      
      {content && (
        <CardContent>
          {content}
        </CardContent>
      )}
      
      {footer && (
        <CardFooter>
          {footer}
        </CardFooter>
      )}
    </Card>
  );
};

export default MuCard;