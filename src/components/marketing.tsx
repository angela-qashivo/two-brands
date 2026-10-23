import { Link } from '@tanstack/react-router';
import { useId, useState } from 'react';
import { ArrowRight, ChartNoAxesCombined, Check, MessageSquare, ScanLine, ShieldCheck, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Eyebrow } from '@/components/site';
import { OverviewVideo } from '@/components/overview-video';
import { FORECAST_WEEKS, workingCapitalReleased } from '@/lib/cashflow';
import teamPhoto from '@/assets/workplace-team.jpg.asset.json';
import advicePhoto from '@/assets/workplace-advice.jpg.asset.json';
import ownerPhoto from '@/assets/business-owner.jpg.asset.json';
import collectionsScreen from '@/assets/collections-screen.jpg.asset.json';
import forecastScreen from '@/assets/forecast-screen.jpg.asset.json';
import verificationScreen from '@/assets/verification-screen.jpg.asset.json';

export function BenefitList({ items }: { items: string[] }) {
  return <ul className="benefit-list">{items.map(item => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>;
}
export function MarketingHero({ label, title, copy, cta = 'Book a demo', product = 'qashivo', partner = false, financeTeam = false }: { label: string; title: string; copy: string; cta?: string; product?: 'qashivo' | 'qonfirm'; partner?: boolean; financeTeam?: boolean }) {
  const photo = partner || financeTeam ? teamPhoto : product === 'qonfirm' ? advicePhoto : ownerPhoto;
  return <section className={`product-hero marketing-hero photo-hero product-${product === 'qonfirm' ? 'green' : 'cyan'}`}><img className="photo-hero-image" src={photo.url} alt={financeTeam ? 'Finance team working together at a laptop' : partner ? 'Accounting professionals working together' : product === 'qonfirm' ? 'Finance professionals reviewing figures together' : 'Business owner working at a laptop, from the Qashivo explainer'} width={1800} height={1000} fetchPriority="high" /><div className="container photo-hero-content"><Eyebrow>{label}</Eyebrow><h1>{title}</h1><p className="section-copy">{copy}</p><div className="page-actions"><Button asChild size="lg"><Link to={partner ? '/for-accountants' : product === 'qonfirm' ? '/for-lenders' : '/demo'} hash={partner || product === 'qonfirm' ? 'enquiry' : ''}>{cta}<ArrowRight /></Link></Button><OverviewVideo product={product} label="Watch the video" /></div><div className="hero-footnote"><span>{product === 'qonfirm' ? 'Qonfirm by Qashivo' : 'Your team, supported by Charlie'}</span><span>{product === 'qonfirm' ? 'Independent debt verification' : 'Smarter collections. Clearer cashflow.'}</span></div></div></section>;
}
export function ProductVisual({ kind = 'collections' }: { kind?: 'collections' | 'forecast' | 'verification' }) {
 const asset = kind === 'forecast' ? forecastScreen : kind === 'verification' ? verificationScreen : collectionsScreen;
 return <figure className="product-still large-product-visual"><img src={asset.url} alt={kind === 'forecast' ? 'Cashflow outlook and expected incoming payments in the approved Qashivo explainer' : kind === 'verification' ? 'Verification coverage and debtor responses in the approved Qonfirm explainer' : 'Payment promises, paid accounts and exceptions in the approved Qashivo explainer'} width={1366} height={768} loading="lazy" /><figcaption>Approved {kind === 'verification' ? 'Qonfirm' : 'Qashivo'} explainer · Illustrative interface and data</figcaption></figure>;
}
export function VisualSequence({ lender = false }: { lender?: boolean }) {
 const steps = lender ? ['Select scope', 'Contact debtors', 'Capture evidence', 'Review portfolio'] : ['Customer interaction', 'Payment promise', 'Intelligent follow-up', 'Cashflow forecast'];
 return <ol className="visual-sequence">{steps.map((step, i) => <li key={step}><span className="sequence-number">0{i + 1}</span><strong>{step}</strong>{i < steps.length - 1 && <ArrowRight aria-hidden="true" />}</li>)}</ol>;
}
export function ProductBenefits() {
 return <>
  <section className="section visual-benefit"><div className="container"><div className="benefit-heading"><div><Eyebrow>Smarter collections</Eyebrow><h2>Less chasing.<br />More progress.</h2></div><div><p className="section-copy">Charlie handles routine follow-ups so your team can focus on customers who need attention.</p><BenefitList items={['Automated follow-ups', 'Smarter prioritisation', 'Payment promise tracking']} /><Link className="product-cta" to="/how-it-works">Explore how it works <ArrowRight /></Link></div></div><div className="benefit-media"><img className="benefit-photo" src={teamPhoto.url} alt="Finance professionals working together at a laptop" width={1400} height={935} loading="lazy" /><ProductVisual /></div></div></section>
  <div className="container collection-flow" aria-label="Collections to cashflow"><span>Collect</span><ArrowRight aria-hidden="true" /><span>Understand</span><ArrowRight aria-hidden="true" /><span>Forecast</span></div>
  <section className="section forecast-band night product-cyan"><div className="container"><div className="benefit-heading"><div><Eyebrow>Intelligent cashflow forecasting</Eyebrow><h2>See what’s coming.</h2></div><div><p className="section-copy">Turn payment commitments into a clearer view of your cashflow for up to {FORECAST_WEEKS} weeks.</p><BenefitList items={['Predict incoming cash', 'Spot potential gaps', 'Plan with confidence']} /></div></div><ProductVisual kind="forecast" /><p className="notice forecast-notice">Forecasts reflect payment commitments and historical behaviour, not guaranteed payments.</p></div></section>
 </>;
}
const differences = [
 [MessageSquare, 'Learns payment behaviour'], [ScanLine, 'Tracks promises'], [Target, 'Prioritises action'], [ChartNoAxesCombined, 'Forecasts cashflow'], [ShieldCheck, 'Supports your team'],
] as const;
export function Differentiators() { return <section className="section"><div className="container"><Eyebrow>Why Qashivo</Eyebrow><h2>Intelligence that works alongside you.</h2><div className="difference-grid">{differences.map(([Icon, title]) => <article key={title}><Icon aria-hidden="true" /><h3>{title}</h3></article>)}</div><VisualSequence /><Link className="product-cta mt-6" to="/how-it-works">Learn more <ArrowRight /></Link></div></section>; }
export function AudienceJourneys() {
 const audiences = [
  {to:'/for-businesses' as const, image:ownerPhoto.url, label:'For businesses', title:'More control. Less administration.', cta:'Explore Qashivo'},
  {to:'/for-accountants' as const, image:teamPhoto.url, label:'For accountants & bookkeepers', title:'Better insights for every client.', cta:'Explore partner benefits'},
  {to:'/for-lenders' as const, image:advicePhoto.url, label:'For invoice finance lenders', title:'Greater confidence in receivables.', cta:'Explore lender solutions'},
 ];
 return <section className="section"><div className="container"><Eyebrow>Who it’s for</Eyebrow><h2>Built around your world.</h2><div className="audience-grid">{audiences.map(a => <article className="audience-card" key={a.to}><Link to={a.to} className="audience-image"><img src={a.image} alt={a.label} width={1400} height={935} loading="lazy" /></Link><div className="audience-card-copy"><small>{a.label}</small><h3>{a.title}</h3><Button asChild variant="outline"><Link to={a.to}>{a.cta}<ArrowRight /></Link></Button></div></article>)}</div></div></section>;
}
export function AudienceBenefits({ lender = false, partner = false }: { lender?: boolean; partner?: boolean; financeTeam?: boolean }) {
 const items = lender ? [[ShieldCheck,'Verify balances','Structured debtor confirmations.'],[ScanLine,'Capture evidence','Clear records of debtor responses.'],[ChartNoAxesCombined,'See your portfolio','Verification coverage and exceptions.']] as const : partner ? [[MessageSquare,'Better conversations','Payment insights inform client advice.'],[ChartNoAxesCombined,'Earlier visibility','Spot potential client cashflow gaps.'],[ShieldCheck,'Stronger support','Charlie assists your clients’ teams.']] as const : [[MessageSquare,'Less routine chasing','Consistent email, SMS and AI voice follow-ups.'],[Target,'Clearer priorities','Focus on customers who need you.'],[ChartNoAxesCombined,'More confidence','A cashflow outlook of up to 13 weeks.']] as const;
 return <div className="audience-benefits">{items.map(([Icon,title,copy]) => <div key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{copy}</p></div>)}</div>;
}
export function AudienceVideo({ product = 'qashivo' }: { product?: 'qashivo' | 'qonfirm' }) { return <section className="section"><div className="container audience-video"><div><Eyebrow>See it in action</Eyebrow><h2>{product === 'qonfirm' ? 'From ledger to evidence.' : 'Meet Charlie.'}</h2><p className="section-copy">{product === 'qonfirm' ? 'Independent responses. Structured verification records.' : 'Your team stays in control. Charlie supports the routine.'}</p></div><OverviewVideo product={product} variant="card" /></div></section>; }
export function DsoCalculator() {
  const id = useId();
  const [sales, setSales] = useState('1000000');
  const [days, setDays] = useState('3');
  const valid = sales !== '' && days !== '' && Number(sales) >= 0 && Number(days) >= 0 && Number.isFinite(Number(sales)) && Number.isFinite(Number(days));
  const result = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(workingCapitalReleased(Number(sales), Number(days)));
  return <section className="section"><div className="container calculator-layout"><div><Eyebrow>Working capital</Eyebrow><h2>A few days. A real difference.</h2><p className="section-copy">See how faster payments could release working capital.</p></div><div className="dso-calculator"><div className="calculator-inputs"><label htmlFor={`${id}-sales`}>Annual credit sales (£)<input id={`${id}-sales`} type="number" min="0" step="1000" value={sales} onChange={e => setSales(e.target.value)} /></label><label htmlFor={`${id}-days`}>Days of DSO improvement<input id={`${id}-days`} type="number" min="0" step="1" value={days} onChange={e => setDays(e.target.value)} /></label></div><div className="calculator-result"><span>Estimated working capital released</span><output aria-live="polite">{valid ? result : 'Enter valid amounts'}</output></div><p className="notice">Annual credit sales ÷ 365 × days of improvement. A simplified illustration based on steady annual credit sales and fewer receivables days, not a guaranteed saving or earnings improvement.</p></div></div></section>;
}
export function Faqs({ items }: { items: [string, string][] }) { return <div className="faq-list">{items.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>; }
export function ClosingCta({ title = 'Smarter collections start here.' }: { title?: string }) { return <section className="section final-cta"><div className="container section-heading"><h2>{title}</h2><p className="section-copy">Give your finance team the support and payment intelligence to plan with confidence.</p><div className="final-buttons"><Button asChild size="lg"><Link to="/demo">Book a demo <ArrowRight /></Link></Button></div></div></section>; }
