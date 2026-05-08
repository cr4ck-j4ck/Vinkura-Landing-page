'use client';

import React from 'react';

const OrbitUI = () => {
   return (
      <main className="o-page">
         {/* 1. HERO SECTION */}
         <section className="o-hero">
            <div className="o-container">
               <span className="o-eyebrow">Deployment &amp; Orchestration</span>
               <h1 className="o-hero-title">Orbit</h1>
               <p className="o-hero-sub">
                  The operational layer for sovereign deployment, edge coordination,
                  and controlled execution across distributed official environments.
               </p>
            </div>
         </section>

         {/* 2. OPERATIONAL CONTROL */}
         <section className="o-section o-border-b">
            <div className="o-container">
               <h2 className="o-headline">Coordinate distributed operations with official control</h2>
               <div className="o-grid-3">
                  <div className="o-plane-card">
                     <span className="o-plane-label">Central</span>
                     <h3 className="o-plane-title">Data Plane</h3>
                     <p className="o-plane-text">Strategic aggregation and official memory. Orbit handles how data moves from individual units to central command centers while respecting residency rules.</p>
                  </div>
                  <div className="o-plane-card">
                     <span className="o-plane-label">Governance</span>
                     <h3 className="o-plane-title">Policy / Logic Plane</h3>
                     <p className="o-plane-text">Define rules, models, and operational logic centrally and deploy them across the fleet with granular version control and rollback capability.</p>
                  </div>
                  <div className="o-plane-card">
                     <span className="o-plane-label">Tactical</span>
                     <h3 className="o-plane-title">Execution Edge</h3>
                     <p className="o-plane-text">The point of action. Orbit ensures that software remains operational, responsive, and secure at the tactical edge—even under zero connectivity.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* 3. BUILT FOR REALITY */}
         <section className="o-section o-border-b">
            <div className="o-container">
               <h3 className="o-sub-headline">Built for deployment reality</h3>
               <div className="o-grid-2">
                  {[
                     { title: "Edge Security Foundation", desc: "Hardened OS and container layers designed for official integrity in multi-tenant or field-exposed environments." },
                     { title: "Remote Policy Sync", desc: "Orchestrate real-time updates and logic rollouts across thousands of nodes from a unified control interface." },
                     { title: "Air-Gapped Operation", desc: "Full mission-critical functionality in disconnected zones with intelligent reconciliation once connectivity is restored." },
                     { title: "Sovereign Boundaries", desc: "Strict environment-aware processing models that ensure data never crosses jurisdictional or physical boundaries." }
                  ].map((item, i) => (
                     <div key={i} className="o-card">
                        <h4 className="o-card-title">{item.title}</h4>
                        <p className="o-card-text">{item.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* 4. ORCHESTRATION LAYER */}
         <section className="o-dark-section">
            <div className="o-container">
               <h2 className="o-headline o-white">One control layer across distributed environments</h2>
               <div className="o-grid-3 o-dark-grid">
                  <div className="o-orch-card">
                     <strong className="o-orch-title">Unified Control Plane</strong>
                     <p className="o-orch-text">Manage thousands of distributed nodes, from district headquarters to field units, from a single secure dashboard.</p>
                  </div>
                  <div className="o-orch-card">
                     <strong className="o-orch-title">Controlled Rollouts</strong>
                     <p className="o-orch-text">Phased deployment of new logic and updates, allowing for validation before global synchronization.</p>
                  </div>
                  <div className="o-orch-card">
                     <strong className="o-orch-title">Policy Consistency</strong>
                     <p className="o-orch-text">Ensure identical official rules and data governance policies are enforced across all geographies simultaneously.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* 5. TECHNICAL ARCHITECTURE */}
         <section className="o-section o-border-b o-light">
            <div className="o-container">
               <span className="o-section-label">Technical Architecture &amp; Flow</span>
               <div className="o-grid-4">
                  <div className="o-flow-card">
                     <span className="o-step">01</span>
                     <h4 className="o-flow-title">Policy Definition</h4>
                     <p className="o-flow-text">Operational logic, data boundaries, and access rules are defined as versioned code (Policy-as-Code) at the official headquarters.</p>
                  </div>
                  <div className="o-flow-card">
                     <span className="o-step">02</span>
                     <h4 className="o-flow-title">Edge Reconciliation</h4>
                     <p className="o-flow-text">Orbit nodes at the tactical edge continuously reconcile their local state with the central policy, ensuring compliance even after offline periods.</p>
                  </div>
                  <div className="o-flow-card">
                     <span className="o-step">03</span>
                     <h4 className="o-flow-title">Secure Execution</h4>
                     <p className="o-flow-text">Applications run in hardened, deployment-aware containers that only execute under validated environmental and security conditions.</p>
                  </div>
                  <div className="o-flow-card">
                     <span className="o-step">04</span>
                     <h4 className="o-flow-title">Telemetry &amp; Audit</h4>
                     <p className="o-flow-text">Every operational node reports back health, security posture, and execution logs for central supervisory oversight and forensic audit.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* 6. OPERATIONAL GOVERNANCE */}
         <section className="o-section o-border-b">
            <div className="o-container">
               <span className="o-section-label">Operational Governance</span>
               <div className="o-gov-grid">
                  <div className="o-gov-item">
                     <span className="o-gov-icon">/</span>
                     <div>
                        <strong className="o-gov-title">Infrastructure Agnostic</strong>
                        <p className="o-gov-text">Deploy across state data centers, sovereign clouds, district HQs, or ruggedized field units.</p>
                     </div>
                  </div>
                  <div className="o-gov-item">
                     <span className="o-gov-icon">/</span>
                     <div>
                        <strong className="o-gov-title">Logic Synchronization</strong>
                        <p className="o-gov-text">Automated distribution of updated operational models and procedural rules across the fleet.</p>
                     </div>
                  </div>
                  <div className="o-gov-item">
                     <span className="o-gov-icon">/</span>
                     <div>
                        <strong className="o-gov-title">State Management</strong>
                        <p className="o-gov-text">Official control over software versions, ensuring uniformity across all operational nodes.</p>
                     </div>
                  </div>
                  <div className="o-gov-item">
                     <span className="o-gov-icon">/</span>
                     <div>
                        <strong className="o-gov-title">Integrity Monitoring</strong>
                        <p className="o-gov-text">Continuous verification of node health and data residency under constrained environment conditions.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* 7. WHY IT MATTERS */}
         <section className="o-section o-border-b">
            <div className="o-container">
               <div className="o-matters-box">
                  <h2 className="o-sub-headline">Sovereign Deployment Control</h2>
                  <p className="o-matters-text">
                     In public institutions, software is only as useful as its deployment is controllable. Orbit provides the backbone for sovereign execution—ensuring that official intelligence remains within your boundaries, under your rules, and operational regardless of external connectivity.
                  </p>
               </div>
            </div>
         </section>

         {/* 8. FINAL BRIEFING / CTA */}
         <section className="o-briefing-section">
            <div className="o-container">
               <div className="o-briefing-grid">
                  <div>
                     <h2 className="o-briefing-title">Discuss deployment architecture</h2>
                     <p className="o-briefing-desc">Discuss sovereign deployment, edge coordination, and controlled operational rollouts with Vinkura.</p>
                  </div>
                  <div className="o-form-wrap">
                     <form action="https://formsubmit.co/founder@vinkura.in" method="POST" className="o-form">
                        <input type="text" name="name" placeholder="Name" required />
                        <input type="email" name="email" placeholder="Work Email" required />
                        <input type="text" name="organization" placeholder="Organization / Department" required />
                        <textarea name="usecase" placeholder="Brief use case" required></textarea>
                        <input type="submit" value="Submit Request" className="o-submit" />
                     </form>
                  </div>
               </div>
            </div>
         </section>

         <style jsx>{`
            /* PAGE WRAPPER */
            .o-page {
               font-family: sans-serif;
               width: 100%;
               overflow-x: hidden;
               color: #000;
               background: #fff;
            }

            /* CONTAINER */
            .o-container {
               max-width: 1320px;
               margin: 0 auto;
               padding: 0 2rem;
               width: 100%;
            }

            /* HERO */
            .o-hero {
               padding: 140px 0 80px;
               background: #000;
               color: #fff;
               border-bottom: 1px solid #333;
            }
            .o-eyebrow {
               display: block;
               font-size: 0.75rem;
               font-weight: bold;
               text-transform: uppercase;
               letter-spacing: 2px;
               color: #888;
               margin-bottom: 1.5rem;
            }
            .o-hero-title {
               font-size: 5rem;
               line-height: 1;
               margin-bottom: 1.5rem;
               font-weight: normal;
               color: #fff;
            }
            .o-hero-sub {
               font-size: 1.15rem;
               color: #ccc;
               max-width: 800px;
               font-weight: normal;
               line-height: 1.5;
               margin: 0;
            }

            /* WHITE SECTIONS */
            .o-section {
               padding: 80px 0;
               background: #fff;
            }
            .o-light {
               background: #fafafa;
            }
            .o-border-b {
               border-bottom: 1px solid #e8e8e8;
            }

            /* TYPOGRAPHY */
            .o-headline {
               font-size: 2.75rem;
               margin-bottom: 3rem;
               line-height: 1.1;
               font-weight: normal;
               color: #000;
            }
            .o-headline.o-white { color: #fff; }
            .o-sub-headline {
               font-size: 2.25rem;
               margin-bottom: 2rem;
               line-height: 1.1;
               font-weight: normal;
               color: #000;
            }
            .o-section-label {
               display: block;
               font-size: 0.8rem;
               font-weight: bold;
               text-transform: uppercase;
               letter-spacing: 2px;
               color: #000;
               margin-bottom: 3rem;
            }

            /* GRIDS */
            .o-grid-2 {
               display: grid;
               grid-template-columns: 1fr 1fr;
               gap: 2rem;
            }
            .o-grid-3 {
               display: grid;
               grid-template-columns: 1fr 1fr 1fr;
               gap: 2rem;
            }
            .o-grid-4 {
               display: grid;
               grid-template-columns: repeat(4, 1fr);
               gap: 2rem;
            }
            .o-dark-grid {
               margin-top: 3rem;
            }

            /* PLANE CARDS (control section) */
            .o-plane-card {
               padding: 2rem 0;
               border-top: 1px solid #e8e8e8;
            }
            .o-plane-label {
               display: block;
               font-size: 0.7rem;
               font-weight: bold;
               text-transform: uppercase;
               letter-spacing: 1.5px;
               color: #999;
               margin-bottom: 1rem;
            }
            .o-plane-title {
               font-size: 1.35rem;
               margin-bottom: 0.75rem;
               font-weight: bold;
               color: #000;
            }
            .o-plane-text {
               font-size: 1rem;
               color: #555;
               line-height: 1.6;
               margin: 0;
            }

            /* GENERIC CARDS (reality grid) */
            .o-card {
               padding: 2rem 0;
               border-top: 1px solid #e8e8e8;
            }
            .o-card-title {
               font-size: 1.2rem;
               margin-bottom: 0.75rem;
               font-weight: bold;
               color: #000;
            }
            .o-card-text {
               font-size: 1rem;
               color: #555;
               line-height: 1.6;
               margin: 0;
            }

            /* DARK SECTION */
            .o-dark-section {
               padding: 100px 0;
               background: #000;
               color: #fff;
            }
            .o-orch-card {
               padding: 2rem 0;
               border-top: 1px solid #222;
            }
            .o-orch-title {
               display: block;
               font-size: 1.15rem;
               margin-bottom: 1rem;
               color: #fff;
               font-weight: bold;
            }
            .o-orch-text {
               font-size: 1rem;
               color: #aaa;
               line-height: 1.6;
               margin: 0;
            }
            .o-white { color: #fff; }

            /* FLOW CARDS */
            .o-flow-card {
               padding: 2rem 0;
               border-top: 1px solid #e0e0e0;
            }
            .o-step {
               display: block;
               font-size: 0.75rem;
               font-weight: bold;
               color: #bbb;
               margin-bottom: 1rem;
               letter-spacing: 1px;
            }
            .o-flow-title {
               font-size: 1.1rem;
               margin-bottom: 0.75rem;
               font-weight: bold;
               color: #000;
            }
            .o-flow-text {
               font-size: 0.9rem;
               color: #555;
               line-height: 1.6;
               margin: 0;
            }

            /* GOVERNANCE GRID */
            .o-gov-grid {
               display: grid;
               grid-template-columns: 1fr 1fr;
               gap: 3rem;
            }
            .o-gov-item {
               display: flex;
               gap: 1rem;
               align-items: flex-start;
            }
            .o-gov-icon {
               color: #000;
               font-weight: bold;
               font-size: 1.2rem;
               flex-shrink: 0;
            }
            .o-gov-title {
               display: block;
               margin-bottom: 0.5rem;
               font-size: 1.05rem;
               font-weight: bold;
               color: #000;
            }
            .o-gov-text {
               font-size: 0.95rem;
               color: #555;
               line-height: 1.6;
               margin: 0;
            }

            /* WHY IT MATTERS */
            .o-matters-box { max-width: 900px; }
            .o-matters-text {
               font-size: 1.15rem;
               color: #333;
               line-height: 1.7;
               margin: 0;
            }

            /* BRIEFING / CTA — unique class names, no global collision */
            .o-briefing-section {
               padding: 100px 0;
               background: #000;
               color: #fff;
               border-top: 1px solid #000;
            }
            .s-briefing-grid, .o-briefing-grid {
               display: grid;
               grid-template-columns: 1fr 1fr;
               gap: 4rem;
               align-items: end;
            }
            .o-briefing-title {
               font-size: 2.5rem;
               margin-bottom: 1.5rem;
               font-weight: normal;
               color: #fff;
               line-height: 1.1;
            }
            .o-briefing-desc {
               font-size: 1.1rem;
               color: #fff;
               max-width: 500px;
               line-height: 1.5;
               margin: 0;
            }
            .o-form-wrap {
               width: 100%;
               max-width: 450px;
               margin-left: auto;
               background: #fafafa;
               padding: 3rem;
               color: #000;
               border-radius: 20px;
               border: 1px solid #eee;
            }
            .o-form {
               display: flex;
               flex-direction: column;
               gap: 1.25rem;
            }
            .o-form input[type="text"],
            .o-form input[type="email"],
            .o-form textarea {
               width: 100%;
               padding: 1rem;
               border: 1px solid #ddd;
               font-family: sans-serif;
               font-size: 0.95rem;
               outline: none;
               background: #fff;
               color: #000;
               border-radius: 8px;
            }
            .o-form input:focus, .o-form textarea:focus {
               border-color: #bbb;
            }
            .o-form textarea {
               min-height: 120px;
               resize: none;
            }
            .o-submit {
               padding: 1.25rem 2rem;
               background: #000;
               color: #fff;
               border: 1px solid transparent;
               font-weight: bold;
               text-transform: uppercase;
               font-size: 0.8rem;
               letter-spacing: 2px;
               cursor: pointer;
               border-radius: 8px;
            }
            .o-submit:hover { 
               background: #333;
               color: #fff;
            }

            /* RESPONSIVE */
            @media (max-width: 1024px) {
               .o-grid-3, .o-grid-4 { grid-template-columns: 1fr; }
               .o-grid-2 { grid-template-columns: 1fr; }
               .o-gov-grid { grid-template-columns: 1fr; }
               .o-briefing-grid { grid-template-columns: 1fr; gap: 3rem; }
               .o-form-wrap { margin-left: 0; max-width: none; }
            }
            @media (max-width: 768px) {
               .o-hero { padding: 100px 0 56px; }
               .o-hero-title { font-size: 3rem; }
               .o-headline { font-size: 2rem; }
               .o-sub-headline { font-size: 1.75rem; }
               .o-section { padding: 56px 0; }
               .o-dark-section { padding: 64px 0; }
               .o-briefing-section { padding: 64px 0; }
               .o-briefing-title { font-size: 2rem; }
               .o-container { padding: 0 1.25rem; }
               .o-form-wrap { padding: 1.25rem; border-radius: 14px; }
            }
         `}</style>
      </main>
   );
};

export default OrbitUI;
