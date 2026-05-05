import React from 'react';
import { Metadata } from 'next';
import ECTCUI from './ECTCUI';

export const metadata: Metadata = {
  title: "E-CTC | Electronic Case Tracking & Coordination for Indian Law Enforcement",
  description: "End-to-end case lifecycle management for Indian law enforcement. E-CTC unifies FIR data, investigative logs, and court proceedings into a single secure intelligence layer. Built for judicial accountability and prosecution readiness across Indian states.",
  keywords: [
    "E-CTC", "electronic case tracking India", "FIR management software",
    "law enforcement case management India", "digital prosecution India",
    "court case tracking software", "investigation management system India",
    "Vinkura AI", "judicial accountability software India",
  ],
  openGraph: {
    title: "E-CTC | Electronic Case Tracking for Indian Law Enforcement",
    description: "Unifying FIR data, investigative logs, and court proceedings for judicial accountability across Indian states.",
    url: "https://vinkura.in/products/e-ctc",
  },
  alternates: { canonical: "https://vinkura.in/products/e-ctc" },
};

export default function Page() {
  return <ECTCUI />;
}
