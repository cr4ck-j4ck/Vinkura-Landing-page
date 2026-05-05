import React from 'react';
import { Metadata } from 'next';
import CaseStudyDetailUI from '../../../components/CaseStudyDetailUI';

export const metadata: Metadata = {
  title: "E-Maalkhana Case Study | Digital Evidence Management for Indian Police",
  description: "Digitalizing the Chain of Custody for evidence management in Indian police stations with QR-integrated tracking. How E-Maalkhana eliminated manual register gaps and ensured procedural integrity.",
  keywords: ["E-Maalkhana case study", "evidence management India", "chain of custody digital", "police evidence tracking India"],
  openGraph: {
    title: "E-Maalkhana Case Study | Digital Evidence Management for Indian Police",
    description: "Digitalizing the Chain of Custody for evidence management with QR-integrated tracking.",
    url: "https://vinkura.in/case-studies/maalkhana",
  },
  alternates: { canonical: "https://vinkura.in/case-studies/maalkhana" },
};

const data = {
  eyebrow: "Evidence Management",
  title: "E-Maalkhana",
  desc: "Digital chain-of-custody for physical evidence — replacing decaying paper ledgers with a strict state-machine and cryptographic proof of integrity.",
  challenge: "Police Maalkhanas operated as disorganized warehouses linked to decaying paper ledgers spanning 15+ years. Searching for specific evidence could take hours. Evidence degradation, loss, and tampering were systemic. Collapsed court prosecutions resulted when judges asked for custody documentation and officers produced only tattered registers with illegible entries.",
  solution: "E-Maalkhana enforces a strict state-machine: Seized → Stored → Checked Out → Forensics → Returned → Court → Destroyed. Each item is bound to a QR/RFID tag at seizure. Every transition requires digital authorization and generates an immutable ledger entry. The system enforces procedural integrity, not just tracking.",
  outcome: "Search time dropped from hours to milliseconds. Judges access cryptographic chain-of-custody records for every evidence item. Prosecutions that collapsed on procedural grounds now proceed on digitally guaranteed evidentiary integrity.",
  img: "https://images.unsplash.com/photo-1541870676-df113d07e2c9?q=80&w=2000",
  points: [
    { h: "Accountability", p: "Every item tracked via QR/RFID-bound identity from seizure through disposal. Each transition requires digital authorization — no gap where an item exists without a documented custodian." },
    { h: "Efficiency", p: "Officers locate items by case number, FIR reference, or date range in seconds. Bulk queries like 'all items pending forensic return for Thursday's hearing' are routine." },
    { h: "Security", p: "Role-based authorization at every transition. A constable cannot authorize destruction; a forensic lab cannot mark items returned without receiving officer confirmation." },
    { h: "Judicial Integrity", p: "Courts receive cryptographic proof that no record was altered. Chain-of-custody becomes a procedural guarantee, not a paper formality." }
  ]
};


export default function MaalkhanaPage() {
  return <CaseStudyDetailUI data={data} />;
}
