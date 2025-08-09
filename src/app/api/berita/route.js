// Dummy data tabel berita (wp_posts)
const beritaTable = [
  {
    ID: 1,
    post_author: 1,
    post_date: "2025-08-09 08:00:00",
    post_content: `
      <p>Pemerintah Kabupaten Kepulauan Sula resmi meluncurkan program digitalisasi pelayanan publik yang bertujuan meningkatkan efisiensi dan transparansi.</p>
      <p>Program ini mencakup pengembangan aplikasi layanan administrasi desa dan penguatan jaringan internet di seluruh kecamatan.</p>
      <p><img src="/images/digitalisasi-pelayanan.webp" alt="Digitalisasi Pelayanan Publik"></p>
    `,
    post_title: "Pemda Sula Luncurkan Program Digitalisasi Pelayanan Publik",
    post_excerpt: "Program digitalisasi pelayanan publik di Kabupaten Kepulauan Sula tingkatkan efisiensi dan transparansi.",
    post_status: "publish",
    post_name: "pemda-sula-luncurkan-program-digitalisasi-pelayanan-publik",
    post_modified: "2025-08-09 10:00:00",
  },
  {
    ID: 2,
    post_author: 2,
    post_date: "2025-08-08 09:30:00",
    post_content: `
      <p>Pemerintah Kabupaten Kepulauan Sula menggelar Festival Budaya Sula 2025, menampilkan tarian tradisional, kuliner khas, dan pameran seni rakyat.</p>
      <p>Festival ini bertujuan melestarikan budaya lokal sekaligus mendukung pariwisata daerah.</p>
      <p><img src="/images/festival-budaya.webp" alt="Festival Budaya Sula 2025"></p>
    `,
    post_title: "Festival Budaya Sula 2025 Digelar, Promosikan Warisan Lokal",
    post_excerpt: "Festival Budaya Sula 2025 hadirkan tarian, kuliner, dan seni rakyat sebagai bagian pelestarian budaya.",
    post_status: "publish",
    post_name: "festival-budaya-sula-2025-digelar-promosikan-warisan-lokal",
    post_modified: "2025-08-08 11:00:00",
  },
  {
    ID: 3,
    post_author: 1,
    post_date: "2025-08-07 07:45:00",
    post_content: `
      <p>Untuk meningkatkan kualitas pendidikan, Pemda Sula menyalurkan bantuan komputer dan akses internet ke sekolah-sekolah di wilayah terpencil.</p>
      <p>Program ini diharapkan dapat mendukung pembelajaran daring dan mempersempit kesenjangan digital.</p>
      <p><img src="/images/dukungan-pendidikan.webp" alt="Dukungan Pendidikan"></p>
    `,
    post_title: "Pemda Sula Salurkan Bantuan Teknologi untuk Sekolah Terpencil",
    post_excerpt: "Bantuan komputer dan internet dari Pemda Sula tingkatkan akses pendidikan di wilayah terpencil.",
    post_status: "publish",
    post_name: "pemda-sula-salurkan-bantuan-teknologi-untuk-sekolah-terpencil",
    post_modified: "2025-08-07 09:00:00",
  },
  {
    ID: 4,
    post_author: 2,
    post_date: "2025-08-06 14:00:00",
    post_content: `
      <p>Pemda Sula mempercepat pembangunan infrastruktur jalan dan jembatan untuk memperlancar konektivitas antar pulau.</p>
      <p>Proyek ini diharapkan membuka akses ekonomi baru bagi masyarakat lokal.</p>
      <p><img src="/images/infrastruktur.webp" alt="Pembangunan Infrastruktur"></p>
    `,
    post_title: "Pemda Sula Percepat Pembangunan Infrastruktur Konektivitas Antar Pulau",
    post_excerpt: "Pembangunan jalan dan jembatan tingkatkan akses ekonomi masyarakat Kepulauan Sula.",
    post_status: "publish",
    post_name: "pemda-sula-percepat-pembangunan-infrastruktur",
    post_modified: "2025-08-06 16:00:00",
  },
  {
    ID: 5,
    post_author: 3,
    post_date: "2025-08-05 11:30:00",
    post_content: `
      <p>Pemda Sula melaksanakan pelatihan peningkatan kapasitas bagi tenaga kesehatan di daerah terpencil.</p>
      <p>Pelatihan ini fokus pada peningkatan layanan kesehatan ibu dan anak.</p>
      <p><img src="/images/pelatihan-kesehatan.webp" alt="Pelatihan Kesehatan"></p>
    `,
    post_title: "Pelatihan Peningkatan Kapasitas Tenaga Kesehatan di Kepulauan Sula",
    post_excerpt: "Pelatihan tenaga kesehatan tingkatkan layanan ibu dan anak di daerah terpencil.",
    post_status: "publish",
    post_name: "pelatihan-peningkatan-kapasitas-tenaga-kesehatan",
    post_modified: "2025-08-05 13:00:00",
  },
  {
    ID: 6,
    post_author: 1,
    post_date: "2025-08-04 09:15:00",
    post_content: `
      <p>Pemda Sula bekerja sama dengan berbagai pihak untuk memperkuat konservasi laut dan sumber daya perikanan.</p>
      <p>Program ini penting untuk menjaga kelestarian ekosistem dan penghidupan masyarakat nelayan.</p>
      <p><img src="/images/konservasi-laut.webp" alt="Konservasi Laut"></p>
    `,
    post_title: "Kerjasama Pemda Sula Perkuat Konservasi Laut dan Perikanan",
    post_excerpt: "Program konservasi laut jaga ekosistem dan penghidupan nelayan di Kepulauan Sula.",
    post_status: "publish",
    post_name: "kerjasama-pemda-sula-perkuat-konservasi-laut",
    post_modified: "2025-08-04 10:30:00",
  },
  {
    ID: 7,
    post_author: 2,
    post_date: "2025-08-03 15:00:00",
    post_content: `
      <p>Pemda Sula luncurkan program pemberdayaan UMKM untuk meningkatkan kesejahteraan masyarakat lokal.</p>
      <p>Program ini mencakup pelatihan bisnis, akses modal, dan pemasaran produk lokal.</p>
      <p><img src="/images/pemberdayaan-umkm.webp" alt="Pemberdayaan UMKM"></p>
    `,
    post_title: "Pemda Sula Luncurkan Program Pemberdayaan UMKM",
    post_excerpt: "Program UMKM tingkatkan kesejahteraan masyarakat dengan pelatihan dan akses modal.",
    post_status: "publish",
    post_name: "pemda-sula-luncurkan-program-pemberdayaan-umkm",
    post_modified: "2025-08-03 16:30:00",
  },
  {
    ID: 8,
    post_author: 3,
    post_date: "2025-08-02 10:45:00",
    post_content: `
      <p>Pemda Sula mengadakan pelatihan penggunaan teknologi informasi bagi pegawai pemerintah daerah.</p>
      <p>Tujuannya untuk mempercepat digitalisasi dan meningkatkan pelayanan publik.</p>
      <p><img src="/images/pelatihan-it.webp" alt="Pelatihan Teknologi Informasi"></p>
    `,
    post_title: "Pelatihan Teknologi Informasi untuk Pegawai Pemda Sula",
    post_excerpt: "Pelatihan IT tingkatkan kemampuan pegawai dan layanan publik di Kepulauan Sula.",
    post_status: "publish",
    post_name: "pelatihan-teknologi-informasi-untuk-pegawai-pemda-sula",
    post_modified: "2025-08-02 12:00:00",
  },
  {
    ID: 9,
    post_author: 1,
    post_date: "2025-08-01 14:20:00",
    post_content: `
      <p>Pemda Sula fokus pada pengembangan pariwisata bahari dengan memperbaiki fasilitas pelabuhan dan destinasi wisata.</p>
      <p>Pengembangan ini diharapkan meningkatkan kunjungan wisatawan dan pendapatan daerah.</p>
      <p><img src="/images/pariwisata-bahari.webp" alt="Pariwisata Bahari"></p>
    `,
    post_title: "Pengembangan Pariwisata Bahari di Kabupaten Kepulauan Sula",
    post_excerpt: "Perbaikan fasilitas pelabuhan dan destinasi tingkatkan pariwisata bahari daerah.",
    post_status: "publish",
    post_name: "pengembangan-pariwisata-bahari-di-kabupaten-kepulauan-sula",
    post_modified: "2025-08-01 16:00:00",
  },
  {
    ID: 10,
    post_author: 2,
    post_date: "2025-07-31 08:10:00",
    post_content: `
      <p>Pemda Sula gelar program edukasi lingkungan hidup untuk masyarakat dan sekolah-sekolah di daerah pesisir.</p>
      <p>Program ini bertujuan meningkatkan kesadaran dan aksi pelestarian lingkungan.</p>
      <p><img src="/images/edukasi-lingkungan.webp" alt="Edukasi Lingkungan Hidup"></p>
    `,
    post_title: "Program Edukasi Lingkungan Hidup di Daerah Pesisir Kepulauan Sula",
    post_excerpt: "Meningkatkan kesadaran dan aksi pelestarian lingkungan di daerah pesisir.",
    post_status: "publish",
    post_name: "program-edukasi-lingkungan-hidup-di-daerah-pesisir",
    post_modified: "2025-07-31 09:30:00",
  },
];

