'use client';

import React from 'react';

const EMaalkhanaUI = () => {
   return (
      <main className="maalkhana-page bg-white text-black text-left">
         {/* HERO SECTION */}
         <section className="hero-section text-left">
            <div className="container grid-2">
               <div className="hero-text">
                  <span className="eyebrow">Strategic Integrity Layer</span>
                  <h1 className="hero-title">E-Maalkhana</h1>
                  <p className="hero-desc">
                     The digital spine of official evidence management. <br />
                     Trace every movement. Verify every touch. Secure every asset.
                  </p>
               </div>
               <div className="hero-visual">
                  <figure className="image-placeholder">
                     <img src="/2.png" alt="Operational Topology" className="img-box" />
                  </figure>
               </div>
            </div>
         </section>

         {/* CORE MISSION */}
         <section className="mission-section">
            <div className="container">
               <div className="mission-content border-b">
                  <h2 className="section-title">Physical assets. Digital accountability.</h2>
                  <p className="body-text">
                     E-Maalkhana replaces the ambiguity of manual registers with a hardened digital registry. From seized property to tactical equipment, ensure the physical reality on the ground matches the digital truth in your records.
                  </p>
               </div>
            </div>
         </section>

         {/* CAPABILITIES */}
         <section className="capabilities-section">
            <div className="container">
               <div className="cap-grid">
                  {[
                     { title: "Lifecycle Tracking", desc: "Tag every asset at the point of entry and track movement via integrated scans." },
                     { title: "Digital Custody Log", desc: "An immutable history of every individual who touched, moved, or verified an asset." },
                     { title: "Condition Monitoring", desc: "Automated alerts for assets requiring maintenance, inspection, or legal disposal." },
                     { title: "Audit Ready Reporting", desc: "Generate court-ready chain of custody reports in seconds with cryptographic proof." },
                     { title: "Spatial Management", desc: "Intelligent storage allocation based on asset type, sensitivity, and shelf availability." },
                     { title: "Integrated Disposal", desc: "End-to-end workflow management for auctions, returns, or evidence destruction." }
                  ].map((cap, i) => (
                     <div key={i} className="cap-card">
                        <h4>{cap.title}</h4>
                        <p>{cap.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* THE VINKURA ADVANTAGE */}
         <section className="advantage-section bg-black text-white">
            <div className="container grid-2">
               <div className="adv-text">
                  <h2 className="final-headline">Deploy with Sovereign Control.</h2>
                  <p className="adv-body">
                     E-Maalkhana is designed to run in air-gapped station environments via Vinkura Orbit, ensuring that even if connectivity fails, the integrity of your evidence records remains unbroken.
                  </p>
                  <div className="adv-list">
                     <div className="adv-item"><span>/</span> On-prem edge readiness</div>
                     <div className="adv-item"><span>/</span> Verification integration</div>
                     <div className="adv-item"><span>/</span> Real-time cross-station visibility</div>
                  </div>
               </div>
               <div className="adv-visual">
                  <figure className="image-placeholder dark-border">
                     <img src="/image.png" alt="Storage Monitoring" className="img-box dark" />
                     <figcaption className="white-fig">Storage Monitoring Visual</figcaption>
                  </figure>
               </div>
            </div>
         </section>

         {/* FINAL CTA WITH FORM */}
         <section className="contact-section border-t bg-black text-white">
            <div className="container grid-2 align-bottom">
               <div className="adv-text">
                  <h2 className="final-headline">Request a Briefing</h2>
                  <p className="adv-body-bottom">Discuss deployment, workflow fit, and operational requirements with the Vinkura team.</p>
               </div>
               <div className="form-container">
                  <form action="https://formsubmit.co/founder@vinkura.in" method="POST" className="contact-form">
                     <input type="text" name="name" placeholder="Name" required />
                     <input type="email" name="email" placeholder="Work Email" required />
                     <input type="text" name="organization" placeholder="Department / Agency" required />
                     <textarea name="usecase" placeholder="Brief use case" required></textarea>
                     <input type="submit" value="Submit Request" className="submit-input" />
                  </form>
               </div>
            </div>
         </section>

         <style jsx>{`
        .maalkhana-page { font-family: sans-serif; overflow-x: hidden; width: 100%; color: #000; background: #fff; }
        .text-left { text-align: left; }
        .container { max-width: 1320px; margin: 0 auto; padding: 0 2rem; width: 100%; }
        
        .hero-section { padding: 140px 0 80px; border-bottom: 1px solid #000; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
        .align-bottom { align-items: end; }
        .eyebrow { font-size: 0.75rem; font-weight: bold; text-transform: uppercase; color: #000; letter-spacing: 2px; display: block; margin-bottom: 1.5rem; }
        .hero-title { font-size: 4rem; line-height: 1.1; margin: 0 0 2rem; font-weight: normal; }
        .hero-desc { font-size: 1.15rem; color: #000; line-height: 1.5; font-weight: normal; }
        .adv-body-bottom {font-size: 1.1rem; color: #000000ff; margin-bottom: 2rem; line-height: 1.6;}
        .image-placeholder { margin: 0; display: flex; flex-direction: column; align-items: stretch; justify-content: center; width: 100%;  padding: 1rem; background: #fff;  border-radius: 16px; overflow: hidden; border: none;}
        .image-placeholder.dark-border { border-color: #fff; background: #000; }
        .img-box { width: 100%; height: 250px; background: #f0f0f0; display: block; object-fit: cover; border-radius: 12px; border: none; }
        .img-box.dark { background: #222; border-radius: 12px; border: none; }
        .image-placeholder figcaption { margin-top: 1rem; font-size: 0.75rem; color: #000; text-transform: uppercase; letter-spacing: 1px; text-align: center; font-weight: bold; }
        .image-placeholder figcaption.white-fig { color: #fff; }
        .mission-section { padding: 80px 0; }
        .border-b { border-bottom: 1px solid #000; padding-bottom: 4rem; }
        .section-title { font-size: 2.5rem; line-height: 1.1; margin-bottom: 2rem; font-weight: normal; }
        .body-text { font-size: 1.15rem; color: #000; line-height: 1.6; max-width: 800px; }
        
        .capabilities-section { padding: 40px 0 80px; }
        .cap-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3rem; }
        .cap-card { border: 1px solid transparent; padding: 2rem; background: #fff; }
        .cap-card h4 { font-size: 1.1rem; font-weight: bold; margin-bottom: 1rem; color: #000; }
        .cap-card p { font-size: 0.95rem; color: #000; line-height: 1.6; }
        
        .advantage-section { padding: 100px 0; background: #000; color: #fff; border-top: 1px solid #000; }
        .final-headline { font-size: 2.5rem; margin-bottom: 1.5rem; font-weight: normal; }
        .adv-body { font-size: 1.1rem; color: #ffffffff; margin-bottom: 2rem; line-height: 1.6; }

        .adv-list { display: flex; flex-direction: column; gap: 1rem; }
        .adv-item { font-size: 1rem; color: #fff; font-weight: bold; }
        .adv-item span { color: #fff; margin-right: 1rem; font-weight: bold; }
        
        /* FORM SECTION */
        .contact-section { padding: 80px 0 100px; }
        .border-t { border-top: 1px solid #fff; }
        .form-container { width: 100%; max-width: 450px; margin-left: auto; background: #fff; padding: 2rem; color: #000; border: 1px solid transparent; }
        .contact-form { display: flex; flex-direction: column; gap: 1rem; }
        .contact-form input[type="text"], .contact-form input[type="email"], .contact-form textarea { width: 100%; padding: 0.75rem; border: 1px solid transparent; font-family: sans-serif; font-size: 0.9rem; outline: none; background: #fff; color: #000; }
        .contact-form textarea { min-height: 100px; resize: none; }
        .submit-input { padding: 0.75rem 1.5rem; background: #000; color: #fff; border: 1px solid transparent; font-weight: bold; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px; cursor: pointer; }
        .submit-input:hover { background: #333; }

        @media (max-width: 1024px) {
           .grid-2, .cap-grid { grid-template-columns: 1fr; gap: 3rem; }
           .form-container { margin-left: 0; }
        }
        @media (max-width: 768px) {
           .hero-title { font-size: 2.5rem; }
           .section-title { font-size: 2rem; }
        }
      `}</style>
      </main>
   );
};

export default EMaalkhanaUI;
