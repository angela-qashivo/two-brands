import { createFileRoute, Link } from '@tanstack/react-router';
import { Site, Eyebrow, pageHead } from '@/components/site';
import { MarketingHero, AudienceBenefits, ProductVisual, VisualSequence, AudienceVideo, Faqs } from '@/components/marketing';
import { EnquiryForm } from '@/components/enquiry-form';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const Route = createFileRoute('/for-lenders')({ head: () => pageHead('Invoice finance lender solutions | Qonfirm & Qashivo', 'Qonfirm debtor verification and Qashivo collections intelligence support invoice finance lenders with receivables confirmation, payment behaviour and portfolio visibility.'), component: Page });
function Page() {
  return <Site product="qonfirm">
    <MarketingHero product="qonfirm" label="For invoice finance lenders" title="Greater confidence in receivables." copy="Independent debtor verification with Qonfirm. Clearer evidence for your portfolio decisions." cta="Book a lender demo" />
    <section className="section"><div className="container"><AudienceBenefits lender /><Eyebrow>Qonfirm by Qashivo</Eyebrow><h2>One portfolio. Clearer evidence.</h2><ProductVisual kind="verification" /><p className="notice mt-6">Qonfirm supports lender due diligence and verification processes. It is not an audit service and does not replace independent audit procedures.</p><h2 className="mt-12">From ledger to evidence.</h2><VisualSequence lender /><Button asChild className="mt-6"><Link to="/qonfirm">Explore Qonfirm <ArrowRight /></Link></Button></div></section>
    <AudienceVideo product="qonfirm" />
    <section className="section"><div className="container feature-split"><div><Eyebrow>Qashivo collections intelligence</Eyebrow><h2>A different lens on payments.</h2><p className="section-copy">For collection and factoring operations, Qashivo tracks payment behaviour, promises and exceptions. Charlie supports people, not replaces their judgement.</p><p className="notice mt-6">Collections intelligence is distinct from Qonfirm’s debtor verification workflow.</p></div><ProductVisual /></div></section>
    <section className="section"><div className="container"><h2>Your lender questions.</h2><Faqs items={[
      ['Is Qonfirm an audit service?', 'No. Qonfirm is a debtor verification solution. Its records support lender reviews and due diligence; they do not replace independent audit procedures.'],
      ['Who controls the verification scope?', 'The lender selects the clients, debtors and invoices. Requests are issued independently and responses are categorised into verification records.'],
      ['Are collections intelligence and Qonfirm the same solution?', 'No. Qonfirm focuses on debtor balance verification. Qashivo collections intelligence supports payment follow-ups, behavioural understanding, commitments and exceptions.'],
      ['Where can we find lender pricing?', 'No lender pricing is published. Contact our partnerships team to discuss verification scope, reporting and your operational requirements.'],
    ]} /></div></section>
    <section className="section" id="enquiry"><div className="container demo-layout"><div><Eyebrow>Partnerships</Eyebrow><h2>Book a lender demo.</h2><p className="section-copy">Tell our partnerships team about your portfolio, verification workflow or collection operation.</p><Link to="/contact" className="product-cta mt-6">Contact our partnerships team <ArrowRight /></Link></div><EnquiryForm demo defaultType="Qonfirm / Invoice Finance" initialMessage="I’m interested in a lender demo and discussing our verification or collections requirements." submitLabel="Request a lender demo" /></div></section>
  </Site>;
}