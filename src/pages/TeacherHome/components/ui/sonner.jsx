import React from 'react';

export function Toaster({ position = 'top-right', richColors = false }) {
  return (
    <div className={`toaster toaster-${position}`}>
      {/* Toaster implementation */}
    </div>
  );
}