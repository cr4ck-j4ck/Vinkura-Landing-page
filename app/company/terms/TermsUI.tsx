'use client';

import React from 'react';

export default function TermsUI() {
  return (
    <main className="legal-page bg-white min-h-screen pt-40 pb-20">
      <div className="container">
        <header className="legal-header">
          <span className="eyebrow">Legal Framework</span>
          <h1 className="legal-title">Terms of Service</h1>
          <p className="last-updated">Last Updated: May 2026</p>
        </header>

        <section className="legal-content">
          <div className="legal-section">
            <h2>1. Official Engagement</h2>
            <p>
              Vinkura Innovations Network Pvt. Ltd. ("Vinkura") provides sovereign AI infrastructure and operational software designed for public institutions, government agencies, and regulated entities. Use of our systems is governed by specific official master service agreements (MSA) and these standard terms.
            </p>
          </div>

          <div className="legal-section">
            <h2>2. Sovereign Data & Infrastructure</h2>
            <p>
              All deployments of Vinkura Core, Orbit, and associated modules are designed to respect jurisdictional boundaries. Data residency and processing protocols are configured based on the specific requirements of the engaging organization.
            </p>
          </div>

          <div className="legal-section">
            <h2>3. Intellectual Property</h2>
            <p>
              Vinkura retains all rights to its proprietary algorithms, models, and orchestration layers. Engaging institutions are granted specific operational licenses as defined in their respective deployment agreements.
            </p>
          </div>

          <div className="legal-section">
            <h2>4. Ethical Sovereignty</h2>
            <p>
              Our systems are built on the principle of Ethical Sovereignty—ensuring that AI remains a tool for human governance and accountability, not a replacement for it. Users must adhere to official ethics guidelines when operating Vinkura systems.
            </p>
          </div>
        </section>
      </div>

      <style jsx>{`
        .legal-page { font-family: var(--font-inter, sans-serif); color: #000; }
        .container { max-width: 800px; margin: 0 auto; padding: 0 2rem; }
        .legal-header { margin-bottom: 5rem; border-bottom: 1px solid #eee; padding-bottom: 3rem; }
        .eyebrow { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #999; display: block; margin-bottom: 1rem; }
        .legal-title { font-family: var(--font-outfit, sans-serif); font-size: 4rem; letter-spacing: -0.04em; line-height: 1; margin-bottom: 1rem; }
        .last-updated { font-size: 0.9rem; color: #666; }
        
        .legal-content { line-height: 1.6; }
        .legal-section { margin-bottom: 4rem; }
        .legal-section h2 { font-family: var(--font-outfit, sans-serif); font-size: 1.5rem; font-weight: 600; margin-bottom: 1.5rem; letter-spacing: -0.02em; }
        .legal-section p { font-size: 1.1rem; color: #333; margin-bottom: 1.5rem; font-weight: 300; }
        
        @media (max-width: 768px) {
          .legal-title { font-size: 2.5rem; }
          .legal-header { margin-bottom: 3rem; }
        }
      `}</style>
    </main>
  );
}
