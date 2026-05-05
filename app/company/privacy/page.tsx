import React from 'react';
import { Metadata } from 'next';
import PrivacyUI from './PrivacyUI';

export const metadata: Metadata = {
  title: "Privacy Policy | Vinkura AI",
  description: "Data governance, privacy protocols, and sovereign data handling policies for Vinkura AI official government systems deployed across India.",
  keywords: ["Vinkura privacy policy", "data governance India", "sovereign data handling", "government data privacy India"],
  alternates: { canonical: "https://vinkura.in/company/privacy" },
};

export default function PrivacyPage() {
  return <PrivacyUI />;
}
