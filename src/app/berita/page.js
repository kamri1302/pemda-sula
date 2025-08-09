'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import BeritaSidebar from '@/components/BeritaSidebar';

export default function BeritaList() {
  const [beritas, setBeritas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/berita')
      .then((res) => {
        if (!res.ok) throw new Error('Gagal memuat data berita');
        return res.json();
      })
      .then((data) => {
        setBeritas(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Terjadi kesalahan');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-6 text-center">Memuat berita...</div>;
  if (error) return <div className="p-6 text-center text-red-600">{error}</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      <main className="md:col-span-2 space-y-8">
        {beritas.length === 0 && (
          <p className="text-center text-gray-600">Belum ada berita tersedia.</p>
        )}
        {beritas.map((item) => (
          <article
            key={`berita-${item.ID}`}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <Link href={`/berita/${item.ID}`}>
              <img
                src={item.image}
                alt={item.post_title}
                className="w-full h-48 object-cover rounded-t-lg"
                loading="lazy"
              />
            </Link>
            <div className="p-4">
              <Link href={`/berita/${item.ID}`}>
                <h2 className="text-2xl font-semibold mb-2 hover:text-green-600 transition-colors">
                  {item.post_title}
                </h2>
              </Link>
              <p className="text-sm text-gray-500 mb-3">
                {new Date(item.post_date).toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
              <p className="text-gray-700">{item.post_excerpt}</p>
              <Link
                href={`/berita/${item.ID}`}
                className="inline-block mt-4 text-green-700 hover:text-green-900 font-medium"
              >
                Baca selengkapnya &rarr;
              </Link>
            </div>
          </article>
        ))}
      </main>

      <BeritaSidebar />
    </div>
  );
}
