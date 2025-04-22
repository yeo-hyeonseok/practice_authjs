import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

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
      <body className="bg-gray-300">
        <Header className="fixed" />
        <div className="flex h-[100dvh] flex-col items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  )
}
