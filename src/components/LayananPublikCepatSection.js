'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LayananPublikCepatSection() {
  const [layanan, setLayanan] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/layanan-publik-cepat')
      .then(res => res.json())
      .then(data => {
        setLayanan(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="bg-white rounded-lg shadow p-6 max-w-xl mx-auto sm:max-w-none sm:mx-0">
      <h2 className="text-2xl font-bold mb-6 text-green-700 text-center sm:text-left">
        Layanan Publik Cepat
      </h2>

      {loading ? (
        <div className="space-y-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-20 bg-gray-300 rounded animate-pulse"
            />
          ))}
        </div>
      ) : layanan.length === 0 ? (
        <p className="text-center text-gray-500">Belum ada layanan publik tersedia.</p>
      ) : (
        <ul className="space-y-4">
          {layanan.map(({ id, judul, deskripsi, link }) => (
            <motion.li
              key={id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: id * 0.1 }}
              className="border-l-4 border-green-700 bg-green-50 p-4 rounded hover:bg-green-100 transition"
            >
              <Link
                href={link ?? '#'}
                className="block"
                target={link ? '_blank' : undefined}
                rel="noopener noreferrer"
              >
                <h3 className="text-lg font-semibold text-green-900 mb-1">{judul}</h3>
                <p className="text-green-800 text-sm">{deskripsi}</p>
              </Link>
            </motion.li>
          ))}
        </ul>
      )}
    </section>
  );
}
