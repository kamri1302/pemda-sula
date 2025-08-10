// src/app/api/program-unggulan/route.js
export const GET = async (request) => {
  const programUnggulan = [
    {
      id: 1,
      judul: "Digitalisasi Pelayanan Publik",
      deskripsi:
        "Menghadirkan layanan administrasi berbasis digital untuk mempercepat dan mempermudah akses masyarakat.",
      ikon: "💻",
    },
    {
      id: 2,
      judul: "Pengembangan Infrastruktur Jaringan",
      deskripsi:
        "Memperluas cakupan jaringan internet hingga ke wilayah terpencil di Kepulauan Sula.",
      ikon: "🌐",
    },
    {
      id: 3,
      judul: "Pemberdayaan UMKM Lokal",
      deskripsi:
        "Mendukung pelatihan dan akses modal bagi UMKM untuk meningkatkan kesejahteraan masyarakat.",
      ikon: "🤝",
    },
    {
      id: 4,
      judul: "Konservasi Laut dan Perikanan",
      deskripsi:
        "Program pelestarian ekosistem laut untuk menjaga keberlanjutan sumber daya perikanan.",
      ikon: "🐟",
    },
  ];

  return new Response(JSON.stringify(programUnggulan), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
