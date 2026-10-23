import { Site, Eyebrow } from '@/components/site';
import { MarketingHero, AudienceBenefits, ProductVisual, VisualSequence, AudienceVideo, DsoCalculator, Faqs, ClosingCta } from '@/components/marketing';

export function BusinessPage() {
  return <Site>
    <MarketingHero financeTeam label="Qashivo for businesses" title="More control. Less administration." copy="Charlie supports your team with smarter collections and clearer cashflow, so you can focus on your business." />
    <section className="section"><div className="container"><AudienceBenefits /><Eyebrow>Smarter collections</Eyebrow><h2>Every account. A clearer next step.</h2><ProductVisual /><h2 className="mt-12">Collect. Understand. Forecast.</h2><VisualSequence /></div></section>
    <AudienceVideo />
    <DsoCalculator />
    <section className="section"><div className="container"><Eyebrow>Good to know</Eyebrow><h2>Your questions, answered.</h2><Faqs items={[
      ['Does Charlie replace a credit controller?', 'No. Charlie is an AI-powered credit control assistant. Your existing team remains responsible for decisions, customer relationships and exceptions.'],
      ['How does the cashflow forecast work?', 'Qashivo connects customer payment commitments with historical payment behaviour to improve visibility of likely incoming cash, with a forward-looking forecast of up to 13 weeks. A forecast is not a guarantee of payment.'],
      ['Does automated communication lose the personal touch?', 'Routine email, SMS and AI voice follow-ups support consistent contact, while your team prioritises the meaningful conversations and exceptions that need a person.'],
      ['Will it fit our accounting process?', 'Your accounting ledger is the starting point. We will discuss your system, connection requirements and workflow in a demonstration.'],
      ['Where can I find pricing?', 'Pricing is not yet published. Book a demo or contact us to discuss your business and communication requirements.'],
    ]} /></div></section>
    <ClosingCta />
  </Site>;
}