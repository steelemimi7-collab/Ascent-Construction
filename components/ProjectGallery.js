'use client';

import { useState } from 'react';

export default function ProjectGallery({ photos }) {
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      {/* Masonry: every photo shown in full, nothing cropped */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {photos.map((photo, i) => (
          <div key={i} className="mb-4 break-inside-avoid">
            {photo.src ? (
              <button
                type="button"
                onClick={() => setLightbox(photo)}
                className="card group block w-full overflow-hidden cursor-pointer hover:border-accent/40 transition-colors"
              >
                <div className="relative">
                  <img
                    src={photo.src}
                    alt={photo.caption || ''}
                    className="w-full h-auto block"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-display text-xs tracking-widest uppercase">
                      Click to enlarge
                    </span>
                  </div>
                </div>
                {photo.caption && (
                  <div className="px-4 py-3 text-left">
                    <p className="font-display text-xs uppercase tracking-widest text-muted">{photo.caption}</p>
                  </div>
                )}
              </button>
            ) : (
              <div className="card overflow-hidden">
                <div className="bg-surface-2 h-52 flex items-center justify-center">
                  <span className="font-display text-xs tracking-widest uppercase text-muted/40">Photo Placeholder</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox — full photo, nothing cropped */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 font-display text-xs tracking-widest uppercase text-white/60 hover:text-white"
            >
              Close ✕
            </button>
            <img
              src={lightbox.src}
              alt={lightbox.caption || ''}
              className="w-full max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
