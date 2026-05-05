'use client';

import React from 'react';

const BridgeSection = () => {
  return (
    <section className="bridge-section">
      <div className="container">
        <div className="bridge-grid">
          <div className="bridge-image-container hide-mobile">
             <div className="bridge-gradient-box">
                <div className="inner-glow"></div>
             </div>
          </div>
          <div className="bridge-text-box">
            <p className="bridge-para">
              India's public systems generate more operational data than almost any country on earth. Almost none of it is connected.
              <br /><br />
              We build the infrastructure that turns scattered records into decisions — faster investigations, better resource deployment, cleaner accountability. Not AI for demos. Software for real operations.
            </p>
            <button className="bridge-btn">Learn More</button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bridge-section {
          padding: 10rem 0;
          background: #fafafa;
          color: #000;
        }
        .bridge-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }
        .bridge-image-container {
          height: 500px;
          position: relative;
        }
        .bridge-gradient-box {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #000 0%, #333 100%);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .inner-glow {
          position: absolute;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%);
          animation: rotate 20s linear infinite;
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .bridge-title {
          font-size: 4rem;
          line-height: 1.1;
          margin-bottom: 2.5rem;
          letter-spacing: -2px;
          font-weight: 500;
        }
        .bridge-para {
          font-size: 1.3rem;
          color: #444;
          margin-bottom: 3rem;
          line-height: 1.6;
          font-weight: 300;
        }
        .bridge-btn {
          padding: 1rem 2.5rem;
          background: #000;
          color: #fff;
          border: none;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .bridge-btn:hover {
          opacity: 0.8;
          transform: translateY(-2px);
        }
        @media (max-width: 968px) {
          .bridge-section { padding: 6rem 0; }
          .bridge-grid {
            grid-template-columns: 1fr;
            text-align: left;
          }
          .hide-mobile { display: none; }
          .bridge-title { font-size: 2.75rem; }
          .bridge-para { font-size: 1.1rem; }
        }
      `}</style>
    </section>
  );
};

export default BridgeSection;
