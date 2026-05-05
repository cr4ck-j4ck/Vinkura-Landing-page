'use client';

import React from 'react';
import Link from 'next/link';

export default function SovereignIntelligenceUI() {
  return (
    <main className="research-page">
      <div className="container">
        <Link href="/company/newsroom" className="back-link">← Newsroom</Link>

        <header className="research-header">
          <span className="eyebrow">Official Research Paper // 001</span>
          <h1 className="research-title">Sovereign Intelligence: AI for National Institutions</h1>
          <p className="research-subtitle">
            A framework for deploying advanced intelligence systems while maintaining absolute operational control and jurisdictional integrity.
          </p>
        </header>

        <div className="divider" />

        <article className="research-body">
          <div className="research-section">
            <h2>The Thesis of Sovereignty</h2>
            <p>
              As artificial intelligence becomes the core infrastructure for public governance, the concept of &ldquo;Sovereign Intelligence&rdquo; emerges as a critical requirement. It is the ability of an organization to deploy, operate, and control AI systems within its own jurisdictional boundaries, without reliance on external or non-sovereign clouds.
            </p>
          </div>

          <div className="research-section">
            <h2>Architectural Requirements</h2>
            <div className="req-grid">
              <div className="req-card">
                <span className="req-label">DATA RESIDENCY</span>
                <p>Processing must occur on-premise or within sovereign cloud boundaries verified by the state.</p>
              </div>
              <div className="req-card">
                <span className="req-label">MODEL TRANSPARENCY</span>
                <p>Institutions must have visibility into the logic and constraints governing automated decisions.</p>
              </div>
              <div className="req-card">
                <span className="req-label">EXECUTION CONTINUITY</span>
                <p>Critical systems must remain operational in air-gapped or low-connectivity environments.</p>
              </div>
            </div>
          </div>

          <div className="research-section">
            <h2>Future Implications</h2>
            <p>
              The transition to sovereign intelligence is not merely a technical migration but a fundamental shift in how public safety, administrative governance, and social infrastructure are managed in the 21st century.
            </p>
          </div>
        </article>

        <div className="cta-block">
          <p>Request a technical briefing on Sovereign Intelligence architecture.</p>
          <Link href="/contact" className="cta-btn">Contact Us →</Link>
        </div>
      </div>

      <style jsx>{`
        .research-page {
          font-family: var(--font-inter, sans-serif);
          color: #000;
          background: #fff;
          min-height: 100vh;
          padding-top: 140px;
          padding-bottom: 120px;
        }
        .container { max-width: 860px; margin: 0 auto; padding: 0 2rem; }
        .back-link {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #999;
          text-decoration: none;
          margin-bottom: 3rem;
          transition: color 0.2s;
        }
        .back-link:hover { color: #000; }
        .research-header { margin-bottom: 4rem; }
        .eyebrow {
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: rgba(0,0,0,0.35);
          margin-bottom: 1.5rem;
          display: block;
        }
        .research-title {
          font-family: var(--font-outfit, sans-serif);
          font-size: clamp(2.25rem, 5vw, 3.75rem);
          letter-spacing: -0.04em;
          line-height: 1.05;
          margin-bottom: 1.75rem;
          font-weight: 500;
          color: #000;
        }
        .research-subtitle {
          font-size: 1.2rem;
          color: #555;
          line-height: 1.6;
          font-weight: 300;
        }
        .divider { height: 1px; background: #eee; margin-bottom: 4rem; }
        .research-body { line-height: 1.8; font-size: 1.1rem; color: #333; }
        .research-section { margin-bottom: 4rem; }
        .research-section h2 {
          font-family: var(--font-outfit, sans-serif);
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: #000;
          border-bottom: 1px solid #f0f0f0;
          padding-bottom: 1rem;
        }
        .req-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          margin-top: 2rem;
          border: 1px solid #eee;
        }
        .req-card {
          padding: 2rem;
          border-right: 1px solid #eee;
        }
        .req-card:last-child { border-right: none; }
        .req-label {
          display: block;
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #000;
          margin-bottom: 1rem;
        }
        .req-card p { font-size: 0.9rem; color: #666; font-weight: 300; line-height: 1.6; margin: 0; }
        .cta-block {
          margin-top: 5rem;
          padding: 3rem;
          background: #fafafa;
          border: 1px solid #eee;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }
        .cta-block p { font-size: 1rem; color: #555; margin: 0; }
        .cta-btn {
          white-space: nowrap;
          background: #000;
          color: #fff;
          padding: 0.875rem 2rem;
          text-decoration: none;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          transition: background 0.2s;
        }
        .cta-btn:hover { background: #222; }
        @media (max-width: 900px) {
          .req-grid { grid-template-columns: 1fr; }
          .req-card { border-right: none; border-bottom: 1px solid #eee; }
          .req-card:last-child { border-bottom: none; }
          .cta-block { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </main>
  );
}
