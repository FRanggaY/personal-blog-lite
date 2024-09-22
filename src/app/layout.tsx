import { Source_Sans_3 } from 'next/font/google';

import './globals.css';
import { metaData } from '@/lib/metaData';

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = metaData

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sourceSans3.className}>
      <body>
        { children }
      </body>
    </html>
  );
}
