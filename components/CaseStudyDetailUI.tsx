'use client';

import React from 'react';

interface CaseStudyData {
   eyebrow: string;
   title: string;
   desc: string;
   challenge: string;
   solution: string;
   outcome: string;
   img: string;
   points: { h: string; p: string }[];
}

export default function CaseStudyDetailUI({ data }: { data: CaseStudyData }) {
   return (
      <main className="page-shell">
         <div className="page-container">
            <section className="case-hero">
               <span className="case-eyebrow">Impact Study // {data.eyebrow}</span>
               <h1 className="case-title">{data.title}</h1>
               <p className="case-subtitle">{data.desc}</p>
               <div className="case-visual">
                  <div className="visual-box" style={{ backgroundImage: `url(${data.img})` }}></div>
               </div>
            </section>

            <section className="section-block border-t">
               <div className="section-grid">
                  <div className="section-label-col"><h2 className="section-heading">The Official Challenge</h2></div>
                  <div className="section-content-col"><p className="section-body-large">{data.challenge}</p></div>
               </div>
            </section>

            <section className="section-block border-t">
               <div className="section-grid">
                  <div className="section-label-col"><h2 className="section-heading">Systemic Architecture</h2></div>
                  <div className="section-content-col">
                     <div className="capability-grid">
                        {data.points.map((pt, idx) => (
                           <div key={idx} className="cap-item">
                              <h3 className="cap-title">{pt.h}</h3>
                              <p className="cap-body">{pt.p}</p>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </section>

            <section className="section-block border-t bg-black text-white full-width">
               <div className="page-container">
                  <div className="section-grid py-24">
                     <div className="section-label-col"><h2 className="section-heading black">Operational Outcome</h2></div>
                     <div className="section-content-col"><p className="section-body-large black">{data.outcome}</p></div>
                  </div>
               </div>
            </section>

            <section className="section-block border-t">
               <div className="section-grid">
                  <div className="section-label-col"><h2 className="section-heading">Deployment Briefing</h2></div>
                  <div className="section-content-col">
                     <div className="form-container">
                        <p className="form-intro">Discuss how this architecture can be adapted for your organization's specific operational needs.</p>
                        <form action="https://formsubmit.co/info.vinkura@gmail.com" method="POST" className="deployment-form">
                           <input type="hidden" name="_subject" value="Deployment Briefing Request — Vinkura" />
                           <input type="hidden" name="_captcha" value="false" />
                           <input type="hidden" name="_template" value="table" />
                           <input type="text" name="name" placeholder="Full Name" required />
                           <input type="email" name="email" placeholder="Official Email" required />
                           <input type="text" name="org" placeholder="Organization / Department" required />
                           <textarea name="message" placeholder="Impact requirements" required></textarea>
                           <button type="submit" className="submit-btn-premium">Submit Request</button>
                        </form>
                     </div>
                  </div>
               </div>
            </section>
         </div>

         <style jsx>{`
        .page-shell { min-height: 100vh; background: #fdfdfc; color: #0a0a0a; font-family: var(--font-inter), sans-serif; }
        .page-container { width: 100%; max-width: 1280px; margin: 0 auto; padding-left: 32px; padding-right: 32px; }
        .case-hero { padding-top: 180px; padding-bottom: 80px; }
        .case-eyebrow { font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.15em; color: rgba(10,10,10,0.4); margin-bottom: 24px; display: block; }
        .case-title { font-size: clamp(3.5rem, 8vw, 7rem); line-height: 0.95; letter-spacing: -0.04em; font-weight: 500; margin-bottom: 32px; font-family: var(--font-outfit), sans-serif; }
        .case-subtitle { max-width: 700px; font-size: 1.5rem; line-height: 1.5; color: rgba(10,10,10,0.6); margin-bottom: 64px; font-weight: 300; }
        .case-visual { width: 100%; border: 1px solid rgba(0,0,0,0.06); padding: 8px; }
        .visual-box { aspect-ratio: 21/9; background-size: cover; background-position: center; filter: grayscale(1); }
        .section-block { padding: 120px 0; }
        .border-t { border-top: 1px solid rgba(0,0,0,0.06); }
        .full-width { width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; }
        .section-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 64px; }
        @media (max-width: 900px) { .section-grid { grid-template-columns: 1fr; gap: 32px; } .section-block { padding: 80px 0; } }
        .section-heading { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 800; color: #000; }
        .section-heading.white { color: rgba(255,255,255,0.5); }
        .section-body-large { font-size: 2rem; line-height: 1.25; letter-spacing: -0.02em; color: #000; font-weight: 400; }
        .section-body-large.white { color: #fff; }
        .capability-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }
        @media (max-width: 600px) { .capability-grid { grid-template-columns: 1fr; } }
        .cap-title { font-size: 1.25rem; font-weight: 600; margin-bottom: 16px; }
        .cap-body { font-size: 1rem; line-height: 1.6; color: rgba(10,10,10,0.6); font-weight: 300; }
        .form-container { max-width: 600px; }
        .form-intro { font-size: 1.1rem; color: rgba(10,10,10,0.6); margin-bottom: 40px; }
        .deployment-form { display: flex; flex-direction: column; gap: 16px; }
        .deployment-form input, .deployment-form textarea { width: 100%; padding: 20px; border: 1px solid rgba(0,0,0,0.08); background: #fff; font-size: 0.9rem; outline: none; transition: 0.3s; }
        .deployment-form input:focus, .deployment-form textarea:focus { border-color: #000; }
        .deployment-form textarea { min-height: 160px; }
        .submit-btn-premium { background: #000; color: #fff; padding: 20px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; border: none; cursor: pointer; transition: 0.3s; }
        .submit-btn-premium:hover { background: #333; }
      `}</style>
      </main>
   );
}
