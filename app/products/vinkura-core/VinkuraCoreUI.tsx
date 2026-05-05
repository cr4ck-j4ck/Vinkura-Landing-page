'use client';

import React from 'react';

const VinkuraCoreUI = () => {
  return (
    <main className="vinkura-core-page bg-white">
      {/* SECTION 1 — HERO */}
      <section className="hero-section text-left">
        <div className="container">
          <h1 className="hero-title animate-fade-in">
            The operational backbone<br />
            <span className="muted-grey">for India's public systems.</span>
          </h1>
          <p className="hero-subtext">
            Vinkura Core unifies fragmented records, workflows, and operational signals into a shared operating context for institutions that carry real-world responsibility.
          </p>
          <p className="micro-trust">
            Built for departments that need control, accountability, and real-world execution.
          </p>
        </div>
      </section>

      {/* SECTION 2 — HERO VISUAL */}
      <section className="visual-section bg-white text-left">
        <div className="container">
          <span className="label">Platform Overview</span>
          <h2 className="section-title">
            One operational layer across <br />fragmented institutions.
          </h2>
          <p className="body-copy">
            Vinkura Core brings together data, documents, and workflows—from <strong>DDMS</strong> to <strong>E-Maalkhana</strong>—into a single unified environment designed for official accountability.
          </p>
          <div className="product-image-box">
            <figure className="image-placeholder">
              <img src="/CORE.png" alt="Interface Preview" className="img-box" />
            </figure>
          </div>
          <p className="caption">
            Unified workflows. Unified records. Unified accountability.
          </p>
        </div>
      </section>

      {/* SECTION 3 — FEATURE BLOCK 1 */}
      <section className="feature-block bg-white border-t text-left">
        <div className="container grid-2">
          <div className="feature-text">
            <span className="eyebrow">Workflow Infrastructure</span>
            <h2 className="feature-headline">
              Digitize and orchestrate mission-critical workflows
            </h2>
            <p className="feature-body">
              Replace scattered spreadsheets, manual registers, fragmented portals, and disconnected approvals with configurable workflows that mirror how your teams actually operate.
            </p>
            <ul className="feature-bullets">
              {[
                "Build multi-step approval flows",
                "Configure role-based task routing",
                "Track requests, cases, files, and assets",
                "Automate escalations and reminders",
                "Standardize processes",
                "Maintain full auditability"
              ].map((item, i) => (
                <li key={i}><span className="slash">/</span> {item}</li>
              ))}
            </ul>
            <p className="microline">
              From TA/DA to HRMS, evidence handling to citizen service requests.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — FEATURE BLOCK 2 */}
      <section className="feature-block bg-white border-t text-left">
        <div className="container grid-2">
          <div className="feature-visual order-mobile-2">
          </div>
          <div className="feature-text order-mobile-1">
            <span className="eyebrow">Operational Visibility</span>
            <h2 className="feature-headline">
              Operate with confidence across teams and departments
            </h2>
            <p className="feature-body">
              Give leadership, supervisors, and operational teams a live view of what is pending, what is blocked, what is delayed, and what requires intervention.
            </p>
            <ul className="feature-bullets">
              {[
                "Real-time workflow status dashboards",
                "SLA and deadline tracking",
                "Unit-wise performance visibility",
                "Escalation and bottleneck detection",
                "Live workload distribution",
                "Audit-ready activity history"
              ].map((item, i) => (
                <li key={i}><span className="slash">/</span> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 7 — CAPABILITIES */}
      <section className="capabilities-section bg-white text-black text-left">
        <div className="container">
          <h2 className="section-headline">
            Purpose-built for operational complexity
          </h2>
          <div className="cap-grid">
            <div>
              <h4 className="cap-title">Data & Records</h4>
              <ul className="cap-list">
                <li>Unified data model</li>
                <li>Structured + unstructured</li>
                <li>Document ingestion</li>
                <li>Metadata extraction</li>
              </ul>
            </div>
            <div>
              <h4 className="cap-title">Workflow & Process</h4>
              <ul className="cap-list">
                <li>Configurable builder</li>
                <li>Role-based approvals</li>
                <li>SLA and escalation</li>
                <li>Task routing</li>
              </ul>
            </div>
            <div>
              <h4 className="cap-title">Security & Governance</h4>
              <ul className="cap-list">
                <li>Access control</li>
                <li>Audit logs</li>
                <li>Activity traceability</li>
                <li>Policy-driven</li>
              </ul>
            </div>
            <div>
              <h4 className="cap-title">Deployment</h4>
              <ul className="cap-list">
                <li>Cloud deployment</li>
                <li>On-prem readiness</li>
                <li>Hybrid architecture</li>
                <li>Edge-friendly</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — FINAL CTA WITH FORM */}
      <section className="final-cta bg-black text-white text-left">
        <div className="container">
          <div className="grid-2 align-bottom">
            <div>
              <h2 className="cta-title">
                Build the operational backbone
              </h2>
              <p className="cta-sub">Talk to Vinkura about modernizing your official infrastructure.</p>
            </div>
            <div className="form-container">
              <form action="https://formsubmit.co/founder@vinkura.in" method="POST" className="contact-form">
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Work Email" required />
                <input type="text" name="organization" placeholder="Organization / Department" required />
                <textarea name="usecase" placeholder="Brief use case" required></textarea>
                <input type="submit" value="Submit Request" className="submit-input" />
              </form>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .vinkura-core-page { font-family: sans-serif; overflow-x: hidden; width: 100%; color: #000; background: #fff; }
        .container { max-width: 1320px; margin: 0 auto; padding: 0 4rem; width: 100%; }
        .text-left { text-align: left; }
        .bg-white { background: #fff; }
        
        /* Hero Section */
        .hero-section {
          padding-top: 140px;
          padding-bottom: 80px;
          background: #fff;
          border-bottom: 1px solid #000;
        }
        .hero-title {
          font-size: 4rem;
          line-height: 1.1;
          font-weight: normal;
          margin-bottom: 2rem;
          color: #000;
        }
        .muted-grey { color: #888; }
        .hero-subtext {
          font-size: 1.25rem;
          color: #000;
          max-width: 800px;
          margin-bottom: 3rem;
          font-weight: normal;
          line-height: 1.5;
        }
        .micro-trust {
          font-size: 0.75rem;
          color: #000;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: bold;
        }

        /* Visual Section */
        .visual-section { padding: 80px 0; color: #000; border-bottom: 1px solid #000; }
        .label {
          display: block;
          font-size: 0.75rem;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #000;
          margin-bottom: 1.5rem;
        }
        .section-title {
          font-size: 3rem;
          font-weight: normal;
          margin-bottom: 2rem;
          line-height: 1.1;
        }
        .body-copy {
          font-size: 1.15rem;
          color: #000;
          max-width: 800px;
          margin-bottom: 4rem;
          line-height: 1.6;
        }
        .caption { font-size: 0.85rem; color: #000; margin-top: 1.5rem; font-weight: bold; }

        /* Feature Blocks */
        .feature-block { padding: 80px 0; color: #000; border-bottom: 1px solid #000; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
        .align-bottom { align-items: end; }
        .eyebrow {
          display: block;
          font-size: 0.75rem;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #000;
          margin-bottom: 1.5rem;
        }
        .feature-headline {
          font-size: 2.5rem;
          font-weight: normal;
          line-height: 1.1;
          margin-bottom: 2rem;
        }
        .feature-body { font-size: 1.1rem; color: #000; line-height: 1.6; margin-bottom: 2.5rem; }
        .feature-bullets { list-style: none; padding: 0; }
        .feature-bullets li {
          font-size: 1rem;
          color: #000;
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .slash { font-weight: bold; color: #000; }
        .microline { font-size: 0.9rem; margin-top: 2rem; color: #000; font-weight: bold; }

        /* Capabilities */
        .capabilities-section { padding: 80px 0; color: #000; border-bottom: 1px solid #000; }
        .section-headline {
           font-size: 3rem;
           margin-bottom: 4rem;
        }
        .cap-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 3rem; }
        .cap-title {
          font-size: 0.85rem;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
        }
        .cap-list { list-style: none; padding: 0; }
        .cap-list li { font-size: 0.9rem; color: #000; margin-bottom: 0.75rem; }

        /* Final CTA */
        .final-cta { padding: 100px 0; background: #000; color: #fff; }
        .cta-title { font-size: 3rem; margin-bottom: 1.5rem; }
        .cta-sub { font-size: 1.15rem; color: #fff; margin-bottom: 3rem; line-height: 1.5; max-width: 500px; }
        
        /* IMAGE PLACEHOLDERS */
        .feature-visual, .product-image-box { width: 100%; border: 1px solid transparent; background: #fff; padding: 1rem; }
        .image-placeholder { margin: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; }
        .img-box { width: 100%; height: 250px; background: #f0f0f0; display: block; object-fit: cover; border-radius: 12px; border: none; }
        .image-placeholder figcaption { margin-top: 1rem; font-size: 0.75rem; color: #000; text-transform: uppercase; letter-spacing: 1px; text-align: center; font-weight: bold; }

        /* FORM */
        .form-container { width: 100%; max-width: 450px; margin-left: auto; background: #fff; padding: 2rem; color: #000; border: 1px solid transparent; }
        .contact-form { display: flex; flex-direction: column; gap: 1rem; }
        .contact-form input[type="text"], .contact-form input[type="email"], .contact-form textarea { width: 100%; padding: 0.75rem; border: 1px solid transparent; font-family: sans-serif; font-size: 0.9rem; outline: none; background: #fff; color: #000; }
        .contact-form textarea { min-height: 100px; resize: none; }
        .submit-input { padding: 0.75rem 1.5rem; background: #000; color: #fff; border: 1px solid transparent; font-weight: bold; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px; cursor: pointer; }
        .submit-input:hover { background: #333; }

        @media (max-width: 1024px) {
          .container { padding: 0 2rem; }
          .hero-title { font-size: 3.25rem; }
          .section-title, .feature-headline, .section-headline, .cta-title { font-size: 2.5rem; }
          .grid-2 { grid-template-columns: 1fr; gap: 4rem; }
          .cap-grid { grid-template-columns: 1fr 1fr; }
          .form-container { margin-left: 0; }
        }
        
        @media (max-width: 768px) {
          .container { padding: 0 1.25rem; }
          .hero-title { font-size: 2.5rem; word-break: break-word; }
          .hero-subtext { font-size: 1.1rem; }
          .section-title { font-size: 2rem; }
          .cap-grid { grid-template-columns: 1fr; }
          .hero-section { padding-top: 140px; }
          .feature-visual.order-mobile-2 { order: 2; }
          .feature-text.order-mobile-1 { order: 1; }
        }
      `}</style>
    </main>
  );
};

export default VinkuraCoreUI;
