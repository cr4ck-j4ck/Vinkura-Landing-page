'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const ImpactUI = () => {
   const [activeTab, setActiveTab] = useState('Law Enforcement');

   const spotlightData = {
      'Law Enforcement': {
         label: 'Case: Electronic Case Tracking',
         title: 'E-CTC Modernization',
         desc: 'Structured workflow modernization for investigation coordination, prosecution sync, and court readiness.',
         metrics: [
            { val: 'Reduced', label: 'Procedural Pendency' },
            { val: 'Increased', label: 'Prosecution Sync' }
         ],
         changes: [
            'Immutable tracking of case movement',
            'Automated deadline alerts for filing',
            'Standardized evidence documentation',
            'Unified record for supervisory review'
         ],
         img: '/1.png'
      },
      'District Administration': {
         label: 'Case: Personnel Allocation',
         title: 'DDMS Bareilly & Amarnath',
         desc: 'Dynamic roster management and personnel deployment for large-scale operations and major public events.',
         metrics: [
            { val: 'Near-Instant', label: 'Roster Generation' },
            { val: '100%', label: 'Allocation Visibility' }
         ],
         changes: [
            'Automated duty allocation by skill-role',
            'Fatigue-aware shift planning',
            'Real-time personnel location tracking',
            'Biometric-linked attendance verification'
         ],
         img: '/2.png'
      },
      'Evidence & Records': {
         label: 'Case: Property Management',
         title: 'E-Maalkhana Deployment',
         desc: 'Securing the physical-to-digital chain of custody for seized assets and evidentiary property.',
         metrics: [
            { val: 'Verified', label: 'Chain of Custody' },
            { val: 'Digital', label: 'Evidence Register' }
         ],
         changes: [
            'QR/RFID-linked asset tracking',
            'Immutable digital movement logs',
            'Automated disposal and audit alerts',
            'Cross-station evidence visibility'
         ],
         img: '/3.png'
      },
      'Field Operations': {
         label: 'Case: Remote Coordination',
         title: 'Trinetra Field Sync',
         desc: 'Providing real-time coordination and information retrieval for personnel in disconnected or constrained field zones.',
         metrics: [
            { val: 'Synchronized', label: 'Field Signals' },
            { val: 'Air-Gapped', label: 'Operation Support' }
         ],
         changes: [
            'Local-first communication layers',
            'Offline geospatial intelligence',
            'Critical intent capture via voice',
            'Resilient sync under low bandwidth'
         ],
         img: '/4.png'
      },
      'Command & Oversight': {
         label: 'Case: Operational Intelligence',
         title: 'Sentinel Command Bridge',
         desc: 'Unifying fragmented data streams into a single operational reality for command-level decision making.',
         metrics: [
            { val: 'Aggregated', label: 'Intelligence View' },
            { val: 'Real-Time', label: 'Incident Mapping' }
         ],
         changes: [
            'Multi-source data ingestion and parsing',
            'Entity-linked relationship graphs',
            'Automated risk pattern detection',
            'Auditable command decisions'
         ],
         img: '/5.png'
      },
      'Workflow Automation': {
         label: 'Case: Process Orchestration',
         title: 'Forge Deployment',
         desc: 'AI-driven workflow orchestration for complex official processes and cross-departmental coordination.',
         metrics: [
            { val: 'Zero', label: 'Manual Handoffs' },
            { val: '100%', label: 'Process Visibility' }
         ],
         changes: [
            'Automated routine official tasks',
            'Real-time process mining',
            'Embedded policy compliance checks',
            'Unified cross-departmental workspace'
         ],
         img: '/6.png'
      },
      'Field Intelligence': {
         label: 'Case: Voice-First Reporting',
         title: 'Voice Edge Capture',
         desc: 'Voice-first operational data entry for hands-free reporting and real-time incident logging in active operational zones.',
         metrics: [
            { val: 'Hands-Free', label: 'Operational Entry' },
            { val: 'Instant', label: 'Signal Capture' }
         ],
         changes: [
            'Natural language operational logging',
            'Hands-free field reporting',
            'Structured data conversion from speech',
            'Secure on-device voice processing'
         ],
         img: '/7.png'
      },
      'Sovereign Infrastructure': {
         label: 'Case: Deployment Control',
         title: 'Orbit Orchestration',
         desc: 'Managing sovereign deployment and version control across distributed nodes.',
         metrics: [
            { val: 'Sovereign', label: 'Data Residency' },
            { val: 'Controlled', label: 'Global Rollouts' }
         ],
         changes: [
            'Edge-aware container orchestration',
            'Granular policy-based sync rules',
            'Remote health monitoring of nodes',
            'Zero-trust deployment boundaries'
         ],
         img: '/oRBIT.png'
      }
   };

   const current = spotlightData[activeTab as keyof typeof spotlightData] || spotlightData['Law Enforcement'];

   return (
      <main className="impact-page bg-white text-black">
         {/* 1. HERO SECTION */}
         <section className="hero-section">
            <div className="container hero-grid">
               <div className="hero-left">
                  <h1 className="hero-title">
                     Real constraints. <br />
                     <span className="accent-text">Real outcomes.</span>
                  </h1>
               </div>
               <div className="hero-right">
                  <p className="hero-desc">
                     Vinkura deployments are shaped by operational realities—adoption, infrastructure limits, accountability, and field conditions. We build with departments, not around them.
                  </p>
                  <a href="#stories" className="hero-link">See deployment outcomes</a>
               </div>
            </div>
         </section>

         {/* 2. WHAT DEFINES A REAL DEPLOYMENT (STRIP) */}
         <section className="characteristics-section border-t border-b">
            <div className="container">
               <h2 className="section-label">What defines a real deployment</h2>
               <div className="char-grid">
                  <div className="char-card">
                     <span className="char-label">Workflow Alignment</span>
                     <h4>Official Integration</h4>
                     <p>Works with existing workflows and manual processes before replacing them.</p>
                  </div>
                  <div className="char-card">
                     <span className="char-label">Governance</span>
                     <h4>Accountability by Design</h4>
                     <p>Structured for auditability, chain of custody, and supervisory review.</p>
                  </div>
                  <div className="char-card">
                     <span className="char-label">Reliability</span>
                     <h4>Constrained Connectivity</h4>
                     <p>Built to remain operational in low-connectivity and air-gapped field environments.</p>
                  </div>
                  <div className="char-card">
                     <span className="char-label">Adoption</span>
                     <h4>Process Sovereignty</h4>
                     <p>Built around operational adoption, not just software rollout.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* 3. HERO MEDIA (OPERATIONAL VISUAL) */}
         <section className="visual-section">
            <div className="container">
               <div className="large-visual">
                  <div className="media-wrapper">
                     <video
                        className="visual-media"
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                     >
                        <source src="/operational-infrastructure.mp4" type="video/mp4" />
                     </video>
                  </div>
               </div>
            </div>
         </section>

         {/* 4. IMPACT SPOTLIGHT */}
         <section className="spotlight-section">
            <div className="container">
               <h2 className="section-title">Impact Spotlight</h2>

               <div className="tab-wrapper">
                  <div className="tabs">
                     {Object.keys(spotlightData).map(tab => (
                        <button
                           key={tab}
                           className={`tab ${activeTab === tab ? 'active' : ''}`}
                           onClick={() => setActiveTab(tab)}
                        >
                           {tab}
                        </button>
                     ))}
                  </div>
               </div>

               <div className="spotlight-content" key={activeTab}>
                  <div className="spotlight-card">
                     <div className="outcome-side">
                        <span className="label">{current.label}</span>
                        <h3 className="outcome-title">
                           {current.title}
                        </h3>
                        <p className="outcome-desc">
                           {current.desc}
                        </p>
                        <div className="metrics-grid">
                           {current.metrics.map((m, idx) => (
                              <div className="metric" key={idx}>
                                 <span className="m-val">{m.val}</span>
                                 <span className="m-label">{m.label}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                     <div className="detail-side">
                        <h4 className="detail-title">Operational Changes</h4>
                        <ul className="impact-list">
                           {current.changes.map((item, idx) => (
                              <li key={idx}>{item}</li>
                           ))}
                        </ul>
                     </div>
                     <div className="image-side">
                        <div
                           className="spotlight-img"
                           style={{
                              backgroundImage: `url(${current.img})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              width: '100%',
                              height: '100%',
                              opacity: 0.8
                           }}
                        />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* 5. PATTERNS ACROSS DEPLOYMENTS */}
         <section className="outcomes-section bg-[#fafafa]">
            <div className="container">
               <h2 className="section-title">Patterns across deployments</h2>
               <div className="outcomes-grid">
                  <div className="outcome-card">
                     <h4 className="o-pattern-title">Manual work decreases when the workflow becomes clearer</h4>
                     <p className="o-summary">Digitizing a process only works when the system mirrors the user's operational mental model.</p>
                  </div>
                  <div className="outcome-card">
                     <h4 className="o-pattern-title">Adoption improves when systems align with existing roles</h4>
                     <p className="o-summary">Official success depends on software that empowers, rather than competes with, formal hierarchy.</p>
                  </div>
                  <div className="outcome-card">
                     <h4 className="o-pattern-title">Auditability increases when records become structured</h4>
                     <p className="o-summary">Moving from free-text and registers to structured data creates immutable organizational memory.</p>
                  </div>
                  <div className="outcome-card">
                     <h4 className="o-pattern-title">Supervisory visibility improves when data stops living in silos</h4>
                     <p className="o-summary">Command decisions are only as good as the field context that reaches them in real-time.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* 6. IMPACT STORIES GRID */}
         <section id="stories" className="stories-section">
            <div className="container">
               <h2 className="section-title">Official Deployments</h2>
               <div className="stories-grid">
                  {[
                     { title: "DDMS (Duty Management)", desc: "Structured workflow modernization for personnel allocation and visibility.", img: "/1.png", link: "/case-studies/ddms" },
                     { title: "Trinetra (Field Deployment)", desc: "High-stakes coordination in constrained and mission-critical environments.", img: "/2.png", link: "/case-studies/trinetra" },
                     { title: "E-Maalkhana (Evidence Modernization)", desc: "Digital-first metadata and chain-of-custody for evidentiary property.", img: "/3.png", link: "/case-studies/maalkhana" },
                     { title: "Forge (Workflow Automation)", desc: "AI-driven orchestration for complex official processes.", img: "/4.png", link: "/case-studies/forge" },
                     { title: "Voice (Field Intelligence)", desc: "Voice-first operational data entry for hands-free reporting.", img: "/5.png", link: "/case-studies/voice" },
                     { title: "Sentinel (Command Intelligence)", desc: "Aggregated field signals for district-level command visibility.", img: "/CORE.png", link: "/case-studies/sentinel" },
                     { title: "Orbit (Sovereign Infra)", desc: "Secure on-premise infrastructure for mission-critical systems.", img: "/oRBIT.png", link: "/case-studies/orbit" },
                     { title: "E-CTC (Case Tracking)", desc: "Unified tracking for investigative and prosecutorial workflows.", img: "/2.png", link: "/case-studies/ectc" }
                  ].map((story, i) => (
                     <a key={i} href={story.link} className="story-card">
                        <div
                           className="story-img"
                           style={{ backgroundImage: `url(${story.img})` }}
                        />
                        <div className="story-content">
                           <h4 className="story-title">{story.title} ↗</h4>
                           <p className="story-desc">{story.desc}</p>
                        </div>
                     </a>
                  ))}
               </div>

                <div className="external-impact-links">
                   <div className="impact-link-card">
                      <span className="link-label">Writing & Research</span>
                      <h4>Technical Deployment Blog</h4>
                      <p>Read our technical deep-dives into official software implementation.</p>
                      <a href="https://blogs.vinkura.in" target="_blank" rel="noopener noreferrer" className="impact-ext-link">Visit blogs.vinkura.in ↗</a>
                   </div>
                   <div className="impact-link-card highlight">
                      <span className="link-label">Get in touch</span>
                      <h4>Request a Demo or Talk to our Team</h4>
                      <p>Building for public infrastructure? Let’s discuss your operational needs.</p>
                      <Link href="/contact" className="impact-ext-link">Contact our team ↗</Link>
                   </div>
                </div>
            </div>
         </section>

         <style jsx>{`
        .impact-page { font-family: var(--font-body); overflow-x: hidden; }
        .container { max-width: 1320px; margin: 0 auto; padding: 0 4rem; width: 100%; }
        
        /* HERO */
        .hero-section { padding: 120px 0 60px; }
        .hero-grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: 4rem; align-items: start; }
        .hero-title { 
            font-family: var(--font-hero); 
            font-size: clamp(2.5rem, 5vw, 4.5rem); 
            line-height: 1.05; 
            letter-spacing: -2.5px; 
            font-weight: 500; 
        }
        .accent-text { color: #666; }
        .hero-desc { font-size: 1.25rem; color: #444; line-height: 1.5; margin-bottom: 2rem; max-width: 450px; font-weight: 300; }
        .hero-link { font-size: 0.9rem; font-weight: 700; color: #000; text-decoration: none; text-transform: uppercase; letter-spacing: 2px; border-bottom: 2px solid #eee; padding-bottom: 8px; transition: 0.3s; }
        .hero-link:hover { border-color: #000; }

        /* CHARACTERISTICS */
        .characteristics-section { padding: 80px 0; background: #fff; }
        .section-label { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 3px; color: #999; margin-bottom: 3rem; display: block; }
        .char-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; }
        .char-label { font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #ccc; display: block; margin-bottom: 1rem; }
        .char-card h4 { font-size: 1.1rem; margin-bottom: 0.75rem; letter-spacing: -0.5px; }
        .char-card p { font-size: 0.85rem; color: #666; line-height: 1.5; }

        /* VISUAL */
        .visual-section { padding: 40px 0 80px; }
        .large-visual { 
          aspect-ratio: 21/9; 
          background: #000; 
          border-radius: 8px; 
          position: relative; 
          display: flex; 
          align-items: center; 
          justify-content: center;
          overflow: hidden;
          border: 1px solid #111;
        }
        .visual-content { text-align: center; color: rgba(255,255,255,0.1); }
        .ui-mockup-label { font-size: 0.6rem; text-transform: uppercase; letter-spacing: 5px; margin-bottom: 1rem; }
        .ui-indicators { display: flex; gap: 0.5rem; justify-content: center; }
        .ui-indicators span { width: 40px; height: 1px; background: currentColor; }
        .visual-overlay { position: absolute; bottom: 30px; left: 30px; color: rgba(255,255,255,0.4); font-weight: 400; text-transform: uppercase; letter-spacing: 2px; font-size: 0.75rem; }

        /* SPOTLIGHT */
        .spotlight-section { padding: 80px 0; }
        .section-title { font-family: var(--font-hero); font-size: clamp(2rem, 4vw, 3rem); letter-spacing: -1.5px; margin-bottom: 3rem; }
        
        .tab-wrapper { margin-bottom: 3rem; border-bottom: 1px solid #eee; overflow-x: auto; -webkit-overflow-scrolling: touch; }
        .tab-wrapper::-webkit-scrollbar { display: none; }
        
        .tabs { display: flex; gap: 0; min-width: max-content; }
        .tab { 
          padding: 1rem 2rem; 
          background: none; 
          border: none; 
          font-weight: 700; 
          color: #999; 
          cursor: pointer; 
          transition: 0.3s; 
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-bottom: 2px solid transparent;
        }
        .tab.active { color: #000; border-color: #000; }
        
        .spotlight-card { 
          background: white; 
          border: 1px solid #eee; 
          border-radius: 16px; 
          display: grid; 
          grid-template-columns: 1.2fr 0.8fr 1fr; 
          overflow: hidden;
          min-height: 500px;
        }
        .outcome-side { padding: 4rem; display: flex; flex-direction: column; justify-content: center; border-right: 1px solid #eee; }
        .label { font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 3px; color: #999; margin-bottom: 2rem; }
        .outcome-title { font-size: 2.5rem; font-family: var(--font-hero); line-height: 1.1; margin-bottom: 2rem; letter-spacing: -1px; }
        .outcome-desc { font-size: 1.1rem; color: #555; line-height: 1.6; margin-bottom: 3rem; }
        .metrics-grid { display: flex; gap: 3rem; }
        .m-val { display: block; font-size: 1.8rem; font-weight: 700; margin-bottom: 0.5rem; }
        .m-label { display: block; font-size: 0.7rem; color: #999; text-transform: uppercase; letter-spacing: 1px; line-height: 1.4; }
        
        .detail-side { padding: 4rem; display: flex; flex-direction: column; justify-content: center; background: #fafafa; }
        .detail-title { margin-bottom: 2rem; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; font-weight: 700; }
        .impact-list { list-style: none; padding: 0; }
        .impact-list li { margin-bottom: 1.25rem; font-size: 1rem; color: #555; position: relative; padding-left: 1.5rem; line-height: 1.5; }
        .impact-list li::before { content: "/"; position: absolute; left: 0; color: #bbb; font-weight: 700; }
        
        .image-side { background: #111; position: relative; overflow: hidden; }
        .dashboard-visual { 
          width: 100%; 
          height: 100%; 
          opacity: 0.4;
          background-image: url('https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=800');
          background-size: cover;
          background-position: center;
        }

        /* OUTCOMES / PATTERNS */
        .outcomes-section { padding: 100px 0; }
        .outcomes-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
        .outcome-card { background: white; padding: 3rem; border-radius: 16px; border: 1px solid #eee; display: flex; flex-direction: column; transition: 0.3s; }
        .outcome-card:hover { border-color: #000; }
        .o-pattern-title { font-family: var(--font-hero); font-size: 1.5rem; line-height: 1.2; color: #000; margin-bottom: 1.5rem; letter-spacing: -1px; }
        .o-summary { font-size: 1rem; line-height: 1.6; color: #666; flex-grow: 1; }

        /* STORIES GRID */
        .stories-section { padding: 100px 0; }
        .stories-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
        .story-card { background: white; border: 1px solid #eee; border-radius: 16px; overflow: hidden; transition: 0.3s; }
        .story-card:hover { border-color: #000; }
        .story-img { aspect-ratio: 16/10; background-size: cover; background-position: center; filter: grayscale(1); transition: 0.5s; }
        .story-card:hover .story-img { filter: grayscale(0); }
        .story-content { padding: 1.5rem; }
        .story-title { font-size: 1rem; font-weight: 700; margin-bottom: 0.75rem; letter-spacing: -0.2px; }
        .story-desc { font-size: 0.85rem; color: #666; line-height: 1.5; }

        .external-impact-links { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 5rem; border-top: 1px solid #eee; padding-top: 5rem; }
        .impact-link-card { padding: 3rem; background: #fff; border: 1px solid #eee; border-radius: 20px; }
        .link-label { font-size: 0.65rem; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; color: #ccc; margin-bottom: 1.5rem; display: block; }
        .impact-link-card h4 { font-family: var(--font-hero); font-size: 1.75rem; margin-bottom: 1.25rem; }
        .impact-link-card p { font-size: 1rem; color: #666; line-height: 1.5; margin-bottom: 2rem; }
        .impact-ext-link { font-size: 0.85rem; font-weight: bold; color: #000; text-decoration: none; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #eee; padding-bottom: 5px; transition: 0.3s; }
        .impact-ext-link:hover { border-color: #000; }

        .impact-link-card.highlight { background: #000; color: #fff; border-color: #111; }
        .impact-link-card.highlight .link-label { color: #888; }
        .impact-link-card.highlight p { color: #aaa; }
        .impact-link-card.highlight .impact-ext-link { color: #fff; border-color: #444; }
        .impact-link-card.highlight .impact-ext-link:hover { border-color: #fff; }

        @media (max-width: 1200px) {
          .container { padding: 0 4rem; }
          .hero-grid { grid-template-columns: 1fr; gap: 2rem; }
          .hero-desc { max-width: 600px; }
          .char-grid { grid-template-columns: repeat(2, 1fr); }
          .spotlight-card { grid-template-columns: 1fr 1fr; }
          .image-side { display: none; }
          .stories-grid { grid-template-columns: repeat(3, 1fr); }
          .external-impact-links { grid-template-columns: 1fr; }
        }
        
        @media (max-width: 1024px) {
           .spotlight-card { grid-template-columns: 1fr; }
           .detail-side { border-top: 1px solid #eee; }
           .outcomes-grid { grid-template-columns: repeat(2, 1fr); }
           .stories-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .container { padding: 0 1.5rem; }
          .hero-section { padding: 80px 0 40px; }
          .hero-title { font-size: 2.25rem; }
          .char-grid { grid-template-columns: 1fr; }
          .visual-section { padding: 20px 0 60px; }
          .large-visual { aspect-ratio: 4/3; }
          .spotlight-section { padding: 60px 0; }
          .outcome-side, .detail-side { padding: 2rem; }
          .outcome-title { font-size: 2rem; }
          .metrics-grid { flex-direction: column; gap: 2rem; }
          .outcomes-section { padding: 60px 0; }
          .outcomes-grid { grid-template-columns: 1fr; }
          .outcome-card { padding: 2rem; }
          .o-pattern-title { font-size: 1.25rem; }
          .stories-section { padding: 60px 0; }
          .stories-grid { grid-template-columns: 1fr; }
          .section-title { margin-bottom: 2rem; }
          .tab { padding: 0.75rem 1.25rem; font-size: 0.7rem; }
        }
      `}</style>
      </main>
   );
};

export default ImpactUI;
