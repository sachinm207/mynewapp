import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { AuthProvider } from './contexts/AuthContext'
import NetworkStatus from './components/NetworkStatus'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My PWA App',
  description: 'A progressive web app built with Next.js',
  manifest: '/manifest.json',
  themeColor: '#000000',
  viewport: 'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'My PWA App',
  },
  formatDetection: {
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
              <Navbar />
              <NetworkStatus />
              <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                {children}
              </main>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}



