import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My PWA App',
  description: 'A progressive web app built with Next.js and Tailwind CSS',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex flex-col flex-1 overflow-hidden">
            <Navbar />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}