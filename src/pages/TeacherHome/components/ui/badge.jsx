import React from 'react';

export const badgeVariants = ({ variant, className }) => {
  const baseClasses = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors";
  
  const variantClasses = {
    default: "border-transparent bg-blue-500 text-white hover:bg-blue-600",
    secondary: "border-transparent bg-gray-500 text-white hover:bg-gray-600",
    destructive: "border-transparent bg-red-500 text-white hover:bg-red-600",
    outline: "text-gray-700 border-gray-300"
  };

  return `${baseClasses} ${variantClasses[variant] || variantClasses.default} ${className || ''}`;
};

export const Badge = ({ className, variant = "default", ...props }) => {
  return (
    <span className={badgeVariants({ variant, className })} {...props} />
  );
};