import { MetadataRoute } from 'next';
export const dynamic = 'force-static';

const BASE_URL = 'https://vinkura.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: BASE_URL, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/contact`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/case-studies`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/company/newsroom`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/company/about`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/company/careers`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/about-us`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/impact-studies`, priority: 0.7, changeFrequency: 'monthly' as const },
    // Products
    { url: `${BASE_URL}/products/vinkura-core`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/products/ddms`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/products/e-ctc`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/products/e-maalkhana`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/products/forge`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/products/orbit`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/products/sentinel`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/products/voice`, priority: 0.8, changeFrequency: 'monthly' as const },
    // Case studies
    { url: `${BASE_URL}/case-studies/trinetra`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/case-studies/sentinel`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/case-studies/orbit`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/case-studies/ddms`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/case-studies/maalkhana`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/case-studies/ectc`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/case-studies/forge`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/case-studies/core`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/case-studies/voice`, priority: 0.8, changeFrequency: 'monthly' as const },
    // Research
    { url: `${BASE_URL}/research/sovereign-intelligence`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/research/automated-governance`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/research/operational-visibility`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/research/field-intelligence-nlp`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/research/evidence-chain-integrity`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/research/personnel-optimization`, priority: 0.8, changeFrequency: 'monthly' as const },
    // Newsroom articles
    { url: `${BASE_URL}/company/newsroom/future-of-sovereign-official-software`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/company/newsroom/orbit-20-sovereign-edge-orchestration`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/company/newsroom/digital-maalkhana-expansion`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/company/newsroom/voice-ai-high-noise-environments`, priority: 0.7, changeFrequency: 'monthly' as const },
    // Legal
    { url: `${BASE_URL}/company/privacy`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${BASE_URL}/company/terms`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${BASE_URL}/company/security`, priority: 0.5, changeFrequency: 'monthly' as const },
  ];

  return staticRoutes.map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
