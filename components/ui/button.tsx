import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  className, 
  children, 
  ...props 
}) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-blue via-primary-purple to-primary-cyan text-white hover:shadow-lg hover:shadow-primary-blue/50',
    secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/20',
    outline: 'bg-transparent text-white border-2 border-primary-blue hover:bg-primary-blue/10',
  };

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};
