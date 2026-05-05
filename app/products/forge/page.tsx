import React from 'react';
import { Metadata } from 'next';
import ForgeUI from './ForgeUI';

export const metadata: Metadata = {
  title: "Vinkura Forge | Workflow Infrastructure for Indian Government Institutions",
  description: "The backbone of institutions is not strategy — it is process. Vinkura Forge converts manual, paper-heavy government workflows into dependable digital systems like DDMS, E-Maalkhana, and E-CTC. Enterprise-grade sovereign process automation for India's public sector.",
  keywords: [
    "Vinkura Forge", "workflow infrastructure India", "government automation India",
    "DDMS", "E-Maalkhana", "E-CTC", "sovereign process automation",
    "digital government India", "paper to digital government",
    "institutional workflow software India",
  ],
  openGraph: {
    title: "Vinkura Forge | Workflow Infrastructure for Indian Government Institutions",
    description: "Converting manual government workflows into dependable digital systems. Enterprise-grade sovereign automation for India.",
    url: "https://vinkura.in/products/forge",
  },
  alternates: { canonical: "https://vinkura.in/products/forge" },
};

export default function Page() {
  return <ForgeUI />;
}
