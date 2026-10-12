import { useState } from 'react';
import { ArrowRight, CircleCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { ENQUIRY_TYPES, validateEnquiry, type EnquiryType } from '@/lib/enquiry';

export function EnquiryForm({ defaultType = 'Qashivo / SME credit control', demo = false }: { defaultType?: EnquiryType; demo?: boolean }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [error, setError] = useState('');

  if (status === 'sent') return <div className="demo-form" role="status"><CircleCheck className="text-primary" /><h3 className="text-2xl">Thank you — your enquiry has been received.</h3><p className="section-copy">The Qashivo team will reply to the email address you provided.</p><Button variant="outline" onClick={() => setStatus('idle')}>Send another enquiry</Button></div>;

  return <form className="demo-form" onSubmit={async e => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const input = { name: String(d.get('name') ?? '').trim(), company: String(d.get('company') ?? '').trim(), email: String(d.get('email') ?? '').trim(), enquiry_type: String(d.get('enquiry_type') ?? ''), message: String(d.get('message') ?? '').trim(), wants_demo: d.get('wants_demo') === 'on' };
    const invalid = validateEnquiry(input);
    if (invalid) { setError(invalid); return; }
    setError(''); setStatus('sending');
    const { error: dbError } = await supabase.from('enquiries').insert(input);
    if (dbError) { setStatus('idle'); setError('Your enquiry could not be sent. Please try again.'); return; }
    setStatus('sent');
  }}>
    <label>Name<input required name="name" maxLength={120} autoComplete="name" placeholder="Full name" /></label>
    <label>Company<input required name="company" maxLength={160} autoComplete="organization" placeholder="Company name" /></label>
    <label>Email<input required type="email" name="email" maxLength={254} autoComplete="email" placeholder="you@company.com" /></label>
    <label>Enquiry type<select name="enquiry_type" defaultValue={defaultType}>{ENQUIRY_TYPES.map(t => <option key={t}>{t}</option>)}</select></label>
    <label>Message<textarea name="message" rows={4} maxLength={4000} placeholder="How can we help?" /></label>
    <label className="checkbox-row"><input type="checkbox" name="wants_demo" defaultChecked={demo} /> I’d like to book a demo</label>
    {error && <p className="form-error" role="alert">{error}</p>}
    <Button type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : demo ? 'Request a demo' : 'Send enquiry'} <ArrowRight /></Button>
  </form>;
}
