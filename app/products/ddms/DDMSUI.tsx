'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const DDMSUI = () => {
  const [activeTab, setActiveTab] = useState('Police');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

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

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Carousel navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % capabilities.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + capabilities.length) % capabilities.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Touch/swipe handling for mobile
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }

    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

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
                  Book a Demo <span className="arrow">→</span>
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

      {/* 5. CORE CAPABILITIES - CAROUSEL ON MOBILE */}
      <section className="capabilities section-padding">
        <div className="container">
          <h2 className="section-title text-center mb-5">Core Capabilities</h2>
          
          {isMobile ? (
            <div className="carousel-container">
              <div 
                className="carousel-wrapper"
                ref={carouselRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div 
                  className="carousel-track"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {capabilities.map((cap, i) => (
                    <div key={i} className="carousel-slide">
                      <div className="cap-card">
                        <div className="cap-icon">{cap.icon}</div>
                        <h3>{cap.title}</h3>
                        <p>{cap.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="carousel-controls">
                <button onClick={prevSlide} className="carousel-btn" aria-label="Previous">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button onClick={nextSlide} className="carousel-btn" aria-label="Next">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <div className="grid-3">
              {capabilities.map((cap, i) => (
                <div key={i} className="cap-card">
                  <div className="cap-icon">{cap.icon}</div>
                  <h3>{cap.title}</h3>
                  <p>{cap.desc}</p>
                </div>
              ))}
            </div>
          )}
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
              <details key={i} className="faq-item">
                <summary>
                  <span>{faq.q}</span>
                  <span className="faq-icon" aria-hidden="true">+</span>
                </summary>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </details>
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
        /* MOBILE FIRST BASE STYLES */
        .ddms-redesign {
          background: #fff;
          color: #111;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          overflow-x: hidden;
        }
        
        .container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1.25rem;
          box-sizing: border-box;
        }
        
        .section-padding {
          padding: 4rem 0;
        }
        
        .grid-2, .grid-3 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
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
        
        .text-center {
          text-align: center;
        }
        
        .border-t {
          border-top: 1px solid #eee;
        }
        
        .mt-4 {
          margin-top: 1.5rem;
        }
        
        .mt-5 {
          margin-top: 2.5rem;
        }
        
        .mb-5 {
          margin-bottom: 2.5rem;
        }

        /* HERO SECTION - MOBILE FIRST */
        .hero-jarvis {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #000;
          color: #fff;
          padding: 2rem 0;
        }
        
        .hero-background-visual {
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
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
          background: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.9) 100%);
          z-index: 2;
        }
        
        .hero-grid-jarvis {
          position: relative;
          z-index: 3;
        }
        
        .hero-content-jarvis {
          width: 100%;
        }
        
        .hero-title-jarvis {
          font-size: 2rem;
          line-height: 1.1;
          font-weight: 600;
          letter-spacing: -1px;
          margin-bottom: 1.5rem;
        }
        
        .hero-subtitle-jarvis {
          font-size: 1rem;
          line-height: 1.5;
          opacity: 0.9;
          margin-bottom: 1rem;
        }
        
        .hero-support-jarvis {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 2rem;
          color: #fff;
        }
        
        .hero-ctas-jarvis {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 2.5rem;
        }
        
        .btn-jarvis {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.9rem 1.5rem;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.85rem;
          transition: all 0.3s;
          text-decoration: none;
          text-align: center;
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
          font-size: 1rem;
          transition: transform 0.3s;
        }
        
        .btn-jarvis:hover .arrow {
          transform: translateX(4px);
        }

        .hero-partners {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 0.75rem;
          opacity: 0.7;
        }
        
        .partner-name {
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          text-align: center;
        }
        
        .partner-divider {
          height: 16px;
          width: 1px;
          background: rgba(255, 255, 255, 0.2);
        }

        /* TRUST BAR */
        .trust-bar {
          padding: 1.5rem 0;
          border-top: 1px solid #eee;
          border-bottom: 1px solid #eee;
        }
        
        .trust-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          text-align: center;
        }
        
        .trust-label {
          font-size: 0.7rem;
          font-weight: 700;
          color: #999;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .trust-points {
          display: flex;
          justify-content: center;
          gap: 1rem;
          font-weight: 600;
          font-size: 0.85rem;
          color: #333;
        }
        
        .dot {
          color: #ddd;
        }

        /* SECTION TITLES */
        .section-title {
          font-size: 2rem;
          letter-spacing: -1px;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          font-weight: 600;
        }
        
        .what-text p {
          font-size: 1rem;
          line-height: 1.6;
          color: #444;
          margin-bottom: 1rem;
        }
        
        .what-visual {
          width: 100%;
        }
        
        .visual-card {
          border-radius: 16px;
          overflow: hidden;
        }
        
        .visual-card img {
          width: 100%;
          height: auto;
          display: block;
        }

        /* CARDS */
        .why-card {
          background: #fff;
          padding: 2rem;
          border-radius: 16px;
          border: 1px solid #eee;
          transition: all 0.3s;
        }
        
        .why-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        
        .card-tag {
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #999;
          display: block;
          margin-bottom: 1rem;
        }
        
        .why-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          font-weight: 600;
        }
        
        .why-card p {
          color: #666;
          line-height: 1.5;
          font-size: 0.95rem;
        }

        /* CAPABILITIES - MOBILE CAROUSEL */
        .carousel-container {
          position: relative;
          width: 100%;
          overflow: hidden;
        }
        
        .carousel-wrapper {
          overflow: hidden;
          position: relative;
          width: 100%;
        }
        
        .carousel-track {
          display: flex;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }
        
        .carousel-slide {
          min-width: 100%;
          flex-shrink: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .cap-card {
          padding: 2rem;
          background: #fafafa;
          border-radius: 16px;
          transition: all 0.3s;
          height: 100%;
        }
        
        .cap-card:hover {
          background: #f0f0f0;
        }
        
        .cap-icon {
          color: #000;
          margin-bottom: 1.5rem;
        }
        
        .cap-card h3 {
          font-size: 1.15rem;
          margin-bottom: 0.75rem;
          font-weight: 600;
        }
        
        .cap-card p {
          font-size: 0.9rem;
          color: #666;
          line-height: 1.5;
        }
        
        .carousel-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
        }
        
        .carousel-btn {
          background: #000;
          color: #fff;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .carousel-btn:hover {
          background: #333;
          transform: scale(1.05);
        }
        
        @media (max-width: 767px) {
          .carousel-container {
            padding-top: 3.5rem;
          }

          .carousel-controls {
            position: absolute;
            top: 0;
            right: 0;
            margin-top: 0;
            justify-content: flex-end;
            gap: 0.75rem;
            width: auto;
            z-index: 2;
          }

          .carousel-btn {
            width: 36px;
            height: 36px;
          }
        }

        /* IMPACT */
        .impact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        
        .impact-val {
          font-size: 2.5rem;
          font-weight: 600;
          display: block;
          letter-spacing: -2px;
          margin-bottom: 0.5rem;
        }
        
        .impact-item p {
          font-size: 0.9rem;
          font-weight: 300;
          color: #aaa;
        }

        /* TABS */
        .tabs {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid #eee;
          padding-bottom: 0.5rem;
          overflow-x: auto;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }
        
        .tabs::-webkit-scrollbar { 
          display: none; 
        }
        
        .tab-btn {
          white-space: nowrap;
          padding: 0.75rem 1rem;
          background: transparent;
          border: none;
          font-size: 0.85rem;
          font-weight: 600;
          color: #999;
          cursor: pointer;
          transition: all 0.3s;
          border-bottom: 2px solid transparent;
          flex-shrink: 0;
        }
        
        .tab-btn.active {
          color: #000;
          border-bottom-color: #000;
        }
        
        .tab-content {
          padding: 2rem;
          background: #f7f7f7;
          border-radius: 16px;
          font-size: 1.15rem;
          letter-spacing: -0.5px;
          line-height: 1.4;
        }

        /* SUCCESS CARDS */
        .success-card {
          padding: 2rem;
          background: #fff;
          border-radius: 16px;
          border: 1px solid #eee;
        }
        
        .success-tag {
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          color: #999;
          letter-spacing: 1.5px;
          display: block;
          margin-bottom: 1rem;
        }
        
        .success-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          letter-spacing: -0.5px;
          font-weight: 600;
        }
        
        .success-card p {
          font-size: 0.95rem;
          color: #555;
          line-height: 1.6;
        }

        /* EMOTIONAL SECTION */
        .emotional-box {
          max-width: 100%;
        }
        
        .big-title {
          font-size: 2rem;
          line-height: 1.1;
          letter-spacing: -1px;
          margin-bottom: 2rem;
          font-weight: 600;
        }
        
        .emotional-points {
          margin-bottom: 2rem;
        }
        
        .emotional-points p {
          font-size: 1.25rem;
          font-weight: 300;
          color: #888;
          margin-bottom: 0.5rem;
        }
        
        .final-punch {
          font-size: 1.5rem;
          font-weight: 600;
          letter-spacing: -0.5px;
        }

        /* FAQ */
        .faq-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        
        .faq-item {
          border: 1px solid #e6e6e6;
          border-radius: 1rem;
          background: #fff;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .faq-item[open] {
          border-color: #cfcfcf;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.06);
        }

        .faq-item summary {
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          cursor: pointer;
          padding: 1.5rem;
          font-size: 1rem;
          font-weight: 600;
          color: #111;
          user-select: none;
        }

        .faq-item summary::-webkit-details-marker {
          display: none;
        }

        .faq-icon {
          flex: 0 0 auto;
          width: 2rem;
          height: 2rem;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #f3f3f3;
          color: #333;
          font-size: 1.1rem;
          font-weight: 500;
          transition: transform 0.25s ease, background 0.25s ease;
        }

        .faq-item[open] .faq-icon {
          transform: rotate(45deg);
          background: #111;
          color: #fff;
        }

        .faq-answer {
          padding: 0 1.5rem 1.5rem;
          animation: slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .faq-answer p {
          color: #666;
          line-height: 1.6;
          font-size: 0.95rem;
          margin: 0;
        }

        /* FINAL CTA */
        .final-title {
          font-size: 2rem;
          letter-spacing: -1px;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        
        .final-subtitle {
          font-size: 1.15rem;
          font-weight: 300;
          opacity: 0.6;
        }
        
        .btn-primary-large {
          display: inline-block;
          background: #fff;
          color: #000;
          padding: 1.25rem 3rem;
          border-radius: 999px;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.85rem;
          letter-spacing: 1.5px;
          transition: all 0.3s;
          text-decoration: none;
        }
        
        .btn-primary-large:hover {
          transform: scale(1.05);
          background: #eee;
        }

        /* TABLET - 768px and up */
        @media (min-width: 768px) {
          .container {
            padding: 0 2rem;
          }
          
          .section-padding {
            padding: 6rem 0;
          }
          
          .grid-2 {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
          }
          
          .grid-3 {
            grid-template-columns: repeat(3, 1fr);
            gap: 2.5rem;
          }
          
          .hero-title-jarvis {
            font-size: 3.5rem;
            letter-spacing: -2px;
          }
          
          .hero-subtitle-jarvis {
            font-size: 1.15rem;
          }
          
          .hero-support-jarvis {
            font-size: 0.9rem;
          }
          
          .hero-ctas-jarvis {
            flex-direction: row;
            gap: 1rem;
          }
          
          .btn-jarvis {
            padding: 0.85rem 1.8rem;
            font-size: 0.9rem;
          }
          
          .partner-name {
            font-size: 0.7rem;
          }
          
          .trust-content {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
          
          .trust-label {
            font-size: 0.8rem;
          }
          
          .trust-points {
            font-size: 1rem;
            gap: 1.5rem;
          }
          
          .section-title {
            font-size: 3rem;
            letter-spacing: -2px;
          }
          
          .what-text p {
            font-size: 1.15rem;
          }
          
          .why-card {
            padding: 2.5rem;
          }
          
          .why-card h3 {
            font-size: 1.35rem;
          }
          
          .impact-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 3rem;
          }
          
          .impact-val {
            font-size: 4rem;
            letter-spacing: -3px;
          }
          
          .impact-item p {
            font-size: 1rem;
          }
          
          .tab-content {
            padding: 3rem;
            font-size: 1.75rem;
          }
          
          .success-card {
            padding: 3rem;
          }
          
          .success-card h3 {
            font-size: 1.75rem;
          }
          
          .success-card p {
            font-size: 1.05rem;
          }
          
          .big-title {
            font-size: 4rem;
            letter-spacing: -3px;
          }
          
          .emotional-points p {
            font-size: 2rem;
          }
          
          .final-punch {
            font-size: 2.5rem;
          }
          
          .faq-grid {
            gap: 1.25rem;
          }
          
          .faq-item summary {
            font-size: 1.2rem;
            padding: 1.35rem 1.5rem;
          }

          .faq-answer {
            padding: 0 1.5rem 1.35rem;
          }

          .faq-answer p {
            font-size: 1rem;
          }
          
          .final-title {
            font-size: 3.5rem;
            letter-spacing: -2px;
          }
          
          .final-subtitle {
            font-size: 1.5rem;
          }
        }

        /* DESKTOP - 1024px and up */
        @media (min-width: 1024px) {
          .container {
            padding: 0 3rem;
          }
          
          .section-padding {
            padding: 8rem 0;
          }
          
          .grid-2 {
            gap: 6rem;
          }
          
          .grid-3 {
            gap: 3rem;
          }
          
          .hero-jarvis {
            min-height: 90vh;
          }
          
          .hero-background-visual {
            width: 65%;
          }
          
          .hero-overlay {
            background: linear-gradient(to right, #000 30%, transparent 80%);
          }
          
          .hero-grid-jarvis {
            display: grid;
            grid-template-columns: 1.2fr 1fr;
          }
          
          .hero-content-jarvis {
            max-width: 750px;
          }
          
          .hero-title-jarvis {
            font-size: 4.2rem;
          }
          
          .hero-subtitle-jarvis {
            font-size: 1.25rem;
            max-width: 600px;
          }
          
          .hero-support-jarvis {
            font-size: 1rem;
            margin-bottom: 3.5rem;
          }
          
          .hero-ctas-jarvis {
            margin-bottom: 4rem;
          }
          
          .partner-name {
            font-size: 0.75rem;
            letter-spacing: 2px;
          }
          
          .partner-divider {
            height: 20px;
          }
          
          .trust-bar {
            padding: 3rem 0;
          }
          
          .section-title {
            font-size: 3.5rem;
          }
          
          .what-text p {
            font-size: 1.25rem;
          }
          
          .why-card {
            padding: 3rem;
          }
          
          .why-card h3 {
            font-size: 1.5rem;
          }
          
          .cap-card {
            padding: 3rem;
          }
          
          .cap-card h3 {
            font-size: 1.25rem;
          }
          
          .cap-card p {
            font-size: 0.95rem;
          }
          
          .impact-grid {
            gap: 4rem;
          }
          
          .impact-val {
            font-size: 5rem;
            letter-spacing: -4px;
          }
          
          .impact-item p {
            font-size: 1.1rem;
          }
          
          .tab-content {
            padding: 4rem;
            font-size: 2rem;
          }
          
          .success-card {
            padding: 4rem;
          }
          
          .success-card h3 {
            font-size: 2rem;
          }
          
          .success-card p {
            font-size: 1.1rem;
          }
          
          .emotional-box {
            max-width: 900px;
            margin: 0 auto;
          }
          
          .big-title {
            font-size: 6rem;
            letter-spacing: -4px;
            margin-bottom: 4rem;
          }
          
          .emotional-points {
            margin-bottom: 4rem;
          }
          
          .emotional-points p {
            font-size: 2.5rem;
          }
          
          .final-punch {
            font-size: 3rem;
            letter-spacing: -1.5px;
          }
          
          .faq-grid {
            gap: 1.25rem;
          }
          
          .faq-item summary {
            font-size: 1.3rem;
            padding: 1.5rem 1.75rem;
          }

          .faq-answer {
            padding: 0 1.75rem 1.5rem;
          }

          .faq-answer p {
            font-size: 1.05rem;
          }
          
          .final-title {
            font-size: 5rem;
            letter-spacing: -3px;
            margin-bottom: 1.5rem;
          }
          
          .final-subtitle {
            font-size: 1.8rem;
          }
          
          .btn-primary-large {
            padding: 1.5rem 4rem;
            font-size: 1rem;
            letter-spacing: 2px;
          }
        }

        /* LARGE DESKTOP - 1400px and up */
        @media (min-width: 1400px) {
          .container {
            padding: 0 4rem;
          }
          
          .section-padding {
            padding: 10rem 0;
          }
        }
      `}</style>
    </main>
  );
};

export default DDMSUI;