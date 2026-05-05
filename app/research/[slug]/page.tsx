import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ResearchUI from './ResearchUI';

const researchData: Record<string, any> = {
  'sovereign-intelligence': {
    title: "Sovereign Intelligence: Unifying Official Data Without Compromising Departmental Agency",
    type: "Whitepaper",
    summary: "How Vinkura Core serves as the operating substrate for unified governance — a shared database, role-definition engine, encrypted communication bus, and immutable audit ledger replacing fragmented vendor silos.",
    content: `Government institutions procure dozens of disconnected tools sharing zero data. An officer logging an FIR must carry a printout to the evidence locker. Duty rosters live in spreadsheets disconnected from court calendars. The result is institutional blindness — no single authority has a unified operational view.

Vinkura Core solves this with three foundational graph structures exposed through a unified GraphQL/REST API. The Identity Graph manages officer rank, permissions, and clearances. The Entity Graph maps relationships between evidence, rosters, court dates, and case files. The Audit Ledger provides an immutable, cryptographically verified log of every action across every module.

A district commander can now see case status — assigned officers, evidence chain, next hearing, pending forensics — from a single interface. Every module (Trinetra, Forge, Voice, DDMS, E-Maalkhana) inherits identity, auditability, and relational context from Core on day one. The correct unit of investment is not more point solutions — it is the shared operational layer that transforms isolated databases into institutional memory.`,
    points: [
      "Unified GraphQL/REST API: Single integration surface replacing dozens of vendor-specific interfaces across departments.",
      "Identity Graph: Officer rank, permissions, clearances, and module access managed through structured RoleProfile schemas.",
      "Entity Graph: Relational mapping between evidence, duty rosters, court dates, case files, and inter-departmental references.",
      "Immutable Audit Ledger: Append-only cryptographic log ensuring every action across every module is permanently traceable.",
      "SystemState Sync: Global store reflecting real-time changes from all edge modules — Trinetra, Forge, DDMS, E-Maalkhana.",
      "Departmental Autonomy: Each unit retains operational control while the intelligence layer provides structured cross-departmental visibility."
    ],
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000"
  },
  'operational-visibility': {
    title: "Operational Visibility in Extreme-Edge Environments: Trinetra and the Amarnath Deployment",
    type: "Field Research",
    summary: "How Vinkura's mobile-first, offline-resilient Trinetra platform enabled real-time multi-zone coordination for 500,000+ pilgrims across a 40km mountainous trek at 14,000ft with zero cellular connectivity.",
    content: `During the Amarnath pilgrimage, 500,000+ pilgrims traverse a 40km mountainous trek at 14,000ft with zero cellular connectivity. Communication between forward posts historically relied on disjointed radio chatter — command headquarters had no data-driven understanding of ground conditions. Trinetra was built to replace this information vacuum.

Trinetra is an offline-first field deployment platform. Each device maintains a local database capable of full autonomous operation. State changes are queued locally and synchronized via compressed telemetry bursts over narrow-band satellite links when connectivity appears, even momentarily. The Geo-Aware Engine handles low-power GPS polling optimized for extreme cold and extended battery life.

During the Amarnath deployment, when a forward zone reported dangerous overcrowding, Trinetra surfaced the condition to command HQ with precise zone identification and trend projections — enabling base camps to hold back pilgrim batches before a stampede condition could develop. Conflict resolution uses timestamp-based vector clocks with zone-authority precedence, ensuring ground-truth integrity across distributed field units.`,
    points: [
      "Offline-First Architecture: Local embedded database with full autonomous operation — no connectivity dependency for field functionality.",
      "Store-and-Forward Sync: Compressed telemetry bursts synchronized over narrow-band satellite links when connectivity is momentarily available.",
      "Geo-Aware Engine: Low-power GPS polling optimized for extreme cold and extended battery life in environments where recharging is impossible.",
      "Multi-Zone Coordination: Real-time overcrowding detection with clustered telemetry enabling command-level intervention before stampede conditions develop.",
      "Conflict Resolution Protocol: Timestamp-based vector clocks with zone-authority precedence ensuring ground-truth integrity across distributed field units.",
      "Proven at Scale: 500,000+ pilgrims, 40km trek, 14,000ft altitude, zero cellular connectivity — structured operational data throughout."
    ],
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000"
  },
  'automated-governance': {
    title: "The Architecture of Automated Governance: Converting Paper Workflows into Executable State Machines",
    type: "Product Research",
    summary: "How Vinkura Forge replaces manual paper-based approval chains with AI-driven orchestration, conditional routing, SLA enforcement, and immutable audit trails — eliminating the shadows where administrative corruption thrives.",
    content: `A standard government approval requires eight physical desks and signatures. Files gather dust for weeks with no detection mechanism. Officers with discretionary power over file movement operate without accountability. Corruption thrives not through conspiracy, but through these unaccountable gaps. Forge was built to make this structurally impossible.

Forge models every approval as a directed graph with defined nodes, conditions, and time constraints. Critical requests skip intermediate nodes to reach the District Commander directly. Files sitting 48+ hours auto-escalate with timestamped delay records. RBAC is enforced at every transition — no unauthorized approvals, no post-forward modifications. Every state change generates an immutable ledger entry.

The SLA enforcement layer surfaces bottlenecks in real-time: processing time by workflow type, compliance rates by department, chronic delay points. Forge does not eliminate human judgment — it eliminates the unaccountable gaps between human decisions. When the software enforces the workflow, procedural integrity becomes a system property rather than an aspirational policy.`,
    points: [
      "Executable State Machines: Approval workflows modeled as directed graphs with defined nodes, edges, conditions, and time constraints.",
      "Conditional Routing: Intelligent escalation paths — critical requests bypass intermediate nodes and route directly to decision authorities.",
      "SLA Enforcement: Automatic escalation when files exceed defined time thresholds at any desk, with timestamped delay records.",
      "RBAC at Every Node: Role-based access control enforced per transition — no unauthorized approvals, no post-forward modifications.",
      "Immutable Workflow Audit: Complete lifecycle reconstruction for any file — who received it, when they acted, what they decided.",
      "Real-Time Bottleneck Detection: Continuous visibility into institutional throughput, compliance rates, and chronic delay points."
    ],
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000"
  },
  'field-intelligence-nlp': {
    title: "Field Intelligence NLP: Voice-to-Record Translation for Tactical Environments",
    type: "Technical Research",
    summary: "How Vinkura Voice processes unstructured multilingual spoken reports from field officers and converts them into structured, machine-parsable intelligence logs — purpose-built for high-noise, code-switching tactical environments where typing is operationally impossible.",
    content: `Field officers wearing tactical gear in chaotic environments — crowd surges, accident scenes, border checkpoints — cannot type on mobile keyboards. Critical intelligence was captured hours later from memory, transmitted via imprecise radio, or lost entirely. Voice was built on the premise that input modality must match operational reality.

Voice is a purpose-built Voice-to-Record Translation Pipeline, not a consumer assistant. Acoustic models are trained on field-recorded corpora — sirens, crowd noise, radio crosstalk — where standard speech-to-text engines fail. The system handles Hindi-English code-switching natively within single utterances, along with regional language variants across state deployments.

Voice does not merely transcribe — it parses intent. Spoken reports map to structured categories: situation reports, resource requests, escalations. Each intent generates API payloads that auto-trigger DDMS dispatch alerts, E-Maalkhana intake records, and Trinetra updates. The officer speaks once, the entire system updates — near-zero delta between field events and structured command intelligence.`,
    points: [
      "High-Noise Acoustic Models: Trained on field-recorded corpora from actual deployment environments — sirens, crowds, radio crosstalk, weather interference.",
      "Native Code-Switching: Hindi-English multilingual recognition within single utterances, with support for regional language variants across state deployments.",
      "Intent Parsing Pipeline: Spoken reports mapped to structured categories — situation reports, resource requests, incident escalations, status updates.",
      "Direct Module Integration: Voice payloads trigger DDMS dispatch alerts, E-Maalkhana intake records, and Trinetra operational picture updates automatically.",
      "Zero Manual Data Entry: Officers speak once — the entire operational system updates with structured, machine-parsable intelligence.",
      "Tactical Compression: Near-zero latency between field observation and structured intelligence availability at command level."
    ],
    img: "https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?q=80&w=2000"
  },
  'evidence-chain-integrity': {
    title: "Evidence Chain Integrity: Digitizing Custody with Cryptographic Assurance",
    type: "Product Research",
    summary: "How Vinkura E-Maalkhana replaces decaying paper ledgers and disorganized evidence warehouses with QR-integrated digital custody chains, immutable state-machine transitions, and cryptographic proof of integrity that holds up in court.",
    content: `Evidence rooms across India resemble disorganized warehouses — physical objects linked to decaying paper ledgers spanning decades. When chain of custody cannot be proven, evidence becomes inadmissible. Criminals walk free not because of insufficient evidence, but because the storage system could not account for it.

E-Maalkhana digitizes physical evidence management through QR/RFID integration. Every item is bound to a unique hashed identifier linking it to its complete digital record: case association, intake officer, timestamp, photographic documentation, and forensic requirements. The core architecture is a strict state machine — every item exists in exactly one defined state (Intake, Stored, In Transit, Presented in Court, Destroyed), and every transition requires authenticated action with an immutable ledger entry.

During trial proceedings, judges can receive the exact cryptographic chain of custody for any evidence item — timestamped, officer-identified, and hash-verified. Defense attorneys cannot argue tampering when the digital record proves an unbroken custody chain from crime scene to courtroom. This transforms evidence management from an institutional vulnerability into a prosecutorial asset.`,
    points: [
      "QR/RFID Binding: Every physical evidence item tethered to a unique hashed digital identifier with photographic documentation at intake.",
      "Strict State Machine: Defined states (Stored, Checked Out, In Transit, Returned, Destroyed) with no impossible transitions permitted.",
      "Immutable Ledger Entries: Every custody transition recorded with authenticated officer identity, timestamp, and authorization authority.",
      "Millisecond Retrieval: Search by case number, item description, date range, state, or custodial officer — replacing hours of paper register searching.",
      "Cryptographic Chain of Custody: Hash-verified, tamper-evident records that constitute legal-grade proof of evidence integrity.",
      "Judicial Integration: Judges can view the exact unbroken custody chain during trial proceedings — transforming evidence management into a prosecutorial asset."
    ],
    img: "https://images.unsplash.com/photo-1541870676-df113d07e2c9?q=80&w=2000"
  },
  'personnel-optimization': {
    title: "Personnel Optimization: AI-Assisted Deployment Replacing Static Duty Registers",
    type: "Field Research",
    summary: "How Vinkura DDMS replaces paper-based duty allocation with constrained multi-objective optimization — eliminating human bias, chronic officer exhaustion, and zero-auditability conditions that plague manual personnel management across Indian police forces.",
    content: `Paper duty boards produce predictable failures: favoritism in allocation, chronic exhaustion for high-performing officers, under-utilization of others, and zero auditability over deployment decisions. When tens of thousands of personnel are managed through a Reserve Inspector's personal judgment, optimization is not even a coherent concept.

DDMS replaces static registers with AI-assisted deployment treating personnel as a constrained optimization problem. Inputs include force size, leave status, officer skill-tags (Riot Control, VIP Security, Cyber Crime), geographic proximity, and historical patterns — evaluated against legal duty limits, mandatory rest periods, and equitable rotation objectives. The output is a live, conflict-free shift roster delivered directly to mobile units.

Validated at Bareilly Police, DDMS shifted allocation from subjective judgment to data-driven optimization. Commanders received unified heatmaps replacing fragmented paper boards. Every deployment decision is recorded with timestamp, authority, and rationale. Absenteeism dropped measurably — not through punitive enforcement, but because unaccounted absences became immediately visible. Commanders retain override capability, but every override is recorded and auditable.`,
    points: [
      "Constrained Multi-Objective Optimization: Force size, skill-tags, leave status, legal duty limits, and proximity evaluated simultaneously for conflict-free rosters.",
      "Real-Time Reallocation: Unexpected requirements (VIP visits, protests, disasters) trigger instant recalculation with minimum-disruption redeployment proposals.",
      "Unified Commander Heatmap: Live force distribution visualization across jurisdictions with real-time gap identification replacing fragmented paper boards.",
      "Immutable Deployment Ledger: Every allocation decision recorded with timestamp, authority, and optimization rationale — eliminating discretionary opacity.",
      "Equitable Rotation Engine: Historical deployment patterns analyzed to prevent chronic exhaustion of high-performing officers and under-utilization of others.",
      "Proven at Bareilly Police: Subjective allocation replaced with data-driven optimization — measurable absenteeism reduction through visibility, not punitive enforcement."
    ],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000"
  }
};

export async function generateStaticParams() {
  return Object.keys(researchData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const data = researchData[params.slug];
  if (!data) return { title: 'Research Not Found' };

  const canonicalUrl = `https://vinkura.in/research/${params.slug}`;

  return {
    title: `${data.title} | Vinkura Research`,
    description: data.summary,
    keywords: [
      'Vinkura', 'sovereign technology', 'government technology', 'GovTech India',
      'police technology', 'law enforcement software', 'operational visibility',
      'automated governance', 'evidence management', 'duty management',
      'field intelligence', 'NLP', 'chain of custody', 'personnel optimization',
      'audit trail', 'immutable ledger', 'digital governance', 'state machine',
      'edge computing', 'offline-first architecture'
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${data.title} | Vinkura Research`,
      description: data.summary,
      url: canonicalUrl,
      siteName: 'Vinkura',
      type: 'article',
      images: [
        {
          url: data.img,
          width: 2000,
          height: 1200,
          alt: data.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${data.title} | Vinkura Research`,
      description: data.summary,
      images: [data.img],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const data = researchData[params.slug];

  if (!data) {
     notFound();
  }

  return <ResearchUI data={data} />;
}
