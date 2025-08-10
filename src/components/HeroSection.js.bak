import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection({ scrollY }) {
  return (
    <section className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center text-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/sula-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: `center ${scrollY * 0.4}px`,
          transition: "background-position 0.1s ease-out",
        }}
      ></div>
      <div className="absolute inset-0 bg-black/40"></div>

      <motion.div
        className="relative z-10 max-w-3xl px-4 text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl sm:text-4xl font-bold mb-4">
          Selamat Datang di Portal Resmi <br /> Pemerintah Daerah Kepulauan Sula
        </h2>
        <p className="text-sm sm:text-lg">
          Sumber informasi resmi, berita terbaru, dan program pembangunan untuk masyarakat.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#berita"
            className="bg-green-700 text-white px-5 py-2 rounded-lg shadow hover:bg-green-800 transition"
          >
            📢 Baca Berita Terbaru
          </a>
          <Link
            href="/tentang"
            className="bg-white text-green-700 border border-green-700 px-5 py-2 rounded-lg shadow hover:bg-green-50 transition"
          >
            🌏 Kenali Sula Lebih Dekat
          </Link>
        </div>
      </motion.div>

      {/* Gelombang */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-[50px] sm:h-[80px]"
        >
          <path
            d="M0.00,49.98 C149.99,150.00 349.63,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#f9fafb" }}
          ></path>
        </svg>
      </div>
    </section>
  );
}
