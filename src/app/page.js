"use client";

import HeroSection from "@/components/HeroSection";
import BeritaSection from "@/components/BeritaSection";
import ProgramUnggulanSection from "@/components/ProgramUnggulanSection";
import StatistikSingkatSection from "@/components/StatistikSingkatSection";
import LayananPublikCepatSection from "@/components/LayananPublikCepatSection";
import PengumumanSection from "@/components/PengumumanSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <BeritaSection />
      <ProgramUnggulanSection />
      <StatistikSingkatSection />
      <div className="container mx-auto px-4 py-8 flex flex-col-reverse lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <LayananPublikCepatSection />
        </div>

        <aside className="lg:w-1/3">
          <PengumumanSection />
        </aside>
      </div>
    </main>
  );
}
