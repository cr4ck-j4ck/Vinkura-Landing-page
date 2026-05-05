import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import NewsArticleUI from './NewsArticleUI';

export const newsData: Record<string, {
  category: string;
  date: string;
  title: string;
  desc: string;
  content: string;
  img: string;
}> = {
  'future-of-sovereign-official-software': {
    category: 'Perspectives',
    date: 'April 2024',
    title: 'The Future of Sovereign Official Software',
    desc: 'How the shift toward sovereign infrastructure is redefining public safety and administrative efficiency in India.',
    img: 'https://images.unsplash.com/photo-1573163231162-717dfc4e0463?q=80&w=2000',
    content: `India's government institutions have spent decades procuring foreign software to run critical public operations. From duty management systems sourced out of the country to evidence management tools running on foreign cloud servers, the operational data of Indian public institutions has historically flowed outside India's jurisdictional boundaries.

That era is ending.

The shift toward sovereign official software is not merely a policy preference — it is a structural necessity. As India's institutions mature in their digital capabilities, the demand for on-premise, air-gappable, and indigenous intelligence infrastructure is accelerating across every domain from law enforcement to district administration.

What does "sovereign" actually mean in this context? It means software that runs within India's jurisdictional boundaries. It means data that stays on servers the institution controls. It means audit trails that cannot be modified by external vendors. And critically, it means a system designed specifically for India's operational contexts: multilingual field environments, bandwidth-constrained rural deployments, and hierarchical administrative structures that Western enterprise software was never designed to accommodate.

Vinkura was built from the premise that India's public institutions deserve software designed for India. Every design decision — offline-first architecture, Hindi-English multilingual support, low-bandwidth optimization, compatibility with constrained government hardware — reflects the actual reality of how India's institutions operate.

The shift is already underway. Several state governments are actively evaluating sovereign alternatives to foreign enterprise platforms. The questions they ask are consistent: Can it run on-premise? Can it operate without internet? Does it support our existing workflows? The answer, increasingly, is yes — and Vinkura is at the center of that shift.`,
  },
  'orbit-20-sovereign-edge-orchestration': {
    category: 'Product Updates',
    date: 'April 2024',
    title: 'Orbit 2.0: Sovereign Edge Orchestration',
    desc: 'Introducing advanced policy reconciliation for air-gapped deployments and zero-trust synchronization layers.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000',
    content: `Orbit 2.0 represents the most significant architectural evolution of Vinkura's edge orchestration platform since its initial deployment. This release focuses on three core improvements: advanced policy reconciliation for air-gapped environments, a zero-trust synchronization layer, and improved state management for multi-node sovereign deployments.

Air-gapped policy reconciliation solves a challenge that has historically plagued offline deployments: how do you enforce centrally defined policies on a node that cannot connect to the central authority? Orbit 2.0 introduces a cryptographically signed policy bundle system — policies are compiled into tamper-evident packages that field nodes can validate locally, even without any connection to HQ.

The zero-trust synchronization layer ensures that when an air-gapped node reconnects, its state merge is treated with the same scrutiny as an untrusted external connection. Every state delta is verified against the local audit ledger before being accepted into the system-wide state. This eliminates a class of attack that targeted the reconnection window in previous architectures.

For Vinkura's government partners, Orbit 2.0 means field deployments can operate with full confidence that policy enforcement does not depend on connectivity. A checkpoint station operating in a remote border region can enforce the same access controls and audit requirements as a central headquarters — with mathematical certainty.

Orbit 2.0 is available to all existing Vinkura deployments through the standard update channel. For technical documentation on the policy bundle format and zero-trust sync protocol, contact your deployment team.`,
  },
  'digital-maalkhana-expansion': {
    category: 'Deployment Notes',
    date: 'March 2024',
    title: 'Digital Maalkhana Expansion',
    desc: 'Case study on the deployment of E-Maalkhana across 15+ new districts, focusing on official audit integrity.',
    img: 'https://images.unsplash.com/photo-1541870676-df113d07e2c9?q=80&w=2000',
    content: `The expansion of E-Maalkhana across 15 new districts represents the largest single rollout of digital evidence management infrastructure in the history of Indian law enforcement technology.

The deployment followed a structured onboarding protocol developed across Vinkura's prior evidence room digitization projects. Each district rollout begins with a physical evidence audit — every existing item in the maalkhana is catalogued, photographed, and assigned a unique QR identifier before any software configuration begins. This ensures the digital record begins with ground truth.

Across the 15 new districts, Vinkura processed over 40,000 individual evidence items in the initial digitization phase. The items ranged from weapons and narcotics to electronic devices and financial instruments. Each item now has a complete digital chain of custody: when it was booked, by which officer, its current state, its location in the physical evidence room, and any court hearings for which it has been requisitioned.

The critical insight from this expansion was the importance of QR code placement standardization. In early districts, inconsistent placement on items of different shapes created scan failures during retrieval. A revised placement protocol — with documented fallback positions for unusual item geometries — reduced scan failure rates to under 0.3% across all items.

The expansion also surfaced a long-standing operational gap: many districts lacked any documented procedure for evidence destruction. E-Maalkhana's structured destruction workflow — which requires supervisory approval and generates an immutable destruction certificate — has now given these districts a legally defensible process for the first time.`,
  },
  'voice-ai-high-noise-environments': {
    category: 'Engineering',
    date: 'February 2024',
    title: 'Voice AI in High-Noise Environments',
    desc: 'Technical breakdown of our field-first voice processing architecture designed for real-world operational noise.',
    img: 'https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?q=80&w=2000',
    content: `Consumer voice assistants fail in field environments. This is not a subtle limitation — it is a categorical failure. The acoustic models underlying most commercial speech recognition systems were trained primarily on clean studio audio or telephone-quality voice from controlled environments. Field officers at a crowd control deployment, a major accident scene, or a border checkpoint operate in a fundamentally different acoustic reality.

Vinkura Voice was engineered from the ground up for these environments. The approach differs from consumer voice AI in three fundamental ways: the training data, the processing pipeline, and the output format.

Training data: Vinkura's acoustic models were trained on a corpus of field-recorded audio from actual deployment environments — the ambient noise of a police deployment, crowd noise at a protest, the acoustic signature of vehicle checkpoints, and the reverberant environments of government building corridors. Consumer models trained on this data perform significantly better in operational contexts.

Processing pipeline: Voice uses an aggressive noise separation pass before the recognition stage. Rather than treating background noise as something to "cancel," the system identifies and models the ambient soundscape, then extracts the speech signal as a foreground element. This inverted approach performs better in environments where the noise floor changes rapidly.

Output format: This is the most consequential difference. Consumer voice tools produce text. Vinkura Voice produces structured data. A spoken report is parsed for intent — is this a situation report, a resource request, an escalation? — and the recognized intent generates API payloads that trigger downstream actions in the Vinkura platform. The officer speaks once; DDMS, E-Maalkhana, and Trinetra update simultaneously.

The result is a system that functions as a field officer's operational interface in environments where typing is impossible.`,
  },
};

export function generateStaticParams() {
  return Object.keys(newsData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = newsData[params.slug];
  if (!article) return { title: 'Article Not Found' };
  const url = `https://vinkura.in/company/newsroom/${params.slug}`;
  return {
    title: `${article.title} | Vinkura Newsroom`,
    description: article.desc,
    openGraph: {
      title: article.title,
      description: article.desc,
      url,
      type: 'article',
      images: [{ url: article.img, width: 2000, height: 1200, alt: article.title }],
    },
    twitter: { card: 'summary_large_image', title: article.title, description: article.desc, images: [article.img] },
    alternates: { canonical: url },
  };
}

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = newsData[params.slug];
  if (!article) notFound();
  return <NewsArticleUI article={article} slug={params.slug} />;
}
