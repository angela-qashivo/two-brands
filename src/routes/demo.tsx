import {createFileRoute} from '@tanstack/react-router';
import {Site,PageHero,pageHead} from '@/components/site';
import {EnquiryForm} from '@/components/enquiry-form';
export const Route=createFileRoute('/demo')({head:()=>pageHead('Book a Demo','Book a Qashivo demo for SME credit control, or discuss a Qonfirm pilot for Invoice Finance debt verification.'),component:Page});
function Page(){return <Site><PageHero eyebrow="Book a Demo" title="See Qashivo in action." copy="Tell us a little about your business and we’ll arrange a demo."/><section className="section"><div className="container demo-layout"><div><h2>Request a demo.</h2><p className="section-copy">A Qashivo demo focuses on your invoices, communication and cash visibility. Choose Qonfirm if you’re an Invoice Finance provider.</p></div><EnquiryForm demo/></div></section></Site>}
