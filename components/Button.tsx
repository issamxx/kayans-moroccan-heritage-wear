
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'filter' | 'filter-active' | 'outline';
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', size = 'medium', className, ...props }) => {
  const baseStyle = "font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-150";
  
  let variantStyle = "";
  switch (variant) {
    case 'primary':
      variantStyle = "bg-brand-secondary text-white hover:bg-opacity-90 focus:ring-brand-primary";
      break;
    case 'secondary':
      variantStyle = "bg-brand-accent text-brand-primary hover:bg-opacity-80 focus:ring-brand-secondary";
      break;
    case 'filter':
      variantStyle = "bg-transparent text-brand-primary hover:bg-brand-accent focus:ring-brand-secondary";
      break;
    case 'filter-active':
      variantStyle = "bg-brand-secondary text-white focus:ring-brand-primary";
      break;
    case 'outline':
      variantStyle = "bg-brand-textLight text-brand-secondary border border-brand-secondary hover:bg-brand-accent focus:ring-brand-secondary";
      break;
  }

  let sizeStyle = "";
  switch (size) {
    case 'small':
      sizeStyle = "px-3 py-1.5 text-xs";
      break;
    case 'medium':
      sizeStyle = "px-5 py-2 text-sm";
      break;
    case 'large':
      sizeStyle = "px-6 py-3 text-base";
      break;
  }

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${sizeStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
