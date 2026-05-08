'use client';

import React from 'react';

const SecurityUI = () => {
  return (
    <main className="security-page bg-white text-black">
      {/* 1. HERO — SIMPLE, STRONG, SHORT */}
      <section className="hero-section bg-black text-white">
        <div className="container">
          <span className="eyebrow">Official Trust</span>
          <h1 className="hero-title">
            It is a deployment condition.
          </h1>
          <p className="hero-subtext">
            Vinkura systems are built for environments where data sensitivity, deployment boundaries, and operational accountability cannot be treated as afterthoughts.
          </p>
        </div>
      </section>

      {/* 2. MAIN TRUST SECTION */}
      <section className="info-section">
        <div className="container grid-2">
          <div className="trust-main">
            <h2 className="section-headline">Deployment trust matters as much as application trust.</h2>
            <p className="body-text">
              In official systems, trust depends on more than software quality. It depends on where systems run, who can access them, how actions are traced, and whether deployment boundaries align with operational risk.
            </p>
          </div>
          <div className="foundations-card">
            <h4 className="card-label">Security Foundations</h4>
            <ul className="slash-list">
              <li>Role-based access control (RBAC)</li>
              <li>Sovereign / on-prem deployment support</li>
              <li>Full auditability and traceability</li>
              <li>Controlled change management</li>
              <li>Data minimization and scoped access</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. TRUST ARCHITECTURE ROW */}
      <section className="architecture-section bg-[#fafafa] border-t border-b">
        <div className="container">
          <h2 className="section-label">Trust architecture</h2>
          <div className="arch-grid">
            <div className="arch-card">
              <h4>Access</h4>
              <p>Role-based permissions, least privilege, and clear responsibility boundaries.</p>
            </div>
            <div className="arch-card">
              <h4>Deployment</h4>
              <p>On-prem, state data center, sovereign cloud, or edge environments based on official constraints.</p>
            </div>
            <div className="arch-card">
              <h4>Auditability</h4>
              <p>Every meaningful action should be attributable, reviewable, and operationally defensible.</p>
            </div>
            <div className="arch-card">
              <h4>Data Boundaries</h4>
              <p>Data locality, scoped access, and deployment-aware processing designed for official trust.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPLIANCE POSTURE (SMALL NOTE) */}
      <section className="compliance-section">
        <div className="container">
          <div className="compliance-content">
            <h2 className="small-section-title">Compliance posture</h2>
            <p className="compliance-text">
              Vinkura systems are designed with controls aligned to official security, auditability, and data governance expectations. Where required, deployments can be configured to support data locality, restricted infrastructure boundaries, and compliance-oriented operational controls.
            </p>
            <div className="compliance-chips">
              <span>ISO 27001 aligned</span>
              <span>DPDP-oriented controls</span>
              <span>Sovereign-ready deployment</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5. TERMS & CONDITIONS FOR INSTITUTIONAL USE */}
      <section className="terms-section border-t">
        <div className="container">
          <h2 className="section-label">Official Terms & Conditions</h2>
          <div className="terms-grid">
            <div className="term-item">
              <h5>01. Deployment Sovereignty</h5>
              <p>Vinkura provides software intended for on-premise or sovereign cloud deployment. The purchasing organization maintains full ownership and control over the data generated and stored within their instance.</p>
            </div>
            <div className="term-item">
              <h5>02. Operational Continuity</h5>
              <p>While Vinkura provides tiered technical support, operational continuity remains a shared responsibility between the software layer and the official infrastructure hosting it.</p>
            </div>
            <div className="term-item">
              <h5>03. Use-Case Compliance</h5>
              <p>Our systems are built for administrative, public safety, and governance workflows. Use of Vinkura AI systems must align with regional legal frameworks and official oversight policies.</p>
            </div>
            <div className="term-item">
              <h5>04. Data Privacy (DPDP)</h5>
              <p>All Vinkura deployments prioritize data minimization and are aligned with the Digital Personal Data Protection (DPDP) landscape, ensuring records are scoped to specific roles and official needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA — STRONG, SIMPLE */}
      <section className="final-cta bg-black text-white">
        <div className="container grid-2 align-bottom">
          <div className="cta-head text-left">
            <h2 className="cta-title">Request a security briefing</h2>
            <p className="cta-desc">Discuss deployment architecture, access controls, and official trust requirements with our security architecture team.</p>
          </div>
          <div className="form-container">
             <form action="https://formsubmit.co/founder@vinkura.in" method="POST" className="contact-form">
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Work Email" required />
                <input type="text" name="organization" placeholder="Organization / Department" required />
                <textarea name="message" placeholder="Security / Deployment Requirement" required></textarea>
                <input type="submit" value="Request Security Briefing" className="submit-input" />
             </form>
          </div>
        </div>
      </section>

      <style jsx>{`
        .security-page { font-family: var(--font-body); overflow-x: hidden; }
        .container { max-width: 1320px; margin: 0 auto; padding: 0 4rem; width: 100%; }
        .text-left { text-align: left; }
        .align-bottom { align-items: end; }
        
        /* HERO */
        .hero-section { padding: 120px 0 80px; text-align: center; }
        .eyebrow { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 3px; color: #666; margin-bottom: 2rem; display: block; }
        .hero-title { font-family: var(--font-hero); font-size: clamp(2.5rem, 6vw, 4.5rem); line-height: 1; letter-spacing: -2.5px; margin-bottom: 2rem; }
        .hero-subtext { font-size: 1.25rem; color: #888; max-width: 700px; margin: 0 auto; line-height: 1.5; font-weight: 300; }

        /* MAIN TRUST */
        .info-section { padding: 100px 0; }
        .grid-2 { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 6rem; align-items: start; }
        .section-headline { font-family: var(--font-hero); font-size: 3rem; line-height: 1.1; letter-spacing: -2px; margin-bottom: 2rem; }
        .body-text { font-size: 1.15rem; color: #555; line-height: 1.6; }
        
        .foundations-card { padding: 4rem; background: #fafafa; border: 1px solid #eee; border-radius: 16px; }
        .card-label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; color: #999; margin-bottom: 3rem; font-weight: 700; }
        .slash-list { list-style: none; padding: 0; }
        .slash-list li { font-size: 1.1rem; margin-bottom: 1.5rem; color: #111; font-weight: 500; display: flex; }
        .slash-list li::before { content: "/"; color: #ccc; font-weight: 700; margin-right: 1.25rem; }

        /* TRUST ARCHITECTURE ROW */
        .architecture-section { padding: 100px 0; }
        .section-label { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 3px; color: #999; margin-bottom: 4rem; display: block; }
        .arch-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; }
        .arch-card h4 { font-family: var(--font-hero); font-size: 1.25rem; margin-bottom: 1.25rem; letter-spacing: -0.5px; }
        .arch-card p { font-size: 0.95rem; color: #666; line-height: 1.6; }

        /* COMPLIANCE NOTE */
        .compliance-section { padding: 80px 0; }
        .compliance-content { max-width: 900px; }
        .small-section-title { font-size: 1.5rem; font-family: var(--font-hero); margin-bottom: 1.5rem; letter-spacing: -0.5px; }
        .compliance-text { font-size: 1.05rem; color: #555; line-height: 1.6; margin-bottom: 2.5rem; }
        .compliance-chips { display: flex; gap: 1rem; flex-wrap: wrap; }
        .compliance-chips span { font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #999; padding: 0.6rem 1rem; border: 1px solid #eee; }

        /* FINAL CTA */
        .final-cta { padding: 120px 0; border-top: 1px solid #111; }
        .cta-title { font-family: var(--font-hero); font-size: 3rem; letter-spacing: -2px; margin-bottom: 1.5rem; }
        .cta-desc { font-size: 1.2rem; color: #888; max-width: 500px; line-height: 1.5; }
        
        .form-container { width: 100%; max-width: 450px; margin-left: auto; background: #fff; padding: 2rem; color: #000; border-radius: 16px; box-shadow: 0 30px 60px rgba(0,0,0,0.5); }
        .contact-form { display: flex; flex-direction: column; gap: 1rem; }
        .contact-form input[type="text"], .contact-form input[type="email"], .contact-form textarea { width: 100%; padding: 1rem; border: 1px solid #eee; font-family: inherit; font-size: 0.9rem; outline: none; background: #fdfdfd; border-radius: 8px; }
        .contact-form textarea { min-height: 120px; resize: none; }
        .submit-input { padding: 1rem 1.5rem; background: #000; color: #fff; border: none; font-weight: 700; text-transform: uppercase; font-size: 0.75rem; letter-spacing: 2px; cursor: pointer; border-radius: 8px; transition: 0.3s; }
        .submit-input:hover { background: #333; }

        .terms-section { padding: 100px 0; background: #fff; }
        .terms-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 4rem; }
        .term-item h5 { font-family: var(--font-hero); font-size: 1.15rem; margin-bottom: 1rem; color: #000; font-weight: 600; }
        .term-item p { font-size: 1rem; color: #666; line-height: 1.6; }

        @media (max-width: 1200px) {
          .grid-2 { grid-template-columns: 1fr; gap: 4rem; }
          .arch-grid { grid-template-columns: repeat(2, 1fr); }
          .form-container { margin-left: 0; }
        }
        @media (max-width: 768px) {
          .container { padding: 0 1.5rem; }
          .hero-section { padding: 80px 0 60px; }
          .hero-title { font-size: 2.25rem; }
          .hero-subtext { font-size: 1rem; }
          .info-section,
          .architecture-section,
          .terms-section,
          .compliance-section,
          .final-cta { padding: 64px 0; }
          .section-headline { font-size: 2rem; margin-bottom: 1.5rem; }
          .body-text,
          .compliance-text,
          .cta-desc { font-size: 0.98rem; }
          .section-label { margin-bottom: 2rem; }
          .foundations-card { padding: 2.5rem; }
          .card-label { margin-bottom: 2rem; }
          .slash-list li { font-size: 0.98rem; margin-bottom: 1rem; }
          .arch-grid { grid-template-columns: 1fr; }
          .arch-card { padding: 1.5rem; border: 1px solid #eee; border-radius: 14px; background: #fff; }
          .arch-card h4 { font-size: 1.1rem; }
          .terms-grid { grid-template-columns: 1fr; gap: 1.5rem; }
          .term-item h5 { font-size: 1rem; }
          .term-item p { font-size: 0.95rem; }
          .compliance-content { max-width: 100%; }
          .compliance-chips { gap: 0.75rem; }
          .compliance-chips span { width: 100%; text-align: center; }
          .final-cta .grid-2 { gap: 2rem; }
          .cta-title { font-size: 2rem; }
          .form-container { max-width: 100%; padding: 1.25rem; border-radius: 14px; }
          .contact-form input[type="text"],
          .contact-form input[type="email"],
          .contact-form textarea,
          .submit-input { font-size: 0.9rem; }
        }
      `}</style>
    </main>
  );
};

export default SecurityUI;
