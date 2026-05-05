import React from 'react';
import { Metadata } from 'next';
import DDMSUI from './DDMSUI';

export const metadata: Metadata = {
  title: "DDMS | Dynamic Duty Management System for Indian Police by Vinkura",
  description: "Optimizing official workforce allocation for Indian law enforcement. DDMS unifies personnel records, skill mapping, and duty rosters into a single dynamic intelligence layer. Built for state police deployment discipline, accountability, and real-time field visibility.",
  keywords: [
    "DDMS", "duty management system India", "police duty roster software",
    "personnel allocation India", "workforce intelligence government",
    "police technology India", "state police management software",
    "Vinkura AI", "UP Police DDMS", "duty scheduling government India",
  ],
  openGraph: {
    title: "DDMS | Dynamic Duty Management System for Indian Police",
    description: "Unifying personnel records, skill mapping, and duty rosters for Indian law enforcement. Real-time field visibility and accountability.",
    url: "https://vinkura.in/products/ddms",
  },
  alternates: { canonical: "https://vinkura.in/products/ddms" },
};

export default function Page() {
  return <DDMSUI />;
}
