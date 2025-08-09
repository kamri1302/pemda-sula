'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import BeritaSidebar from '@/components/BeritaSidebar';

export default function BeritaDetail() {
  const params = useParams();
  const id = params?.id;

  const [berita, setBerita] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/berita/${id}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        setBerita(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="p-6 text-center">Memuat berita...</div>;
  if (!berita) return <div className="p-6 text-center text-red-600">Berita tidak ditemukan.</div>;

  return (
    <div className="max-w-[1140px] mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Konten Utama */}
      <main className="md:col-span-2">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <h1 className="text-3xl font-bold mb-4 px-[15px] md:px-[30px] pt-6">{berita.post_title}</h1>
          <p className="text-sm text-gray-500 mb-6 px-[15px] md:px-[30px]">
            {new Date(berita.post_date).toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>

          {/* Gambar Andalan */}
          {berita.image && (
            <img
              src={berita.image}
              alt={berita.post_title}
              className="w-full max-h-96 object-cover mb-6"
              loading="lazy"
            />
          )}

          {/* Konten Berita */}
          <div
            className="prose max-w-none text-justify px-[15px] md:px-[30px] pb-6"
            dangerouslySetInnerHTML={{ __html: berita.post_content }}
          />
        </article>
      </main>

      {/* Sidebar */}
      <BeritaSidebar />
    </div>
  );
}
