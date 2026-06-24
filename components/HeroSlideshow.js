'use client';

import { useState, useEffect } from 'react';

const images = [
  '/hero/pool-house.jpg',
  '/hero/treehouse.jpg',
];

export default function HeroSlideshow() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === idx ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-16 h-1 bg-accent z-10" />
      <div className="absolute top-0 left-0 w-1 h-16 bg-accent z-10" />
      <div className="absolute bottom-0 right-0 w-16 h-1 bg-accent z-10" />
      <div className="absolute bottom-0 right-0 w-1 h-16 bg-accent z-10" />

      {/* Prev / Next buttons */}
      <button
        onClick={() => setIdx((i) => (i - 1 + images.length) % images.length)}
        aria-label="Previous photo"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-black/40 hover:bg-accent text-white text-2xl leading-none transition-colors"
      >
        ‹
      </button>
      <button
        onClick={() => setIdx((i) => (i + 1) % images.length)}
        aria-label="Next photo"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-black/40 hover:bg-accent text-white text-2xl leading-none transition-colors"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Show photo ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-colors ${i === idx ? 'bg-accent' : 'bg-white/50 hover:bg-white/80'}`}
          />
        ))}
      </div>
    </div>
  );
}
