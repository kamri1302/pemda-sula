// src/app/api/layanan-publik-cepat/route.js

const layananData = [
  {
    id: 1,
    nama: "Pengurusan KTP Elektronik",
    deskripsi: "Proses cepat dan mudah untuk pembuatan dan perpanjangan KTP Elektronik.",
    link: "/layanan/ktp-elektronik"
  },
  {
    id: 2,
    nama: "Pembuatan Akta Kelahiran",
    deskripsi: "Layanan pembuatan akta kelahiran dengan persyaratan lengkap dan proses yang singkat.",
    link: "/layanan/akta-kelahiran"
  },
  {
    id: 3,
    nama: "Pendaftaran Nikah",
    deskripsi: "Fasilitas pendaftaran nikah secara online dan tatap muka di kantor KUA terdekat.",
    link: "/layanan/pendaftaran-nikah"
  },
  {
    id: 4,
    nama: "Perpanjangan SIM",
    deskripsi: "Pelayanan perpanjangan SIM dengan prosedur cepat dan mudah di Satpas terdekat.",
    link: "/layanan/perpanjangan-sim"
  },
  {
    id: 5,
    nama: "Pelayanan Pajak Daerah",
    deskripsi: "Pembayaran dan pelaporan pajak daerah secara online maupun offline.",
    link: "/layanan/pajak-daerah"
  },
  {
    id: 6,
    nama: "Permohonan Surat Keterangan Domisili",
    deskripsi: "Pengajuan surat keterangan domisili dengan proses cepat dan mudah.",
    link: "/layanan/surat-keterangan-domisili"
  },
];

export async function GET() {
  // Kirim hanya 5 data terbaru
  const dataTerbatas = layananData.slice(0, 5);

  return new Response(JSON.stringify(dataTerbatas), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
