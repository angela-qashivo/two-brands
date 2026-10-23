import { useEffect, useRef, useState } from 'react';
import { Play, X } from 'lucide-react';
import qonfirmVideo from '@/assets/qonfirm-overview.mp4.asset.json';
import qonfirmPoster from '@/assets/qonfirm-poster.jpg.asset.json';
import qashivoVideo from '@/assets/qashivo-overview.mp4.asset.json';
import qashivoPoster from '@/assets/qashivo-poster.jpg.asset.json';

type Product = 'qashivo' | 'qonfirm';

const PRODUCTS = {
  qashivo: {
    video: qashivoVideo.url,
    poster: qashivoPoster.url,
    label: 'Qashivo · Product overview',
    alt: 'Qashivo overview: from open invoices to resolved cash in one managed flow',
    duration: '75 seconds',
    caption: 'Credit control, start to resolution',
  },
  qonfirm: {
    video: qonfirmVideo.url,
    poster: qonfirmPoster.url,
    label: 'Qonfirm · The 60-second overview',
    alt: 'Qonfirm overview: from ledger to evidence in one controlled flow',
    duration: '60 seconds',
    caption: 'Verification, start to evidence',
  },
} satisfies Record<Product, { video: string; poster: string; label: string; alt: string; duration: string; caption: string }>;

export function OverviewVideo({ variant = 'link', product = 'qonfirm' }: { variant?: 'link' | 'card'; product?: Product }) {
  const p = PRODUCTS[product];
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
      triggerRef.current?.focus();
    };
  }, [open]);

  if (variant === 'card') {
    return <div className={`video-tile product-${product === 'qashivo' ? 'cyan' : 'green'}`}>
      {playing
        ? <video src={p.video} poster={p.poster} controls autoPlay playsInline preload="metadata" />
        : <button type="button" className="video-tile-cover" onClick={() => setPlaying(true)}>
          <img src={p.poster} alt={p.alt} width={1920} height={1080} />
          <span className="video-tile-veil"><span className="video-play"><Play /></span>Play the overview</span>
        </button>}
      <div className="video-tile-meta"><span>{p.duration}</span><span>{p.caption}</span></div>
    </div>;
  }

  return <>
    <button type="button" ref={triggerRef} className="secondary-cta video-trigger" onClick={() => setOpen(true)}><Play /> Watch the overview</button>
    {open && <div className="video-modal" role="dialog" aria-modal="true" aria-label={p.label} onClick={e => { if (e.target === e.currentTarget) setOpen(false); }}>
      <div className="video-modal-frame">
        <div className="video-modal-bar"><span>{p.label}</span><button type="button" ref={closeRef} className="video-close" onClick={() => setOpen(false)}>Close <X /></button></div>
        <video src={p.video} poster={p.poster} controls autoPlay playsInline preload="metadata" />
      </div>
    </div>}
  </>;
}
