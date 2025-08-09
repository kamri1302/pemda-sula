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
];

// Dummy data tabel berita_meta (wp_postmeta)
const beritaMeta = [
  { meta_id: 1, berita_id: 1, meta_key: "_thumbnail_id", meta_value: 201 },
  { meta_id: 2, berita_id: 2, meta_key: "_thumbnail_id", meta_value: 202 },
  { meta_id: 3, berita_id: 3, meta_key: "_thumbnail_id", meta_value: 203 },
];

// Dummy data tabel media (wp_posts type=attachment)
const mediaTable = [
  {
    media_id: 201,
    file_path: "images/digitalisasi-pelayanan.webp",
    mime_type: "image/webp",
    post_title: "Digitalisasi Pelayanan Publik",
  },
  {
    media_id: 202,
    file_path: "images/festival-budaya.webp",
    mime_type: "image/webp",
    post_title: "Festival Budaya Sula 2025",
  },
  {
    media_id: 203,
    file_path: "images/dukungan-pendidikan.webp",
    mime_type: "image/webp",
    post_title: "Dukungan Pendidikan",
  },
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
