import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight, Send, Target, AlertCircle, Eye, ShieldCheck, FileCheck, Radar, LayoutGrid } from 'lucide-react';
import { OverviewVideo } from '@/components/overview-video';
import { Site, ProductLabel, ProductLogo, ProductLink, MiniDashboard, pageHead } from '@/components/site';
import { Button } from '@/components/ui/button';
import people from '@/assets/finance-team.jpg';
import qashivoLogo from '@/assets/qashivo-logo-light.png';
import qonfirmLogo from '@/assets/qonfirm-logo-light.png';

export const Route = createFileRoute('/')({ head: () => pageHead('Smarter control over the money you’re owed', 'AI-powered credit control for SMEs. Independent debt verification for Invoice Finance. Choose Qashivo or Qonfirm.'), component: Index });

const doors = [
  { product: 'qashivo' as const, title: 'Get paid without spending your day chasing.', copy: 'Automate credit control, capture payment intent and see what needs attention.' },
  { product: 'qonfirm' as const, title: 'Know what’s real.', copy: 'Independent verification, AI follow-up and portfolio-level visibility.' },
];

function Benefits({ items }: { items: [typeof Send, string][] }) {
  return <div className="benefit-grid">{items.map(([Icon, label]) => <div className="benefit-card" key={label}><Icon /><span>{label}</span></div>)}</div>;
}

function Index() {
  return <Site>
    <section className="hero">
      <img className="hero-background" src={people} alt="" width={1920} height={1024} />
      <div className="container hero-content">
        <h1>Smarter control over<br />the money <span>you’re owed.</span></h1>
        <p className="hero-copy">AI-powered credit control for SMEs. Independent debt verification for Invoice Finance.</p>
        <div className="pathways">{doors.map(d => <Link to={d.product === 'qashivo' ? '/qashivo' : '/qonfirm'} key={d.product} className={`pathway door product-${d.product === 'qashivo' ? 'cyan' : 'green'}`}><div className="pathway-top"><ProductLabel product={d.product} /><ProductLogo product={d.product} /><h2>{d.title}</h2><p>{d.copy}</p><span className="product-cta">Explore {d.product === 'qashivo' ? 'Qashivo' : 'Qonfirm'}<ArrowRight /></span></div></Link>)}</div>
      </div>
    </section>

    <section className="section product-cyan">
      <div className="container split-section">
        <div>
          <ProductLabel product="qashivo" />
          <h2>Credit control that keeps working when you don’t.</h2>
          <p className="section-copy">Qashivo connects to your ledger, automates follow-up across email, SMS and AI voice, captures payment intent and surfaces the accounts that need human attention.</p>
          <Benefits items={[[Send, 'Automate follow-up'], [Target, 'Capture payment intent'], [AlertCircle, 'Focus on exceptions'], [Eye, 'Improve cash visibility']]} />
          <div className="home-ctas"><ProductLink product="qashivo" label="See Qashivo for SMEs" /><OverviewVideo product="qashivo" /></div>
        </div>
        <div className="home-dash"><MiniDashboard product="qashivo" /></div>
      </div>
    </section>

    <section className="section product-green">
      <div className="container split-section">
        <div className="home-dash"><MiniDashboard product="qonfirm" /></div>
        <div>
          <ProductLabel product="qonfirm" />
          <h2>Independent debt verification. Run end to end.</h2>
          <p className="section-copy">Qonfirm gives lenders controlled verification, independent auditor contact, AI follow-up and structured client and portfolio reporting.</p>
          <Benefits items={[[ShieldCheck, 'Verify on demand'], [FileCheck, 'Independent evidence'], [Radar, 'Earlier fraud signals'], [LayoutGrid, 'One portfolio view']]} />
          <div className="home-ctas"><ProductLink product="qonfirm" label="Explore Qonfirm" /><OverviewVideo /></div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container section-heading">
        <h2>Two products. One technology foundation.</h2>
        <p className="section-copy">Qashivo helps SMEs manage the money they are owed. Qonfirm helps Invoice Finance providers verify the debt behind their facilities.</p>
        <div className="logo-link">
          <div className="product-cyan"><img src={qashivoLogo} alt="Qashivo" /><small>For SMEs</small></div>
          <span className="logo-line" aria-hidden="true" />
          <div className="product-green"><img src={qonfirmLogo} alt="Qonfirm" /><small>For Invoice Finance</small></div>
        </div>
      </div>
    </section>

    <section className="section final-cta">
      <div className="container section-heading">
        <h2>Choose the product built for you.</h2>
        <div className="final-buttons">
          <Button variant="cyan" size="lg" asChild><Link to="/qashivo">I’m an SME <ArrowRight /></Link></Button>
          <Button variant="green" size="lg" asChild><Link to="/qonfirm">I’m an Invoice Finance provider <ArrowRight /></Link></Button>
        </div>
        <Link to="/demo" className="demo-link">Book a Demo ↗</Link>
      </div>
    </section>
  </Site>;
}
