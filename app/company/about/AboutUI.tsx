'use client';

import React from 'react';

const AboutUI = () => {
   return (
      <main className="about-page bg-white text-black">
         {/* 1. MISSION HERO */}
         <section className="hero-section bg-[#fafafa]">
            <div className="container">
               <div className="eyebrow">Operational Mission</div>
               <h1 className="hero-title">
                  Vinkura builds software for public safety,<br />
                  <span className="accent-text">governance, and sovereign operations.</span>
               </h1>
               <p className="hero-subtext">
                  India’s institutions run on fragmented systems, disconnected field intelligence, and legacy manual processes. We build the operational layer that connects real-world signals to accountable execution, increasing decision velocity where it matters most.
               </p>
            </div>
         </section>

         {/* 1.1 TRUST STRIP */}
         <section className="trust-strip border-b border-t">
            <div className="container">
               <div className="trust-grid">
                  <div className="trust-item">Built with real deployments in Indian public institutions</div>
                  <div className="trust-item">Used across public safety and administrative workflows</div>
                  <div className="trust-item">Designed for auditability and chain of custody</div>
                  <div className="trust-item">Deployable on cloud, on-prem, and sovereign edge</div>
               </div>
            </div>
         </section>

         {/* 2. THE PROBLEM (OPERATIONAL REALITY) */}
         <section className="philosophy-section">
            <div className="container grid-2">
               <div className="theory-side">
                  <h2 className="section-headline">Reality is fragmented. Command should be unified.</h2>
                  <p className="body-text">
                     Official intelligence in India is often trapped in paper registers, WhatsApp chains, spreadsheets, and local silos. When field teams act without shared context and command lacks a unified view, operational effectiveness breaks down.
                  </p>
                  <p className="body-text">
                     Vinkura exists because official memory should not be lost between shifts, districts, or departments. We provide the software backbone for institutions that carry real-world responsibility.
                  </p>
               </div>
               <div className="list-side">
                  <div className="stat-item">
                     <span className="stat-label">The Core Gap</span>
                     <p>Operational context is fragmented across paper, people, and disconnected software systems.</p>
                  </div>
                  <div className="stat-item">
                     <span className="stat-label">Our Solution</span>
                     <p>Vinkura creates a unified operational layer connecting field inputs, command decisions, and accountable execution.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* 3. WHERE WE DEPLOY (STRATEGIC DOMAINS) */}
         <section className="sectors-section bg-black text-white">
            <div className="container">
               <span className="label white-label">Operational Domains</span>
               <h2 className="section-headline black-text">Where we deploy</h2>
               <div className="sector-grid">
                  <div className="sector-card">
                     <h3 className="sector-title">Public Safety</h3>
                     <p className="sector-desc">Police command centers, investigations, evidence workflows, duty management, and real-time field coordination.</p>
                  </div>
                  <div className="sector-card">
                     <h3 className="sector-title">District Administration</h3>
                     <p className="sector-desc">Movement files, approvals, personnel workflows, compliance tracking, and integrated grievance management.</p>
                  </div>
                  <div className="sector-card">
                     <h3 className="sector-title">Sovereign Edge</h3>
                     <p className="sector-desc">On-premise state data centers, district servers, and offline-first edge units for disconnected field environments.</p>
                  </div>
                  <div className="sector-card">
                     <h3 className="sector-title">Critical Infrastructure</h3>
                     <p className="sector-desc">Mission systems, secure intelligence workflows, and high-assurance operational environments for sovereign defense.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* 4. PRINCIPLES (DOCTRINE) */}
         <section className="principles-section">
            <div className="container">
               <span className="label">Our Doctrine</span>
               <h2 className="section-headline">Official Principles</h2>
               <div className="principles-grid">
                  <div className="principle">
                     <span className="p-num">01</span>
                     <h4 className="p-title">Operational Reality</h4>
                     <p className="p-desc">Systems must survive contact with field conditions, not just demos. We build for the friction of real-world operations.</p>
                  </div>
                  <div className="principle">
                     <span className="p-num">02</span>
                     <h4 className="p-title">Official Agency</h4>
                     <p className="p-desc">The organization owns the workflow, the rules, and the decision path. Vinkura provides the operating layer, not the authority.</p>
                  </div>
                  <div className="principle">
                     <span className="p-num">03</span>
                     <h4 className="p-title">Accountability by Design</h4>
                     <p className="p-desc">Transparency is not a feature; it is a prerequisite. Every action must be traceable, reviewable, and operationally defensible.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* 4.5 BUILT FROM REAL DEPLOYMENTS */}
         <section className="proof-section bg-[#fafafa]">
            <div className="container">
               <div className="proof-header">
                  <h2 className="section-headline">Built from real deployments</h2>
                  <p className="proof-intro">
                     Vinkura’s systems are shaped by real operational environments in Indian public institutions, where reliability, auditability, and deployment constraints are non-negotiable.
                  </p>
               </div>
               <div className="proof-grid">
                  <div className="proof-card">
                     <h4>Digital Duty & Deployment</h4>
                     <p>Built for police duty allocation, rostering, and deployment visibility across district and state levels.</p>
                  </div>
                  <div className="proof-card">
                     <h4>Evidence & Chain of Custody</h4>
                     <p>Designed for digital maalkhana management, movement traceability, and accountable recordkeeping for criminal assets.</p>
                  </div>
                  <div className="proof-card">
                     <h4>Administrative Modernization</h4>
                     <p>Converting manual files and approval chains into structured, auditable digital systems for state departments.</p>
                  </div>
                  <div className="proof-card">
                     <h4>Field-Ready Systems</h4>
                     <p>Built to operate across command centers, district offices, and low-connectivity environments with offline sync.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* 5. FINAL CTA */}
         <section className="final-cta">
            <div className="container text-center">
               <h2 className="final-title">The mission is critical. <br /> The work is operational.</h2>
            </div>
         </section>

         <style jsx>{`
        .about-page { font-family: var(--font-body); overflow-x: hidden; }
        .container { max-width: 1400px; margin: 0 auto; padding: 0 4rem; }
        .border-b { border-bottom: 1px solid #eee; }
        .border-t { border-top: 1px solid #eee; }
        
        .hero-section { padding: 160px 0 80px; }
        .eyebrow { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 3px; color: #999; margin-bottom: 2rem; display: block; }
        .hero-title { font-family: var(--font-hero); font-size: 4.5rem; line-height: 1.1; letter-spacing: -2.5px; font-weight: 500; margin-bottom: 3rem; }
        .accent-text { color: #666; }
        .hero-subtext { font-size: 1.35rem; color: #444; max-width: 900px; line-height: 1.5; font-weight: 300; }

        .trust-strip { padding: 2rem 0; background: #fff; }
        .trust-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; }
        .trust-item { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #888; line-height: 1.4; }

        .philosophy-section { padding: 100px 0; border-bottom: 1px solid #eee; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: start; }
        .section-headline { font-family: var(--font-hero); font-size: 3rem; line-height: 1.1; letter-spacing: -2px; margin-bottom: 2.5rem; }
        .white-text { color: white; }
        .body-text { font-size: 1.15rem; color: #444; line-height: 1.6; margin-bottom: 2rem; }
        .stat-item { padding: 2rem; background: #fafafa; border-radius: 16px; margin-bottom: 1.5rem; border: 1px solid #eee; }
        .stat-label { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #999; display: block; margin-bottom: 1rem; }
        .stat-item p { font-size: 1rem; font-weight: 500; line-height: 1.5; color: #000; }

        .sectors-section { padding: 100px 0; }
        .label { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 3px; color: #999; display: block; margin-bottom: 1.5rem; }
        .white-label { color: #555; }
        .sector-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; margin-top: 3rem; }
        .sector-card { padding: 2.5rem; border: 1px solid #333; border-radius: 16px; transition: 0.3s; }
        .sector-card:hover { border-color: #fff; background: #fff7f7ff; }
        .sector-title { font-family: var(--font-hero); font-size: 1.5rem; margin-bottom: 1.25rem; }
        .sector-desc { font-size: 0.85rem; line-height: 1.6; color: #888; }

        .principles-section { padding: 100px 0; border-bottom: 1px solid #eee; }
        .principles-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4rem; margin-top: 3rem; }
        .principle { border-top: 1px solid #eee; padding-top: 2.5rem; }
        .p-num { font-size: 0.75rem; font-weight: 700; color: #ccc; display: block; margin-bottom: 1.5rem; }
        .p-title { font-family: var(--font-hero); font-size: 1.75rem; margin-bottom: 1.25rem; letter-spacing: -1px; }
        .p-desc { font-size: 1rem; line-height: 1.6; color: #555; }

        .proof-section { padding: 100px 0; }
        .proof-header { max-width: 800px; margin-bottom: 4rem; }
        .proof-intro { font-size: 1.25rem; color: #666; line-height: 1.5; }
        .proof-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
        .proof-card { padding: 2rem; background: #fff; border: 1px solid #eee; border-radius: 16px; }
        .proof-card h4 { font-size: 0.9rem; font-weight: 700; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1px; }
        .proof-card p { font-size: 0.85rem; line-height: 1.5; color: #666; }

        .final-cta { padding: 120px 0; }
        .final-title { font-family: var(--font-hero); font-size: 3.5rem; line-height: 1.1; letter-spacing: -2px; margin-bottom: 2.5rem; }
        .final-desc { font-size: 1.25rem; color: #666; max-width: 800px; margin: 0 auto 3rem; line-height: 1.5; font-weight: 300; }
        .btn-row { display: flex; justify-content: center; gap: 1.5rem; margin-bottom: 2rem; }
        .dark-btn { padding: 1rem 2rem; background: #000; color: #fff; border: none; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; font-size: 0.7rem; cursor: pointer; transition: 0.3s; }
        .light-btn { padding: 1rem 2rem; background: transparent; color: #000; border: 1px solid transparent; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; font-size: 0.7rem; cursor: pointer; transition: 0.3s; }
        .tertiary-link { font-size: 0.8rem; font-weight: 700; color: #999; text-transform: uppercase; letter-spacing: 2px; text-decoration: none; }
        .tertiary-link:hover { color: #000; }

        @media (max-width: 1200px) {
          .sector-grid, .proof-grid { grid-template-columns: repeat(2, 1fr); }
          .trust-grid { grid-template-columns: repeat(2, 1fr); }
          .principles-grid { grid-template-columns: 1fr; gap: 3rem; }
          .grid-2 { grid-template-columns: 1fr; gap: 4rem; }
          .hero-title { font-size: 3rem; }
        }
        @media (max-width: 768px) {
          .container { padding: 0 1.5rem; }
          .hero-title { font-size: 2.5rem; }
          .trust-grid { grid-template-columns: 1fr; }
          .sector-grid, .proof-grid { grid-template-columns: 1fr; }
          .final-title { font-size: 2.25rem; }
          .btn-row { flex-direction: column; }
        }
      `}</style>
      </main>
   );
};

export default AboutUI;
