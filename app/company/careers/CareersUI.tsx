'use client';

import React from 'react';

const CareersUI = () => {
  return (
    <main className="careers-page bg-white text-black">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-content">
          <div className="hero-top">
            <span className="eyebrow">Join the Mission</span>
            <h1 className="hero-title">Build systems that matter <br /> in the real world</h1>
            <p className="hero-subtext">
              Vinkura builds software for public safety, governance, and sovereign operations. We hire engineers, designers, and operators who want to work on difficult systems where reliability, accountability, and adoption matter.
            </p>
            <div className="hero-ctas">
              <a href="https://career.vinkura.in" className="primary-btn" target="_blank" rel="noopener noreferrer">View Open Roles</a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY VINKURA */}
      <section className="why-section bg-[#fafafa] border-t border-b">
        <div className="container">
          <h2 className="section-label">Why Vinkura</h2>
          <div className="why-grid">
            <div className="why-card">
              <h4>High-consequence software</h4>
              <p>Build systems used in environments where decisions, accountability, and operational continuity matter.</p>
            </div>
            <div className="why-card">
              <h4>Real deployment complexity</h4>
              <p>Work across field constraints, legacy workflows, low-connectivity environments, and official adoption challenges.</p>
            </div>
            <div className="why-card">
              <h4>Small team, serious ownership</h4>
              <p>Engineers and operators at Vinkura work close to product, deployment, and decision-making.</p>
            </div>
            <div className="why-card">
              <h4>Built in India, for real institutions</h4>
              <p>We are building software shaped by the realities of Indian public systems, not generic enterprise abstractions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHO WE ARE LOOKING FOR */}
      <section className="who-section">
        <div className="container">
          <h2 className="section-label">Who we're looking for</h2>
          <div className="criteria-grid">
            <div className="criteria-block">
              <span className="c-num">01</span>
              <h4>Engineers who ship under ambiguity</h4>
              <p>Deploying at the sovereign edge requires more than just clean code; it requires understanding the domain.</p>
            </div>
            <div className="criteria-block">
              <span className="c-num">02</span>
              <h4>Designers who understand operational UI</h4>
              <p>We don't build dashboards for vanity; we build interfaces for command velocity and field recordkeeping.</p>
            </div>
            <div className="criteria-block">
              <span className="c-num">03</span>
              <h4>Builders who care about reliability over hype</h4>
              <p>Our systems cannot fail gracefully. We prioritize architectural stability and predictable performance.</p>
            </div>
            <div className="criteria-block">
              <span className="c-num">04</span>
              <h4>Comfortable with field iteration</h4>
              <p>We believe the best version of the system is shaped by friction in the real world, not meetings in a vacuum.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW WE WORK */}
      <section id="how-we-work" className="how-section">
        <div className="container">
          <h2 className="section-label">How We Work</h2>
          <div className="principles-row">
            <div className="principle-item">
              <h4>Operational reality first</h4>
              <p>We optimize for systems that survive deployment, not demos.</p>
            </div>
            <div className="principle-item">
              <h4>Ownership without theater</h4>
              <p>Small teams, direct accountability, clear responsibility.</p>
            </div>
            <div className="principle-item">
              <h4>Official thinking</h4>
              <p>Adoption, trust, and reliability matter more than short-term launch velocity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA WITH FORM */}
      <section className="final-cta bg-white text-black">
        <div className="container grid-2 align-bottom">
          <div className="cta-head">
            <h2 className="final-headline">Bring your best <br /> to the front line.</h2>
            <p className="final-desc">We are always looking for individuals who understand the mission. Send us a note about your background and how you want to contribute.</p>
          </div>
          <div className="form-container">
            <form action="https://formsubmit.co/founder@vinkura.in" method="POST" className="contact-form">
               <input type="text" name="name" placeholder="Full Name" required />
               <input type="email" name="email" placeholder="Work Email" required />
               <input type="text" name="profile" placeholder="LinkedIn / Portfolio / GitHub" required />
               <textarea name="mission" placeholder="How do you want to contribute to Vinkura?" required></textarea>
               <input type="submit" value="Submit Expression of Interest" className="submit-input" />
            </form>
          </div>
        </div>
      </section>

      <style jsx>{`
        .careers-page { font-family: var(--font-body); overflow-x: hidden; }
        .container { max-width: 1320px; margin: 0 auto; padding: 0 4rem; width: 100%; }
        
        .hero-section { padding: 160px 0 100px; }
        .eyebrow { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 3px; color: #999; display: block; margin-bottom: 2rem; }
        .hero-title { 
           font-family: var(--font-hero); 
           font-size: clamp(2.5rem, 6vw, 4.5rem); 
           line-height: 1.05; 
           letter-spacing: -3px; 
           font-weight: 500; 
           margin-bottom: 3rem;
           animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes fadeUp {
           from { opacity: 0; transform: translateY(30px); }
           to { opacity: 1; transform: translateY(0); }
        }

        .hero-subtext { font-size: 1.4rem; line-height: 1.5; color: #444; max-width: 800px; margin-bottom: 3.5rem; font-weight: 300; }
        .hero-ctas { display: flex; gap: 1.5rem; }
        .primary-btn { padding: 1.25rem 2.5rem; background: #000; color: #fff; text-decoration: none; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; font-size: 0.75rem; transition: 0.3s; border-radius: 8px; }
        .primary-btn:hover { background: #333; }

        .section-label { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 3px; color: #999; margin-bottom: 3rem; display: block; }

        .why-section { padding: 100px 0; }
        .why-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; }
        .why-card h4 { font-family: var(--font-hero); font-size: 1.5rem; margin-bottom: 1.25rem; letter-spacing: -1px; }
        .why-card p { font-size: 0.95rem; line-height: 1.6; color: #555; }

        .who-section { padding: 120px 0; border-bottom: 1px solid #eee; }
        .criteria-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; }
        .c-num { font-size: 0.8rem; font-weight: 700; color: #ccc; margin-bottom: 1.5rem; display: block; }
        .criteria-block h4 { font-family: var(--font-hero); font-size: 1.25rem; margin-bottom: 1rem; line-height: 1.3; }
        .criteria-block p { font-size: 0.9rem; line-height: 1.6; color: #666; }

        .how-section { padding: 120px 0; }
        .principles-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4rem; }
        .principle-item h4 { font-family: var(--font-hero); font-size: 1.5rem; margin-bottom: 1.5rem; letter-spacing: -1px; }
        .principle-item p { font-size: 1rem; line-height: 1.6; color: #555; }

        /* FINAL CTA WITH FORM */
        .final-cta { padding: 120px 0; border-top: 1px solid #eee; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
        .align-bottom { align-items: end; }
        .final-headline { font-family: var(--font-hero); font-size: 3.5rem; letter-spacing: -2px; margin-bottom: 1.5rem; line-height: 1.1; }
        .final-desc { font-size: 1.15rem; color: #666; max-width: 500px; line-height: 1.6; }
        
        .form-container { width: 100%; max-width: 450px; margin-left: auto; background: #fafafa; padding: 3rem; color: #000; border-radius: 20px; border: 1px solid #eee; }
        .contact-form { display: flex; flex-direction: column; gap: 1.25rem; }
        .contact-form input[type="text"], .contact-form input[type="email"], .contact-form textarea { width: 100%; padding: 1rem; border: 1px solid #ddd; font-family: inherit; font-size: 0.95rem; outline: none; background: #fff; color: #000; border-radius: 8px; }
        .contact-form textarea { min-height: 120px; resize: none; }
        .submit-input { padding: 1.25rem 2rem; background: #000; color: #fff; border: none; font-weight: bold; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 2px; cursor: pointer; border-radius: 8px; transition: 0.3s; }
        .submit-input:hover { background: #333; }

        @media (max-width: 1200px) {
          .why-grid, .criteria-grid, .grid-2 { grid-template-columns: repeat(2, 1fr); }
          .principles-row { grid-template-columns: 1fr; gap: 3rem; }
          .form-container { margin: 2rem 0 0; }
        }
        @media (max-width: 768px) {
          .container { padding: 0 1.5rem; }
          .hero-section { padding: 100px 0 60px; }
          .hero-title { font-size: 2.5rem; }
          .why-grid, .criteria-grid, .grid-2 { grid-template-columns: 1fr; }
          .final-headline { font-size: 2.2rem; }
        }
      `}</style>
    </main>
  );
};

export default CareersUI;
