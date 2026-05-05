'use client';

import React from 'react';
import Link from 'next/link';

const casesListing = [
  {
    category: "Operational Visibility",
    id: "01",
    title: "DDMS: State-Wide Personnel Discipline",
    desc: "Modernizing duty management for 100k+ personnel with real-time auditability and AI-directed roster discipline.",
    link: "/case-studies/ddms"
  },
  {
    category: "Public Safety",
    id: "04",
    title: "Trinetra: Multi-Zone Field Coordination",
    desc: "A mobile-first deployment for high-stakes coordination in limited connectivity environments.",
    link: "/case-studies/trinetra"
  },
  {
    category: "Evidence Integrity",
    id: "02",
    title: "E-Maalkhana: Evidence Chain of Custody",
    desc: "Eliminating paper records for police evidence rooms via QR-integrated digital custody protocols.",
    link: "/case-studies/maalkhana"
  },
  {
    category: "Judicial Support",
    id: "03",
    title: "E-CTC: Electronic Case Tracking",
    desc: "Unified tracking for investigative and prosecutorial workflows to reduce judicial backlog.",
    link: "/case-studies/ectc"
  },
  {
    category: "Operational Intelligence",
    id: "05",
    title: "Sentinel: Command Decision Intelligence",
    desc: "Aggregating fragmented field signals into a single, searchable command context for district HQ.",
    link: "/case-studies/sentinel"
  },
  {
    category: "Workflow Automation",
    id: "07",
    title: "Forge: AI-Driven Workflow Orchestration",
    desc: "Automating routine official handoffs and standardizing data exchange across departments.",
    link: "/case-studies/forge"
  },
  {
    category: "Infrastructure",
    id: "08",
    title: "Orbit: Sovereign Edge Orchestration",
    desc: "Secure on-premise infrastructure for air-gapped official AI and mission-critical systems.",
    link: "/case-studies/orbit"
  },
  {
    category: "Field Intelligence",
    id: "09",
    title: "Voice: Voice-First Operational Capture",
    desc: "Hands-free reporting and real-time incident logging engineered for complex operational zones.",
    link: "/case-studies/voice"
  },
  {
    category: "Platform Foundation",
    id: "06",
    title: "Vinkura Core: Platform Foundation",
    desc: "Developing the shared data and workflow layer that powers mission-critical institutions.",
    link: "/case-studies/core"
  }
];


const CaseStudiesUI = () => {
  return (
    <div className="page-shell">
      <div className="page-container">
        {/* HERO SECTION */}
        <header className="archive-hero">
          <div className="archive-eyebrow">Official Archive</div>
          <h1 className="archive-title">
            Real deployments.<br />
            Real results.
          </h1>
          <p className="archive-subtitle">
            Technology matters only when it survives contact with the real world. We build for the realities of adoption, infrastructure limits, and absolute accountability.
          </p>

          <div className="archive-meta">
            <div className="meta-item">
              <span className="meta-label">Total Records</span>
              <span className="meta-value">009</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Status</span>
              <span className="meta-value">Validated</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Jurisdictions</span>
              <span className="meta-value">Multi-District</span>
            </div>
          </div>
        </header>

        {/* RECORDS GRID */}
        <section className="records-section">
          <div className="records-grid">
            {casesListing.map((item, idx) => (
              <article className="record-card group" key={idx}>
                <div className="record-top">
                  <span className="record-label">{item.category} // REC_{item.id}</span>
                  <h3 className="record-title">{item.title}</h3>
                  <p className="record-description">{item.desc}</p>
                </div>
                <Link href={item.link} className="record-link">
                  View Full Record <span className="arrow">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="final-cta-block">
          <div className="cta-inner">
            <h2 className="cta-headline">Standardize your official reality.</h2>
            <Link href="/company/security#contact" className="cta-button-premium">
              Request Briefing
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

        @media (max-width: 768px) {
          .page-container {
            padding-left: 20px;
            padding-right: 20px;
          }
        }

        .archive-hero {
          padding-top: 180px; /* Strong spacing from navbar */
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

        .archive-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          padding-top: 40px;
          border-top: 1px solid rgba(0,0,0,0.06);
        }

        .meta-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .meta-label {
          font-size: 0.65rem;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: rgba(10,10,10,0.3);
        }

        .meta-value {
          font-size: 0.9rem;
          font-weight: 600;
          color: #000;
        }

        /* RECORDS GRID */
        .records-section {
          padding: 80px 0 120px;
        }

        .records-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 32px;
        }

        @media (max-width: 900px) {
          .records-grid {
            grid-template-columns: 1fr;
          }
        }

        .record-card {
          background: #fff;
          border: 1px solid rgba(10,10,10,0.08);
          border-radius: 2px; /* Official sharp corners or very slight round */
          padding: 48px;
          min-height: 320px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .record-card:hover {
          border-color: rgba(10,10,10,1);
          transform: translateY(-4px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.05);
        }

        .record-label {
          display: block;
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: rgba(10,10,10,0.4);
          margin-bottom: 24px;
          font-weight: 700;
        }

        .record-title {
          font-size: 2rem;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 20px;
          font-weight: 500;
          font-family: var(--font-outfit), sans-serif;
        }

        .record-description {
          font-size: 1rem;
          line-height: 1.6;
          color: rgba(10,10,10,0.6);
          margin-bottom: 32px;
          font-weight: 300;
        }

        .record-link {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-weight: 700;
          text-decoration: none;
          color: #0a0a0a;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: 0.3s;
        }

        .record-link .arrow {
          transition: transform 0.3s;
        }

        .record-card:hover .record-link .arrow {
          transform: translate(3px, -3px);
        }

        /* FINAL CTA */
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

export default CaseStudiesUI;
