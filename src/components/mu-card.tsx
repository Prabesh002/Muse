import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export type ImagePosition = 'left' | 'right' | 'top' | 'bottom' | 'background' | 'center';

export interface MuCardProps extends React.ComponentProps<typeof Card> {
  title?: React.ReactNode;
  content?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  icon?: React.ReactNode;
  hoverEffect?: boolean;
  image?: string;
  imagePosition?: ImagePosition;
  imageSize?: 'small' | 'medium' | 'large' | 'full';
  imageAlt?: string;
}

const MuCard: React.FC<MuCardProps> = ({
  title,
  content,
  description,
  footer,
  icon,
  hoverEffect = true,
  image,
  imagePosition = 'top',
  imageSize = 'medium',
  imageAlt = 'Card image',
  className,
  ...props
}) => {
  const imageSizeClasses = {
    small: 'h-32',
    medium: 'h-48',
    large: 'h-64',
    full: 'h-full',
  };

  const renderImage = () => (
    <div 
      className={cn(
        "overflow-hidden",
        imagePosition === 'background' ? 'absolute inset-0 z-0 opacity-20' : '',
        imagePosition === 'center' ? 'flex justify-center items-center p-4' : '',
        imageSize === 'full' && imagePosition !== 'background' ? 'h-64' : imageSizeClasses[imageSize]
      )}
    >
      <img 
        src={image} 
        alt={imageAlt} 
        className={cn(
          "object-cover transition-transform duration-300",
          imagePosition === 'background' ? 'w-full h-full' : '',
          imagePosition === 'left' || imagePosition === 'right' ? 'h-full' : 'w-full',
          hoverEffect && "group-hover:scale-105"
        )} 
      />
    </div>
  );

  return (
    <Card 
      className={cn(
        "overflow-hidden group bg-muse-background",
        hoverEffect && "transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        imagePosition === 'background' && "relative",
        imagePosition === 'left' && "grid grid-cols-3",
        imagePosition === 'right' && "grid grid-cols-3",
        className
      )}
      {...props}
    >
      {image && imagePosition === 'background' && renderImage()}
      
      {image && imagePosition === 'top' && renderImage()}
      
      {image && imagePosition === 'left' && (
        <div className="col-span-1">{renderImage()}</div>
      )}
      
      <div className={cn(
        imagePosition === 'left' && "col-span-2 z-10",
        imagePosition === 'right' && "col-span-2 z-10",
        imagePosition === 'background' && "relative z-10"
      )}>
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
      </div>
      
      {image && imagePosition === 'right' && (
        <div className="col-span-1">{renderImage()}</div>
      )}
      
      {image && imagePosition === 'bottom' && renderImage()}
      
      {image && imagePosition === 'center' && renderImage()}
    </Card>
  );
};

export default MuCard;