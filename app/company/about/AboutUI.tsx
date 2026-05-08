'use client';

import React, { useRef } from 'react';

const AboutUI = () => {
   const sectorsRef = useRef<HTMLDivElement>(null);
   const principlesRef = useRef<HTMLDivElement>(null);
   const proofRef = useRef<HTMLDivElement>(null);

   const scrollCarousel = (ref: React.RefObject<HTMLDivElement | null>, direction: 'prev' | 'next') => {
      const carousel = ref.current;

      if (!carousel) {
         return;
      }

      const amount = Math.round(carousel.clientWidth * 0.88);

      carousel.scrollBy({
         left: direction === 'next' ? amount : -amount,
         behavior: 'smooth',
      });
   };

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
                  India's institutions run on fragmented systems, disconnected field intelligence, and legacy manual processes. We build the operational layer that connects real-world signals to accountable execution, increasing decision velocity where it matters most.
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
               <div className="mobile-carousel-header">
                  <div className="carousel-heading-group">
                     <span className="label white-label">Operational Domains</span>
                     <h2 className="section-headline black-text">Where we deploy</h2>
                  </div>
                  <div className="mobile-carousel-controls" aria-label="Sectors carousel controls">
                     <button type="button" className="carousel-control-btn" aria-label="Scroll sectors left" onClick={() => scrollCarousel(sectorsRef, 'prev')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                           <path d="m15 18-6-6 6-6"></path>
                        </svg>
                     </button>
                     <button type="button" className="carousel-control-btn" aria-label="Scroll sectors right" onClick={() => scrollCarousel(sectorsRef, 'next')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                           <path d="m9 18 6-6-6-6"></path>
                        </svg>
                     </button>
                  </div>
               </div>
               <div className="sector-grid" ref={sectorsRef}>
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
               <div className="mobile-carousel-header">
                  <div className="carousel-heading-group">
                     <span className="label">Our Doctrine</span>
                     <h2 className="section-headline">Official Principles</h2>
                  </div>
                  <div className="mobile-carousel-controls" aria-label="Principles carousel controls">
                     <button type="button" className="carousel-control-btn" aria-label="Scroll principles left" onClick={() => scrollCarousel(principlesRef, 'prev')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                           <path d="m15 18-6-6 6-6"></path>
                        </svg>
                     </button>
                     <button type="button" className="carousel-control-btn" aria-label="Scroll principles right" onClick={() => scrollCarousel(principlesRef, 'next')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                           <path d="m9 18 6-6-6-6"></path>
                        </svg>
                     </button>
                  </div>
               </div>
               <div className="principles-grid" ref={principlesRef}>
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
               <div className="proof-header mobile-carousel-header">
                  <div className="carousel-heading-group">
                     <h2 className="section-headline">Built from real deployments</h2>
                     <p className="proof-intro">
                        Vinkura's systems are shaped by real operational environments in Indian public institutions, where reliability, auditability, and deployment constraints are non-negotiable.
                     </p>
                  </div>
                  <div className="mobile-carousel-controls" aria-label="Proof carousel controls">
                     <button type="button" className="carousel-control-btn" aria-label="Scroll proof cards left" onClick={() => scrollCarousel(proofRef, 'prev')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                           <path d="m15 18-6-6 6-6"></path>
                        </svg>
                     </button>
                     <button type="button" className="carousel-control-btn" aria-label="Scroll proof cards right" onClick={() => scrollCarousel(proofRef, 'next')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                           <path d="m9 18 6-6-6-6"></path>
                        </svg>
                     </button>
                  </div>
               </div>
               <div className="proof-grid" ref={proofRef}>
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
        .black-text { color: white; }
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

            .mobile-carousel-header {
               display: flex;
               align-items: flex-start;
               justify-content: space-between;
               gap: 2rem;
            }

            .carousel-heading-group {
               min-width: 0;
               flex: 1;
            }

            .mobile-carousel-controls {
               display: none;
               gap: 0.75rem;
               flex-shrink: 0;
            }

            .carousel-control-btn {
               width: 2.75rem;
               height: 2.75rem;
               border-radius: 999px;
               border: 1px solid rgba(255, 255, 255, 0.12);
               background: rgba(255, 255, 255, 0.92);
               color: #000;
               box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
               display: flex;
               align-items: center;
               justify-content: center;
               font-size: 1rem;
               font-weight: 700;
               backdrop-filter: blur(10px);
               cursor: pointer;
               transition: transform 0.2s ease, background 0.2s ease;
            }

            .carousel-control-btn:hover {
               transform: translateY(-1px);
               background: #fff;
            }

        .final-cta { padding: 120px 0; }
        .final-title { font-family: var(--font-hero); font-size: 3.5rem; line-height: 1.1; letter-spacing: -2px; margin-bottom: 2.5rem; }

        /* Tablet Breakpoint */
        @media (max-width: 1200px) {
          .container { padding: 0 3rem; }
          .hero-title { font-size: 3.5rem; }
          .section-headline { font-size: 2.5rem; }
          .sector-grid { grid-template-columns: repeat(2, 1fr); gap: 1.25rem; }
          .proof-grid { grid-template-columns: repeat(2, 1fr); gap: 1.25rem; }
          .trust-grid { grid-template-columns: repeat(2, 1fr); }
          .principles-grid { grid-template-columns: 1fr; gap: 3rem; }
          .grid-2 { grid-template-columns: 1fr; gap: 4rem; }
        }

        /* Mobile Breakpoint */
        @media (max-width: 768px) {
          .container { padding: 0 1.5rem; }
               .mobile-carousel-header {
                  gap: 1rem;
                  margin-bottom: 1.5rem;
               }
               .mobile-carousel-controls {
                  display: flex;
                  margin-top: 0.1rem;
               }
               .carousel-control-btn svg {
                  width: 1rem;
                  height: 1rem;
               }
          
          /* Hero Section */
          .hero-section { padding: 100px 0 60px; }
          .hero-title { 
            font-size: 2.25rem; 
            letter-spacing: -1.5px;
            margin-bottom: 2rem;
          }
          .hero-title br { display: none; }
          .hero-subtext { font-size: 1.1rem; }
          
          /* Trust Strip */
          .trust-strip { padding: 1.5rem 0; }
          .trust-grid { 
            grid-template-columns: 1fr; 
            gap: 1.25rem; 
          }
          .trust-item { 
            font-size: 0.65rem; 
            text-align: center;
          }
          
          /* Philosophy Section */
          .philosophy-section { padding: 60px 0; }
          .section-headline { 
            font-size: 2rem; 
            margin-bottom: 1.5rem;
          }
          .body-text { font-size: 1rem; }
          .stat-item { 
            padding: 1.5rem; 
            margin-bottom: 1rem;
          }
          
          /* Sectors Section - Carousel */
          .sectors-section { padding: 60px 0; }
          .sector-grid {
            display: flex;
            overflow-x: auto;
            gap: 1rem;
                  margin-top: 0;
            padding-bottom: 1rem;
            scroll-snap-type: x mandatory;
                  scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .sector-grid::-webkit-scrollbar { display: none; }
          .sector-card {
            flex: 0 0 85%;
            min-width: 85%;
            scroll-snap-align: start;
            scroll-snap-stop: always;
            padding: 2rem;
          }
          .sector-title { font-size: 1.25rem; }
          .sector-desc { font-size: 0.8rem; }
          
          /* Principles Section - Carousel */
          .principles-section { padding: 60px 0; }
          .principles-grid {
            display: flex;
            overflow-x: auto;
            gap: 1rem;
                  margin-top: 0;
            padding-bottom: 1rem;
            scroll-snap-type: x mandatory;
                  scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .principles-grid::-webkit-scrollbar { display: none; }
          .principle {
            flex: 0 0 85%;
            min-width: 85%;
            scroll-snap-align: start;
            scroll-snap-stop: always;
            padding-top: 2rem;
          }
          .p-title { font-size: 1.5rem; }
          .p-desc { font-size: 0.9rem; }
          
          /* Proof Section - Carousel */
          .proof-section { padding: 60px 0; }
               .proof-header { margin-bottom: 1.5rem; }
          .proof-intro { font-size: 1.1rem; }
          .proof-grid {
            display: flex;
            overflow-x: auto;
            gap: 1rem;
            padding-bottom: 1rem;
            scroll-snap-type: x mandatory;
                  scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .proof-grid::-webkit-scrollbar { display: none; }
          .proof-card {
            flex: 0 0 85%;
            min-width: 85%;
            scroll-snap-align: start;
            scroll-snap-stop: always;
            padding: 1.75rem;
          }
          .proof-card h4 { font-size: 0.85rem; }
          .proof-card p { font-size: 0.8rem; }
          
          /* Final CTA */
          .final-cta { padding: 80px 0; }
          .final-title { 
            font-size: 2rem;
            letter-spacing: -1.5px;
          }
          .final-title br { display: none; }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .container { padding: 0 1rem; }
          .hero-title { font-size: 1.875rem; }
          .section-headline { font-size: 1.75rem; }
          .sector-card,
          .principle,
          .proof-card {
            flex: 0 0 90%;
            min-width: 90%;
          }
        }
      `}</style>
      </main>
   );
};

export default AboutUI;