import React from 'react';
import { Metadata } from 'next';
import EMaalkhanaUI from './EMaalkhanaUI';

export const metadata: Metadata = {
  title: "E-Maalkhana | Digital Evidence & Property Management for Indian Police",
  description: "The digital spine of official evidence management for Indian police. E-Maalkhana digitizes the physical custody chain with QR-integrated tracking, ensuring every seized asset is tracked from first touch to final disposal with absolute integrity.",
  keywords: [
    "E-Maalkhana", "digital evidence management India", "maalkhana digitization",
    "police evidence software India", "chain of custody software",
    "seized property management", "evidence tracking QR India",
    "Vinkura AI", "malkhana digital India police",
  ],
  openGraph: {
    title: "E-Maalkhana | Digital Evidence Management for Indian Police",
    description: "Digitizing the physical custody chain for Indian police. QR-integrated evidence tracking from seizure to disposal.",
    url: "https://vinkura.in/products/e-maalkhana",
  },
  alternates: { canonical: "https://vinkura.in/products/e-maalkhana" },
};

export default function Page() {
  return <EMaalkhanaUI />;
}
