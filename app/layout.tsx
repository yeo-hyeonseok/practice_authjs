import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Practice Auth.js',
  description: 'Auth.js 익혀보아요'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
