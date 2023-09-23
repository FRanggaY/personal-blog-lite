"use client"
import './globals.css'

import { Inter } from 'next/font/google'
import { i18n } from "@/app/i18n.config";
import { useParams } from 'next/navigation'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const params = useParams() || {};
  const lang = (params.lang || i18n.defaultLocale ).toString();

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}
