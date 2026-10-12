import { useEffect, useRef, useState } from 'react';
import { Play, X } from 'lucide-react';
import videoAsset from '@/assets/qonfirm-overview.mp4.asset.json';
import posterAsset from '@/assets/qonfirm-poster.jpg.asset.json';

const VIDEO = videoAsset.url;
const POSTER = posterAsset.url;
const LABEL = 'Qonfirm · The 60-second overview';

export function OverviewVideo({ variant = 'link' }: { variant?: 'link' | 'card' }) {
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
    return <div className="video-tile product-green">
      {playing
        ? <video src={VIDEO} poster={POSTER} controls autoPlay playsInline preload="metadata" />
        : <button type="button" className="video-tile-cover" onClick={() => setPlaying(true)}>
          <img src={POSTER} alt="Qonfirm overview — from ledger to evidence in one controlled flow" width={1920} height={1080} loading="lazy" />
          <span className="video-tile-veil"><span className="video-play"><Play /></span>Play the 60-second overview</span>
        </button>}
      <div className="video-tile-meta"><span>60 seconds</span><span>Verification, start to evidence</span></div>
    </div>;
  }

  return <>
    <button type="button" ref={triggerRef} className="secondary-cta video-trigger" onClick={() => setOpen(true)}><Play /> Watch the 60-second overview</button>
    {open && <div className="video-modal" role="dialog" aria-modal="true" aria-label={LABEL} onClick={e => { if (e.target === e.currentTarget) setOpen(false); }}>
      <div className="video-modal-frame">
        <div className="video-modal-bar"><span>{LABEL}</span><button type="button" ref={closeRef} className="video-close" onClick={() => setOpen(false)}>Close <X /></button></div>
        <video src={VIDEO} poster={POSTER} controls autoPlay playsInline preload="metadata" />
      </div>
    </div>}
  </>;
}
