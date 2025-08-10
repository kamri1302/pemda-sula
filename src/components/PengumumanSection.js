'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PengumumanSection() {
  const [pengumuman, setPengumuman] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/pengumuman')
      .then((res) => res.json())
      .then((data) => {
        const sorted = [...data].sort(
          (a, b) => new Date(b.tanggal) - new Date(a.tanggal)
        );
        setPengumuman(sorted.slice(0, 5));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="bg-white rounded-lg shadow p-6 sticky top-20 max-h-[calc(100vh-5rem)] overflow-y-auto">
      <h2 className="text-xl font-bold mb-6 text-green-700 border-b border-green-200 pb-2 text-center">
        Pengumuman Terbaru
      </h2>

      {loading ? (
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <div
              key={`skeleton-pengumuman-${i}`}
              className="h-10 bg-gray-200 rounded animate-pulse"
            />
          ))}
        </div>
      ) : pengumuman.length === 0 ? (
        <p className="text-center text-gray-500">Belum ada pengumuman terbaru.</p>
      ) : (
        <ul className="space-y-3">
          {pengumuman.map(({ id, judul, tanggal, link }) => (
            <motion.li
              key={id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="hover:bg-green-50 rounded px-2 py-1 transition"
            >
              <Link
                href={link ?? '#'}
                target={link ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex justify-between items-center text-sm font-medium text-green-900"
              >
                <span className="truncate">{judul}</span>
                <time
                  dateTime={new Date(tanggal).toISOString()}
                  className="text-xs text-green-700 ml-2 flex-shrink-0 whitespace-nowrap"
                >
                  {new Date(tanggal).toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'short',
                    year: '2-digit',
                  })}
                </time>
              </Link>
            </motion.li>
          ))}
        </ul>
      )}

      <div className="mt-6 text-center">
        <Link href="/pengumuman">
          <button className="bg-green-700 text-white font-semibold px-4 py-2 rounded shadow hover:bg-green-800 transition text-sm w-full">
            Lihat Semua Pengumuman
          </button>
        </Link>
      </div>
    </section>
  );
}
