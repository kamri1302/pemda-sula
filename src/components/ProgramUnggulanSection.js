"use client";

import {
  ComputerIcon,
  GlobeIcon,
  HandIcon,
  FishIcon,
} from "./icons";

const programUnggulan = [
  {
    id: 1,
    judul: "Digitalisasi Pelayanan Publik",
    deskripsi:
      "Menghadirkan layanan administrasi berbasis digital untuk mempercepat dan mempermudah akses masyarakat.",
    Ikon: ComputerIcon,
  },
  {
    id: 2,
    judul: "Pengembangan Infrastruktur Jaringan",
    deskripsi:
      "Memperluas cakupan jaringan internet hingga ke wilayah terpencil di Kepulauan Sula.",
    Ikon: GlobeIcon,
  },
  {
    id: 3,
    judul: "Pemberdayaan UMKM Lokal",
    deskripsi:
      "Mendukung pelatihan dan akses modal bagi UMKM untuk meningkatkan kesejahteraan masyarakat.",
    Ikon: HandIcon,
  },
  {
    id: 4,
    judul: "Konservasi Laut dan Perikanan",
    deskripsi:
      "Program pelestarian ekosistem laut untuk menjaga keberlanjutan sumber daya perikanan.",
    Ikon: FishIcon,
  },
];

export default function ProgramUnggulanSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-green-800">
        Program Unggulan
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {programUnggulan.map(({ id, judul, deskripsi, Ikon }) => (
          <div
            key={id}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition cursor-default"
          >
            <Ikon />
            <h3 className="text-xl font-semibold mb-2">{judul}</h3>
            <p className="text-gray-700 text-sm">{deskripsi}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
