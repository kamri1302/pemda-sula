"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-green-700 text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 py-20 text-center"
      >
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          Selamat Datang di Portal Resmi <br/> Pemda Kepulauan Sula
        </h1>
        <p className="max-w-xl mx-auto text-lg text-green-100">
          Informasi terbaru, program, dan kegiatan untuk masyarakat Kepulauan Sula.
        </p>
      </motion.div>

      {/* Wave SVG */}
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
  );
}
