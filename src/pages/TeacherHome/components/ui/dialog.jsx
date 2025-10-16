import React from 'react';

export const Dialog = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export const DialogTrigger = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export const DialogContent = ({ children, ...props }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl" {...props}>
        {children}
      </div>
    </div>
  );
};

export const DialogHeader = ({ children, ...props }) => {
  return <div className="mb-4" {...props}>{children}</div>;
};

export const DialogTitle = ({ children, ...props }) => {
  return <h2 className="text-lg font-semibold" {...props}>{children}</h2>;
};

export const DialogDescription = ({ children, ...props }) => {
  return <p className="text-sm text-gray-600 mt-2" {...props}>{children}</p>;
};

export const DialogFooter = ({ children, ...props }) => {
  return <div className="mt-6 flex justify-end gap-2" {...props}>{children}</div>;
};

export const DialogClose = ({ children, onClick, ...props }) => {
  return (
    <button 
      className="px-4 py-2 text-sm bg-gray-500 text-white rounded hover:bg-gray-600"
      onClick={onClick}
      {...props}
    >
      {children || 'إغلاق'}
    </button>
  );
};