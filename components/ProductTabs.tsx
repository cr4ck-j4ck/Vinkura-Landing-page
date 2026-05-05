import React from 'react';

const categories: string[] = ['All', 'Public Safety', 'Administration', 'Resource Planning', 'Field Intelligence'];

const ProductTabs = () => {
  return (
    <div className="product-tabs-container">
      <div className="container">
        <div className="product-tabs">
          {categories.map((cat, i) => (
            <div key={i} className={`tab-item ${i === 0 ? 'active' : ''}`}>
              {cat}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .product-tabs-container {
          background: #fff;
          border-bottom: 1px solid #000;
          padding: 1.5rem 0;
          overflow-x: auto;
          white-space: nowrap;
        }
        .product-tabs {
          display: flex;
          gap: 2.5rem;
          justify-content: flex-start;
        }
        .tab-item {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          cursor: pointer;
          color: #888;
          transition: 0.3s;
        }
        .tab-item:hover, .tab-item.active {
          color: #000;
        }
        .container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 4rem;
        }
        @media (max-width: 768px) {
          .container { padding: 0 1.5rem; }
          .product-tabs { gap: 1.5rem; }
        }
      `}</style>
    </div>
  );
};

export default ProductTabs;
