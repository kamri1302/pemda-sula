'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import BeritaSidebar from '@/components/BeritaSidebar';
import BeritaSlider from '@/components/BeritaSlider';
import { usePrefetchCache } from '@/context/PrefetchCacheContext';

export default function BeritaList() {
  const [beritas, setBeritas] = useState([]);
  const [allBerita, setAllBerita] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const observerRef = useRef(null);
  const perPage = 6;

  const { getCache, setCache } = usePrefetchCache();

  // Prefetch berita detail saat hover
  const prefetchBerita = (id) => {
    if (getCache(id)) return; // sudah ada di cache
    fetch(`/api/berita/${id}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data) setCache(id, data);
      })
      .catch(() => {});
  };

  useEffect(() => {
    fetch('/api/berita')
      .then((res) => {
        if (!res.ok) throw new Error('Gagal memuat data berita');
        return res.json();
      })
      .then((data) => {
        setAllBerita(data);
        setBeritas(data.slice(0, perPage));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Terjadi kesalahan');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loadingMore) {
          loadMore();
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [observerRef, loadingMore, allBerita, beritas]);

  const loadMore = () => {
    if (beritas.length >= allBerita.length) return;

    setLoadingMore(true);
    setTimeout(() => {
      const nextPage = page + 1;
      const newItems = allBerita.slice(0, nextPage * perPage);
      setBeritas(newItems);
      setPage(nextPage);
      setLoadingMore(false);
    }, 500);
  };

  if (loading) return <div className="p-6 text-center">Memuat berita...</div>;
  if (error) return <div className="p-6 text-center text-red-600">{error}</div>;

  return (
    <div className="max-w-[1140px] mx-auto px-4 py-12">
      {/* Slider */}
      <BeritaSlider items={allBerita} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
        {/* List Berita */}
        <main className="md:col-span-2">
          {/* Pembungkus List Berita dengan border tipis */}
          <div className="bg-white border border-gray-200">
            {/* Heading */}
            <div className="bg-black text-white text-lg font-semibold px-6 py-3">
              Berita Terbaru
            </div>

            {/* List berita */}
            <div className="space-y-6 px-4 py-6">
              {beritas.length === 0 && (
                <p className="text-center text-gray-600">
                  Belum ada berita tersedia.
                </p>
              )}

              {beritas.map((item) => (
                <article
                  key={`berita-${item.ID}`}
                  className="flex flex-col md:flex-row gap-5 bg-white p-4 border border-transparent transition-all duration-200 hover:border hover:border-gray-200 hover:shadow-md"
                >
                  {/* Gambar kiri */}
                  <Link
                    href={`/berita/${item.ID}`}
                    className="flex-shrink-0"
                    onMouseEnter={() => prefetchBerita(item.ID)}
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.post_title}
                        className="w-full md:w-64 h-44 object-cover"
                        loading="lazy"
                      />
                    )}
                  </Link>

                  {/* Konten kanan */}
                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <p className="text-sm text-gray-500 mb-1 flex items-center gap-4">
                        {/* Nama author */}
                        {item.author_name && (
                          <span className="italic text-gray-600">by {item.author_name}</span>
                        )}

                        <span>
                          {new Date(item.post_date).toLocaleDateString('id-ID', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          })}
                        </span>

                        {/* View count dengan icon mata */}
                        <span className="flex items-center text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-1 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                          <span>{item.post_views_count ?? 0}</span>
                        </span>
                      </p>

                      <Link
                        href={`/berita/${item.ID}`}
                        onMouseEnter={() => prefetchBerita(item.ID)}
                      >
                        <h2 className="text-xl font-semibold mb-2 hover:text-gray-700 transition-colors">
                          {item.post_title}
                        </h2>
                      </Link>
                      <p className="text-gray-700 line-clamp-3">{item.post_excerpt}</p>
                    </div>

                    {/* Link hijau */}
                    <Link
                      href={`/berita/${item.ID}`}
                      className="mt-2 text-green-700 hover:text-green-900 font-medium"
                      onMouseEnter={() => prefetchBerita(item.ID)}
                    >
                      Baca selengkapnya &rarr;
                    </Link>
                  </div>
                </article>
              ))}

              {/* Sentinel Infinite Scroll */}
              <div ref={observerRef} className="h-10 flex items-center justify-center">
                {loadingMore && (
                  <span className="text-gray-500">Memuat lebih banyak...</span>
                )}
              </div>
            </div>
          </div>
        </main>

        {/* Sidebar */}
        <BeritaSidebar />
      </div>
    </div>
  );
}
