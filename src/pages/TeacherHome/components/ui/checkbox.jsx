import React from 'react';

export const Checkbox = ({ checked, onCheckedChange, ...props }) => {
  return (
    <input 
      type="checkbox" 
      checked={checked}
      onChange={(e) => onCheckedChange?.(e.target.checked)}
      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      {...props}
    />
  );
};