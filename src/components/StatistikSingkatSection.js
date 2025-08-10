"use client";

import { useEffect, useState } from "react";

export default function StatistikSingkatSection() {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  // Inline SVG icons sesuai id
  function getIcon(id) {
    switch (id) {
      case 1:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-green-600 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h4v10H3zM17 6h4v14h-4zM9 14h6v6H9z" />
          </svg>
        );
      case 2:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-green-600 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87M12 12a4 4 0 100-8 4 4 0 000 8z" />
          </svg>
        );
      case 3:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-green-600 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6a2 2 0 014 0v6M12 3v4" />
            <circle cx="12" cy="17" r="4" />
          </svg>
        );
      case 4:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-green-600 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3M13 9l3 3-3 3" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return null;
    }
  }

  useEffect(() => {
    fetch("/api/statistik")
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center p-10 text-green-700">Memuat statistik...</p>;

  return (
    <section className="bg-green-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-800">Statistik Singkat</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map(({ id, label, value }) => (
            <div
              key={id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-default"
            >
              {getIcon(id)}
              <p className="text-4xl font-extrabold text-green-700 mt-4">{value}</p>
              <p className="mt-2 text-green-900 font-semibold">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
