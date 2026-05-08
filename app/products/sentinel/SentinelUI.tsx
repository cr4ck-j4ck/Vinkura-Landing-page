'use client';

import React from 'react';

const SentinelUI = () => {
   return (
      <main className="s-page">
         {/* 1. HERO SECTION */}
         <section className="s-hero">
            <div className="s-container">
               <span className="s-eyebrow">Strategic Intelligence Layer</span>
               <h1 className="s-hero-title">Vinkura Sentinel</h1>
               <p className="s-hero-sub">
                  The official intelligence layer for high-consequence public systems and operational command.
               </p>
            </div>
         </section>

         {/* 2. PRODUCT THESIS */}
         <section className="s-section s-border-b">
            <div className="s-container">
               <h2 className="s-headline">From fragmented records to operational context</h2>
               <p className="s-body-text">
                  Sentinel turns fragmented records, logs, field signals, and official datasets into searchable, connected operational context for command, supervision, and response. It is the digital twin of your organization's decision environment.
               </p>
            </div>
         </section>

         {/* 3. CAPABILITIES */}
         <section className="s-section s-border-b">
            <div className="s-container">
               <h3 className="s-sub-headline">Beyond dashboards. Integrated Reality.</h3>
               <p className="s-body-text" style={{ maxWidth: '700px', marginBottom: '4rem' }}>
                  Traditional dashboards describe the past. Sentinel connects records, entities, movements, and operational signals into a system that supports decisions—not just reporting.
               </p>
               <div className="s-grid-2">
                  <div className="s-card">
                     <h4 className="s-card-title">Entity-linked search</h4>
                     <p className="s-card-text">Search across fragmented datasets to find people, objects, and events linked across departments.</p>
                  </div>
                  <div className="s-card">
                     <h4 className="s-card-title">Relationship mapping</h4>
                     <p className="s-card-text">Visualize connections across records and actors to understand official patterns.</p>
                  </div>
                  <div className="s-card">
                     <h4 className="s-card-title">Command-level visibility</h4>
                     <p className="s-card-text">Aggregated operational signals that provide real-time context for command and response.</p>
                  </div>
                  <div className="s-card">
                     <h4 className="s-card-title">Auditable intelligence</h4>
                     <p className="s-card-text">Every insight and link is traceable back to its source record, ensuring official accountability.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* 4. FOUNDATION RAILS */}
         <section className="s-dark-section">
            <div className="s-container">
               <h2 className="s-headline s-white">A multidisciplinary foundation for official command</h2>
               <div className="s-rails-grid">
                  <div className="s-rail-item">
                     <span className="s-rail-num">01</span>
                     <div>
                        <strong className="s-rail-title">Data Ingestion</strong>
                        <p className="s-muted-text">Automated parsing of physical and digital records into a structured intelligence storage.</p>
                     </div>
                  </div>
                  <div className="s-rail-item">
                     <span className="s-rail-num">02</span>
                     <div>
                        <strong className="s-rail-title">Search Intelligence</strong>
                        <p className="s-muted-text">Fuzzy and semantic search layers designed for the complexity of official memory.</p>
                     </div>
                  </div>
                  <div className="s-rail-item">
                     <span className="s-rail-num">03</span>
                     <div>
                        <strong className="s-rail-title">Command Mapping</strong>
                        <p className="s-muted-text">Linking field intent and deployment signals to high-level operational outcomes.</p>
                     </div>
                  </div>
                  <div className="s-rail-item">
                     <span className="s-rail-num">04</span>
                     <div>
                        <strong className="s-rail-title">Audit Trails</strong>
                        <p className="s-muted-text">Continuous verification that intelligence follows role-based access and procedural rules.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* 5. WHERE IT CHANGES OPERATIONS */}
         <section className="s-section s-border-b">
            <div className="s-container">
               <h2 className="s-sub-headline">Where Sentinel changes operations</h2>
               <div className="s-grid-2">
                  <div className="s-card">
                     <h4 className="s-card-title">Event Command &amp; Public Safety</h4>
                     <p className="s-card-text">Unifying thousands of field feeds into a single operational reality for major deployments.</p>
                  </div>
                  <div className="s-card">
                     <h4 className="s-card-title">District Operations Synchronization</h4>
                     <p className="s-card-text">Identifying bottlenecks and performance patterns across district-level administrative units.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* 6. DIFFERENTIATION */}
         <section className="s-section s-border-b">
            <div className="s-container">
               <h2 className="s-sub-headline">Why Sentinel is different</h2>
               <div className="s-grid-3">
                  <div className="s-card">
                     <h4 className="s-card-title">Built for fragmented systems</h4>
                     <p className="s-card-text">Specifically designed for records and workflows that were never meant to speak to each other.</p>
                  </div>
                  <div className="s-card">
                     <h4 className="s-card-title">Command-aware, not report-first</h4>
                     <p className="s-card-text">Built for action, supervision, and operational context—not passive administrative reporting.</p>
                  </div>
                  <div className="s-card">
                     <h4 className="s-card-title">Searchable, connected, auditable</h4>
                     <p className="s-card-text">Intelligence is only useful when it can be traced, reviewed, and acted on responsibly.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* 7. FINAL CTA WITH FORM */}
         <section className="s-briefing-section">
            <div className="s-container">
               <div className="s-briefing-grid">
                  <div>
                     <h2 className="s-briefing-title">Request a Sentinel briefing</h2>
                     <p className="s-briefing-desc">Discuss how Sentinel can fit into your official architecture and command environment.</p>
                  </div>
                  <div className="s-form-wrap">
                     <form action="https://formsubmit.co/founder@vinkura.in" method="POST" className="s-form">
                        <input type="text" name="name" placeholder="Name" required />
                        <input type="email" name="email" placeholder="Work Email" required />
                        <input type="text" name="organization" placeholder="Organization / Department" required />
                        <textarea name="usecase" placeholder="Brief use case" required></textarea>
                        <input type="submit" value="Submit Request" className="s-submit" />
                     </form>
                  </div>
               </div>
            </div>
         </section>

         <style jsx>{`
            /* PAGE WRAPPER — no height, no overflow-y that causes scroll */
            .s-page {
               font-family: sans-serif;
               width: 100%;
               overflow-x: hidden;
               color: #000;
               background: #fff;
            }

            /* CONTAINER */
            .s-container {
               max-width: 1320px;
               margin: 0 auto;
               padding: 0 2rem;
               width: 100%;
            }

            /* HERO — black bg, no height constraint */
            .s-hero {
               padding: 140px 0 80px;
               background: #000;
               color: #fff;
               border-bottom: 1px solid #333;
            }
            .s-eyebrow {
               display: block;
               font-size: 0.75rem;
               font-weight: bold;
               text-transform: uppercase;
               letter-spacing: 2px;
               color: #888;
               margin-bottom: 1.5rem;
            }
            .s-hero-title {
               font-size: 4rem;
               line-height: 1.1;
               margin-bottom: 1.5rem;
               font-weight: normal;
               color: #fff;
            }
            .s-hero-sub {
               font-size: 1.15rem;
               color: #ccc;
               max-width: 800px;
               font-weight: normal;
               line-height: 1.5;
               margin: 0;
            }

            /* GENERIC WHITE SECTIONS */
            .s-section {
               padding: 80px 0;
               background: #fff;
            }
            .s-border-b {
               border-bottom: 1px solid #e8e8e8;
            }

            /* TYPOGRAPHY */
            .s-headline {
               font-size: 3rem;
               margin-bottom: 2rem;
               line-height: 1.1;
               font-weight: normal;
               color: #000;
            }
            .s-headline.s-white { color: #fff; }
            .s-sub-headline {
               font-size: 2.25rem;
               margin-bottom: 2rem;
               line-height: 1.1;
               font-weight: normal;
               color: #000;
            }
            .s-body-text {
               font-size: 1.1rem;
               color: #333;
               max-width: 800px;
               line-height: 1.7;
               margin: 0;
            }

            /* GRID LAYOUTS */
            .s-grid-2 {
               display: grid;
               grid-template-columns: 1fr 1fr;
               gap: 2.5rem;
            }
            .s-grid-3 {
               display: grid;
               grid-template-columns: 1fr 1fr 1fr;
               gap: 2rem;
            }

            /* CARDS */
            .s-card {
               padding: 2rem 0;
               border-top: 1px solid #e8e8e8;
            }
            .s-card-title {
               font-size: 1.2rem;
               margin-bottom: 0.75rem;
               font-weight: bold;
               color: #000;
            }
            .s-card-text {
               font-size: 1rem;
               color: #555;
               line-height: 1.6;
               margin: 0;
            }

            /* DARK SECTION — foundation rails */
            .s-dark-section {
               padding: 100px 0;
               background: #000;
               color: #fff;
            }
            .s-rails-grid {
               display: grid;
               grid-template-columns: 1fr 1fr;
               gap: 4rem;
               margin-top: 3rem;
            }
            .s-rail-item {
               display: flex;
               gap: 1.5rem;
               align-items: flex-start;
            }
            .s-rail-num {
               font-size: 1.5rem;
               font-weight: bold;
               color: #fff;
               flex-shrink: 0;
            }
            .s-rail-title {
               display: block;
               font-size: 1.15rem;
               margin-bottom: 0.75rem;
               font-weight: bold;
               color: #fff;
            }
            .s-muted-text {
               font-size: 1rem;
               color: #aaa;
               line-height: 1.6;
               margin: 0;
            }
            .s-white { color: #fff; }

            /* CTA / BRIEFING SECTION — unique class name, no collision with globals */
            .s-briefing-section {
               padding: 100px 0;
               background: #000;
               color: #fff;
               border-top: 1px solid #000;
            }
            .s-briefing-grid {
               display: grid;
               grid-template-columns: 1fr 1fr;
               gap: 4rem;
               align-items: end;
            }
            .s-briefing-title {
               font-size: 2.5rem;
               margin-bottom: 1.5rem;
               font-weight: normal;
               color: #fff;
               line-height: 1.1;
            }
            .s-briefing-desc {
               font-size: 1.1rem;
               color: #fff;
               max-width: 500px;
               line-height: 1.5;
               margin: 0;
            }
            .s-form-wrap {
               width: 100%;
               max-width: 450px;
               margin-left: auto;
               background: #fafafa;
               padding: 3rem;
               color: #000;
               border-radius: 20px;
               border: 1px solid #eee;
            }
            .s-form {
               display: flex;
               flex-direction: column;
               gap: 1.25rem;
            }
            .s-form input[type="text"],
            .s-form input[type="email"],
            .s-form textarea {
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
            .s-form input:focus, .s-form textarea:focus {
               border-color: #bbb;
            }
            .s-form textarea {
               min-height: 120px;
               resize: none;
            }
            .s-submit {
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
            .s-submit:hover { 
               background: #333;
               color: #fff;
            }

            /* RESPONSIVE */
            @media (max-width: 1024px) {
               .s-briefing-grid { grid-template-columns: 1fr; gap: 3rem; }
               .s-form-wrap { margin-left: 0; max-width: none; }
               .s-grid-2 { grid-template-columns: 1fr; }
               .s-grid-3 { grid-template-columns: 1fr; }
               .s-rails-grid { grid-template-columns: 1fr; gap: 2.5rem; }
            }
            @media (max-width: 768px) {
               .s-hero { padding: 100px 0 56px; }
               .s-hero-title { font-size: 2.5rem; }
               .s-headline { font-size: 2rem; }
               .s-sub-headline { font-size: 1.75rem; }
               .s-section { padding: 56px 0; }
               .s-dark-section { padding: 64px 0; }
               .s-briefing-section { padding: 64px 0; }
               .s-briefing-title { font-size: 2rem; }
               .s-container { padding: 0 1.25rem; }
               .s-form-wrap { padding: 1.25rem; border-radius: 14px; }
            }
         `}</style>
      </main>
   );
};

export default SentinelUI;
