'use client';

import React from 'react';

const ECTCUI = () => {
   return (
      <main className="ectc-page bg-white text-black text-left">
         {/* 1. HERO SECTION */}
         <section className="hero-section text-left border-b">
            <div className="container">
               <span className="eyebrow">Judicial Integrity Layer</span>
               <h1 className="hero-title white">E-CTC</h1>
               <p className="hero-desc muted">
                  Electronic Case Tracking & Coordination. <br className="desktop-only" />
                  A structured bridge between investigation, prosecution, and court readiness.
               </p>

               <div className="hero-visual">
                  <figure className="image-placeholder">
                     <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2000" alt="Case Workflow Surface" className="img-box" />
                     <figcaption>Case Workflow Surface</figcaption>
                  </figure>
               </div>
            </div>
         </section>

         {/* 2. CORE CAPABILITIES */}
         <section className="capabilities-section text-left">
            <div className="container">
               <h2 className="section-title">One procedural record <br /> across the case lifecycle</h2>
               <div className="cap-grid">
                  <div className="cap-card">
                     <h3>Investigation Workflow Discipline</h3>
                     <p>Track case progression from FIR-linked initiation through charge-sheet preparation with structured procedural states and deadline controls.</p>
                  </div>
                  <div className="cap-card">
                     <h3>Prosecution Coordination</h3>
                     <p>Create a traceable handoff between investigating officers, supervisory review, and legal teams before court submission.</p>
                  </div>
                  <div className="cap-card">
                     <h3>Judicial-Ready Outputs</h3>
                     <p>Standardize document preparation, export structures, and submission-ready case records aligned with downstream judicial workflows.</p>
                  </div>
                  <div className="cap-card">
                     <h3>Case Health Visibility</h3>
                     <p>Identify pendency, missing documents, stalled dependencies, and approaching filing risks before they become procedural failures.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* 3. OPERATIONAL CHANGES */}
         <section className="operational-section border-t align-left">
            <div className="container text-left">
               <h2 className="section-title small">What E-CTC changes operationally</h2>
               <div className="outcome-grid">
                  <div className="outcome-card">
                     <span className="o-label">Clarity</span>
                     <h4>Fewer procedural blind spots</h4>
                     <p>Missing documents, unresolved dependencies, and delayed transitions become visible earlier in the investigation cycle.</p>
                  </div>
                  <div className="outcome-card">
                     <span className="o-label">Continuity</span>
                     <h4>Stronger investigation-to-prosecution continuity</h4>
                     <p>Case context remains structured across handoffs instead of fragmenting across disconnected files and departments.</p>
                  </div>
                  <div className="outcome-card">
                     <span className="o-label">Accountability</span>
                     <h4>More accountable case movement</h4>
                     <p>Supervisory teams gain a clearer view of progress, pendency, and deadline discipline across the entire unit.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* 4. WHY THIS MATTERS */}
         <section className="matters-section bg-black text-white text-left">
            <div className="container">
               <div className="matters-intro">
                  <h2 className="section-title white">Why this matters in practice</h2>
                  <p className="matters-desc">
                     In many systems, case coordination breaks between investigation, documentation, prosecution, and filing. E-CTC reduces that fragmentation by treating the case as a single procedural record.
                  </p>
               </div>
               <div className="matters-grid">
                  <div className="m-card">
                     <span className="m-num">01</span>
                     <h4>Investigation</h4>
                     <p>Ensures that every step follows procedural norms and creates a complete record for review.</p>
                  </div>
                  <div className="m-card">
                     <span className="m-num">02</span>
                     <h4>Supervisory Review</h4>
                     <p>Allows supervisors to monitor case health and identify delays before they affect judicial outcomes.</p>
                  </div>
                  <div className="m-card">
                     <span className="m-num">03</span>
                     <h4>Prosecution Handoff</h4>
                     <p>Provides legal teams with a structured, queryable evidence record for court readiness.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* 5. TRUST / INTEGRATION */}
         <section className="trust-section bg-white text-black text-left">
            <div className="container border-b">
               <h2 className="section-label">Built for procedural trust</h2>
               <div className="trust-points">
                  <div className="t-point">
                     <span className="t-icon">/</span>
                     <p>Role-based access and supervisory permissions</p>
                  </div>
                  <div className="t-point">
                     <span className="t-icon">/</span>
                     <p>Auditability across case movement and edits</p>
                  </div>
                  <div className="t-point">
                     <span className="t-icon">/</span>
                     <p>Structured document chain and traceability</p>
                  </div>
                  <div className="t-point">
                     <span className="t-icon">/</span>
                     <p>Integration-ready exports for official systems</p>
                  </div>
               </div>
            </div>
         </section>

         {/* 6. FINAL CTA WITH FORM */}
         <section className="cta-section bg-white text-black text-left">
            <div className="container grid-2 align-bottom">
               <div>
                  <h2 className="cta-title">Request a workflow briefing</h2>
                  <p className="cta-desc">Discuss how E-CTC can support structured case coordination, deadline discipline, and prosecution readiness.</p>
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
         </section>

         <style jsx>{`
        .ectc-page { font-family: sans-serif; color: #000; background: #fff; overflow-x: hidden; width: 100%; }
        .text-left { text-align: left; }
        .container { max-width: 1320px; margin: 0 auto; padding: 0 2rem; width: 100%; }
        
        .hero-section { padding: 140px 0 80px; background: #000; color: #fff; border-bottom: 1px solid #000; }
        .eyebrow { font-size: 0.75rem; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; color: #888; margin-bottom: 1.5rem; display: block; }
        .hero-title { font-size: 4rem; line-height: 1.1; margin-bottom: 1.5rem; font-weight: normal; color: #fff; }
        .hero-desc { font-size: 1.15rem; max-width: 750px; margin-bottom: 3rem; font-weight: normal; line-height: 1.5; color: #ccc; }
        
        .image-placeholder { margin: 0; display: flex; flex-direction: column; align-items: stretch; justify-content: center; width: 100%;  padding: 1rem; background: #fff;  border-radius: 16px; overflow: hidden; border: none;}
        .img-box { width: 100%; height: 250px; background: #f0f0f0; display: block; object-fit: cover; border-radius: 12px; border: none; }
        .image-placeholder figcaption { margin-top: 1rem; font-size: 0.75rem; color: #000; text-transform: uppercase; letter-spacing: 1px; text-align: center; font-weight: bold; }

        .capabilities-section { padding: 80px 0; }
        .section-title { font-size: 3rem; margin-bottom: 4rem; line-height: 1.1; font-weight: normal; }
        .section-title.small { font-size: 2.5rem; }
        .cap-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 3rem; }
        .cap-card { border: 1px solid transparent; padding: 2rem; background: #fff; }
        .cap-card h3 { font-size: 1.4rem; font-weight: bold; margin-bottom: 1rem; }
        .cap-card p { font-size: 1rem; color: #000; line-height: 1.6; }

        .operational-section { padding: 80px 0; border-top: 1px solid #000; }
        .outcome-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .outcome-card { padding: 2rem; border: 1px solid transparent; background: #fff; }
        .o-label { font-size: 0.75rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #000; display: block; margin-bottom: 1.5rem; }
        .outcome-card h4 { font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem; }
        .outcome-card p { font-size: 1rem; color: #000; line-height: 1.5; }

        .matters-section { padding: 100px 0; background: #000; color: #fff; }
        .matters-intro { max-width: 800px; margin-bottom: 5rem; }
        .section-title.white { color: #fff; }
        .matters-desc { font-size: 1.15rem; color: #ccc; line-height: 1.5; }
        .matters-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
        .m-card { padding: 2.5rem; border: 1px solid #fff; background: #000; }
        .m-num { font-size: 0.75rem; font-weight: bold; color: #fff; display: block; margin-bottom: 1rem; }
        .m-card h4 { font-size: 1.2rem; margin-bottom: 1rem; color: #fff; font-weight: bold; }
        .m-card p { font-size: 1rem; color: #ccc; line-height: 1.5; }

        .trust-section { padding: 80px 0; }
        .border-b { border-bottom: 1px solid #000; padding-bottom: 4rem; }
        .section-label { font-size: 0.85rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #000; margin-bottom: 3rem; display: block; }
        .trust-points { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; }
        .t-point { display: flex; gap: 1rem; align-items: flex-start; }
        .t-icon { color: #000; font-weight: bold; }
        .t-point p { font-size: 1.1rem; color: #000; font-weight: bold; line-height: 1.4; }

        /* CTA WITH FORM */
        .cta-section { padding: 120px 0; background: #fff; color: #000; border-top: 1px solid #eee; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
        .align-bottom { align-items: end; }
        .cta-title { font-size: 3rem; margin-bottom: 1.5rem; font-weight: bold; letter-spacing: -1.5px; }
        .cta-desc { font-size: 1.2rem; color: #666; max-width: 500px; line-height: 1.5; }

        .form-container { width: 100%; max-width: 450px; margin-left: auto; background: #fafafa; padding: 3rem; color: #000; border-radius: 20px; border: 1px solid #eee; }
        .contact-form { display: flex; flex-direction: column; gap: 1.25rem; }
        .contact-form input[type="text"], .contact-form input[type="email"], .contact-form textarea { width: 100%; padding: 1rem; border: 1px solid #ddd; font-family: inherit; font-size: 0.95rem; outline: none; background: #fff; color: #000; border-radius: 8px; }
        .contact-form textarea { min-height: 120px; resize: none; }
        .submit-input { padding: 1.25rem 2rem; background: #000; color: #fff; border: none; font-weight: bold; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 2px; cursor: pointer; border-radius: 8px; transition: 0.3s; }
        .submit-input:hover { background: #333; }

        @media (max-width: 1024px) {
          .grid-2, .cap-grid, .matters-grid, .trust-points { grid-template-columns: 1fr; gap: 3rem; }
          .outcome-grid { grid-template-columns: 1fr 1fr; }
          .form-container { margin-left: 0; }
        }
        @media (max-width: 768px) {
          .hero-title { font-size: 2.5rem; }
          .section-title { font-size: 2rem; }
          .outcome-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      </main>
   );
};

export default ECTCUI;
