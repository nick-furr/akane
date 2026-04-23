import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://restaurant.nickfurr.com'),
  title: 'AKANE 茜 — Sushi, Tribeca',
  description:
    'Full-stack restaurant concept with online reservations, automated email confirmations via Resend, and a protected owner dashboard. Built with Next.js, TypeScript, and Supabase.',
  openGraph: {
    title: 'AKANE 茜 — Sushi, Tribeca',
    description:
      'Full-stack restaurant concept with online reservations, automated email confirmations via Resend, and a protected owner dashboard. Built with Next.js, TypeScript, and Supabase.',
    url: 'https://restaurant.nickfurr.com',
    siteName: 'Nick Furr — Portfolio',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'AKANE 茜 — Sushi, Tribeca',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AKANE 茜 — Sushi, Tribeca',
    description:
      'Full-stack restaurant concept with online reservations, automated email confirmations via Resend, and a protected owner dashboard. Built with Next.js, TypeScript, and Supabase.',
    images: ['/opengraph-image'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
