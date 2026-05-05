'use client';

import React from 'react';
import Link from 'next/link';

export default function OperationalVisibilityUI() {
  return (
    <main className="research-page">
      <div className="container">
        <Link href="/company/newsroom" className="back-link">← Newsroom</Link>

        <header className="research-header">
          <span className="eyebrow">Official Research Paper // 003</span>
          <h1 className="research-title">Operational Visibility: Intelligence in the Field</h1>
          <p className="research-subtitle">
            Measuring the impact of real-time coordination and geospatial intelligence on large-scale field deployments.
          </p>
        </header>

        <div className="divider" />

        <article className="research-body">
          <div className="research-section">
            <h2>The Friction of Distance</h2>
            <p>
              In large-scale official operations—ranging from public safety deployments to disaster response—the primary constraint is often the &ldquo;friction of distance.&rdquo; This refers to the delay and distortion of information as it moves from the field to the command center.
            </p>
          </div>

          <div className="research-section">
            <h2>Quantifying Impact</h2>
            <p>
              By implementing the Trinetra field sync layer, institutions have observed a 40% reduction in response latency and a significant improvement in resource allocation accuracy. Real-time geospatial mapping allows commanders to see the &ldquo;operational reality&rdquo; as it unfolds.
            </p>
          </div>

          <div className="research-section">
            <h2>Technological Resiliency</h2>
            <p>
              Operational visibility must not depend on perfect conditions. Our research focuses on maintaining a synchronized state even in bandwidth-constrained or air-gapped environments, ensuring that the command layer never loses sight of the field.
            </p>
          </div>
        </article>

        <div className="cta-block">
          <p>Learn how Trinetra delivers operational visibility in extreme field environments.</p>
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
          .cta-block { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </main>
  );
}
