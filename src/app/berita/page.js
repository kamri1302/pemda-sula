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
        {beritas.length === 0 && <p className="text-center text-gray-600">Belum ada berita tersedia.</p>}
        {beritas.map(({ id, title, date, excerpt, image }) => (
          <article
            key={id}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <Link href={`/berita/${id}`}>
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-t-lg"
                loading="lazy"
              />
            </Link>
            <div className="p-4">
              <Link href={`/berita/${id}`}>
                <h2 className="text-2xl font-semibold mb-2 hover:text-green-600 transition-colors">{title}</h2>
              </Link>
              <p className="text-sm text-gray-500 mb-3">{date}</p>
              <p className="text-gray-700">{excerpt}</p>
              <Link href={`/berita/${id}`} className="inline-block mt-4 text-green-700 hover:text-green-900 font-medium">
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
