export const berita = [
  {
    id: 1,
    title: "Festival Budaya Sula 2025",
    date: "5 Agustus 2025",
    excerpt: "Acara tahunan menampilkan tarian, musik, dan kuliner khas Kepulauan Sula.",
    content: "Festival Budaya Sula 2025 adalah acara tahunan terbesar di Kepulauan Sula...",
    image: "/images/2.webp",
  },
  {
    id: 2,
    title: "Program Bantuan Nelayan",
    date: "2 Agustus 2025",
    excerpt: "Bantuan alat tangkap modern untuk meningkatkan hasil nelayan.",
    content: "Program ini memberikan bantuan alat tangkap modern kepada nelayan...",
    image: "/images/3.webp",
  },
  {
    id: 3,
    title: "Pembukaan Jalan Baru",
    date: "28 Juli 2025",
    excerpt: "Jalan baru menghubungkan desa dan kota untuk percepat mobilitas.",
    content: "Pemerintah daerah meresmikan jalan baru yang menghubungkan desa...",
    image: "/images/4.webp",
  },
];

// GET semua berita
export async function GET() {
  return Response.json(berita);
}
