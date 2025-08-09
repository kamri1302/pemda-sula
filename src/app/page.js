"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomePage() {
  const [berita, setBerita] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/berita")
      .then((res) => res.json())
      .then((data) => {
        setBerita(data);
        setLoading(false);
      });
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-4 py-20 text-center"
        >
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            Selamat Datang di Portal Resmi Pemda Sula
          </h1>
          <p className="max-w-xl mx-auto text-lg text-green-100">
            Informasi terbaru, program, dan kegiatan untuk masyarakat Kepulauan Sula.
          </p>
        </motion.div>

        {/* Wave SVG di bawah */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg
            className="relative block w-[200%] h-20 sm:h-28 wave-animation"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,39.37 C65.86,27.46 131.07,20.38 201.27,31.37
                 C285,44.5 370.07,74.17 491.78,67.89
                 C572.92,63.14 651.42,18.27 743.84,23.15
                 C823.78,28 906.67,72 985.66,92.83
                 C1057.93,113.2 1133.45,118.13 1200,97.8
                 L1200,120 L0,120 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* Berita Terbaru */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Berita Terbaru
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
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
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
                >
                  <Link href={`/berita/${item.id}`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                      <p className="text-gray-700 text-sm">{item.excerpt}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
        </div>
      </section>
    </main>
  );
}
