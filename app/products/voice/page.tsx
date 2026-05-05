import React from 'react';
import { Metadata } from 'next';
import VoiceUI from './VoiceUI';

export const metadata: Metadata = {
  title: "Vinkura Voice | Multilingual Voice-First Data Entry for Indian Field Operations",
  description: "Voice-native access for frontline government operations. Designed for Indian field conditions where software must adapt to the user — turning natural speech in Hindi, Urdu, and regional languages into structured records during high-pressure missions. Offline-ready.",
  keywords: [
    "Vinkura Voice", "voice AI India", "field reporting software India",
    "multilingual voice AI government", "Hindi voice data entry",
    "offline AI India", "frontline operations technology",
    "police field reporting India", "voice to text government India",
  ],
  openGraph: {
    title: "Vinkura Voice | Multilingual Voice-First Data Entry for Indian Field Operations",
    description: "Voice-native access for Indian frontline operations. Multilingual, offline-ready field data entry for government personnel.",
    url: "https://vinkura.in/products/voice",
  },
  alternates: { canonical: "https://vinkura.in/products/voice" },
};

export default function Page() {
  return <VoiceUI />;
}
