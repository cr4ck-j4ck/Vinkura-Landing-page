import React from 'react';
import { Metadata } from 'next';
import NewsroomUI from './NewsroomUI';

export const metadata: Metadata = {
  title: "Newsroom | Vinkura AI Announcements, Deployments & Field Notes",
  description: "Official updates, deployment notes, and engineering perspectives from Vinkura on public safety, governance, and operational intelligence infrastructure across India.",
  keywords: [
    "Vinkura news", "Vinkura AI updates", "GovTech announcements India",
    "sovereign AI news India", "operational intelligence updates",
    "government technology news India",
  ],
  openGraph: {
    title: "Newsroom | Vinkura AI Announcements & Field Notes",
    description: "Official updates and deployment notes from Vinkura on public safety and governance infrastructure.",
    url: "https://vinkura.in/company/newsroom",
  },
  alternates: { canonical: "https://vinkura.in/company/newsroom" },
};

export default function Page() {
  return <NewsroomUI />;
}
