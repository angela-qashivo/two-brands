import {createFileRoute} from '@tanstack/react-router';
import {Site,PageHero,pageHead} from '@/components/site';
import {LegalDoc} from '@/components/legal-doc';
import policy from '@/content/privacy-policy.md?raw';

export const Route=createFileRoute('/privacy-policy')({head:()=>pageHead('Privacy Policy','How Nexus KPI Limited, trading as Qashivo, collects, uses and protects personal information across Qashivo and Qonfirm.'),component:Page});

function Page(){return <Site><PageHero eyebrow="Legal" title="Privacy Policy" copy="Nexus KPI Limited, trading as Qashivo."/><LegalDoc md={policy}/></Site>}
