// src/app/api/sidebar-berita/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  const dummyBerita = [
    {
      ID: 1,
      post_title: 'Kegiatan Bupati di Acara Desa',
      type: 'image',
      src: '/images/widgets/BUPATI-WAKIL.webp',
      mime: 'image/webp'
    },
    {
      ID: 2,
      post_title: 'Video Dokumentasi Upacara',
      type: 'video',
      src: '/videos/widgets/opd-Jaga-Sula.webm',
      mime: 'video/mp4'
    },
  ];

  return NextResponse.json(dummyBerita);
}
