import { createFileRoute } from '@tanstack/react-router';
import { Site, pageHead } from '@/components/site';
import { MarketingHero, ProductBenefits, Differentiators, AudienceJourneys, DsoCalculator, ClosingCta } from '@/components/marketing';
export const Route = createFileRoute('/')({ head: () => pageHead('Qashivo | Smarter credit control & intelligent cashflow forecasting', 'Charlie helps your finance team collect smarter. AI credit control, payment promise intelligence and cashflow forecasting give your business the confidence to plan and grow.'), component: Index });
function Index() { return <Site>
  <MarketingHero label="Qashivo for your business" title="Smarter collections. Clearer cashflow." copy="Meet Charlie, your AI credit control assistant. Helping your team get paid more efficiently and plan ahead with confidence." />
  <ProductBenefits />
  <Differentiators />
  <AudienceJourneys />
  <DsoCalculator />
  <ClosingCta />
</Site>; }
