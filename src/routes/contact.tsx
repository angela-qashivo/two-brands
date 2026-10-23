import {createFileRoute} from '@tanstack/react-router';
import {Site,PageHero,pageHead} from '@/components/site';
import {EnquiryForm} from '@/components/enquiry-form';
export const Route=createFileRoute('/contact')({head:()=>pageHead('Contact Qashivo','Contact Qashivo about SME credit control, Qonfirm debt verification for invoice finance, or a general enquiry.'),component:Page});
function Page(){return <Site><PageHero eyebrow="Contact" title="Let’s talk." copy="Ask about Qashivo credit control, Qonfirm verification, or book a demo."/><section className="section"><div className="container demo-layout"><div><h2>Send us an enquiry.</h2><p className="section-copy">Choose an enquiry type and tick “Book a demo” if you’d like to see the product.</p><p className="section-copy mt-5">Nexus KPI Limited, trading as Qashivo.</p></div><EnquiryForm/></div></section></Site>}
