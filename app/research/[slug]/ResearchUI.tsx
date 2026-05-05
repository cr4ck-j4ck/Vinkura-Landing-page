'use client';

import React from 'react';
import Link from 'next/link';

export default function ResearchUI({ data }: { data: any }) {
  return (
    <main className="research-detail">
      <section className="research-hero">
        <div className="hero-container">
          <Link href="/company/newsroom" className="back-link">← Newsroom</Link>
          <span className="type-badge">{data.type}</span>
          <h1 className="research-title">{data.title}</h1>
          <p className="research-summary">{data.summary}</p>
        </div>
      </section>

      <div className="hero-img-wrapper">
        <img src={data.img} alt={data.title} className="hero-img" />
      </div>

      <section className="content-section">
        <div className="content-container">
          <div className="content-grid">
            <div className="main-content">
              <p className="body-text">{data.content}</p>
              <div className="pillars">
                <h3 className="pillars-heading">Key Research Pillars</h3>
                <ul className="pillars-list">
                  {data.points.map((pt: string, i: number) => (
                    <li key={i} className="pillar-item">
                      <span className="pillar-slash">/</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <aside className="sidebar">
              <div className="sidebar-card">
                <h4 className="sidebar-label">Related Deployment</h4>
                <div className="sidebar-img-wrap">
                  <img src={data.img} alt="Research visual" className="sidebar-img" />
                </div>
                <p className="sidebar-desc">This research directly informs our current field architecture for sovereign official intelligence.</p>
                <Link href="/contact" className="briefing-link">Request technical briefing →</Link>
              </div>
              <div className="sidebar-card mt-6">
                <h4 className="sidebar-label">Explore Products</h4>
                <div className="sidebar-links">
                  <Link href="/products/vinkura-core" className="sidebar-nav-link">Vinkura Core</Link>
                  <Link href="/products/trinetra" className="sidebar-nav-link">Trinetra</Link>
                  <Link href="/products/forge" className="sidebar-nav-link">Forge</Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <style jsx>{`
        .research-detail {
          background: #fff;
          color: #000;
          min-height: 100vh;
          font-family: var(--font-inter, sans-serif);
          --font-hero: var(--font-outfit, 'Outfit', sans-serif);
        }
        .research-hero {
          padding-top: 140px;
          padding-bottom: 60px;
          border-bottom: 1px solid #eee;
        }
        .hero-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .back-link {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #999;
          text-decoration: none;
          margin-bottom: 2rem;
          transition: color 0.2s;
        }
        .back-link:hover { color: #000; }
        .type-badge {
          display: inline-block;
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          background: #000;
          color: #fff;
          padding: 0.35rem 0.75rem;
          margin-bottom: 1.5rem;
        }
        .research-title {
          font-family: var(--font-hero);
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 600;
          letter-spacing: -0.04em;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: #000;
        }
        .research-summary {
          font-size: 1.2rem;
          color: #555;
          line-height: 1.65;
          font-weight: 300;
        }
        .hero-img-wrapper {
          max-width: 1280px;
          margin: 0 auto;
          padding: 3rem 2rem 0;
        }
        .hero-img {
          width: 100%;
          aspect-ratio: 21/7;
          object-fit: cover;
          filter: grayscale(1);
          display: block;
        }
        .content-section {
          padding: 5rem 0 8rem;
        }
        .content-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .content-grid {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 5rem;
          align-items: start;
        }
        .body-text {
          font-size: 1.1rem;
          line-height: 1.85;
          color: #333;
          margin-bottom: 3rem;
          white-space: pre-line;
        }
        .pillars-heading {
          font-family: var(--font-hero);
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 2rem;
          letter-spacing: -0.02em;
          color: #000;
        }
        .pillars-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .pillar-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          font-size: 1rem;
          color: #444;
          line-height: 1.6;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #f5f5f5;
        }
        .pillar-item:last-child { border-bottom: none; }
        .pillar-slash {
          font-weight: 800;
          color: #000;
          flex-shrink: 0;
          line-height: 1.6;
        }
        .sidebar { position: sticky; top: 120px; }
        .sidebar-card {
          background: #fafafa;
          border: 1px solid #eee;
          padding: 2rem;
        }
        .mt-6 { margin-top: 1.5rem; }
        .sidebar-label {
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #999;
          margin-bottom: 1.25rem;
        }
        .sidebar-img-wrap {
          width: 100%;
          aspect-ratio: 16/9;
          overflow: hidden;
          margin-bottom: 1.25rem;
          background: #eee;
        }
        .sidebar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(1);
          display: block;
        }
        .sidebar-desc {
          font-size: 0.85rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .briefing-link {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #000;
          text-decoration: none;
          border-bottom: 1px solid #000;
          padding-bottom: 2px;
          transition: opacity 0.2s;
        }
        .briefing-link:hover { opacity: 0.6; }
        .sidebar-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .sidebar-nav-link {
          font-size: 0.85rem;
          color: #444;
          text-decoration: none;
          padding: 0.5rem 0;
          border-bottom: 1px solid #f0f0f0;
          transition: color 0.2s;
          display: block;
        }
        .sidebar-nav-link:hover { color: #000; }
        @media (max-width: 1024px) {
          .content-grid { grid-template-columns: 1fr; }
          .sidebar { position: static; }
          .hero-img { aspect-ratio: 16/7; }
        }
        @media (max-width: 640px) {
          .research-hero { padding-top: 110px; }
          .hero-img { aspect-ratio: 4/3; }
        }
      `}</style>
    </main>
  );
}
