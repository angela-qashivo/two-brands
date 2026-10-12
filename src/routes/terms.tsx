import {createFileRoute} from '@tanstack/react-router';
import {Site,PageHero,pageHead} from '@/components/site';
import {LegalDoc} from '@/components/legal-doc';
import terms from '@/content/terms.md?raw';

export const Route=createFileRoute('/terms')({head:()=>pageHead('Website Terms of Use','The terms governing use of the Qashivo website, operated by Nexus KPI Limited, trading as Qashivo.'),component:Page});

function Page(){return <Site><PageHero eyebrow="Legal" title="Website Terms of Use" copy="Nexus KPI Limited, trading as Qashivo."/><LegalDoc md={terms} linkPrivacy/></Site>}
