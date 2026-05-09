'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const researchItems = [
  {
    title: "Sovereign Intelligence",
    category: "Whitepaper",
    desc: "How decentralized departmental data can be unified through a shared operational substrate without compromising departmental agency.",
    link: "/research/sovereign-intelligence",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800"
  },
  {
    title: "Operational Visibility",
    category: "Field Research",
    desc: "How Trinetra enabled real-time multi-zone coordination for 500,000+ pilgrims at 14,000ft with zero cellular connectivity.",
    link: "/research/operational-visibility",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800"
  },
  {
    title: "Automated Governance",
    category: "Product Research",
    desc: "Converting paper workflows into executable state machines — eliminating the shadows where administrative corruption thrives.",
    link: "/research/automated-governance",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800"
  },
];


const ResearchSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = researchItems.length - 1;

  const scrollResearchCarousel = (direction: 'prev' | 'next') => {
    setActiveIndex((currentIndex) => {
      if (direction === 'next') {
        return (currentIndex + 1) % researchItems.length;
      }

      return (currentIndex - 1 + researchItems.length) % researchItems.length;
    });
  };

  return (
    <section className="research-section bg-black text-white">
      <div className="container">
        <div className="section-header mobile-carousel-header">
          <div className="carousel-heading-group">
            <h3 className="section-subtitle">RESEARCH AND PRODUCTS</h3>
            <p className="section-tagline">Building the foundations of operational reality.</p>
          </div>
          <div className="carousel-controls" aria-label="Research carousel controls">
            <button
              type="button"
              className="carousel-control-btn"
              onClick={() => scrollResearchCarousel('prev')}
              aria-label="Previous research card"
            >
              ←
            </button>
            <button
              type="button"
              className="carousel-control-btn"
              onClick={() => scrollResearchCarousel('next')}
              aria-label="Next research card"
            >
              →
            </button>
          </div>
        </div>

        <div className="research-wrapper">
          <div className="research-viewport">
            <div className="research-grid">
            {researchItems.map((item, i) => (
              <div key={i} className={`research-card ${i === activeIndex ? 'active' : ''}`}>
                <div className="card-content">
                  <span className="card-category">{item.category}</span>
                  <h4 className="card-title">{item.title}</h4>
                  <p className="card-desc">{item.desc}</p>
                  <Link href={item.link} className="card-link">
                    View Record ↗
                  </Link>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>

        <div className="section-footer mt-16 text-center">
          <Link href="/case-studies" className="see-all-research-btn">
            SEE ALL RESEARCH ↗
          </Link>
        </div>
      </div>

      <style jsx>{`
        .research-section {
          padding: 8rem 0;
          background: #000;
          color: #fff;
        }
        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 4rem;
        }
        .section-header {
          margin-bottom: 5rem;
        }

        .mobile-carousel-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 2rem;
        }

        .carousel-heading-group {
          min-width: 0;
          flex: 1;
        }

        .section-subtitle {
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: rgba(255, 255, 255, 0.55);
          margin-bottom: 1.5rem;
        }
        .section-tagline {
          font-size: 2.2rem;
          color: #fff;
          max-width: 700px;
          line-height: 1.25;
          font-family: var(--font-hero);
          letter-spacing: -1.5px;
        }

        .research-wrapper {
          position: relative;
        }

        .research-viewport {
          overflow: hidden;
        }

        .research-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .research-card {
          background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          flex-direction: column;
          transition: all 0.55s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
          border-radius: 18px;
          min-height: 480px;
        }
        .research-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255,255,255,0.18);
          box-shadow: 0 20px 40px rgba(0,0,0,0.18);
        }
        .card-content {
          padding: 3.5rem;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .card-category {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 800;
          color: rgba(255,255,255,0.55);
          margin-bottom: 2rem;
          display: block;
        }
        .card-title {
          font-family: var(--font-hero);
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          letter-spacing: -1px;
          color: #fff;
          line-height: 1.2;
        }
        .card-desc {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.72);
          line-height: 1.7;
          margin-bottom: 3rem;
          flex-grow: 1;
        }
        .card-link {
          font-size: 0.8rem;
          font-weight: 700;
          color: #000;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: auto;
          align-self: flex-start;
          background: #fff;
          padding: 0.85rem 1.2rem;
          border-radius: 999px;
        }

        .carousel-controls {
          display: none;
          gap: 0.75rem;
          flex-shrink: 0;
        }

        .carousel-control-btn {
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.92);
          color: #000;
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          font-weight: 700;
          backdrop-filter: blur(10px);
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .carousel-control-btn:hover {
          transform: translateY(-1px);
          background: #fff;
        }

        .section-footer {
          margin-top: 4rem;
          display: flex;
          justify-content: center;
        }
        .see-all-research-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1rem 3rem;
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 2px;
          color: #000;
          background: #fff;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .see-all-research-btn:hover {
          background: #e9e9e9;
          color: #000;
          border-color: rgba(255,255,255,0.18);
        }
        
        @media (max-width: 1024px) {
          .container { padding: 0 2rem; }
          .research-grid { gap: 1.5rem; }
        }

        @media (max-width: 768px) {
           .container { padding: 0; }
           .section-header { padding: 0 1.5rem; margin-bottom: 2rem; position: relative; }
           .mobile-carousel-header { gap: 1rem; }
           .carousel-controls {
             display: flex;
             align-items: flex-start;
             margin-top: 0.1rem;
          }
           .carousel-control-btn svg {
             width: 1rem;
             height: 1rem;
           }
           .research-wrapper { 
             padding: 0 1.5rem;
             position: relative;
           }
           .research-viewport {
             overflow: hidden;
             position: relative;
             min-height: 540px;
           }
           .research-grid { 
             display: block;
             position: relative;
             min-height: 540px;
           }
           .carousel-control-btn {
             width: 2.75rem;
             height: 2.75rem;
             border-radius: 999px;
             border: 1px solid rgba(0, 0, 0, 0.12);
             background: rgba(255, 255, 255, 0.92);
             color: #000;
             box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
             display: flex;
             align-items: center;
             justify-content: center;
             font-size: 1rem;
             font-weight: 700;
             backdrop-filter: blur(10px);
           }
           .research-card { 
             position: absolute;
             inset: 0;
             width: 100%;
             min-height: 540px;
             border-radius: 18px;
             opacity: 0;
             pointer-events: none;
             transform: translateX(18px) scale(0.985);
             transition: opacity 0.35s ease, transform 0.35s ease;
           }
           .research-card.active {
             opacity: 1;
             pointer-events: auto;
             transform: translateX(0) scale(1);
           }
           .card-content {
             padding: 2rem;
             height: 100%;
           }
           .card-category {
             margin-bottom: 1.25rem;
           }
           .card-title {
             font-size: 1.55rem;
             margin-bottom: 1rem;
             letter-spacing: -0.5px;
           }
           .card-desc {
             font-size: 0.95rem;
             line-height: 1.6;
             margin-bottom: 2rem;
             color: rgba(255,255,255,0.72);
           }
           .section-tagline { font-size: 1.7rem; }
           .section-footer { margin-top: 2.5rem; }
           .see-all-research-btn { padding: 0.9rem 2rem; }
        }
      `}</style>
    </section>
  );
};

export default ResearchSection;
