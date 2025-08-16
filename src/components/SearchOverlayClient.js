'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SearchOverlayClient({ toggleSearch }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);

  const inputRef = useRef(null);
  const listRef = useRef(null);

  // Fetch data
  useEffect(() => {
    if (query.trim().length === 0) {
      setResults([]);
      return;
    }
    const fetchData = async () => {
      try {
        const res = await fetch('/api/berita');
        const data = await res.json();
        const filtered = data.filter((item) =>
          item.post_title.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
        setVisibleCount(5);
      } catch (err) {
        console.error('Gagal fetch berita:', err);
      }
    };
    fetchData();
  }, [query]);

  // Fokus input saat buka
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  // ESC untuk tutup
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') toggleSearch();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleSearch]);

  // Infinite scroll
  useEffect(() => {
    const listEl = listRef.current;
    if (!listEl) return;

    const handleScroll = () => {
      if (listEl.scrollTop + listEl.clientHeight >= listEl.scrollHeight - 50) {
        setVisibleCount((prev) => Math.min(prev + 5, results.length));
      }
    };

    listEl.addEventListener('scroll', handleScroll);
    return () => listEl.removeEventListener('scroll', handleScroll);
  }, [results]);

  return (
    <div className="fixed inset-0 flex items-start justify-center z-[9999] bg-black/70 pt-32">
      {/* Tombol Close */}
      <div className="absolute top-6 right-6">
        <button onClick={toggleSearch} className="text-white text-3xl hover:text-green-300 transition-colors">✕</button>
      </div>

      {/* Input + Results */}
      <div className="w-full max-w-xl px-6">
        <input
          ref={inputRef}
          type="text"
          placeholder="Ketik kata kunci..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-4 text-lg rounded-lg outline-none shadow-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-green-500"
        />
        {results.length > 0 && (
          <div ref={listRef} className="mt-2 max-h-[70vh] overflow-y-auto bg-white rounded-lg shadow-lg">
            <ul>
              {results.slice(0, visibleCount).map((item) => (
                <li key={item.ID}>
                  <Link
                    href={`/berita/${item.post_name}`}
                    onClick={toggleSearch}
                    className="flex items-center space-x-3 p-3 hover:bg-gray-100 transition-colors"
                  >
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.post_title}
                        width={48}
                        height={48}
                        className="rounded object-cover"
                      />
                    )}
                    <span className="text-gray-800">{item.post_title}</span>
                  </Link>
                </li>
              ))}
            </ul>
            {visibleCount < results.length && (
              <div className="text-center py-2 text-sm text-gray-500">Memuat lebih banyak...</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
