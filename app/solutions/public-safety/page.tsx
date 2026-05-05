import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: "Public Safety Intelligence & AI Solutions for India",
   description: "Modernizing public safety across Indian states with Vinkura AI. Decision intelligence, real-time field coordination, and auditable workflows for law enforcement, emergency response, and homeland security — India's operational intelligence platform for public safety.",
   keywords: [
      "public safety AI India", "police intelligence platform India",
      "emergency coordination software", "law enforcement AI India",
      "Palantir public safety alternative India", "crime intelligence platform",
      "Vinkura public safety", "homeland security software India",
      "real-time field coordination India",
   ],
   openGraph: {
      title: "Public Safety Intelligence & AI Solutions for India | Vinkura AI",
      description: "Decision intelligence, real-time coordination, and auditable workflows for Indian law enforcement and emergency response.",
      url: "https://vinkura.in/solutions/public-safety",
   },
   alternates: { canonical: "https://vinkura.in/solutions/public-safety" },
};

export default function Page() {
   return (
      <main className="solution-page bg-white text-black min-h-screen pt-48 pb-24">
         <div className="container mx-auto px-6 max-w-7xl">
            <span className="text-[10px] uppercase font-bold tracking-[4px] text-gray-400 mb-8 block">Solutions / Public Safety</span>
            <h1 className="text-6xl lg:text-9xl font-bold tracking-tighter leading-[0.85] uppercase mb-16">
               Operational <br />
               <span className="text-gray-400">Public Safety.</span>
            </h1>
            <p className="text-2xl font-light text-gray-600 max-w-3xl leading-relaxed mb-24">
               Vinkura provides the software infrastructure that connects field intelligence to command decisions in the most demanding environments.
            </p>

            <div className="grid lg:grid-cols-2 gap-24 border-t pt-24">
               <div>
                  <h2 className="text-4xl font-bold mb-8 uppercase tracking-tighter">Command & Control</h2>
                  <p className="text-lg text-gray-500 leading-relaxed mb-8">
                     Move from fragmented radio signals to a unified operational picture. Vinkura Sentinel and Core enable real-time resource tracking and inter-departmental coordination.
                  </p>
                  <ul className="flex flex-col gap-4 text-sm font-bold uppercase tracking-widest">
                     <li>/ Mobile Field Reporting</li>
                     <li>/ Resource Allocation (DDMS)</li>
                     <li>/ Incident Visualization</li>
                  </ul>
               </div>
               <div>
                  <h2 className="text-4xl font-bold mb-8 uppercase tracking-tighter">Investigative Integrity</h2>
                  <p className="text-lg text-gray-500 leading-relaxed mb-8">
                     Ensure every piece of evidence and every investigative step is auditable and chain-of-custody compliant.
                  </p>
                  <ul className="flex flex-col gap-4 text-sm font-bold uppercase tracking-widest">
                     <li>/ E-Maalkhana Tracking</li>
                     <li>/ E-CTC Case Coordination</li>
                     <li>/ Digital Evidence Archival</li>
                  </ul>
               </div>
            </div>

            <div className="cta-box mt-40 p-12 bg-black text-white rounded-3xl text-center">
               <h2 className="text-4xl font-bold mb-8 uppercase tracking-tighter">Discuss Departmental Deployment</h2>
               <p className="text-gray-400 mb-12">Contact us to see how our modular solutions can fit your specific operational needs.</p>
               <a href="/company/security#contact" className="inline-block border border-white p-6 tracking-widest text-[10px] font-bold uppercase hover:bg-white hover:text-black transition-all">
                  Request a Briefing ↗
               </a>
            </div>
         </div>
      </main>
   );
}
