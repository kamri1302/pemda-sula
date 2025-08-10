'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

export default function BeritaSlider({ items }) {
  if (!items || items.length === 0) return null;

  const length = items.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const [mainWidth, setMainWidth] = useState(null);
  const sliderRef = useRef(null);
  const mainRef = useRef(null);

  // Ambil ukuran pembungkus beritalist (main col-span-2)
  useEffect(() => {
    const mainEl = document.querySelector('main.md\\:col-span-2');
    if (mainEl) {
      mainRef.current = mainEl;
      const updateWidth = () => setMainWidth(mainEl.offsetWidth);
      updateWidth();

      window.addEventListener('resize', updateWidth);
      return () => window.removeEventListener('resize', updateWidth);
    }
  }, []);

  // Auto slide
  useEffect(() => {
    if (isHover) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % length);
    }, 5000);
    return () => clearInterval(interval);
  }, [length, isHover]);

  const getSlideItems = () => {
    let slideItems = [];
    for (let i = 0; i < 3; i++) {
      slideItems.push(items[(currentIndex + i) % length]);
    }
    return slideItems;
  };

  const slideItems = getSlideItems();
  const mainItem = slideItems[0];
  const sideItems = slideItems.slice(1, 3);

  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + length) % length);
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % length);

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

  return (
    <div
      className="w-full mb-8 relative overflow-hidden shadow-lg max-w-[1140px] mx-auto"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      ref={sliderRef}
      aria-label="Slider berita"
    >
      {/* Layout */}
      <div className="flex flex-col md:flex-row md:h-[420px] gap-1">
        
        {/* Gambar utama */}
        <Link
          href={`/berita/${mainItem.ID}`}
          className="relative overflow-hidden cursor-pointer select-none"
          aria-label={`Berita utama: ${mainItem.post_title}`}
          style={mainWidth ? { width: mainWidth } : {}}
        >
          <img
            src={mainItem.image}
            alt={mainItem.post_title}
            className="w-full h-64 md:h-full object-cover"
            loading="lazy"
            draggable={false}
          />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white drop-shadow-md">
            <time className="block text-sm opacity-80 mb-1">
              {formatDate(mainItem.post_date)}
            </time>
            <h3 className="text-lg md:text-xl font-semibold leading-tight">
              {mainItem.post_title}
            </h3>
          </div>
        </Link>

        {/* 2 gambar samping */}
        <div className="flex flex-row md:flex-col flex-1 gap-1">
          {sideItems.map((item) => (
            <Link
              key={`slider-side-${item.ID}`}
              href={`/berita/${item.ID}`}
              className="flex-1 relative overflow-hidden cursor-pointer select-none"
              aria-label={`Berita samping: ${item.post_title}`}
            >
              <img
                src={item.image}
                alt={item.post_title}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                loading="lazy"
                draggable={false}
              />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2 text-white drop-shadow-sm text-xs md:text-sm leading-tight">
                <time className="block opacity-80 mb-0.5">{formatDate(item.post_date)}</time>
                <h4 className="font-semibold">{item.post_title}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Panah navigasi */}
      <button
        onClick={goPrev}
        aria-label="Sebelumnya"
        className="absolute top-1/2 left-2 md:left-6 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 md:p-3 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        onClick={goNext}
        aria-label="Selanjutnya"
        className="absolute top-1/2 right-2 md:right-6 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 md:p-3 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}
