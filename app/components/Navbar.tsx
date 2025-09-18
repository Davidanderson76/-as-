'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-4 py-3 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo / Band name */}
        <Link href="/">
          <Image
            src="/images/Copy_of_crosshair.png"
            alt="MyBand Logo"
            width={50}               
            height={35}              
            className="invert"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 text-lg">
          <Link href="/about" className="hover:text-pink-400 transition">
            About
          </Link>
          <Link href="/music" className="hover:text-pink-400 transition">
            Music
          </Link>
          <Link href="/tour" className="hover:text-pink-400 transition">
            Tour
          </Link>
          <Link href="/contact" className="hover:text-pink-400 transition">
            Contact
          </Link>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 bg-black/90 rounded-md p-4">
          <Link
            href="/about"
            className="block text-lg hover:text-pink-400"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/music"
            className="block text-lg hover:text-pink-400"
            onClick={() => setIsOpen(false)}
          >
            Music
          </Link>
          <Link
            href="/tour"
            className="block text-lg hover:text-pink-400"
            onClick={() => setIsOpen(false)}
          >
            Tour
          </Link>
          <Link
            href="/contact"
            className="block text-lg hover:text-pink-400"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
