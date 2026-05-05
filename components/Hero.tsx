'use client';

import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
      >
        <source src="/VINKURA.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />

      <div className="hero-content">
        <h1 className="hero-title animate-in">
          The Operating System <br /> for Sovereign Governance
        </h1>
        <p className="hero-subtitle animate-in-delayed">
          Bridging the gap between operational logic and field reality with <br /> auditable, mission-critical intelligence.
        </p>

      </div>

      <style jsx>{`
        .hero {
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000;
          text-align: center;
          padding: 0 2rem;
          position: relative;
          overflow: hidden;
        }

        .hero-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay for legibility */
          background: radial-gradient(circle at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%);
          z-index: 2;
        }

        .hero-content {
          max-width: 1000px;
          position: relative;
          z-index: 3;
        }

        .hero-title {
          font-family: var(--font-hero);
          font-size: 5rem;
          line-height: 1.1;
          font-weight: 500;
          letter-spacing: -3px;
          margin-bottom: 3rem;
          color: #fff;
        }

        .hero-subtitle {
          font-size: 1.4rem;
          color: #ccc;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
          font-weight: 300;
        }

        .animate-in {
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-in-delayed {
          opacity: 0;
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.75rem;
            letter-spacing: -1px;
            line-height: 1.2;
          }
          .hero-subtitle {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
