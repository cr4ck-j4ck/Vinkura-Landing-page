'use client';

import React from 'react';

export default function PrivacyUI() {
  return (
    <main className="legal-page bg-white min-h-screen pt-40 pb-20">
      <div className="container">
        <header className="legal-header">
          <span className="eyebrow">Data Governance</span>
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="last-updated">Last Updated: May 2026</p>
        </header>

        <section className="legal-content">
          <div className="legal-section">
            <h2>1. Commitment to Sovereignty</h2>
            <p>
              Vinkura's privacy framework is built around the principle of data sovereignty. We believe that official data must remain under the absolute control of the organization, processed within verified boundaries.
            </p>
          </div>

          <div className="legal-section">
            <h2>2. Information Collection</h2>
            <p>
              In our official deployments, Vinkura acts as a data processor. We do not collect or own the operational data processed by our systems; that ownership remains with the engaging organization.
            </p>
          </div>

          <div className="legal-section">
            <h2>3. DPDP Compliance</h2>
            <p>
              Our systems are engineered to be compliant with the Digital Personal Data Protection (DPDP) Act of India and other relevant sovereign data regulations. We implement granular consent management and data minimization protocols.
            </p>
          </div>

          <div className="legal-section">
            <h2>4. Security Standards</h2>
            <p>
              We employ military-grade encryption for data at rest and in transit. Our Orbit orchestration layer allows for air-gapped deployments, ensuring that mission-critical data never touches the public internet.
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
