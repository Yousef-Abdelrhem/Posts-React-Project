
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'outlined' | 'elevation';
}

const Card = ({ 
  children, 
  className,
  variant = 'elevation' 
}: CardProps) => {
  const baseStyles = "rounded-lg overflow-hidden";
  
  const variantStyles = {
    outlined: "border border-gray-300",
    elevation: "shadow-md bg-white"
  };
  
  return (
    <div className={cn(baseStyles, variantStyles[variant], className)}>
      {children}
    </div>
  );
};

interface CardHeaderProps {
  title: React.ReactNode;
  subheader?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

const CardHeader = ({ 
  title, 
  subheader, 
  action,
  className 
}: CardHeaderProps) => {
  return (
    <div className={cn("px-6 py-4 flex justify-between items-start", className)}>
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        {subheader && <p className="text-sm text-gray-500 mt-1">{subheader}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
};

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

const CardContent = ({ 
  children,
  className 
}: CardContentProps) => {
  return (
    <div className={cn("px-6 py-4", className)}>
      {children}
    </div>
  );
};

interface CardActionsProps {
  children: React.ReactNode;
  className?: string;
}

const CardActions = ({ 
  children,
  className 
}: CardActionsProps) => {
  return (
    <div className={cn("px-4 py-3 flex items-center gap-2", className)}>
      {children}
    </div>
  );
};

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Actions = CardActions;

export default Card;
