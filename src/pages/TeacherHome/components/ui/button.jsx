import React from 'react';

export const buttonVariants = ({ variant, size, className }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variantClasses = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    destructive: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    ghost: "text-gray-700 hover:bg-gray-100",
    link: "text-blue-600 underline hover:text-blue-700"
  };

  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3 text-xs",
    lg: "h-11 px-8",
    icon: "h-10 w-10"
  };

  return `${baseClasses} ${variantClasses[variant] || variantClasses.default} ${sizeClasses[size] || sizeClasses.default} ${className || ''}`;
};

export const Button = ({ className, variant = "default", size = "default", ...props }) => {
  return (
    <button className={buttonVariants({ variant, size, className })} {...props} />
  );
};