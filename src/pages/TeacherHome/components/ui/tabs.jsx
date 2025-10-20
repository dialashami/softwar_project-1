import React, { useState } from 'react';

export const Tabs = ({ defaultValue, children, ...props }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  
  return (
    <div {...props}>
      {React.Children.map(children, child => 
        React.cloneElement(child, { activeTab, setActiveTab })
      )}
    </div>
  );
};

export const TabsList = ({ children, ...props }) => {
  return (
    <div className="inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1" {...props}>
      {children}
    </div>
  );
};

export const TabsTrigger = ({ value, children, activeTab, setActiveTab, ...props }) => {
  return (
    <button 
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all ${
        activeTab === value ? 'bg-white shadow' : 'text-gray-600 hover:text-gray-900'
      }`}
      onClick={() => setActiveTab(value)}
      {...props}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ value, children, activeTab, ...props }) => {
  if (activeTab !== value) return null;
  return <div className="mt-2" {...props}>{children}</div>;
};