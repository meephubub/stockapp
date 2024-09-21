import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { HomeIcon, BarChart2Icon, LogInIcon, LogOutIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'StockVision',
  description: 'Real-time stock data and portfolio management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-900 text-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-gray-900/30 animate-pulse"></div>
          </div>
          <div className="relative z-10">
            <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-lg border-b border-gray-700">
              <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <Link href="/" className="text-xl font-semibold text-blue-400">
                  StockVision
                </Link>
                <div className="flex items-center space-x-4">
                  <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                    <HomeIcon className="h-6 w-6" />
                  </Link>
                  <Link href="/portfolio" className="text-gray-300 hover:text-blue-400 transition-colors">
                    <BarChart2Icon className="h-6 w-6" />
                  </Link>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center space-x-2 text-gray-300 hover:text-blue-400"
                  >
                    <LogInIcon className="h-4 w-4" />
                    <span>Login</span>
                  </Button>
                </div>
              </div>
            </nav>
            <main className="container mx-auto px-6 pt-20 pb-12">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}