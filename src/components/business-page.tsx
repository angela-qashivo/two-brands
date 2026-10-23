import { Site, WorkflowSection, Channels, Eyebrow } from '@/components/site';
import { MarketingHero, ProductBenefits, DsoCalculator, Faqs, ClosingCta, ResourcePreview } from '@/components/marketing';

export function BusinessPage() {
  return <Site>
    <MarketingHero label="Qashivo for businesses" title="More control over collections. More confidence in cashflow." copy="Qashivo helps your existing team work smarter, with Charlie, an AI-powered credit control assistant that manages routine follow-ups, tracks customer commitments and improves visibility of incoming cash." />
    <ProductBenefits />
    <WorkflowSection product="qashivo" />
    <Channels />
    <DsoCalculator />
    <section className="section"><div className="container"><Eyebrow>Plan and grow</Eyebrow><h2>Better visibility supports better business decisions.</h2><p className="section-copy">A clearer view of expected payments helps you plan staffing, stock and investment. Charlie supports the routine while credit controllers retain oversight, handle exceptions and nurture the customer relationships they know best.</p><h2 className="mt-12">Your questions, answered.</h2><Faqs items={[
      ['Does Charlie replace a credit controller?', 'No. Charlie is an AI-powered credit control assistant. Your existing team remains responsible for decisions, customer relationships and exceptions.'],
      ['How does the cashflow forecast work?', 'Qashivo connects customer payment commitments with historical payment behaviour to improve visibility of likely incoming cash, with a forward-looking forecast of up to 13 weeks. A forecast is not a guarantee of payment.'],
      ['Does automated communication lose the personal touch?', 'Routine email, SMS and AI voice follow-ups support consistent contact, while your team prioritises the meaningful conversations and exceptions that need a person.'],
      ['Will it fit our accounting process?', 'Your accounting ledger is the starting point. We will discuss your system, connection requirements and workflow in a demonstration.'],
      ['Where can I find pricing?', 'Pricing is not yet published. Book a demo or contact us to discuss your business and communication requirements.'],
    ]} /></div></section>
    <ResourcePreview />
    <ClosingCta />
  </Site>;
}