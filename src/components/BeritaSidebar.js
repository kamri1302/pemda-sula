// src/components/BeritaSidebar.jsx
'use client';

import { useEffect, useState } from 'react';

export default function BeritaSidebar() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/api/sidebar-berita')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch(() => setItems([]));
  }, []);

  if (!items.length) {
    return <p className="p-4 text-gray-500">Memuat data...</p>;
  }

  return (
    <aside className="space-y-6">
      {items.map((item) => (
        <section
          key={item.ID}
          className="bg-white p-4 border border-gray-200"
        >

          {item.type === 'image' ? (
            <div className="-m-4">
              <img
                src={item.src}
                alt={item.post_title}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="-m-4">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
                preload="metadata"
              >
                <source src={item.src} type={item.mime || 'video/mp4'} />
                Browser Anda tidak mendukung video.
              </video>
            </div>
          )}
        </section>
      ))}
    </aside>
  );
}
