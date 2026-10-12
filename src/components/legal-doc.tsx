import type {ReactNode} from 'react';
let linkPrivacy=false;
export const slug=(s:string)=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');

function inline(text:string,key:string):ReactNode[]{
  const out:ReactNode[]=[];
  const re=/\*\*(.+?)\*\*|([\w.+-]+@[\w-]+\.[\w.]+)|(https?:\/\/[^\s)]+)|(Privacy Policy)/g;
  let last=0,m:RegExpExecArray|null,i=0;
  while((m=re.exec(text))){
    if(m.index>last)out.push(text.slice(last,m.index));
    const k=`${key}-${i++}`;
    if(m[1])out.push(<strong key={k}>{inline(m[1],k)}</strong>);
    else if(m[2])out.push(<a key={k} href={`mailto:${m[2]}`}>{m[2]}</a>);
    else if(m[3])out.push(<a key={k} href={m[3]} target="_blank" rel="noopener noreferrer">{m[3]}</a>);
    else if(m[4]&&linkPrivacy)out.push(<a key={k} href="/privacy-policy">{m[4]}</a>);
    else if(m[4])out.push(m[4]);
    last=re.lastIndex;
  }
  if(last<text.length)out.push(text.slice(last));
  return out;
}

export function render(md:string,linkPP=false){
  linkPrivacy=linkPP;
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

const sectionsOf=(md:string)=>[...md.matchAll(/^## (.+)$/gm)].map(m=>(m[1]??"").trim());


export function LegalDoc({md,linkPrivacy:lp=false}:{md:string;linkPrivacy?:boolean}){
  const sections=sectionsOf(md);
  return <section className="section"><div className="container policy-layout">
    <nav className="policy-toc" aria-label="Contents"><strong>Contents</strong>{sections.map(s=><a key={s} href={`#${slug(s)}`}>{s}</a>)}</nav>
    <article className="policy">{render(md,lp)}</article>
  </div></section>;
}
