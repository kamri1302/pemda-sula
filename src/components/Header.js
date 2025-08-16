'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';

// import overlay sebagai client-only
const SearchOverlay = dynamic(() => import('./SearchOverlayClient'), { ssr: false });

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === '/';

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSearch = () => {
    setMenuOpen(false);
    setSearchOpen(!searchOpen);
  };

  const SearchIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-white hover:text-green-300 transition-colors"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
      />
    </svg>
  );

  return (
    <header
      className={`bg-green-700 text-white relative z-50 ${isHome ? '' : 'shadow-md'}`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
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

        {/* Menu Desktop */}
        <nav className="hidden sm:flex items-center space-x-6 text-sm sm:text-base">
          <Link href="/" className="hover:text-green-300">Beranda</Link>
          <Link href="/berita" className="hover:text-green-300">Berita</Link>
          <button onClick={toggleSearch} className="focus:outline-none">
            {SearchIcon}
          </button>
        </nav>

        {/* Hamburger Mobile */}
        <button
          onClick={toggleMenu}
          className="sm:hidden focus:outline-none z-60"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`fixed top-0 left-0 bottom-0 bg-green-700 text-white shadow-lg z-50 sm:hidden w-1/2 px-6 pt-16 flex flex-col space-y-4 overflow-auto transform transition-transform duration-500 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Link href="/" className="block text-lg hover:text-green-300" onClick={() => setMenuOpen(false)}>Beranda</Link>
        <Link href="/berita" className="block text-lg hover:text-green-300" onClick={() => setMenuOpen(false)}>Berita</Link>
        <button onClick={toggleSearch} className="flex items-center space-x-2 hover:text-green-300">
          <span>Pencarian</span>
          {SearchIcon}
        </button>
      </nav>

      {/* Overlay Pencarian (client only) */}
      {searchOpen && <SearchOverlay toggleSearch={toggleSearch} />}
    </header>
  );
}
