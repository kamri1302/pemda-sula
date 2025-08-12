'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import BeritaSidebar from '@/components/BeritaSidebar';
import { usePrefetchCache } from '@/context/PrefetchCacheContext';

export default function BeritaDetail() {
  const params = useParams();
  const id = params?.id;

  const { getCache, setCache } = usePrefetchCache();

  const [berita, setBerita] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saranBerita, setSaranBerita] = useState([]);

  useEffect(() => {
    if (!id) return;

    // Cek cache dulu
    const cached = getCache(id);
    if (cached) {
      setBerita(cached);
      setLoading(false);
      return;
    }

    setLoading(true);
    fetch(`/api/berita/${id}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data) {
          setBerita(data);
          setCache(id, data); // simpan ke cache
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id, getCache, setCache]);

  useEffect(() => {
    fetch('/api/berita')
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        if (!data || data.length === 0) {
          setSaranBerita([]);
          return;
        }
        const filtered = data.filter((b) => b.ID !== Number(id));
        const shuffled = filtered.sort(() => 0.5 - Math.random());
        setSaranBerita(shuffled.slice(0, 3));
      })
      .catch(() => setSaranBerita([]));
  }, [id]);

  if (loading) return <div className="p-6 text-center">Memuat berita...</div>;
  if (!berita) return <div className="p-6 text-center text-red-600">Berita tidak ditemukan.</div>;

  return (
    <div className="max-w-[1140px] mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Konten Utama */}
      <main className="md:col-span-2 space-y-8">
        {/* Detail Berita */}
        <article className="bg-white border border-gray-200 overflow-hidden">
          <div className="px-[15px] md:px-[30px] pt-6">
            <h1 className="text-3xl font-bold uppercase mb-2">{berita.post_title}</h1>
            <p className="text-sm text-gray-500 flex items-center gap-4">
              <span className="italic text-gray-600">by {berita.author_name}</span>
              <span>
                {new Date(berita.post_date).toLocaleDateString('id-ID', {
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
                <span>{berita.post_views_count ?? 0}</span>
              </span>
            </p>
          </div>

          {berita.image && (
            <div className="mt-4">
              <img
                src={berita.image}
                alt={berita.post_title}
                className="w-full max-h-96 object-cover"
                loading="lazy"
              />
            </div>
          )}

          <div
            className="prose max-w-none text-justify px-[15px] md:px-[30px] py-6"
            dangerouslySetInnerHTML={{ __html: berita.post_content }}
          />
        </article>

        {/* Berita Lainnya (Saran) */}
        {saranBerita.length > 0 && (
          <section className="bg-white border border-gray-200 p-4">
            <h2 className="text-xl font-semibold mb-4">Berita Lainnya</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {saranBerita.map((item) => (
                <Link
                  key={item.ID}
                  href={`/berita/${item.ID}`}
                  className="block border border-gray-100 hover:border-gray-300 p-3 transition rounded"
                  aria-label={item.post_title}
                  onMouseEnter={() => {
                    if (!getCache(item.ID)) {
                      fetch(`/api/berita/${item.ID}`)
                        .then((res) => (res.ok ? res.json() : null))
                        .then((data) => {
                          if (data) setCache(item.ID, data);
                        })
                        .catch(() => {});
                    }
                  }}
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.post_title}
                      className="w-full h-40 object-cover mb-3 rounded"
                      loading="lazy"
                    />
                  )}
                  <h3 className="text-md font-semibold line-clamp-2 mb-1 text-gray-900">
                    {item.post_title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {item.post_excerpt || 'Tidak ada ringkasan berita.'}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Sidebar */}
      <BeritaSidebar />
    </div>
  );
}
