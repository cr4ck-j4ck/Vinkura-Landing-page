'use client';

import React from 'react';
import Link from 'next/link';

export default function AutomatedGovernanceUI() {
  return (
    <main className="research-page">
      <div className="container">
        <Link href="/company/newsroom" className="back-link">← Newsroom</Link>

        <header className="research-header">
          <span className="eyebrow">Official Research Paper // 002</span>
          <h1 className="research-title">Automated Governance: Systems of Accountability</h1>
          <p className="research-subtitle">
            Exploring the role of AI in standardizing operational workflows and creating immutable audit trails for administrative execution.
          </p>
        </header>

        <div className="divider" />

        <article className="research-body">
          <div className="research-section">
            <h2>The Need for Structure</h2>
            <p>
              Legacy governance systems often suffer from fragmented reporting, manual oversight, and inconsistent data application. Automated Governance is the process of embedding administrative rules directly into the software layer to ensure process integrity.
            </p>
          </div>

          <div className="research-section">
            <h2>Key Pillars of Automated Governance</h2>
            <div className="req-grid">
              <div className="req-card">
                <span className="req-label">WORKFLOW ORCHESTRATION</span>
                <p>Standardizing the steps required for official actions, from evidence handling to personnel deployment.</p>
              </div>
              <div className="req-card">
                <span className="req-label">IMMUTABLE AUDITING</span>
                <p>Creating cryptographically secure logs of every decision and state change within the system.</p>
              </div>
              <div className="req-card">
                <span className="req-label">POLICY-AS-CODE</span>
                <p>Converting administrative guidelines into executable rules that govern system behavior in real-time.</p>
              </div>
            </div>
          </div>

          <div className="research-section">
            <h2>Operational Impact</h2>
            <p>
              By automating the governance layer, institutions can reduce administrative friction, minimize human error, and provide supervisors with an objective view of organizational performance.
            </p>
          </div>
        </article>

        <div className="cta-block">
          <p>See how Vinkura Forge implements automated governance in live deployments.</p>
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
