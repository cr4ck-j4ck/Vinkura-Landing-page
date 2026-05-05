'use client';

import React from 'react';

const OrbitUI = () => {
   return (
      <main className="orbit-page bg-white text-black text-left">
         {/* 1. HERO SECTION */}
         <section className="hero-section text-left border-b">
            <div className="container">
               <div className="hero-content">
                  <span className="eyebrow">Deployment & Orchestration</span>
                  <h1 className="hero-title">Orbit</h1>
                  <p className="hero-subtitle">
                     The operational layer for sovereign deployment, edge coordination,<br className="desktop-only" />
                     and controlled execution across distributed official environments.
                  </p>
               </div>

               <div className="topology-visual">
                  <figure className="image-placeholder">
                     <img src="/oRBIT.png" alt="Operational Topology" className="img-box" />
                     <figcaption>Operational Topology</figcaption>
                  </figure>
               </div>
            </div>
         </section>

         {/* 2. OPERATIONAL CONTROL */}
         <section className="control-section text-left border-b">
            <div className="container">
               <h2 className="section-title">Coordinate distributed operations <br className="desktop-only" /> with official control</h2>

               <div className="plane-grid">
                  <div className="plane-card">
                     <span className="p-label">Central</span>
                     <h3>Data Plane</h3>
                     <p>Strategic aggregation and official memory. Orbit handles how data moves from individual units to central command centers while respecting residency rules.</p>
                  </div>
                  <div className="plane-card">
                     <span className="p-label">Governance</span>
                     <h3>Policy / Logic Plane</h3>
                     <p>Define rules, models, and operational logic centrally and deploy them across the fleet with granular version control and rollback capability.</p>
                  </div>
                  <div className="plane-card">
                     <span className="p-label">Tactical</span>
                     <h3>Execution Edge</h3>
                     <p>The point of action. Orbit ensures that software remains operational, responsive, and secure at the tactical edge—even under zero connectivity.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* 3. BUILT FOR REALITY */}
         <section className="reality-section text-left border-b">
            <div className="container">
               <h3 className="section-title small">Built for deployment reality</h3>
               <div className="reality-grid">
                  {[
                     { title: "Edge Security Foundation", desc: "Hardened OS and container layers designed for official integrity in multi-tenant or field-exposed environments." },
                     { title: "Remote Policy Sync", desc: "Orchestrate real-time updates and logic rollouts across thousands of nodes from a unified control interface." },
                     { title: "Air-Gapped Operation", desc: "Full mission-critical functionality in disconnected zones with intelligent reconciliation once connectivity is restored." },
                     { title: "Sovereign Boundaries", desc: "Strict environment-aware processing models that ensure data never crosses jurisdictional or physical boundaries." }
                  ].map((item, i) => (
                     <div key={i} className="reality-card">
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* 4. ORCHESTRATION LAYER */}
         <section className="orchestration-layer bg-black text-white text-left">
            <div className="container border-b-white">
               <div className="orch-header">
                  <h2 className="section-title white">One control layer across <br className="desktop-only" /> distributed environments</h2>
               </div>

               <div className="orch-grid">
                  <div className="orch-card">
                     <strong>Unified Control Plane</strong>
                     <p>Manage thousands of distributed nodes, from district headquarters to field units, from a single secure dashboard.</p>
                  </div>
                  <div className="orch-card">
                     <strong>Controlled Rollouts</strong>
                     <p>Phased deployment of new logic and updates, allowing for validation before global synchronization.</p>
                  </div>
                  <div className="orch-card">
                     <strong>Policy Consistency</strong>
                     <p>Ensure identical official rules and data governance policies are enforced across all geographies simultaneously.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* 5. TECHNICAL ARCHITECTURE & FLOW (NEW) */}
         <section className="architecture-section border-b bg-[#fafafa]">
            <div className="container">
               <h2 className="section-label">Technical Architecture & Flow</h2>
               <div className="flow-grid">
                  <div className="flow-card">
                     <span className="f-step">01</span>
                     <h4>Policy Definition</h4>
                     <p>Operational logic, data boundaries, and access rules are defined as versioned code (Policy-as-Code) at the official headquarters.</p>
                  </div>
                  <div className="flow-card">
                     <span className="f-step">02</span>
                     <h4>Edge Reconciliation</h4>
                     <p>Orbit nodes at the tactical edge continuously reconcile their local state with the central policy, ensuring compliance even after offline periods.</p>
                  </div>
                  <div className="flow-card">
                     <span className="f-step">03</span>
                     <h4>Secure Execution</h4>
                     <p>Applications run in hardened, deployment-aware containers that only execute under validated environmental and security conditions.</p>
                  </div>
                  <div className="flow-card">
                     <span className="f-step">04</span>
                     <h4>Telemetry & Audit</h4>
                     <p>Every operational node reports back health, security posture, and execution logs for central supervisory oversight and forensic audit.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* 6. WHAT ORBIT GOVERNS */}
         <section className="governance-section text-left bg-white text-black border-b">
            <div className="container">
               <h2 className="section-label">Operational Governance</h2>
               <div className="gov-grid">
                  <div className="gov-item">
                     <span className="g-icon">/</span>
                     <div>
                        <strong>Infrastructure Agnostic</strong>
                        <p>Deploy across state data centers, sovereign clouds, district HQs, or ruggedized field units.</p>
                     </div>
                  </div>
                  <div className="gov-item">
                     <span className="g-icon">/</span>
                     <div>
                        <strong>Logic Synchronization</strong>
                        <p>Automated distribution of updated operational models and procedural rules across the fleet.</p>
                     </div>
                  </div>
                  <div className="gov-item">
                     <span className="g-icon">/</span>
                     <div>
                        <strong>State Management</strong>
                        <p>Official control over software versions, ensuring uniformity across all operational nodes.</p>
                     </div>
                  </div>
                  <div className="gov-item">
                     <span className="g-icon">/</span>
                     <div>
                        <strong>Integrity Monitoring</strong>
                        <p>Continuous verification of node health and data residency under constrained environment conditions.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* 7. WHY IT MATTERS */}
         <section className="matters-section text-left border-b">
            <div className="container">
               <div className="matters-box">
                  <h2 className="section-title small">Sovereign Deployment Control</h2>
                  <p className="matters-text">
                     In public institutions, software is only as useful as its deployment is controllable. Orbit provides the backbone for sovereign execution—ensuring that official intelligence remains within your boundaries, under your rules, and operational regardless of external connectivity.
                  </p>
               </div>
            </div>
         </section>

         {/* 7. FINAL CTA WITH FORM */}
         <section className="cta-section bg-black text-white text-left">
            <div className="container grid-2 align-bottom">
               <div>
                  <h2 className="cta-title">Discuss deployment architecture</h2>
                  <p className="cta-desc">Discuss sovereign deployment, edge coordination, and controlled operational rollouts with Vinkura.</p>
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
        .orbit-page { font-family: sans-serif; overflow-x: hidden; width: 100%; line-height: 1.5; color: #000; background: #fff; }
        .text-left { text-align: left; }
        .container { max-width: 1320px; margin: 0 auto; padding: 0 2rem; width: 100%; }
        
        .hero-section { padding: 140px 0 80px; border-bottom: 1px solid #000; }
        .eyebrow { font-size: 0.75rem; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; color: #000; margin-bottom: 2rem; display: block; }
        .hero-title { font-size: 4rem; line-height: 1.1; margin-bottom: 1.5rem; font-weight: normal; }
        .hero-subtitle { font-size: 1.15rem; color: #000; max-width: 800px; margin-bottom: 4rem; font-weight: normal; line-height: 1.5; }
        
        .image-placeholder { margin: 0; display: flex; flex-direction: column; align-items: stretch; justify-content: center; width: 100%;  padding: 1rem; background: #fff;  border-radius: 16px; overflow: hidden; border: none;}
        .img-box { width: 100%; height: 250px; background: #f0f0f0; display: block; object-fit: cover; border-radius: 12px; border: none; }
        .image-placeholder figcaption { margin-top: 1rem; font-size: 0.75rem; color: #000; text-transform: uppercase; letter-spacing: 1px; text-align: center; font-weight: bold; }

        .control-section { padding: 80px 0; }
        .border-b { border-bottom: 1px solid #000; padding-bottom: 4rem; }
        .section-title { font-size: 3rem; margin-bottom: 3rem; line-height: 1.1; font-weight: normal; }
        .section-title.small { font-size: 2.5rem; }
        .plane-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
        .plane-card { padding: 2rem; border: 1px solid transparent; background: #fff; }
        .p-label { font-size: 0.75rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #000; margin-bottom: 1.5rem; display: block; }
        .plane-card h3 { font-size: 1.5rem; margin-bottom: 1rem; font-weight: bold; }
        .plane-card p { font-size: 1rem; color: #000; line-height: 1.6; }

        .reality-section { padding: 80px 0; }
        .reality-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; }
        .reality-card { padding: 2rem; border: 1px solid transparent; background: #fff; }
        .reality-card h4 { font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem; color: #000; }
        .reality-card p { font-size: 1rem; color: #000; line-height: 1.6; }

        .orchestration-layer { padding: 100px 0; background: #000; color: #fff; }
        .border-b-white { border-bottom: 1px solid #fff; padding-bottom: 4rem; }
        .section-title.white { color: #fff; margin-bottom: 3rem; }
        .orch-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3rem; }
        .orch-card strong { display: block; font-size: 1.25rem; margin-bottom: 1.5rem; color: #fff; font-weight: bold; }
        .orch-card p { font-size: 1rem; color: #ccc; line-height: 1.6; }

        .governance-section { padding: 80px 0; }
        .section-label { font-size: 0.85rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #000; margin-bottom: 3rem; display: block; }
        .gov-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 3rem; }
        .gov-item { display: flex; gap: 1rem; }
        .g-icon { color: #000; font-weight: bold; font-size: 1.2rem; }
        .gov-item strong { display: block; margin-bottom: 0.75rem; font-size: 1.1rem; font-weight: bold; }
        .gov-item p { font-size: 1rem; color: #000; }

        .architecture-section { padding: 80px 0; }
        .flow-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; }
        .flow-card { padding: 2rem; }
        .f-step { font-size: 0.75rem; font-weight: bold; color: #999; margin-bottom: 1.5rem; display: block; }
        .flow-card h4 { font-size: 1.25rem; margin-bottom: 1rem; font-weight: bold; letter-spacing: -0.5px; }
        .flow-card p { font-size: 0.9rem; color: #555; line-height: 1.6; }

        .matters-section { padding: 80px 0; }
        .matters-box { max-width: 900px; }
        .matters-text { font-size: 1.2rem; color: #000; line-height: 1.6; margin-top: 2rem; }

        /* CTA WITH FORM */
        .cta-section { padding: 120px 0; background: #000; color: #fff; border-top: 1px solid #111; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
        .align-bottom { align-items: end; }
        .cta-title { font-size: 3rem; margin-bottom: 1.5rem; font-weight: normal; letter-spacing: -2px; color: #000000ff; }
        .cta-desc { font-size: 1.2rem; color: #888; max-width: 500px; line-height: 1.5; }

        .form-container { width: 100%; max-width: 450px; margin-left: auto; background: #fff; padding: 2.5rem; color: #000; border-radius: 16px; }
        .contact-form { display: flex; flex-direction: column; gap: 1rem; }
        .contact-form input[type="text"], .contact-form input[type="email"], .contact-form textarea { width: 100%; padding: 1rem; border: 1px solid #eee; font-family: sans-serif; font-size: 0.9rem; outline: none; background: #fdfdfd; color: #000; border-radius: 8px; }
        .contact-form textarea { min-height: 100px; resize: none; }
        .submit-input { padding: 1rem 1.5rem; background: #000; color: #fff; border: none; font-weight: bold; text-transform: uppercase; font-size: 0.75rem; letter-spacing: 2px; cursor: pointer; border-radius: 8px; transition: 0.3s; }
        .submit-input:hover { background: #333; }

        @media (max-width: 1024px) {
          .grid-2, .plane-grid, .reality-grid, .orch-grid, .gov-grid, .flow-grid { grid-template-columns: 1fr; gap: 3rem; }
          .form-container { margin-left: 0; }
        }
        @media (max-width: 768px) {
          .hero-title { font-size: 3rem; }
          .section-title { font-size: 2.5rem; }
        }
      `}</style>
      </main>
   );
};

export default OrbitUI;
