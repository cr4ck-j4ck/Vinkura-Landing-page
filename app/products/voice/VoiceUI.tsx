'use client';

import React from 'react';

const VoiceUI = () => {
  return (
    <main className="voice-page bg-white text-black">
      {/* HERO SECTION */}
      <section className="hero-section bg-black text-white text-left">
        <div className="container">
          <span className="eyebrow">Product / Voice</span>
          <h1 className="hero-title white">
            Voice-native access <br />
            <span className="muted">for frontline operations.</span>
          </h1>
          <p className="hero-subtext">
            Vinkura Voice enables frontline teams to interact with systems using natural speech—reducing digital friction and making mission-critical workflows accessible in real operational conditions.
          </p>
        </div>
      </section>

      {/* CORE PROBLEM SECTION */}
      <section className="info-section text-left">
        <div className="container">
          <div className="grid-2">
            <div>
              <h2 className="section-headline">Software must adapt to the user, not the other way around.</h2>
              <p className="body-text">
                In the field, during movement, or under pressure, typing is slow and context switches are costly. Voice becomes more than convenience; it becomes an operational interface where speed matters more than UI complexity.
              </p>
            </div>
            <div className="list-box">
              <h4 className="list-title">Frontline Constraints</h4>
              <ul className="slash-list">
                <li>Hands-occupied scenarios</li>
                <li>Digital entry friction in the field</li>
                <li>High environmental noise</li>
                <li>Multilingual requirement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES SECTION */}
      <section className="capabilities-section text-left">
        <div className="container">
           <div className="feature-block border-b">
              <div className="grid-2">
                 <div className="feature-text">
                    <span className="label">Capability 01</span>
                    <h3 className="feature-title">Natural-language queries</h3>
                    <p className="feature-desc">Instead of navigating screens, users can retrieve records, check duty status, or fetch case-linked references in the way they naturally think and speak.</p>
                 </div>
                 <div className="feature-visual">
                    <figure className="image-placeholder">
                       <img src="https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?q=80&w=2000" alt="Voice Intent Mapping" className="img-box" />
                       <figcaption>Voice Intent Mapping</figcaption>
                    </figure>
                 </div>
              </div>
           </div>

           <div className="feature-block border-b">
              <div className="grid-2">
                 <div className="feature-visual order-mobile-2">
                    <figure className="image-placeholder">
                       <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2000" alt="Edge-optimized recording" className="img-box" />
                       <figcaption>Edge-optimized recording</figcaption>
                    </figure>
                 </div>
                 <div className="feature-text order-mobile-1">
                    <span className="label">Capability 02</span>
                    <h3 className="feature-title">Faster field reporting</h3>
                    <p className="feature-desc">Capture spoken notes and incident details when they happen—not later from memory. Voice turns spoken observations into structured inputs for the official record.</p>
                 </div>
              </div>
           </div>

           <div className="feature-block">
              <div className="grid-2">
                 <div className="feature-text">
                    <span className="label">Capability 03</span>
                    <h3 className="feature-title">Noisy-environment resilience</h3>
                    <p className="feature-desc">Built for Indian field conditions. Voice accounts for domain-specific terminology, varied accents, and high-noise environments without brittle assumptions.</p>
                 </div>
                 <div className="feature-visual">
                    <figure className="image-placeholder">
                       <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000" alt="Noise-filtration visualization" className="img-box" />
                       <figcaption>Noise-filtration visualization</figcaption>
                    </figure>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* FINAL SECTION WITH FORM */}
      <section className="deployment-section bg-black text-white text-left">
        <div className="container">
           <div className="grid-2 align-bottom">
              <div>
                 <h2 className="final-headline">Bring software to the front.</h2>
                 <p className="final-sub">Talk to Vinkura about voice-native workflows for field operations and mission-critical information retrieval.</p>
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
        .voice-page { font-family: sans-serif; overflow-x: hidden; width: 100%; color: #000; background: #fff; }
        .container { max-width: 1320px; margin: 0 auto; padding: 0 2rem; width: 100%; }
        .text-left { text-align: left; }
        .hero-section { padding-top: 140px; padding-bottom: 80px; background: #000; color: #fff; border-bottom: 1px solid #000; }
        .eyebrow { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; color: #888; display: block; margin-bottom: 1.5rem; }
        .hero-title { font-size: 4rem; line-height: 1.1; margin-bottom: 2rem; color: #fff; font-weight: normal; }
        .muted { color: #888; }
        .hero-subtext { font-size: 1.25rem; color: #fff; max-width: 800px; line-height: 1.5; font-weight: normal; }
        
        .info-section { padding: 80px 0; border-bottom: 1px solid #000; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
        .align-bottom { align-items: end; }
        .section-headline { font-size: 2.5rem; line-height: 1.1; margin-bottom: 2rem; font-weight: normal; }
        .body-text, .feature-desc { font-size: 1.1rem; color: #000; line-height: 1.6; margin-bottom: 1.5rem; }
        
        .list-box { padding: 2rem; background: #fff; border: 1px solid transparent; }
        .list-title { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 1rem; color: #000; font-weight: bold; }
        .slash-list { list-style: none; padding: 0; margin: 0; }
        .slash-list li { font-size: 0.95rem; margin-bottom: 0.5rem; color: #000; }
        .slash-list li::before { content: "/ "; color: #000; font-weight: bold; }
        
        .capabilities-section { padding: 40px 0; border-bottom: 1px solid #000; }
        .feature-block { padding: 80px 0; border-bottom: 1px solid #000; }
        .border-b { border-bottom: 1px solid #000; }
        .label { display: block; font-size: 0.75rem; font-weight: bold; letter-spacing: 2px; text-transform: uppercase; color: #000; margin-bottom: 1.5rem; }
        .feature-title { font-size: 2rem; margin-bottom: 1.5rem; line-height: 1.1; font-weight: normal; }
        
        /* IMAGE PLACEHOLDERS */
        .feature-visual { width: 100%;  background: #fff; padding: 1rem;  border-radius: 16px; overflow: hidden; border: none;}
        .image-placeholder { margin: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; }
        .img-box { width: 100%; height: 250px; background: #f0f0f0; display: block; object-fit: cover; border-radius: 12px; border: none; }
        .image-placeholder figcaption { margin-top: 1rem; font-size: 0.75rem; color: #000; text-transform: uppercase; letter-spacing: 1px; text-align: center; font-weight: bold; }

        /* FORM */
        .deployment-section { padding: 100px 0; background: #000; color: #fff; border-top: 1px solid #000; }
        .final-headline { font-size: 2.5rem; margin-bottom: 1.5rem; color: #fff; font-weight: normal; }
        .final-sub { font-size: 1.1rem; color: #fff; line-height: 1.5; max-width: 500px; }
        
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
        @media (max-width: 768px) {
           .hero-title { font-size: 2.5rem; }
           .section-headline { font-size: 2rem; }
           .feature-visual.order-mobile-2 { order: 2; }
           .feature-text.order-mobile-1 { order: 1; }
        }
      `}</style>
    </main>
  );
};

export default VoiceUI;
