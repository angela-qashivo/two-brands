import { createFileRoute } from '@tanstack/react-router';
import { BusinessPage } from '@/components/business-page';
import { pageHead } from '@/components/site';

export const Route = createFileRoute('/for-businesses')({
  head: () => pageHead('Qashivo for businesses | Credit control & cashflow forecasting', 'Support your finance team with Charlie, AI credit control software, payment promise tracking and SME cashflow forecasting of up to 13 weeks.'),
  component: BusinessPage,
});