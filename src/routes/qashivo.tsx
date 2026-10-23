import { createFileRoute } from '@tanstack/react-router';
import { pageHead } from '@/components/site';
import { BusinessPage } from '@/components/business-page';
export const Route = createFileRoute('/qashivo')({ head: () => pageHead('Qashivo | Charlie credit control assistant', 'Meet Charlie, your AI-powered credit control assistant. Support your team with automated follow-ups, payment intelligence and clearer cashflow forecasts.'), component: BusinessPage });
