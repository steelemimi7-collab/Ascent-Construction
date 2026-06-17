'use client';

import { useState } from 'react';

export default function HeroPhoto({ src, alt }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group w-full h-full cursor-pointer"
        aria-label="Enlarge photo"
      >
        <img src={src} alt={alt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-display text-xs tracking-widest uppercase">
            Click to enlarge
          </span>
        </div>
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 font-display text-xs tracking-widest uppercase text-white/60 hover:text-white"
            >
              Close ✕
            </button>
            <img src={src} alt={alt} className="w-full max-h-[85vh] object-contain" />
          </div>
        </div>
      )}
    </>
  );
}
