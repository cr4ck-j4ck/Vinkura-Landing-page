'use client';

import React from 'react';

const ECTCUI = () => {
   return (
      <main className="ec-page">
         {/* 1. HERO SECTION */}
         <section className="ec-hero">
            <div className="ec-container">
               <span className="ec-eyebrow">Judicial Integrity Layer</span>
               <h1 className="ec-hero-title">E-CTC</h1>
               <p className="ec-hero-desc">
                  Electronic Case Tracking &amp; Coordination. <br className="ec-desktop-only" />
                  A structured bridge between investigation, prosecution, and court readiness.
               </p>

               <div className="ec-hero-visual">
                  <figure className="ec-image-placeholder">
                     <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2000" alt="Case Workflow Surface" className="ec-img-box" />
                     <figcaption>Case Workflow Surface</figcaption>
                  </figure>
               </div>
            </div>
         </section>

         {/* 2. CORE CAPABILITIES */}
         <section className="ec-capabilities">
            <div className="ec-container">
               <h2 className="ec-section-title">One procedural record <br /> across the case lifecycle</h2>
               <div className="ec-cap-grid">
                  <div className="ec-cap-card">
                     <h3>Investigation Workflow Discipline</h3>
                     <p>Track case progression from FIR-linked initiation through charge-sheet preparation with structured procedural states and deadline controls.</p>
                  </div>
                  <div className="ec-cap-card">
                     <h3>Prosecution Coordination</h3>
                     <p>Create a traceable handoff between investigating officers, supervisory review, and legal teams before court submission.</p>
                  </div>
                  <div className="ec-cap-card">
                     <h3>Judicial-Ready Outputs</h3>
                     <p>Standardize document preparation, export structures, and submission-ready case records aligned with downstream judicial workflows.</p>
                  </div>
                  <div className="ec-cap-card">
                     <h3>Case Health Visibility</h3>
                     <p>Identify pendency, missing documents, stalled dependencies, and approaching filing risks before they become procedural failures.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* 3. OPERATIONAL CHANGES */}
         <section className="ec-operational">
            <div className="ec-container">
               <h2 className="ec-section-title ec-small">What E-CTC changes operationally</h2>
               <div className="ec-outcome-grid">
                  <div className="ec-outcome-card">
                     <span className="ec-o-label">Clarity</span>
                     <h4>Fewer procedural blind spots</h4>
                     <p>Missing documents, unresolved dependencies, and delayed transitions become visible earlier in the investigation cycle.</p>
                  </div>
                  <div className="ec-outcome-card">
                     <span className="ec-o-label">Continuity</span>
                     <h4>Stronger investigation-to-prosecution continuity</h4>
                     <p>Case context remains structured across handoffs instead of fragmenting across disconnected files and departments.</p>
                  </div>
                  <div className="ec-outcome-card">
                     <span className="ec-o-label">Accountability</span>
                     <h4>More accountable case movement</h4>
                     <p>Supervisory teams gain a clearer view of progress, pendency, and deadline discipline across the entire unit.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* 4. WHY THIS MATTERS */}
         <section className="ec-matters">
            <div className="ec-container">
               <div className="ec-matters-intro">
                  <h2 className="ec-section-title ec-white">Why this matters in practice</h2>
                  <p className="ec-matters-desc">
                     In many systems, case coordination breaks between investigation, documentation, prosecution, and filing. E-CTC reduces that fragmentation by treating the case as a single procedural record.
                  </p>
               </div>
               <div className="ec-matters-grid">
                  <div className="ec-m-card">
                     <span className="ec-m-num">01</span>
                     <h4>Investigation</h4>
                     <p>Ensures that every step follows procedural norms and creates a complete record for review.</p>
                  </div>
                  <div className="ec-m-card">
                     <span className="ec-m-num">02</span>
                     <h4>Supervisory Review</h4>
                     <p>Allows supervisors to monitor case health and identify delays before they affect judicial outcomes.</p>
                  </div>
                  <div className="ec-m-card">
                     <span className="ec-m-num">03</span>
                     <h4>Prosecution Handoff</h4>
                     <p>Provides legal teams with a structured, queryable evidence record for court readiness.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* 5. TRUST / INTEGRATION */}
         <section className="ec-trust">
            <div className="ec-container ec-border-b">
               <h2 className="ec-section-label">Built for procedural trust</h2>
               <div className="ec-trust-points">
                  <div className="ec-t-point">
                     <span className="ec-t-icon">/</span>
                     <p>Role-based access and supervisory permissions</p>
                  </div>
                  <div className="ec-t-point">
                     <span className="ec-t-icon">/</span>
                     <p>Auditability across case movement and edits</p>
                  </div>
                  <div className="ec-t-point">
                     <span className="ec-t-icon">/</span>
                     <p>Structured document chain and traceability</p>
                  </div>
                  <div className="ec-t-point">
                     <span className="ec-t-icon">/</span>
                     <p>Integration-ready exports for official systems</p>
                  </div>
               </div>
            </div>
         </section>

         {/* 6. FINAL CTA WITH FORM */}
         <section className="ec-cta">
            <div className="ec-container ec-grid-2 ec-align-bottom">
               <div>
                  <h2 className="ec-cta-title">Request a workflow briefing</h2>
                  <p className="ec-cta-desc">Discuss how E-CTC can support structured case coordination, deadline discipline, and prosecution readiness.</p>
               </div>
               <div className="ec-form-wrap">
                  <form action="https://formsubmit.co/founder@vinkura.in" method="POST" className="ec-form">
                     <input type="text" name="name" placeholder="Name" required />
                     <input type="email" name="email" placeholder="Work Email" required />
                     <input type="text" name="organization" placeholder="Organization / Department" required />
                     <textarea name="usecase" placeholder="Brief use case" required></textarea>
                     <input type="submit" value="Submit Request" className="ec-submit" />
                  </form>
               </div>
            </div>
         </section>

         <style jsx>{`
            /* PAGE WRAPPER — no height/overflow-y that causes scroll conflicts */
            .ec-page {
               font-family: sans-serif;
               color: #000;
               background: #fff;
               overflow-x: hidden;
               width: 100%;
            }

            /* CONTAINER */
            .ec-container {
               max-width: 1320px;
               margin: 0 auto;
               padding: 0 2rem;
               width: 100%;
            }

            /* HERO */
            .ec-hero {
               padding: 140px 0 80px;
               background: #000;
               color: #fff;
               border-bottom: 1px solid #000;
            }
            .ec-eyebrow {
               font-size: 0.75rem;
               font-weight: bold;
               text-transform: uppercase;
               letter-spacing: 2px;
               color: #888;
               margin-bottom: 1.5rem;
               display: block;
            }
            .ec-hero-title {
               font-size: 4rem;
               line-height: 1.1;
               margin-bottom: 1.5rem;
               font-weight: normal;
               color: #fff;
            }
            .ec-hero-desc {
               font-size: 1.15rem;
               max-width: 750px;
               margin-bottom: 3rem;
               font-weight: normal;
               line-height: 1.5;
               color: #ccc;
            }
            .ec-hero-visual {
               width: 100%;
            }
            .ec-image-placeholder {
               margin: 0;
               display: flex;
               flex-direction: column;
               align-items: stretch;
               justify-content: center;
               width: 100%;
               padding: 1rem;
               background: #fff;
               border-radius: 16px;
               overflow: hidden;
               border: none;
            }
            .ec-img-box {
               width: 100%;
               height: 250px;
               background: #f0f0f0;
               display: block;
               object-fit: cover;
               border-radius: 12px;
               border: none;
            }
            .ec-image-placeholder figcaption {
               margin-top: 1rem;
               font-size: 0.75rem;
               color: #000;
               text-transform: uppercase;
               letter-spacing: 1px;
               text-align: center;
               font-weight: bold;
            }
            .ec-desktop-only {
               display: inline;
            }

            /* CAPABILITIES SECTION */
            .ec-capabilities {
               padding: 80px 0;
               background: #fff;
            }
            .ec-section-title {
               font-size: 3rem;
               margin-bottom: 4rem;
               line-height: 1.1;
               font-weight: normal;
               color: #000;
            }
            .ec-section-title.ec-small {
               font-size: 2.5rem;
            }
            .ec-section-title.ec-white {
               color: #fff;
            }
            .ec-cap-grid {
               display: grid;
               grid-template-columns: repeat(2, 1fr);
               gap: 3rem;
            }
            .ec-cap-card {
               border: 1px solid transparent;
               padding: 2rem;
               background: #fff;
            }
            .ec-cap-card h3 {
               font-size: 1.4rem;
               font-weight: bold;
               margin-bottom: 1rem;
               color: #000;
            }
            .ec-cap-card p {
               font-size: 1rem;
               color: #000;
               line-height: 1.6;
               margin: 0;
            }

            /* OPERATIONAL SECTION */
            .ec-operational {
               padding: 80px 0;
               border-top: 1px solid #000;
               background: #fff;
            }
            .ec-outcome-grid {
               display: grid;
               grid-template-columns: repeat(3, 1fr);
               gap: 1.5rem;
            }
            .ec-outcome-card {
               padding: 2rem;
               border: 1px solid transparent;
               background: #fff;
            }
            .ec-o-label {
               font-size: 0.75rem;
               font-weight: bold;
               text-transform: uppercase;
               letter-spacing: 1px;
               color: #000;
               display: block;
               margin-bottom: 1.5rem;
            }
            .ec-outcome-card h4 {
               font-size: 1.25rem;
               font-weight: bold;
               margin-bottom: 1rem;
               color: #000;
            }
            .ec-outcome-card p {
               font-size: 1rem;
               color: #000;
               line-height: 1.5;
               margin: 0;
            }

            /* MATTERS SECTION */
            .ec-matters {
               padding: 100px 0;
               background: #000;
               color: #fff;
            }
            .ec-matters-intro {
               max-width: 800px;
               margin-bottom: 5rem;
            }
            .ec-matters-desc {
               font-size: 1.15rem;
               color: #ccc;
               line-height: 1.5;
               margin: 0;
            }
            .ec-matters-grid {
               display: grid;
               grid-template-columns: repeat(3, 1fr);
               gap: 2rem;
            }
            .ec-m-card {
               padding: 2.5rem;
               border: 1px solid #fff;
               background: #000;
            }
            .ec-m-num {
               font-size: 0.75rem;
               font-weight: bold;
               color: #fff;
               display: block;
               margin-bottom: 1rem;
            }
            .ec-m-card h4 {
               font-size: 1.2rem;
               margin-bottom: 1rem;
               color: #fff;
               font-weight: bold;
            }
            .ec-m-card p {
               font-size: 1rem;
               color: #ccc;
               line-height: 1.5;
               margin: 0;
            }

            /* TRUST SECTION */
            .ec-trust {
               padding: 80px 0;
               background: #fff;
            }
            .ec-border-b {
               border-bottom: 1px solid #000;
               padding-bottom: 4rem;
            }
            .ec-section-label {
               font-size: 0.85rem;
               font-weight: bold;
               text-transform: uppercase;
               letter-spacing: 1px;
               color: #000;
               margin-bottom: 3rem;
               display: block;
            }
            .ec-trust-points {
               display: grid;
               grid-template-columns: repeat(2, 1fr);
               gap: 2rem;
            }
            .ec-t-point {
               display: flex;
               gap: 1rem;
               align-items: flex-start;
            }
            .ec-t-icon {
               color: #000;
               font-weight: bold;
               flex-shrink: 0;
            }
            .ec-t-point p {
               font-size: 1.1rem;
               color: #000;
               font-weight: bold;
               line-height: 1.4;
               margin: 0;
            }

            /* CTA SECTION WITH FORM — unique prefix avoids global .cta-section collision */
            .ec-cta {
               padding: 120px 0;
               background: #fff;
               color: #000;
               border-top: 1px solid #eee;
            }
            .ec-grid-2 {
               display: grid;
               grid-template-columns: 1fr 1fr;
               gap: 4rem;
               align-items: start;
            }
            .ec-align-bottom {
               align-items: end;
            }
            .ec-cta-title {
               font-size: 3rem;
               margin-bottom: 1.5rem;
               font-weight: bold;
               letter-spacing: -1.5px;
               color: #000;
               line-height: 1.1;
            }
            .ec-cta-desc {
               font-size: 1.2rem;
               color: #666;
               max-width: 500px;
               line-height: 1.5;
               margin: 0;
            }
            .ec-form-wrap {
               width: 100%;
               max-width: 450px;
               margin-left: auto;
               background: #fafafa;
               padding: 3rem;
               color: #000;
               border-radius: 20px;
               border: 1px solid #eee;
            }
            .ec-form {
               display: flex;
               flex-direction: column;
               gap: 1.25rem;
            }
            .ec-form input[type="text"],
            .ec-form input[type="email"],
            .ec-form textarea {
               width: 100%;
               padding: 1rem;
               border: 1px solid #ddd;
               font-family: inherit;
               font-size: 0.95rem;
               outline: none;
               background: #fff;
               color: #000;
               border-radius: 8px;
            }
            .ec-form input:focus,
            .ec-form textarea:focus {
               border-color: #bbb;
            }
            .ec-form textarea {
               min-height: 120px;
               resize: none;
            }
            .ec-submit {
               padding: 1.25rem 2rem;
               background: #000;
               color: #fff;
               border: none;
               font-weight: bold;
               text-transform: uppercase;
               font-size: 0.8rem;
               letter-spacing: 2px;
               cursor: pointer;
               border-radius: 8px;
               transition: background 0.3s;
            }
            .ec-submit:hover {
               background: #333;
            }

            /* RESPONSIVE */
            @media (max-width: 1024px) {
               .ec-grid-2,
               .ec-cap-grid,
               .ec-matters-grid,
               .ec-trust-points {
                  grid-template-columns: 1fr;
                  gap: 3rem;
               }
               .ec-outcome-grid {
                  grid-template-columns: 1fr 1fr;
               }
               .ec-form-wrap {
                  margin-left: 0;
                  max-width: none;
               }
            }
            @media (max-width: 768px) {
               .ec-hero {
                  padding: 100px 0 56px;
               }
               .ec-hero-title {
                  font-size: 2.5rem;
               }
               .ec-section-title {
                  font-size: 2rem;
               }
               .ec-outcome-grid {
                  grid-template-columns: 1fr;
               }
               .ec-matters {
                  padding: 64px 0;
               }
               .ec-cta {
                  padding: 64px 0;
               }
               .ec-cta-title {
                  font-size: 2rem;
               }
               .ec-container {
                  padding: 0 1.25rem;
               }
               .ec-form-wrap {
                  padding: 1.25rem;
                  border-radius: 14px;
               }
               .ec-desktop-only {
                  display: none;
               }
            }
         `}</style>
      </main>
   );
};

export default ECTCUI;
