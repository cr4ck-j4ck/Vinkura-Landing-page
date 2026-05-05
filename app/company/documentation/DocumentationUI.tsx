'use client';

import React from 'react';
import Link from 'next/link';

const DocumentationUI = () => {
  return (
    <div className="page-shell">
      <div className="page-container">
        {/* HERO SECTION */}
        <header className="archive-hero">
          <div className="archive-eyebrow">Technical Resources</div>
          <h1 className="archive-title">
            Official<br />
            Documentation.
          </h1>
          <p className="archive-subtitle">
            The technical foundation for deploying, governing, and scaling Vinkura systems across mission-critical government infrastructure.
          </p>
        </header>

        {/* DOCS GRID */}
        <section className="records-section">
          <div className="records-grid">
            {/* PLATFORM DOCS */}
            <div className="record-card">
               <div className="record-top">
                  <span className="record-label">Platform Architecture</span>
                  <div className="links-stack">
                     <Link href="/products/vinkura-core" className="internal-doc-link">Vinkura Core ↗</Link>
                     <Link href="/products/sentinel" className="internal-doc-link">Sentinel Intelligence ↗</Link>
                     <Link href="/products/forge" className="internal-doc-link">Forge Builder ↗</Link>
                  </div>
               </div>
            </div>

            {/* DEPLOYMENT DOCS */}
            <div className="record-card">
               <div className="record-top">
                  <span className="record-label">Deployment & Ops</span>
                  <div className="links-stack">
                     <Link href="/products/orbit" className="internal-doc-link">Orbit Orchestration ↗</Link>
                     <Link href="/company/security" className="internal-doc-link">Security Hardening ↗</Link>
                     <Link href="/case-studies" className="internal-doc-link">Operational Logs ↗</Link>
                  </div>
               </div>
            </div>

            {/* SOLUTIONS DOCS */}
            <div className="record-card">
               <div className="record-top">
                  <span className="record-label">Specific Solutions</span>
                  <div className="links-stack">
                     <Link href="/case-studies/ddms" className="internal-doc-link">DDMS Implementation ↗</Link>
                     <Link href="/case-studies/maalkhana" className="internal-doc-link">E-Maalkhana Protocols ↗</Link>
                     <Link href="/case-studies/ectc" className="internal-doc-link">E-CTC Coordination ↗</Link>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="final-cta-block">
           <div className="cta-inner">
              <h2 className="cta-headline">Request full technical specifications.</h2>
              <Link href="/company/security#contact" className="cta-button-premium">
                 Contact Architecture Team
              </Link>
           </div>
        </section>
      </div>

      <style jsx>{`
        .page-shell {
          min-height: 100vh;
          background: #fdfdfc;
          color: #0a0a0a;
          font-family: var(--font-inter), sans-serif;
        }

        .page-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding-left: 32px;
          padding-right: 32px;
        }

        .archive-hero {
          padding-top: 180px;
          padding-bottom: 80px;
        }

        .archive-eyebrow {
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: rgba(10,10,10,0.4);
          margin-bottom: 24px;
        }

        .archive-title {
          font-size: clamp(3rem, 7vw, 6rem);
          line-height: 0.92;
          font-weight: 500;
          letter-spacing: -0.04em;
          max-width: 800px;
          margin: 0 0 32px 0;
          font-family: var(--font-outfit), sans-serif;
        }

        .archive-subtitle {
          max-width: 640px;
          font-size: 1.2rem;
          line-height: 1.6;
          color: rgba(10,10,10,0.6);
          margin-bottom: 40px;
          font-weight: 300;
        }

        .records-section {
          padding: 80px 0 120px;
        }

        .records-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        @media (max-width: 1024px) {
          .records-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .records-grid { grid-template-columns: 1fr; }
        }

        .record-card {
          background: #fff;
          border: 1px solid rgba(10,10,10,0.08);
          border-radius: 2px;
          padding: 48px;
          display: flex;
          flex-direction: column;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .record-card:hover {
          border-color: rgba(10,10,10,1);
          transform: translateY(-4px);
        }

        .record-label {
          display: block;
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: rgba(10,10,10,0.4);
          margin-bottom: 32px;
          font-weight: 700;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          padding-bottom: 16px;
        }

        .links-stack {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .internal-doc-link {
          font-size: 1.1rem;
          font-weight: 500;
          color: #000;
          text-decoration: none;
          transition: 0.3s;
        }

        .internal-doc-link:hover {
          color: #666;
          padding-left: 4px;
        }

        .final-cta-block {
          padding: 120px 0;
          border-top: 1px solid rgba(0,0,0,0.06);
          margin-top: 80px;
        }

        .cta-inner {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          max-width: 800px;
        }

        .cta-headline {
          font-size: 3.5rem;
          line-height: 1;
          letter-spacing: -0.04em;
          margin-bottom: 48px;
          font-weight: 500;
          font-family: var(--font-outfit), sans-serif;
        }

        .cta-button-premium {
          display: inline-block;
          background: #000;
          color: #fff;
          padding: 20px 48px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          text-decoration: none;
          font-size: 0.75rem;
          transition: 0.3s;
        }

        .cta-button-premium:hover {
          background: #333;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .archive-hero { padding-top: 140px; }
          .archive-title { font-size: 3rem; }
          .record-card { padding: 32px; }
          .cta-headline { font-size: 2.25rem; }
        }
      `}</style>
    </div>
  );
};

export default DocumentationUI;
