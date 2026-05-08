'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const products = [
  {
    name: "Vinkura Core",
    tagLine: "Unify workflows, records, and accountability. The operational backbone for India's public systems.",
    insight: "Scalable data fabric for cross-departmental interoperability.",
    link: "/products/vinkura-core"
  },
  {
    name: "Sentinel",
    tagLine: "Decision intelligence for public safety. Moving departments from fragmented records to a shared, real-time context.",
    insight: "Predictive modeling and real-time situational awareness.",
    link: "/products/sentinel"
  },
  {
    name: "Forge",
    tagLine: "Workflow infrastructure for high-stakes processes. Converting manual operational logic into auditable software.",
    insight: "Rapid audit-ready deployment for administrative processes.",
    link: "/products/forge"
  },

  {
    name: "Orbit",
    tagLine: "Deploy, govern, and operate. Resilient deployment layer for air-gapped, edge, and state data centers.",
    insight: "Edge-computing infrastructure for disconnected operations.",
    link: "/products/orbit"
  },
  {
    name: "Voice",
    tagLine: "Field-first operational interface. Voice-native access for mission-critical information retrieval under pressure.",
    insight: "NLP tailored for operational field commands.",
    link: "/products/voice"
  },
  {
    name: "DDMS",
    tagLine: "Dynamic Duty Management System. Unified personnel data, equipment logs, and rosters for India's public forces.",
    insight: "Automated logistics and personnel orchestration.",
    link: "/products/ddms"
  },
];

const SoftwareList = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section className="software-section bg-white text-black" onMouseMove={handleMouseMove}>
      <div className="container">
        <div className="software-intro">
          <p className="intro-text-premium">Our software powers mission-critical decisions across India's public infrastructure—from district administrative hubs to the tactical edge of field operations.</p>
          <div style={{ marginBottom: '2rem' }}>
            <img src="/VINKURA.png" alt="Vinkura" style={{ height: '40px', width: 'auto' }} />
          </div>
          <h3 className="section-subtitle">Our Software</h3>
        </div>

        <div className="software-items">
          {products.map((product, i) => (
            <Link key={i} href={product.link}>
              <div
                className="software-item"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="software-desc">
                  <p className="software-tag">{product.tagLine}</p>
                </div>
                <h2 className="software-name">{product.name}</h2>
                <div className="software-arrow hide-mobile">
                  <span className="arrow-char">↗</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {hoveredIndex !== null && (
        <div
          className="hover-tooltip-container hide-mobile"
          style={{
            left: mousePos.x + 20,
            top: mousePos.y + 20,
          }}
        >
          <div className="tooltip-content">
            <span className="tooltip-label">Insight</span>
            <p className="tooltip-text">{products[hoveredIndex].insight}</p>
          </div>
        </div>
      )}

      <style jsx>{`
        .software-section {
          position: relative;
          padding: 1.5rem 0 6rem;
        }
        .section-subtitle {
          font-size: 1.16rem;
          font-weight: 700;
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: #999;
          border-top: 1px solid #eee;
          padding-top: 1.25rem;
          display: inline-block;
        }
        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 4rem;
        }
        .software-intro {
          margin-bottom: 2rem;
        }
        .intro-text-premium {
          font-size: 1.76rem;
          line-height: 1.25;
          max-width: 1000px;
          margin-bottom: 1.5rem;
          font-family: var(--font-hero);
          font-weight: 400;
          letter-spacing: -1px;
        }
        .software-items {
          display: flex;
          flex-direction: column;
        }
        .software-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 3rem 0;
          border-bottom: 1px solid #eee;
          cursor: pointer;
          transition: all 0.3s;
        }
        .software-item:hover {
          padding-left: 20px;
          background: #fafafa;
        }
        .software-name {
          font-family: var(--font-hero);
          font-size: 4rem;
          font-weight: 500;
          letter-spacing: -2px;
          margin: 0;
        }
        .software-tag {
          font-size: 1rem;
          color: #666;
          max-width: 400px;
          line-height: 1.5;
        }
        .arrow-char {
          font-size: 2rem;
          font-weight: 300;
        }
        .software-arrow {
          color: #ccc;
          transition: transform 0.3s, color 0.3s;
        }
        .software-item:hover .software-arrow {
          transform: translate(5px, -5px);
          color: #000;
        }
        
        .hover-tooltip-container {
          position: fixed;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(10px);
          color: white;
          padding: 1.5rem;
          border-radius: 12px;
          pointer-events: none;
          z-index: 1000;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
          animation: tooltip-fade 0.2s ease-out;
          max-width: 280px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .tooltip-content {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .tooltip-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #999;
          font-weight: 700;
        }

        .tooltip-text {
          font-size: 0.95rem;
          line-height: 1.4;
          margin: 0;
          font-weight: 400;
        }

        @keyframes tooltip-fade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .software-section { padding: 0.75rem 0 4rem; }
          .container { padding: 0 1.25rem; }
          .software-intro { margin-bottom: 1.25rem; }
          .intro-text-premium { font-size: 1.2rem; margin-bottom: 1rem; }
          .section-subtitle { margin-bottom: 1.25rem; padding-top: 1rem; }
          .software-name { font-size: 2.1rem; letter-spacing: -1px; }
          .software-item { flex-direction: column; align-items: flex-start; gap: 1rem; padding: 1.5rem 0; }
          .software-tag { max-width: 100%; order: 2; }
          .software-name { order: 1; }
          .hide-mobile { display: none !important; }
        }
      `}</style>
    </section>
  );
};

export default SoftwareList;
