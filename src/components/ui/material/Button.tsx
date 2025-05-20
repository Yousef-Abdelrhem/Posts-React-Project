
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'error';
  size?: 'small' | 'medium' | 'large';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Button = ({
  children,
  className,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  startIcon,
  endIcon,
  ...props
}: ButtonProps) => {
  // Material UI inspired styles using Tailwind
  const baseStyles = "rounded font-medium focus:outline-none transition-all duration-200 inline-flex items-center justify-center";
  
  // Variant styles
  const variantStyles = {
    contained: {
      primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
      secondary: "bg-purple-600 text-white hover:bg-purple-700 shadow-sm",
      error: "bg-red-600 text-white hover:bg-red-700 shadow-sm",
    },
    outlined: {
      primary: "border border-blue-600 text-blue-600 hover:bg-blue-50",
      secondary: "border border-purple-600 text-purple-600 hover:bg-purple-50",
      error: "border border-red-600 text-red-600 hover:bg-red-50",
    },
    text: {
      primary: "text-blue-600 hover:bg-blue-50",
      secondary: "text-purple-600 hover:bg-purple-50",
      error: "text-red-600 hover:bg-red-50",
    }
  };
  
  // Size styles
  const sizeStyles = {
    small: "text-xs px-2 py-1",
    medium: "text-sm px-4 py-2",
    large: "text-base px-6 py-3",
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant][color],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
};

export default Button;
