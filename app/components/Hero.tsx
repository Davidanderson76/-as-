'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Oswald } from 'next/font/google';
import { Bitcount } from 'next/font/google';
const bitcount = Bitcount({
  subsets: ['latin'],
  weight: ['400', '700'],
});
const oswald = Oswald({ subsets: ['latin'], weight: ['400', '700'] });


export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full">
      {/* Background image */}
      <Image
        src="/images/promo2.jpg"
        alt="Band Promo"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text / Logo */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <Image
          src="/images/AS_logo_2.png"
          alt="MyBand logo"
          width={260}
          height={120}
          priority
          className="mb-6 invert"
        />
        <div className="text-center text-white px-4">
            <h5 className={`${bitcount.className} text-xl font-bold`}>
                GOD IS NOT A SAFE SPACE — OUT NOW
            </h5>
            <p className={`${bitcount.className} text-sm mb-8`}>
                
            </p>
         <Link
           href="/music"
           className={`${bitcount.className} bg-red-600 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-full transition`}
            >
                Listen Now
            </Link>
        </div>
      </div>
    </section>
  );
}
