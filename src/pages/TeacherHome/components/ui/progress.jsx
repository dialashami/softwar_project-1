import React from 'react';

export const Progress = ({ value, className, ...props }) => {
  return (
    <div className={`relative h-2 w-full overflow-hidden rounded-full bg-gray-200 ${className || ''}`} {...props}>
      <div 
        className="h-full bg-blue-600 transition-all duration-300" 
        style={{ width: `${value}%` }}
      />
    </div>
  );
};