'use client';

import React, { useState, useEffect } from 'react';

const TopRibbon = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isDismissed = localStorage.getItem('ribbonDismissed');
    if (!isDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('ribbonDismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="top-ribbon bg-[#f5f5f5] text-[#666] py-2 px-4 text-center relative z-[1000] border-b border-gray-200">
      <div className="container mx-auto">
        <p className="text-[11px] font-bold tracking-[1px] uppercase">
          Vinkura's DDMS gets AppSouled by CM Uttar Pradesh Yogi Adityanath 
        </p>
      </div>
      <button 
        onClick={handleDismiss}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#999] hover:text-black font-light text-lg"
        aria-label="Close"
      >
        ×
      </button>
      <style jsx>{`
        .top-ribbon {
          font-family: var(--font-body);
        }
      `}</style>
    </div>
  );
};

export default TopRibbon;
