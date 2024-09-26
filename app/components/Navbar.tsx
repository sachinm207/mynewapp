'use client'

import Link from 'next/link'
import { useAuth } from '../contexts/AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

export default function Navbar() {
  const { user } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out', error);
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                My PWA App
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
                Home
              </Link>
              <Link href="/features" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
                Features
              </Link>
              <Link href="/about" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
                About
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            {user ? (
              <button onClick={handleSignOut} className="text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-md">
                Sign Out
              </button>
            ) : (
              <>
                <Link href="/signin" className="text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-md">
                  Sign In
                </Link>
                <Link href="/signup" className="text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-md">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}