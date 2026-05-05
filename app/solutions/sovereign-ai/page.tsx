import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: "Sovereign AI Infrastructure for India — On-Premise & Air-Gapped",
   description: "Secure, on-premise AI infrastructure for sovereign Indian operations. Deploy Vinkura Orbit for air-gapped intelligence, data residency, and complete operational control in public institutions — India's sovereign alternative to foreign data platforms.",
   keywords: [
      "sovereign AI India", "on-premise AI infrastructure India",
      "data residency India", "air-gapped AI deployment",
      "sovereign cloud India", "Palantir sovereign alternative India",
      "government AI infrastructure India", "Indian data sovereignty",
      "secure government platform India",
   ],
   openGraph: {
      title: "Sovereign AI Infrastructure for India | Vinkura AI",
      description: "On-premise, air-gapped AI infrastructure for sovereign Indian government operations. Complete data residency and operational control.",
      url: "https://vinkura.in/solutions/sovereign-ai",
   },
   alternates: { canonical: "https://vinkura.in/solutions/sovereign-ai" },
};

export default function Page() {
   return (
      <main className="solution-page bg-white text-black min-h-screen pt-48 pb-24">
         <div className="container mx-auto px-6 max-w-7xl">
            <span className="text-[10px] uppercase font-bold tracking-[4px] text-gray-400 mb-8 block">Solutions / Sovereign AI</span>
            <h1 className="text-6xl lg:text-9xl font-bold tracking-tighter leading-[0.85] uppercase mb-16">
               Official <br />
               <span className="text-gray-400">Sovereignty.</span>
            </h1>
            <p className="text-2xl font-light text-gray-600 max-w-3xl leading-relaxed mb-24">
               Critical departments cannot depend on external clouds for mission-critical intelligence. We provide the infrastructure for sovereign, on-premise execution.
            </p>

            <div className="grid lg:grid-cols-2 gap-24 border-t pt-24">
               <div>
                  <h2 className="text-4xl font-bold mb-8 uppercase tracking-tighter">On-Premise Deployment</h2>
                  <p className="text-lg text-gray-500 leading-relaxed mb-8">
                     Run high-performance AI models within your own data center boundaries. Vinkura Orbit handles the orchestration without requiring a public internet connection.
                  </p>
                  <ul className="flex flex-col gap-4 text-sm font-bold uppercase tracking-widest">
                     <li>/ Air-Gapped Sync</li>
                     <li>/ Hardware-Aware Acceleration</li>
                     <li>/ Local Inference Engines</li>
                  </ul>
               </div>
               <div>
                  <h2 className="text-4xl font-bold mb-8 uppercase tracking-tighter">Data Residency</h2>
                  <p className="text-lg text-gray-500 leading-relaxed mb-8">
                     Ensure that sensitive official data never crosses physical or jurisdictional boundaries. Our systems are built with zero-trust architectural principles.
                  </p>
                  <ul className="flex flex-col gap-4 text-sm font-bold uppercase tracking-widest">
                     <li>/ Policy-based Data Locality</li>
                     <li>/ Encrypted Storage at Rest/Transit</li>
                     <li>/ Sovereign Audit Logs</li>
                  </ul>
               </div>
            </div>

            <div className="cta-box mt-40 p-12 bg-black text-white rounded-3xl text-center">
               <h2 className="text-4xl font-bold mb-8 uppercase tracking-tighter">Discuss Sovereign Architecture</h2>
               <p className="text-gray-400 mb-12">Talk to our security architects about your deployment constraints.</p>
               <a href="/company/security#contact" className="inline-block border border-white p-6 tracking-widest text-[10px] font-bold uppercase hover:bg-white hover:text-black transition-all">
                  Request Briefing ↗
               </a>
            </div>
         </div>
      </main>
   );
}