// Dummy data tabel berita_meta (wp_postmeta)
const beritaMeta = [
  { meta_id: 1, berita_id: 1, meta_key: "_thumbnail_id", meta_value: 201 },
  { meta_id: 2, berita_id: 2, meta_key: "_thumbnail_id", meta_value: 202 },
  { meta_id: 3, berita_id: 3, meta_key: "_thumbnail_id", meta_value: 203 },
  { meta_id: 4, berita_id: 4, meta_key: "_thumbnail_id", meta_value: 204 },
  { meta_id: 5, berita_id: 5, meta_key: "_thumbnail_id", meta_value: 205 },
  { meta_id: 6, berita_id: 6, meta_key: "_thumbnail_id", meta_value: 206 },
  { meta_id: 7, berita_id: 7, meta_key: "_thumbnail_id", meta_value: 207 },
  { meta_id: 8, berita_id: 8, meta_key: "_thumbnail_id", meta_value: 208 },
  { meta_id: 9, berita_id: 9, meta_key: "_thumbnail_id", meta_value: 209 },
  { meta_id: 10, berita_id: 10, meta_key: "_thumbnail_id", meta_value: 210 },
];

// Dummy data tabel media (wp_posts type=attachment)
const mediaTable = [
  { media_id: 201, file_path: "images/digitalisasi-pelayanan.webp", mime_type: "image/webp", post_title: "Digitalisasi Pelayanan Publik" },
  { media_id: 202, file_path: "images/festival-budaya.webp", mime_type: "image/webp", post_title: "Festival Budaya Sula 2025" },
  { media_id: 203, file_path: "images/dukungan-pendidikan.webp", mime_type: "image/webp", post_title: "Dukungan Pendidikan" },
  { media_id: 204, file_path: "images/infrastruktur.webp", mime_type: "image/webp", post_title: "Pembangunan Infrastruktur" },
  { media_id: 205, file_path: "images/pelatihan-kesehatan.webp", mime_type: "image/webp", post_title: "Pelatihan Kesehatan" },
  { media_id: 206, file_path: "images/konservasi-laut.webp", mime_type: "image/webp", post_title: "Konservasi Laut" },
  { media_id: 207, file_path: "images/pemberdayaan-umkm.webp", mime_type: "image/webp", post_title: "Pemberdayaan UMKM" },
  { media_id: 208, file_path: "images/pelatihan-it.webp", mime_type: "image/webp", post_title: "Pelatihan Teknologi Informasi" },
  { media_id: 209, file_path: "images/pariwisata-bahari.webp", mime_type: "image/webp", post_title: "Pariwisata Bahari" },
  { media_id: 210, file_path: "images/edukasi-lingkungan.webp", mime_type: "image/webp", post_title: "Edukasi Lingkungan Hidup" },
];


export async function GET() {
  // Join berita dengan meta dan media
  const beritaWithImage = beritaTable.map((berita) => {
    const thumbMeta = beritaMeta.find(
      (meta) =>
        meta.berita_id === berita.ID && meta.meta_key === "_thumbnail_id"
    );

    const media =
      thumbMeta &&
      mediaTable.find((m) => m.media_id === parseInt(thumbMeta.meta_value));

    return {
      ...berita,
      image: media ? `/${media.file_path}` : null, // URL gambar
    };
  });

  return Response.json(beritaWithImage);
}

export { beritaTable, beritaMeta, mediaTable };
