import {createFileRoute} from '@tanstack/react-router';
import type {ReactNode} from 'react';
import {Site,PageHero,pageHead} from '@/components/site';
import policy from '@/content/privacy-policy.md?raw';

export const Route=createFileRoute('/privacy-policy')({head:()=>pageHead('Privacy Policy','How Nexus KPI Limited, trading as Qashivo, collects, uses and protects personal information across Qashivo and Qonfirm.'),component:Page});

const slug=(s:string)=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');

function inline(text:string,key:string):ReactNode[]{
  const out:ReactNode[]=[];
  const re=/\*\*(.+?)\*\*|([\w.+-]+@[\w-]+\.[\w.]+)|(https?:\/\/[^\s)]+)/g;
  let last=0,m:RegExpExecArray|null,i=0;
  while((m=re.exec(text))){
    if(m.index>last)out.push(text.slice(last,m.index));
    const k=`${key}-${i++}`;
    if(m[1])out.push(<strong key={k}>{inline(m[1],k)}</strong>);
    else if(m[2])out.push(<a key={k} href={`mailto:${m[2]}`}>{m[2]}</a>);
    else if(m[3])out.push(<a key={k} href={m[3]} target="_blank" rel="noopener noreferrer">{m[3]}</a>);
    last=re.lastIndex;
  }
  if(last<text.length)out.push(text.slice(last));
  return out;
}

function render(md:string){
  const blocks=md.trim().split(/\n\s*\n/);
  return blocks.map((b,i)=>{
    const k=`b${i}`;
    if(b.startsWith('## ')){const t=b.slice(3).trim();return <h2 key={k} id={slug(t)}>{t}</h2>}
    if(b.startsWith('### '))return <h3 key={k}>{b.slice(4).trim()}</h3>;
    if(b.startsWith('# '))return <h1 key={k}>{b.slice(2).trim()}</h1>;
    if(/^- /.test(b))return <ul key={k}>{b.split('\n').map((l,j)=><li key={j}>{inline(l.replace(/^- /,''),`${k}-${j}`)}</li>)}</ul>;
    const lines=b.split('\n');
    return <p key={k}>{lines.map((l,j)=><span key={j}>{inline(l.trimEnd(),`${k}-${j}`)}{j<lines.length-1&&<br/>}</span>)}</p>;
  });
}

const sections=[...policy.matchAll(/^## (.+)$/gm)].map(m=>m[1].trim());

function Page(){return <Site>
  <PageHero eyebrow="Legal" title="Privacy Policy" copy="Nexus KPI Limited, trading as Qashivo."/>
  <section className="section"><div className="container policy-layout">
    <nav className="policy-toc" aria-label="Policy contents"><strong>Contents</strong>{sections.map(s=><a key={s} href={`#${slug(s)}`}>{s}</a>)}</nav>
    <article className="policy">{render(policy)}</article>
  </div></section>
</Site>}
