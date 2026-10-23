import { createFileRoute } from '@tanstack/react-router';
import { Site, pageHead } from '@/components/site';
import { MarketingHero, ProductBenefits, Differentiators, AudienceJourneys, DsoCalculator, ResourcePreview, ClosingCta } from '@/components/marketing';
export const Route = createFileRoute('/')({ head: () => pageHead('Qashivo | Smarter credit control & intelligent cashflow forecasting', 'Charlie helps your finance team collect smarter. AI credit control, payment promise intelligence and cashflow forecasting give your business the confidence to plan and grow.'), component: Index });
function Index() { return <Site>
  <MarketingHero label="Qashivo · Smarter collections. Clearer cashflow." title="Help your finance team collect smarter. Give your business the confidence to grow." copy="Meet Charlie, your AI-powered credit control assistant. Charlie handles routine payment follow-ups, helps your team focus on what matters and turns customer payment commitments into clearer cashflow forecasts." />
  <ProductBenefits />
  <Differentiators />
  <AudienceJourneys />
  <DsoCalculator />
  <ResourcePreview />
  <ClosingCta />
</Site>; }
