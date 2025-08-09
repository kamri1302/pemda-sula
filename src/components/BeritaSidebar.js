'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function BeritaSidebar() {
  const [beritas, setBeritas] = useState([]);

  useEffect(() => {
    fetch('/api/berita')
      .then((res) => res.ok ? res.json() : [])
      .then((data) => setBeritas(data.slice(0, 5)))
      .catch(() => setBeritas([]));
  }, []);

  return (
    <aside className="space-y-6">
      <section className="bg-green-100 rounded-lg p-4 shadow-sm">
        <h3 className="text-xl font-bold mb-3">Widget Berita Terbaru</h3>
        <ul className="space-y-2">
          {beritas.length === 0 && <li>Loading...</li>}
          {beritas.map(({ id, title }) => (
            <li key={id}>
              <Link href={`/berita/${id}`} className="text-green-700 hover:text-green-900 underline">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-green-100 rounded-lg p-4 shadow-sm">
        <h3 className="text-xl font-bold mb-3">Widget Lainnya</h3>
        <p className="text-gray-700">Tambahkan widget lain di sini sesuai kebutuhan.</p>
      </section>
    </aside>
  );
}
