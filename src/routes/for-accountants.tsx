import { createFileRoute } from '@tanstack/react-router';
import { Site, Eyebrow, pageHead } from '@/components/site';
import { MarketingHero, AudienceBenefits, ProductVisual, VisualSequence, AudienceVideo, Faqs } from '@/components/marketing';
import { EnquiryForm } from '@/components/enquiry-form';

export const Route = createFileRoute('/for-accountants')({ head: () => pageHead('Qashivo for accountants & bookkeepers | Client cashflow support', 'Credit control for accountants and bookkeepers: support your clients with smarter collections, payment promise tracking and clearer cashflow forecasts.'), component: Page });

function Page() {
  return <Site>
    <MarketingHero label="For accountants & bookkeepers" title="Better insights for every client." copy="Help your clients collect smarter and plan ahead. Bring clearer payment intelligence to every conversation." cta="Book a partner demo" partner />
    <section className="section"><div className="container"><AudienceBenefits partner /><Eyebrow>Client cashflow</Eyebrow><h2>See beyond the overdue invoice.</h2><ProductVisual kind="forecast" /><h2 className="mt-12">From ledger to practical advice.</h2><VisualSequence /></div></section>
    <AudienceVideo />
    <section className="section"><div className="container"><Eyebrow>Good to know</Eyebrow><h2>Your partner questions.</h2><Faqs items={[
      ['Does Charlie replace our team or our clients’ credit controllers?', 'No. Charlie supports routine credit control as an assistant. People retain responsibility for customer relationships, decisions and exceptions.'],
      ['What can inform client cashflow conversations?', 'Customer payment commitments and historical behaviour inform expected incoming cash and help identify potential gaps. Forecasts are estimates, not guarantees.'],
      ['How do we explore a partnership?', 'Request a partner demo below. We will discuss your practice, clients and workflow requirements without assuming a particular commercial arrangement.'],
      ['How does this fit our accounting process?', 'Qashivo starts with the accounting ledger. Routine follow-ups, payment promises and a forecast of up to 13 weeks support financial advice. We will discuss accounting systems and connection requirements in a partner demo.'],
      ['Which practices can benefit?', 'Accounting firms can support better-informed planning; bookkeeping practices can reduce routine administration; outsourced finance teams can support clients while retaining oversight of relationships and decisions.'],
    ]} /></div></section>
    <section className="section" id="enquiry"><div className="container demo-layout"><div><Eyebrow>Let’s talk</Eyebrow><h2>Book a partner demo.</h2><p className="section-copy">Tell us about your practice and the clients you support.</p></div><EnquiryForm demo defaultType="General enquiry" initialMessage="I’m interested in a partner demo for accountants and bookkeepers." submitLabel="Request a partner demo" /></div></section>
  </Site>;
}