import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { HomeIcon, BarChart2Icon, LogInIcon, LogOutIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const isLoggedIn = true // This should be replaced with actual auth state

  const handleAuthAction = () => {
    if (isLoggedIn) {
      // Handle logout logic here
      console.log('Logged out')
    } else {
      router.push('/login')
    }
  }

  return (
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
                onClick={handleAuthAction}
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400"
              >
                {isLoggedIn ? (
                  <>
                    <LogOutIcon className="h-4 w-4" />
                    <span>Logout</span>
                  </>
                ) : (
                  <>
                    <LogInIcon className="h-4 w-4" />
                    <span>Login</span>
                  </>
                )}
              </Button>
            </div>
          </div>
        </nav>
        <main className="container mx-auto px-6 pt-20 pb-12">
          {children}
        </main>
      </div>
    </div>
  )
}