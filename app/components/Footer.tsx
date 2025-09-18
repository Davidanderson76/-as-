'use client';

import Link from 'next/link';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { SiSpotify } from 'react-icons/si'; // ✅ Spotify icon

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Band name */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-white">MyBand</h2>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} MyBand. All rights reserved.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex gap-6">
            <Link
              href="https://www.facebook.com/yourband"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-pink-400 transition"
            >
              <Facebook size={24} />
            </Link>
            <Link
              href="https://www.instagram.com/yourband"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-400 transition"
            >
              <Instagram size={24} />
            </Link>
            <Link
              href="https://www.youtube.com/yourband"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-pink-400 transition"
            >
              <Youtube size={24} />
            </Link>
            <Link
              href="https://open.spotify.com/artist/yourband"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spotify"
              className="hover:text-pink-400 transition"
            >
              <SiSpotify size={22} /> {/* Spotify icon */}
            </Link>
          </div>
        </div>

        {/* Optional footer links */}
        <div className="mt-6 text-center text-sm space-x-4">
          <Link href="/privacy" className="hover:text-pink-400">
            Privacy
          </Link>
          <span className="text-gray-600">|</span>
          <Link href="/terms" className="hover:text-pink-400">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
