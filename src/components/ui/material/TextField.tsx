
import React from 'react';
import { cn } from '@/lib/utils';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  variant?: 'outlined' | 'filled' | 'standard';
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
}

const TextField = ({
  className,
  label,
  variant = 'outlined',
  error = false,
  helperText,
  fullWidth = false,
  ...props
}: TextFieldProps) => {
  // Material UI inspired styles using Tailwind
  const baseInputStyles = "transition-all duration-200 text-sm";
  
  const variantStyles = {
    outlined: "border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent",
    filled: "bg-gray-100 border-b-2 px-3 py-2 focus:bg-transparent",
    standard: "border-b-2 px-1 py-1 focus:border-blue-500"
  };
  
  const errorStyles = error ? "border-red-500 focus:ring-red-500 text-red-500" : "border-gray-300";
  
  const widthStyles = fullWidth ? "w-full" : "";
  
  return (
    <div className={cn("mb-4", widthStyles)}>
      {label && (
        <label className={cn(
          "block mb-1 text-sm font-medium", 
          error ? "text-red-500" : "text-gray-700"
        )}>
          {label}
        </label>
      )}
      <input
        className={cn(
          baseInputStyles,
          variantStyles[variant],
          errorStyles,
          widthStyles,
          className
        )}
        {...props}
      />
      {helperText && (
        <p className={cn(
          "mt-1 text-xs", 
          error ? "text-red-500" : "text-gray-500"
        )}>
          {helperText}
        </p>
      )}
    </div>
  );
};

export default TextField;
