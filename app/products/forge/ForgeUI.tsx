'use client';

import React from 'react';

const ForgeUI = () => {
   return (
      <main className="forge-page bg-white text-black">
         {/* HERO SECTION */}
         <section className="hero-section bg-black text-white">
            <div className="container hero-content text-left">
               <span className="eyebrow">Product / Forge</span>
               <h1 className="hero-title white">
                  Workflow infrastructure <br />
                  <span className="muted">for institutions that cannot rely on fragile processes.</span>
               </h1>
               <p className="hero-subtext">
                  Vinkura Forge converts manual, paper-heavy, and fragmented internal processes into dependable digital systems. From approvals and personnel workflows to operational administration.
               </p>
            </div>
         </section>

         {/* CORE PROBLEM SECTION */}
         <section className="info-section">
            <div className="container">
               <div className="grid-2">
                  <div>
                     <h2 className="section-headline">The backbone of institutions is not strategy. It is process.</h2>
                     <p className="body-text">
                        Every department has critical workflows—approvals, movement requests, personnel actions, and internal reporting. In many institutions, these still depend on paper movement, manual signatures, and person-dependent memory.
                     </p>
                     <p className="highlight-text">
                        Forge exists to fix that layer. We turn official logic into structured, auditable software.
                     </p>
                  </div>
                  <div className="list-box">
                     <h4 className="list-title">Operational Friction Points</h4>
                     <ul className="slash-list">
                        <li>Paper movement & manual signatures</li>
                        <li>Local spreadsheets & disconnected portals</li>
                        <li>Informal coordination</li>
                        <li>Duplicate data entry</li>
                     </ul>
                  </div>
               </div>
            </div>
         </section>

         {/* CAPABILITIES SECTION */}
         <section className="capabilities-section">
            <div className="container">
               <div className="feature-block border-b">
                  <div className="grid-2">
                     <div className="feature-text text-left">
                        <span className="label">Capability 01</span>
                        <h3 className="feature-title">Turn real workflows into durable systems</h3>
                        <p className="feature-desc">Instead of digitizing only the surface layer, Forge focuses on the real movement of work across people and offices—making it role-aware, traceable, and governable.</p>
                     </div>
                  </div>
               </div>

               <div className="feature-block border-b">
                  <div className="grid-2">
                     <div className="feature-text text-left">
                        <span className="label">Capability 02</span>
                        <h3 className="feature-title">Standardize process integrity</h3>
                        <p className="feature-desc">Forge reduces variability by enforcing structured approvals, permission boundaries, and audit logs. This improves both efficiency and official trust.</p>
                     </div>
                  </div>
               </div>

               <div className="feature-block border-b">
                  <div className="grid-2">
                     <div className="feature-text text-left">
                        <span className="label">Capability 03</span>
                        <h3 className="feature-title">Feed broadened intelligence</h3>
                        <p className="feature-desc">Forge creates structured, consistent operational data that powers supervisory dashboards and decision-support systems like Vinkura Sentinel.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* FINAL SECTION WITH BOTTOM RIGHT FORM */}
         <section className="deployment-section bg-black text-white">
            <div className="container">
               <div className="grid-2 align-bottom">
                  <div className="text-left">
                     <h2 className="final-headline">Modernize the backbone.</h2>
                     <p className="final-sub">Talk to Vinkura about Forge for administrative modernization and workflow infrastructure that departments will actually use.</p>
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
        .forge-page { font-family: sans-serif; overflow-x: hidden; width: 100%; color: #000; background: #fff; }
        .container { max-width: 1320px; margin: 0 auto; padding: 0 2rem; width: 100%; }
        .hero-section { padding-top: 120px; padding-bottom: 80px; color: #fff; background: #000; }
        .hero-title { font-size: 3rem; line-height: 1.1; margin: 1.5rem 0; color: #fff; }
        .muted { color: #888; }
        .hero-subtext { font-size: 1.1rem; color: #ccc; max-width: 800px; line-height: 1.5; font-weight: normal; }
        .eyebrow { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; color: #888; }
        .info-section { padding: 80px 0; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
        .align-bottom { align-items: end; }
        .text-left { text-align: left; }
        .section-headline { font-size: 2.2rem; line-height: 1.1; margin-bottom: 2rem; }
        .body-text, .feature-desc { font-size: 1rem; color: #000; line-height: 1.6; margin-bottom: 1.5rem; }
        .highlight-text { font-size: 1rem; font-weight: bold; color: #000; }
        .list-box { padding: 2rem; background: #fff; border: 1px solid transparent; }
        .list-title { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 1rem; color: #000; }
        .slash-list { list-style: none; padding: 0; margin: 0; }
        .slash-list li { font-size: 0.9rem; margin-bottom: 0.5rem; color: #000; }
        .slash-list li::before { content: "/ "; color: #000; }
        .capabilities-section { padding: 40px 0; }
        .feature-block { padding: 80px 0; border-bottom: 1px solid #000; }
        .border-b { border-bottom: 1px solid #000; }
        .label { display: block; font-size: 0.75rem; font-weight: bold; letter-spacing: 2px; text-transform: uppercase; color: #000; margin-bottom: 1.5rem; }
        .feature-title { font-size: 2rem; margin-bottom: 1.5rem; line-height: 1.2; }
        
        /* IMAGE PLACEHOLDERS */
        .feature-visual { width: 100%;  background: #fff; padding: 1rem;  border-radius: 16px; overflow: hidden; border: none;}
        .image-placeholder { margin: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; }
        .img-box { width: 100%; height: 250px; background: #f0f0f0; display: block; object-fit: cover; border-radius: 12px; border: none; }
        .image-placeholder figcaption { margin-top: 1rem; font-size: 0.75rem; color: #000; text-transform: uppercase; letter-spacing: 1px; text-align: center; font-weight: bold; }

        /* FORM */
        .deployment-section { padding: 100px 0; background: #000; color: #fff; border-top: 1px solid #fff; }
        .final-headline { font-size: 2.5rem; margin-bottom: 1.5rem; color: #fff; }
        .final-sub { font-size: 1rem; color: #fff; line-height: 1.5; max-width: 500px; }
        .form-container { width: 100%; max-width: 450px; margin-left: auto; background: #fff; padding: 2rem; color: #000; border: 1px solid transparent; }
        .contact-form { display: flex; flex-direction: column; gap: 1rem; }
        .contact-form input[type="text"], .contact-form input[type="email"], .contact-form textarea { width: 100%; padding: 0.75rem; border: 1px solid transparent; font-family: sans-serif; font-size: 0.9rem; outline: none; background: #fff; color: #000; }
        .contact-form textarea { min-height: 100px; resize: none; }
        .submit-input { padding: 0.75rem 1.5rem; background: #000; color: #fff; border: 1px solid transparent; font-weight: bold; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px; cursor: pointer; }
        .submit-input:hover { background: #333; }

        @media (max-width: 1024px) {
           .grid-2 { grid-template-columns: 1fr; gap: 3rem; }
           .form-container { margin-left: 0; }
        }
      `}</style>
      </main>
   );
};

export default ForgeUI;
