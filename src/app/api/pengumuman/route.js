export async function GET() {
  const data = [
    {
      id: 1,
      judul: "Jadwal Vaksinasi Massal Agustus 2025",
      tanggal: "2025-08-10",
      link: "/pengumuman/vaksinasi-massal-agustus-2025",
    },
    {
      id: 2,
      judul: "Pemberitahuan Pemadaman Listrik Terjadwal",
      tanggal: "2025-08-05",
      link: null,
    },
    {
      id: 3,
      judul: "Pelayanan Kantor Pemda Tutup Hari Kemerdekaan",
      tanggal: "2025-08-01",
      link: "/pengumuman/libur-kemerdekaan",
    },
    {
      id: 4,
      judul: "Pengajuan Bantuan UMKM Tahap II Dibuka",
      tanggal: "2025-07-28",
      link: "/pengumuman/bantuan-umkm-tahap-2",
    },
    {
      id: 5,
      judul: "Sosialisasi Kebijakan Baru Pajak Daerah",
      tanggal: "2025-07-25",
      link: null,
    },
  ];

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
