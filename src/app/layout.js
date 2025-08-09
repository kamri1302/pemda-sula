import './globals.css';
import { PrefetchCacheProvider } from '@/context/PrefetchCacheContext';
import Header from '@/components/Header';

export const metadata = {
  title: 'Kabupaten Kepulauan Sula',
  description: 'Portal Resmi Pemerintah Kabupaten Kepulauan Sula',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="flex flex-col min-h-screen">
        <PrefetchCacheProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <footer className="bg-green-700 text-white text-center py-4 mt-auto">
            <p>© {new Date().getFullYear()} Pemerintah Kabupaten Kepulauan Sula. Semua Hak Dilindungi.</p>
          </footer>
        </PrefetchCacheProvider>
      </body>
    </html>
  );
}
