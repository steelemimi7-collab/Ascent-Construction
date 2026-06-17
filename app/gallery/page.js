'use client';

import { useState } from 'react';

const categories = ['All', 'Residential', 'Mountain Homes', 'Fire Pits', 'Outdoor Living', 'Ranch & Ag', 'Commercial'];

const projects = [
  { id: 13, name: 'Shaver Cabin', type: 'Mountain Homes', location: 'Shaver Lake, CA', year: '2025', src: '/ruiz-cabin/ruiz-cabin-lower-13.jpg', thumb: '/thumbs/shaver.jpg' },
  { id: 14, name: 'Horse Barns & Pasture', type: 'Ranch & Ag', location: 'Sanger, CA', year: '2023', src: '/pasture/pasture-02.png', thumb: '/thumbs/pasture.jpg' },
  { id: 15, name: 'Tree House', type: 'Outdoor Living', location: 'Sanger, CA', year: '2024', src: '/treehouse/treehouse-01.jpg', thumb: '/thumbs/treehouse.jpg' },
  { id: 16, name: 'Studio', type: 'Residential', location: 'Sanger, CA', year: '2024', src: '/studio/studio-08.jpg', thumb: '/thumbs/studio.jpg' },
  { id: 17, name: 'Shop', type: 'Ranch & Ag', location: 'Sanger, CA', year: '2024', src: '/shop/shop-01.jpg', thumb: '/thumbs/shop.jpg' },
  { id: 18, name: 'Sport Court', type: 'Outdoor Living', location: 'Sanger, CA', year: '2024', src: '/sport-court/sport-court-05.jpg', thumb: '/thumbs/sport-court.jpg' },
  { id: 19, name: 'Wine Bar', type: 'Commercial', location: 'Fresno, CA', year: '2024', src: '/wine-bar/wine-bar-02.jpg', thumb: '/thumbs/wine-bar.jpg' },
  { id: 20, name: 'Nature Fireball', type: 'Fire Pits', location: 'Sanger, CA', year: '2024', src: '/fireball/fireball-01.jpg', thumb: '/fireball/fireball-01.jpg' },
  { id: 21, name: 'Pool House', type: 'Residential', location: 'Fresno, CA', year: '2024', src: '/pool-house/pool-house-03.jpg', thumb: '/thumbs/pool-house.jpg' },
];

export default function Gallery() {
  const [selected, setSelected] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = selected === 'All' ? projects : projects.filter(p => p.type === selected);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-base pt-32 pb-20 border-b border-edge overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="label mb-4">Completed Work</p>
          <h1 className="font-display font-800 text-5xl md:text-7xl uppercase tracking-tightest text-fore leading-none">
            Our <span className="text-accent">Work</span>
          </h1>
          <p className="font-body text-lg text-muted max-w-xl mt-6 leading-relaxed">
            A look at projects completed across the Central Valley. Custom homes, ranch builds, outdoor living spaces, commercial work, and more.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="bg-surface border-b border-edge sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto gap-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`font-display font-semibold text-xs tracking-widest2 uppercase px-6 py-4 whitespace-nowrap border-b-2 transition-colors ${
                  selected === cat ? 'border-b-accent text-fore' : 'border-b-transparent text-muted hover:text-fore'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-base">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="card group cursor-pointer overflow-hidden hover:border-accent/40 transition-colors"
                onClick={() => setLightbox(project)}
              >
                <div className="bg-surface-2 h-52 flex items-center justify-center border-b border-edge relative overflow-hidden">
                  {project.src ? (
                    <img src={project.thumb || project.src} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  ) : (
                    <span className="font-display text-xs tracking-widest uppercase text-muted/40">Project Photo</span>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-display text-xs tracking-widest uppercase">Click to enlarge</span>
                  </div>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <p className="label text-[10px] mb-0.5">{project.type}</p>
                    <p className="font-display font-700 text-sm uppercase tracking-widest text-fore">{project.name}</p>
                    <p className="font-display text-xs tracking-widest text-muted uppercase mt-0.5">{project.location}</p>
                  </div>
                  <span className="text-muted group-hover:text-accent transition-colors">⊕</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 font-display text-xs tracking-widest uppercase text-white/60 hover:text-white"
            >
              Close ✕
            </button>
            <div className="bg-surface-2 border border-edge h-96 md:h-[500px] flex items-center justify-center">
              {lightbox.src ? (
                <img src={lightbox.src} alt={lightbox.name} className="w-full h-full object-contain" />
              ) : (
                <span className="font-display text-xs tracking-widest uppercase text-muted/40">Project Photo</span>
              )}
            </div>
            <div className="bg-surface border-t border-edge px-6 py-4">
              <p className="label text-[10px] mb-0.5">{lightbox.type}</p>
              <p className="font-display font-700 text-sm uppercase tracking-widest text-fore">{lightbox.name}</p>
              <p className="font-display text-xs tracking-widest text-muted uppercase mt-0.5">{lightbox.location}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}