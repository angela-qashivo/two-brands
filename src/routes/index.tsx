import { createFileRoute, Link } from '@tanstack/react-router';
import { Send, MessageSquare, Eye, UserCheck } from 'lucide-react';
import { Site, ProductHero, ProductLabel, Eyebrow, pageHead } from '@/components/site';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/')({ head: () => pageHead('AI-powered credit control for SMEs', 'Get paid without the chase. Qashivo automates credit control through email, SMS and AI voice for SMEs.'), component: Index });

const steps = [
  ['Connect your ledger', 'Bring outstanding invoices into one credit-control workflow.'],
  ['Automate follow-ups', 'Consistent email, SMS and AI voice contact.'],
  ['Capture payment intent', 'Payment dates, disputes and queries, all recorded.'],
  ['Track collections', 'See what is outstanding and what happens next.'],
];
const benefits: [typeof Send, string, string][] = [
  [Send, 'Less manual chasing', 'Routine follow-up runs without your team.'],
  [MessageSquare, 'Consistent customer communication', 'The right message on the right channel.'],
  [Eye, 'Better cashflow visibility', 'Outstanding, promised and collected in one view.'],
  [UserCheck, 'Human oversight where needed', 'Exceptions are surfaced to the people responsible.'],
];

function Index() {
  return <Site>
    <ProductHero product="qashivo" label="FOR SMEs" title="Get paid without the chase." copy="Qashivo automates credit control through email, SMS and AI voice, helping SMEs get paid, reduce manual chasing and improve cashflow visibility." cta="Book a demo" />

    <section className="section product-cyan">
      <div className="container">
        <Eyebrow>How Qashivo works</Eyebrow>
        <h2>Four steps from invoice to cash.</h2>
        <div className="step-row">{steps.map(([t, c], i) => <div className="step-card" key={t}><span className="step-number">0{i + 1}</span><h3>{t}</h3><p>{c}</p></div>)}</div>
        <div className="mt-8"><Link to="/how-it-works" className="product-cta">See how it works →</Link></div>
      </div>
    </section>

    <section className="section product-cyan">
      <div className="container">
        <Eyebrow>Why Qashivo</Eyebrow>
        <h2>Credit control that keeps working.</h2>
        <div className="benefit-grid">{benefits.map(([Icon, t, c]) => <div className="benefit-card" key={t}><Icon /><span><strong>{t}</strong><br /><small className="text-muted-foreground">{c}</small></span></div>)}</div>
      </div>
    </section>

    <section className="section product-green">
      <div className="container split-section">
        <div>
          <ProductLabel product="qonfirm" />
          <h2>Looking for independent debt verification?</h2>
        </div>
        <div>
          <p className="section-copy">Qonfirm gives invoice finance providers lender-controlled verification, independent debtor contact, AI follow-up and structured portfolio reporting.</p>
          <div className="mt-7"><Button variant="green" asChild><Link to="/qonfirm">Explore Qonfirm →</Link></Button></div>
        </div>
      </div>
    </section>
  </Site>;
}
