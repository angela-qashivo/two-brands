import {createFileRoute} from '@tanstack/react-router';
import {Site,PageHero,Foundation,WorkflowSection,Choice,pageHead} from '@/components/site';
export const Route=createFileRoute('/how-it-works')({head:()=>pageHead('How it works | Two clear workflows','Explore the Qashivo SME credit-control workflow and Qonfirm independent verification process for Invoice Finance providers.'),component:Page});
function Page(){return <Site><PageHero eyebrow="Two workflows. One foundation." title="The right intelligence for your side of the invoice." copy="For SMEs, manage invoices through to resolution. For Invoice Finance providers, independently verify the debt behind a facility."/><Foundation/><WorkflowSection product="qashivo"/><WorkflowSection product="qonfirm"/><Choice/></Site>}
