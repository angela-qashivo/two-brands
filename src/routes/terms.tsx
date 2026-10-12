import {createFileRoute} from '@tanstack/react-router';
import {Site,PageHero,pageHead} from '@/components/site';
export const Route=createFileRoute('/terms')({head:()=>pageHead('Terms information','Terms information for Qashivo and Qonfirm by Nexus KPI Limited.'),component:Page});
function Page(){return <Site><PageHero eyebrow="Legal" title="Terms information" copy="Nexus KPI Limited, trading as Qashivo."/><section className="section"><div className="container"><h2>Terms awaiting publication</h2><p className="section-copy">Approved website and product terms have not yet been provided. Product descriptions are for information only. Dashboard values are illustrative and do not represent live customer or portfolio data. Commercial terms will be agreed separately.</p></div></section></Site>}
