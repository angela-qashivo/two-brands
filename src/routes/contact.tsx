import {createFileRoute,Link} from '@tanstack/react-router';
import {Site,PageHero,pageHead} from '@/components/site';
import {Button} from '@/components/ui/button';
import {ArrowRight} from 'lucide-react';
export const Route=createFileRoute('/contact')({head:()=>pageHead('Contact Qashivo','Start a conversation about SME credit control or Qonfirm independent debt verification for Invoice Finance.'),component:Page});
function Page(){return <Site><PageHero eyebrow="Contact" title="A conversation starts with the right question." copy="Talk about your outstanding invoices, or the debt underpinning your Invoice Finance facilities."/><section className="section"><div className="container"><h2>Qashivo & Qonfirm</h2><p className="section-copy">Nexus KPI Limited, trading as Qashivo.</p><p className="notice mt-5">Direct contact details will be added once confirmed. In the meantime, prepare your product enquiry.</p><Button asChild className="mt-7"><Link to="/demo">Prepare an enquiry <ArrowRight/></Link></Button></div></section></Site>}
