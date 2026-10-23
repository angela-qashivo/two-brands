import { createFileRoute } from '@tanstack/react-router';
import { Site, ProductHero, WorkflowSection, Problems, Evidence, DashboardSection, pageHead } from '@/components/site';
import { EnquiryForm } from '@/components/enquiry-form';
export const Route=createFileRoute('/qonfirm')({head:()=>pageHead('Independent debt verification | Qonfirm by Qashivo','Independent debt verification for invoice finance lenders: controlled verification, AI-powered follow-up and portfolio-level reporting.'),component:Page});
const grid=(items:string[][])=><div className="content-grid">{items.map(([title,copy])=><div className="content-item" key={title}><h3>{title}</h3><p>{copy}</p></div>)}</div>;
function Page(){return <Site product="qonfirm">
 <ProductHero product="qonfirm" label="FOR INVOICE FINANCE" title="Know what’s real." copy="Qonfirm provides independent debt verification for invoice finance lenders, combining controlled verification, AI-powered follow-up and portfolio-level reporting." cta="Discuss a pilot"/>
 <Problems/>
 <WorkflowSection product="qonfirm"/>
 <Evidence/>
 <DashboardSection product="qonfirm"/>
 <section className="section product-green"><div className="container"><h2>Client and portfolio reporting.</h2>{grid([['Client-level reporting','Categorised responses, debtor-level exceptions and the underlying evidence for each client.'],['Portfolio-level reporting','A consistent view of verified debt, dilution, disputes and unverified exposure across the book.'],['Evidence pack','Response categories and the verification record kept together for review.']])}</div></section>
 <section className="section product-green"><div className="container"><h2>Built for lenders.</h2>{grid([['Lender-controlled scope','Select the clients, debtors and invoices that matter. Verification decisions stay with you.'],['Independent contact','Requests are issued through a third-party auditor, separating the lender from debtor contact.'],['Charlie AI follow-up','Qonfirm Plus adds AI follow-up for non-responders to keep verification moving.']])}</div></section>
 <section className="section product-green" id="pilot"><div className="container demo-layout"><div><h2>Start with a focused pilot.</h2><p className="section-copy">Tell us about your verification scope and reporting needs. We’ll reply to discuss whether a pilot fits your book.</p></div><EnquiryForm defaultType="Qonfirm / Invoice Finance"/></div></section>
</Site>}
