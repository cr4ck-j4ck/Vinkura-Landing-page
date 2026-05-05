'use client';

import React from 'react';

const SentinelUI = () => {
   return (
      <main className="sentinel-page bg-white text-black text-left">
         {/* 1. HERO SECTION */}
         <section className="hero-section text-left border-b">
            <div className="container">
               <div className="hero-header">
                  <span className="eyebrow">Strategic Intelligence Layer</span>
                  <h1 className="product-title">Vinkura Sentinel</h1>
                  <p className="hero-summary">
                     The official intelligence layer for high-consequence <br className="desktop-only" />
                     public systems and operational command.
                  </p>
               </div>

               <div className="hero-visual">
               </div>
            </div>
         </section>

         {/* 2. PRODUCT THESIS */}
         <section className="thesis-section text-left border-b">
            <div className="container">
               <h2 className="section-title">From fragmented records <br className="desktop-only" /> to operational context</h2>
               <p className="thesis-text">
                  Sentinel turns fragmented records, logs, field signals, and official datasets into searchable, connected operational context for command, supervision, and response. It is the digital twin of your organization's decision environment.
               </p>
            </div>
         </section>

         {/* 3. CAPABILITIES */}
         <section className="capabilities-section border-b text-left">
            <div className="container">
               <h3 className="section-title small">Beyond dashboards. <br /> Integrated Reality.</h3>
               <p className="body-subtext">
                  Traditional dashboards describe the past. Sentinel connects records, entities, movements, and operational signals into a system that supports decisions—not just reporting.
               </p>
               <div className="cap-grid">
                  <div className="cap-card">
                     <h4>Entity-linked search</h4>
                     <p>Search across fragmented datasets to find people, objects, and events linked across departments.</p>
                  </div>
                  <div className="cap-card">
                     <h4>Relationship mapping</h4>
                     <p>Visualize connections across records and actors to understand official patterns.</p>
                  </div>
                  <div className="cap-card">
                     <h4>Command-level visibility</h4>
                     <p>Aggregated operational signals that provide real-time context for command and response.</p>
                  </div>
                  <div className="cap-card">
                     <h4>Auditable intelligence</h4>
                     <p>Every insight and link is traceable back to its source record, ensuring official accountability.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* 4. FOUNDATION RAILS */}
         <section className="rails-section bg-black text-white text-left">
            <div className="container border-b-white">
               <h2 className="section-title white">A multidisciplinary foundation <br className="desktop-only" /> for official command</h2>
               <div className="rails-grid">
                  <div className="rail-item">
                     <span className="r-num">01</span>
                     <div className="r-content">
                        <strong>Data Ingestion</strong>
                        <p>Automated parsing of physical and digital records into a structured intelligence storage.</p>
                     </div>
                  </div>
                  <div className="rail-item">
                     <span className="r-num">02</span>
                     <div className="r-content">
                        <strong>Search Intelligence</strong>
                        <p>Fuzzy and semantic search layers designed for the complexity of official memory.</p>
                     </div>
                  </div>
                  <div className="rail-item">
                     <span className="r-num">03</span>
                     <div className="r-content">
                        <strong>Command Mapping</strong>
                        <p>Linking field intent and deployment signals to high-level operational outcomes.</p>
                     </div>
                  </div>
                  <div className="rail-item">
                     <span className="r-num">04</span>
                     <div className="r-content">
                        <strong>Audit Trails</strong>
                        <p>Continuous verification that intelligence follows role-based access and procedural rules.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* 5. WHERE IT CHANGES OPERATIONS */}
         <section className="impact-section bg-white text-black border-b text-left">
            <div className="container">
               <h2 className="section-title small">Where Sentinel changes operations</h2>
               <div className="impact-grid">
                  <div className="impact-card">
                     <h4>Event Command & Public Safety</h4>
                     <p>Unifying thousands of field feeds into a single operational reality for major deployments.</p>
                  </div>
                  <div className="impact-card">
                     <h4>District Operations Synchronization</h4>
                     <p>Identifying bottlenecks and performance patterns across district-level administrative units.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* 6. DIFFERENTIATION */}
         <section className="diff-section border-b text-left">
            <div className="container">
               <h2 className="section-title small">Why Sentinel is different</h2>
               <div className="diff-grid">
                  <div className="diff-card">
                     <h4>Built for fragmented systems</h4>
                     <p>Specifically designed for records and workflows that were never meant to speak to each other.</p>
                  </div>
                  <div className="diff-card">
                     <h4>Command-aware, not report-first</h4>
                     <p>Built for action, supervision, and operational context—not passive administrative reporting.</p>
                  </div>
                  <div className="diff-card">
                     <h4>Searchable, connected, auditable</h4>
                     <p>Intelligence is only useful when it can be traced, reviewed, and acted on responsibly.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* 7. FINAL CTA WITH FORM */}
         <section className="cta-section bg-black text-white text-left">
            <div className="container grid-2 align-bottom">
               <div>
                  <h2 className="cta-title">Request a Sentinel briefing</h2>
                  <p className="cta-desc">Discuss how Sentinel can fit into your official architecture and command environment.</p>
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
        .sentinel-page { font-family: sans-serif; overflow-x: hidden; width: 100%; line-height: 1.5; color: #000; background: #fff; }
        .text-left { text-align: left; }
        .container { max-width: 1320px; margin: 0 auto; padding: 0 2rem; width: 100%; }
        
        .hero-section { padding: 140px 0 80px; border-bottom: 1px solid #000; }
        .hero-header { margin-bottom: 4rem; text-align: left; }
        .eyebrow { font-size: 0.75rem; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; color: #000; margin-bottom: 1.5rem; display: block; }
        .product-title { font-size: 4rem; line-height: 1.1; margin-bottom: 1.5rem; font-weight: normal; color: #000; }
        .hero-summary { font-size: 1.15rem; color: #000; max-width: 800px; font-weight: normal; line-height: 1.5; margin: 0; }
        
        .image-placeholder { margin: 0; display: flex; flex-direction: column; align-items: stretch; justify-content: center; width: 100%;  padding: 1rem; background: #fff;  border-radius: 16px; overflow: hidden; border: none;}
        .img-box { width: 100%; height: 250px; background: #f0f0f0; display: block; object-fit: cover; border-radius: 12px; border: none; }
        .image-placeholder figcaption { margin-top: 1rem; font-size: 0.75rem; color: #000; text-transform: uppercase; letter-spacing: 1px; text-align: center; font-weight: bold; }

        .thesis-section { padding: 80px 0; }
        .border-b { border-bottom: 1px solid #000; padding-bottom: 4rem; }
        .section-title { font-size: 3.5rem; margin-bottom: 2rem; line-height: 1.1; font-weight: normal; color: #000; }
        .section-title.small { font-size: 2.5rem; }
        .thesis-text { font-size: 1.15rem; color: #000; max-width: 800px; line-height: 1.6; }

        .capabilities-section { padding: 80px 0; }
        .body-subtext { font-size: 1.1rem; color: #000; margin-bottom: 4rem; max-width: 700px; }
        .cap-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 3rem; }
        .cap-card { padding: 2rem; border: 1px solid transparent; background: #fff; }
        .cap-card h4 { font-size: 1.35rem; margin-bottom: 1rem; font-weight: bold; }
        .cap-card p { font-size: 1rem; color: #000; line-height: 1.6; }

        .rails-section { padding: 100px 0; background: #000; color: #fff; }
        .border-b-white { border-bottom: 1px solid #fff; padding-bottom: 4rem; }
        .section-title.white { color: #fff; margin-bottom: 4rem; }
        .rails-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 4rem; }
        .rail-item { display: flex; gap: 1.5rem; align-items: flex-start; }
        .r-num { font-size: 1.5rem; font-weight: bold; color: #fff; }
        .r-content strong { display: block; font-size: 1.25rem; margin-bottom: 1rem; font-weight: bold; }
        .r-content p { font-size: 1rem; color: #ccc; line-height: 1.6; }

        .impact-section { padding: 80px 0; }
        .impact-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 3rem; }
        .impact-card { padding: 2rem; border: 1px solid transparent; background: #fff; }
        .impact-card h4 { font-size: 1.35rem; margin-bottom: 1rem; font-weight: bold; }
        .impact-card p { font-size: 1rem; color: #000; line-height: 1.6; }

        .diff-section { padding: 80px 0; }
        .diff-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
        .diff-card { padding: 2rem; border: 1px solid transparent; background: #fff; }
        .diff-card h4 { font-size: 1.25rem; margin-bottom: 1rem; font-weight: bold; }
        .diff-card p { font-size: 1rem; color: #000; line-height: 1.6; }

        /* CTA WITH FORM */
        .cta-section { padding: 100px 0; background: #000; color: #fff; border-top: 1px solid #fff; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
        .align-bottom { align-items: end; }
        .cta-title { font-size: 2.5rem; margin-bottom: 1.5rem; font-weight: normal; color: #000000ff; }
        .cta-desc { font-size: 1.1rem; color: #000000ff; max-width: 500px; line-height: 1.5; }

        .form-container { width: 100%; max-width: 450px; margin-left: auto; background: #fff; padding: 2rem; color: #000; border: 1px solid transparent; }
        .contact-form { display: flex; flex-direction: column; gap: 1rem; }
        .contact-form input[type="text"], .contact-form input[type="email"], .contact-form textarea { width: 100%; padding: 0.75rem; border: 1px solid transparent; font-family: sans-serif; font-size: 0.9rem; outline: none; background: #fff; color: #000; }
        .contact-form textarea { min-height: 100px; resize: none; }
        .submit-input { padding: 0.75rem 1.5rem; background: #000; color: #fff; border: 1px solid transparent; font-weight: bold; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px; cursor: pointer; }
        .submit-input:hover { background: #333; }

        @media (max-width: 1024px) {
          .grid-2, .cap-grid, .rails-grid, .impact-grid, .diff-grid { grid-template-columns: 1fr; gap: 3rem; }
          .form-container { margin-left: 0; }
        }
        @media (max-width: 768px) {
          .product-title, .section-title { font-size: 2.5rem; }
        }
      `}</style>
      </main>
   );
};

export default SentinelUI;
