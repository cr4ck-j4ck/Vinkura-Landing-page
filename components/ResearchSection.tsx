'use client';

import React from 'react';
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
  return (
    <section className="research-section bg-white text-black">
      <div className="container">
        <div className="section-header">
          <h3 className="section-subtitle">RESEARCH AND PRODUCTS</h3>
          <p className="section-tagline">Building the foundations of operational reality.</p>
        </div>

        <div className="research-wrapper">
          <div className="research-grid">
            {researchItems.map((item, i) => (
              <div key={i} className="research-card">
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

        <div className="section-footer mt-16 text-center">
          <Link href="/case-studies" className="see-all-research-btn">
            SEE ALL RESEARCH ↗
          </Link>
        </div>
      </div>

      <style jsx>{`
        .research-section {
          padding: 8rem 0;
          background: #fff;
        }
        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 4rem;
        }
        .section-header {
          margin-bottom: 5rem;
        }
        .section-subtitle {
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: #999;
          margin-bottom: 1.5rem;
        }
        .section-tagline {
          font-size: 2.2rem;
          color: #000;
          max-width: 700px;
          line-height: 1.25;
          font-family: var(--font-hero);
          letter-spacing: -1.5px;
        }

        .research-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .research-card {
          background: #fdfdfd;
          border: 1px solid #f0f0f0;
          display: flex;
          flex-direction: column;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border-radius: 4px;
          min-height: 480px;
        }
        .research-card:hover {
          border-color: #000;
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.04);
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
          color: #bbb;
          margin-bottom: 2rem;
          display: block;
        }
        .card-title {
          font-family: var(--font-hero);
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          letter-spacing: -1px;
          color: #333;
          line-height: 1.2;
        }
        .card-desc {
          font-size: 0.95rem;
          color: #777;
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
        }

        .section-footer {
          margin-top: 4rem;
        }
        .see-all-research-btn {
          display: inline-block;
          padding: 1rem 3rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 2px;
          color: #000;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .see-all-research-btn:hover {
          background: #000;
          color: #fff;
          border-color: #000;
        }
        
        @media (max-width: 1024px) {
          .container { padding: 0 2rem; }
          .research-grid { gap: 1.5rem; }
        }

        @media (max-width: 768px) {
           .container { padding: 0; }
           .section-header { padding: 0 1.5rem; margin-bottom: 2.5rem; }
           .research-wrapper { 
             padding: 0 1.5rem;
           }
           .research-grid { 
             display: flex; 
             flex-direction: column;
             gap: 1.5rem; 
             width: 100%;
           }
           .research-card { 
             width: 100%; 
             max-width: none;
             min-height: auto;
             border-radius: 12px;
           }
           .card-content {
             padding: 2.5rem;
           }
           .card-title {
             font-size: 1.8rem;
             margin-bottom: 1rem;
             letter-spacing: -0.5px;
           }
           .card-desc {
             font-size: 1rem;
             line-height: 1.6;
             margin-bottom: 2.5rem;
             color: #555;
           }
           .section-tagline { font-size: 1.8rem; }
        }
      `}</style>
    </section>
  );
};

export default ResearchSection;
