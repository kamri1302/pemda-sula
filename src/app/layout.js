import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { PrefetchCacheProvider } from '@/context/PrefetchCacheContext';

export const metadata = {
  title: 'Kabupaten Kepulauan Sula',
  description: 'Portal Resmi Pemerintah Kabupaten Kepulauan Sula',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="flex flex-col min-h-screen">
        <PrefetchCacheProvider>
          {/* Header */}
          <header className="bg-green-700 text-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
              <Link href="/" className="flex items-center space-x-3">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16">
                  <Image
                    src="/logo.png"
                    alt="Logo Kabupaten Kepulauan Sula"
                    fill
                    sizes="(max-width: 640px) 56px, 64px"
                    priority
                    className="drop-shadow-md object-contain"
                  />
                </div>
                <span className="text-xl font-bold hover:text-green-300">
                  Kabupaten Kepulauan Sula
                </span>
              </Link>
              <nav className="space-x-6 text-sm sm:text-base">
                <Link href="/" className="hover:text-green-300">
                  Beranda
                </Link>
                <Link href="/berita" className="hover:text-green-300">
                  Berita
                </Link>
              </nav>
            </div>
          </header>

          {/* Konten utama */}
          <main className="flex-grow">{children}</main>

          {/* Footer */}
          <footer className="bg-green-700 text-white text-center py-4 mt-auto">
            <p>© {new Date().getFullYear()} Pemerintah Kabupaten Kepulauan Sula. Semua Hak Dilindungi.</p>
          </footer>
        </PrefetchCacheProvider>
      </body>
    </html>
  );
}
