"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BeritaSection() {
  const [berita, setBerita] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/berita")
      .then((res) => res.json())
      .then((data) => {
        const sorted = [...data].sort(
          (a, b) => new Date(b.post_date) - new Date(a.post_date)
        );
        setBerita(sorted.slice(0, 3));
        setLoading(false);
      });
  }, []);

  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Berita Terbaru
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div
                key={`skeleton-${i}`}
                className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
              >
                <div className="w-full h-48 bg-gray-300"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-300 mb-2"></div>
                  <div className="h-3 bg-gray-200 mb-2"></div>
                  <div className="h-3 bg-gray-200 w-2/3"></div>
                </div>
              </div>
            ))
          : berita.map((item) => (
              <motion.div
                key={`berita-${item.ID}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <Link href={`/berita/${item.post_name}`}>
                  <Image
                    src={item.image}
                    alt={item.post_title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{item.post_title}</h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {new Date(item.post_date).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <p className="text-gray-700 text-sm">{item.post_excerpt}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
      </div>
    </section>
  );
}
