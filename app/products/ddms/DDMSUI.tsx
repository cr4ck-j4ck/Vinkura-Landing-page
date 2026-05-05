'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const DDMSUI = () => {
  const [activeTab, setActiveTab] = useState('Police');

  const industries = [
    {
      name: 'Police',
      label: 'Police & Law Enforcement',
      impact: 'Manage district-wide personnel allocation with real-time shift discipline and deployment logs.'
    },
    {
      name: 'Disaster',
      label: 'Disaster Response (NDRF/SDRF)',
      impact: 'Rapidly mobilize and track specialized units across disaster zones with precise skill-matching.'
    },
    {
      name: 'Events',
      label: 'Large Events (Kumbh, IPL, Yatra)',
      impact: 'Coordinate thousands of personnel across high-density zones with dynamic sector-based allocation.'
    },
    {
      name: 'Admin',
      label: 'District Administration',
      impact: 'Replace manual registers with a unified intelligence layer for inter-departmental deployments.'
    },
    {
      name: 'Security',
      label: 'Private Security',
      impact: 'Enforce operational standards and audit trails across large-scale industrial or campus security.'
    }
  ];

  const capabilities = [
    {
      title: "Unified Personnel Profile",
      desc: "One unified record for skills, certifications, and service history.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
    },
    {
      title: "Dynamic Allocation Engine",
      desc: "Automated rosters based on priority, constraints, and operational needs.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
    },
    {
      title: "Real-Time Field Sync",
      desc: "Instant duty orders and location-aware check-ins for field units.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
    },
    {
      title: "Command Dashboard",
      desc: "Live visibility into force distribution and sector-wide operational state.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
    },
    {
      title: "Fatigue Monitoring",
      desc: "Intelligent shift rotation to prevent burnout and maintain alertness.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
    },
    {
      title: "Audit & Compliance Logs",
      desc: "Tamper-proof digital records of every deployment and shift transition.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
    }
  ];

  const faqs = [
    {
      q: "Is DDMS deployable on government infrastructure?",
      a: "Yes. DDMS is built for sovereign infrastructure and can be deployed entirely on-premise within your department's secure data centers."
    },
    {
      q: "Does it work offline / low network areas?",
      a: "The system is designed for field resilience. It features local caching and automatic synchronization once a network connection is established."
    },
    {
      q: "Can it integrate with existing systems?",
      a: "DDMS features a robust API layer for integration with legacy HR systems, attendance hardware, and command-and-control software."
    },
    {
      q: "Is data secure?",
      a: "We employ enterprise-grade encryption for data at rest and in transit. Role-based access control (RBAC) ensures only authorized personnel can view or edit rosters."
    }
  ];

  return (
    <main className="ddms-redesign">
      {/* 1. HERO SECTION (JARVIS INSPIRED) */}
      <section className="hero-jarvis">
        <div className="hero-background-visual">
           <img src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2000" alt="Security Infrastructure" className="bg-image" />
           <div className="hero-overlay" />
        </div>
        
        <div className="container">
          <div className="hero-grid-jarvis">
            <div className="hero-content-jarvis">
              <h1 className="hero-title-jarvis">Dynamic Deployment. <br />Real-Time Control.</h1>
              <p className="hero-subtitle-jarvis">
                Replace static rosters with an intelligence-driven system that ensures the right personnel are deployed at the right place, at the right time.
              </p>
              <p className="hero-support-jarvis">
                Reduce delays. Eliminate misallocation. Enforce accountability.
              </p>
              
              <div className="hero-ctas-jarvis">
                <Link href="#contact" className="btn-jarvis outline">
                  Watch Demo Video <span className="arrow">→</span>
                </Link>
                <Link href="#contact" className="btn-jarvis outline">
                  Book a Personalized Demo <span className="arrow">→</span>
                </Link>
              </div>

              <div className="hero-partners">
                <div className="partner-logo">
                  <span className="partner-name">SECURE</span>
                </div>
                <div className="partner-divider" />
                <div className="partner-logo">
                  <span className="partner-name">SOVEREIGN</span>
                </div>
                <div className="partner-divider" />
                <div className="partner-logo">
                  <span className="partner-name">SCALABLE</span>
                </div>
                <div className="partner-divider" />
                <div className="partner-logo">
                  <span className="partner-name">GOVT-GRADE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / INFRA SECTION */}
      <section className="trust-bar">
        <div className="container">
          <div className="trust-content">
            <span className="trust-label">Built for Government & Critical Operations</span>
            <div className="trust-points">
              <span>Secure</span>
              <span className="dot">•</span>
              <span>Sovereign</span>
              <span className="dot">•</span>
              <span>Scalable</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT IS DDMS */}
      <section className="what-is section-padding">
        <div className="container grid-2">
          <div className="what-text">
            <h2 className="section-title">What is DDMS</h2>
            <p>
              DDMS is a real-time personnel deployment system designed for departments where operational discipline matters. 
              It transforms fragmented, manual roster systems into a centralized, intelligence-driven command layer.
            </p>
            <p className="mt-4">
              By combining personnel intelligence, deployment logic, and real-time field sync, DDMS ensures optimal workforce utilization, faster response times, and complete operational visibility.
            </p>
          </div>
          <div className="what-visual">
             <div className="visual-card shadow-soft">
               <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200" alt="Deployment Logic" />
             </div>
          </div>
        </div>
      </section>

      {/* 4. WHY DDMS */}
      <section className="why-ddms section-padding bg-light">
        <div className="container">
          <div className="grid-3">
            <div className="why-card">
              <span className="card-tag">Problem → Outcome</span>
              <h3>From Chaos to Control</h3>
              <p>Manual systems evolved into real-time deployment intelligence, eliminating fragmented decision making.</p>
            </div>
            <div className="why-card">
              <span className="card-tag">Efficiency</span>
              <h3>Faster Operational Response</h3>
              <p>Convert multi-hour roster planning into minutes of data-driven decision making for urgent deployments.</p>
            </div>
            <div className="why-card">
              <span className="card-tag">Governance</span>
              <h3>Accountability Built-In</h3>
              <p>Eliminate blind spots with immutable audit trails and live visibility into force distribution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CORE CAPABILITIES */}
      <section className="capabilities section-padding">
        <div className="container">
          <h2 className="section-title text-center mb-5">Core Capabilities</h2>
          <div className="grid-3">
            {capabilities.map((cap, i) => (
              <div key={i} className="cap-card">
                <div className="cap-icon">{cap.icon}</div>
                <h3>{cap.title}</h3>
                <p>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OPERATIONAL IMPACT */}
      <section className="impact section-padding bg-black text-white" id="impact">
        <div className="container">
          <h2 className="section-title text-white">Operational Impact</h2>
          <div className="impact-grid mt-5">
            <div className="impact-item">
              <span className="impact-val">80%</span>
              <p>Reduce deployment time</p>
            </div>
            <div className="impact-item">
              <span className="impact-val">100%</span>
              <p>Skill-role matching accuracy</p>
            </div>
            <div className="impact-item">
              <span className="impact-val">Live</span>
              <p>Visibility across all units</p>
            </div>
            <div className="impact-item">
              <span className="impact-val">Secure</span>
              <p>Tamper-proof operational logs</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. USE CASES */}
      <section className="use-cases section-padding">
        <div className="container">
          <h2 className="section-title">Industries & Use Cases</h2>
          <div className="tabs-container">
            <div className="tabs">
              {industries.map((ind) => (
                <button 
                  key={ind.name}
                  className={`tab-btn ${activeTab === ind.name ? 'active' : ''}`}
                  onClick={() => setActiveTab(ind.name)}
                >
                  {ind.label}
                </button>
              ))}
            </div>
            <div className="tab-content card-soft">
              <p>{industries.find(i => i.name === activeTab)?.impact}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CASE STUDIES */}
      <section className="case-studies section-padding bg-light">
        <div className="container">
          <h2 className="section-title">Official Deployments</h2>
          <div className="grid-2 mt-4">
            <div className="success-card">
              <span className="success-tag">Amarnath Yatra</span>
              <h3>High-Risk Deployment</h3>
              <p>Managed large-scale deployment across high-risk terrain with real-time visibility and shift discipline for thousands of personnel.</p>
            </div>
            <div className="success-card">
              <span className="success-tag">Bareilly District</span>
              <h3>Digital Modernization</h3>
              <p>Replaced manual registers with a digital allocation system, reducing deployment delays and improving supervisory oversight.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. WHY IT MATTERS */}
      <section className="why-it-matters section-padding text-center">
        <div className="container">
          <div className="emotional-box">
            <h2 className="big-title">In critical operations,<br />delays cost control.</h2>
            <div className="emotional-points">
               <p>Misallocation costs safety.</p>
               <p>Lack of visibility costs accountability.</p>
            </div>
            <h3 className="final-punch">DDMS eliminates all three.</h3>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="faq section-padding border-t">
        <div className="container">
          <h2 className="section-title mb-5">Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <h4>{faq.q}</h4>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="final-cta section-padding bg-black text-white" id="contact">
        <div className="container text-center">
          <h2 className="final-title">Take control of your workforce.</h2>
          <p className="final-subtitle">Deploy smarter. Respond faster.</p>
          <div className="mt-5">
             <Link href="mailto:founder@vinkura.in" className="btn-primary-large">Book a Demo</Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .ddms-redesign {
          background: #fff;
          color: #111;
          font-family: var(--font-body);
        }
        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 4rem;
        }
        .section-padding {
          padding: 10rem 0;
        }
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }
        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }
        .bg-light {
          background: #fafafa;
        }
        .bg-black {
          background: #000;
        }
        .text-white {
          color: #fff;
        }
        .border-t {
          border-top: 1px solid #eee;
        }

        /* JARVIS HERO */
        .hero-jarvis {
          position: relative;
          height: 90vh;
          min-height: 700px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #000;
          color: #fff;
        }
        .hero-background-visual {
          position: absolute;
          top: 0;
          right: 0;
          width: 65%;
          height: 100%;
          z-index: 1;
        }
        .bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, #000 30%, transparent 80%);
          z-index: 2;
        }
        .hero-grid-jarvis {
          position: relative;
          z-index: 3;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
        }
        .hero-content-jarvis {
          max-width: 750px;
        }
        .hero-title-jarvis {
          font-family: var(--font-hero);
          font-size: 4.2rem;
          line-height: 1.1;
          font-weight: 500;
          letter-spacing: -2px;
          margin-bottom: 2rem;
        }
        .hero-subtitle-jarvis {
          font-size: 1.25rem;
          line-height: 1.5;
          opacity: 0.9;
          margin-bottom: 1rem;
          max-width: 600px;
        }
        .hero-support-jarvis {
          font-size: 1rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 3.5rem;
          color: #fff;
        }
        .hero-ctas-jarvis {
          display: flex;
          gap: 1rem;
          margin-bottom: 4rem;
        }
        .btn-jarvis {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1.8rem;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s;
          text-transform: none;
        }
        .btn-jarvis.outline {
          border: 1px solid rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
        }
        .btn-jarvis.outline:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: #fff;
        }
        .arrow {
          font-size: 1.1rem;
          transition: transform 0.3s;
        }
        .btn-jarvis:hover .arrow {
          transform: translateX(4px);
        }

        .hero-partners {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          opacity: 0.7;
        }
        .partner-name {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .partner-divider {
          height: 20px;
          width: 1px;
          background: rgba(255, 255, 255, 0.2);
        }

        /* Trust Bar */
        .trust-bar {
          padding: 3rem 0;
          border-top: 1px solid #eee;
          border-bottom: 1px solid #eee;
        }
        .trust-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .trust-label {
          font-size: 0.8rem;
          font-weight: 700;
          color: #999;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .trust-points {
          display: flex;
          gap: 1.5rem;
          font-weight: 600;
          color: #333;
        }
        .dot {
          color: #ddd;
        }

        /* Sections */
        .section-title {
          font-family: var(--font-hero);
          font-size: 3.5rem;
          letter-spacing: -2px;
          margin-bottom: 2.5rem;
          line-height: 1.1;
        }
        .what-text p {
          font-size: 1.25rem;
          line-height: 1.6;
          color: #444;
        }

        /* Cards */
        .why-card {
          background: #fff;
          padding: 3rem;
          border-radius: 24px;
          border: 1px solid #eee;
          transition: all 0.3s;
        }
        .why-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
        }
        .card-tag {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #999;
          display: block;
          margin-bottom: 1.5rem;
        }
        .why-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .why-card p {
          color: #666;
          line-height: 1.5;
        }

        .cap-card {
          padding: 3rem;
          background: #fafafa;
          border-radius: 24px;
          transition: all 0.3s;
        }
        .cap-card:hover {
          background: #f0f0f0;
        }
        .cap-icon {
          color: #000;
          margin-bottom: 2rem;
        }
        .cap-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
        }
        .cap-card p {
          font-size: 0.95rem;
          color: #666;
          line-height: 1.5;
        }

        /* Impact */
        .impact-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 4rem;
        }
        .impact-val {
          font-family: var(--font-hero);
          font-size: 5rem;
          font-weight: 500;
          display: block;
          letter-spacing: -4px;
          margin-bottom: 1rem;
        }
        .impact-item p {
          font-size: 1.1rem;
          font-weight: 300;
          color: #aaa;
        }

        /* Tabs */
        .tabs {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 3rem;
          border-bottom: 1px solid #eee;
          padding-bottom: 1rem;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .tabs::-webkit-scrollbar { display: none; }
        .tab-btn {
          white-space: nowrap;
          padding: 0.75rem 0;
          background: transparent;
          border: none;
          font-size: 1rem;
          font-weight: 600;
          color: #999;
          cursor: pointer;
          transition: all 0.3s;
          border-bottom: 2px solid transparent;
        }
        .tab-btn.active {
          color: #000;
          border-bottom-color: #000;
        }
        .tab-content {
          padding: 4rem;
          background: #f7f7f7;
          border-radius: 24px;
          font-size: 2rem;
          font-family: var(--font-hero);
          letter-spacing: -1px;
          line-height: 1.2;
        }

        /* Success */
        .success-card {
          padding: 4rem;
          background: #fff;
          border-radius: 24px;
          border: 1px solid #eee;
        }
        .success-tag {
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          color: #999;
          letter-spacing: 2px;
          display: block;
          margin-bottom: 1.5rem;
        }
        .success-card h3 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          letter-spacing: -1px;
        }
        .success-card p {
          font-size: 1.1rem;
          color: #555;
          line-height: 1.6;
        }

        /* Emotional */
        .emotional-box {
          max-width: 900px;
          margin: 0 auto;
        }
        .big-title {
          font-family: var(--font-hero);
          font-size: 6rem;
          line-height: 1;
          letter-spacing: -4px;
          margin-bottom: 4rem;
        }
        .emotional-points {
          margin-bottom: 4rem;
        }
        .emotional-points p {
          font-size: 2.5rem;
          font-weight: 300;
          color: #888;
          margin-bottom: 0.5rem;
        }
        .final-punch {
          font-size: 3rem;
          font-weight: 600;
          letter-spacing: -1.5px;
        }

        /* FAQ */
        .faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem 6rem;
        }
        .faq-item h4 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        .faq-item p {
          color: #666;
          line-height: 1.6;
        }

        /* Final CTA */
        .final-title {
          font-family: var(--font-hero);
          font-size: 5rem;
          letter-spacing: -3px;
          margin-bottom: 1.5rem;
        }
        .final-subtitle {
          font-size: 1.8rem;
          font-weight: 300;
          opacity: 0.6;
        }
        .btn-primary-large {
          display: inline-block;
          background: #fff;
          color: #000;
          padding: 1.5rem 4rem;
          border-radius: 999px;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 1rem;
          letter-spacing: 2px;
          transition: all 0.3s;
        }
        .btn-primary-large:hover {
          transform: scale(1.05);
          background: #eee;
        }

        @media (max-width: 1200px) {
          .container { padding: 0 3rem; }
          .hero-title { font-size: 4rem; }
          .big-title { font-size: 5rem; }
        }

        @media (max-width: 968px) {
          .section-padding { padding: 6rem 0; }
          .grid-2, .grid-3, .impact-grid, .faq-grid { grid-template-columns: 1fr; gap: 3rem; }
          .hero-grid { grid-template-columns: 1fr; }
          .hero-title { font-size: 3.5rem; }
          .tab-content { font-size: 1.5rem; padding: 2.5rem; }
          .big-title { font-size: 3.5rem; }
          .final-title { font-size: 3rem; }
          .impact-val { font-size: 4rem; }
        }
      `}</style>
    </main>
  );
};

export default DDMSUI;
