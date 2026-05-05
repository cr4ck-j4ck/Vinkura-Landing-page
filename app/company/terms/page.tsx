import React from 'react';
import { Metadata } from 'next';
import TermsUI from './TermsUI';

export const metadata: Metadata = {
  title: "Terms of Service | Vinkura AI",
  description: "Official terms of service and operational engagement protocols for Vinkura AI sovereign government systems.",
  keywords: ["Vinkura terms of service", "operational engagement protocols", "government software terms India"],
  alternates: { canonical: "https://vinkura.in/company/terms" },
};

export default function TermsPage() {
  return <TermsUI />;
}
