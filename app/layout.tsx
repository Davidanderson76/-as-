// app/layout.tsx
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Oswald, Inter } from 'next/font/google';

const oswald = Oswald({ subsets: ['latin'], weight: ['400','700'] });
const inter = Inter({ subsets: ['latin'], weight: ['400','700'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
