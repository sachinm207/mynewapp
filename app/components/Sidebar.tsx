'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed z-50 top-4 left-4 p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700 rounded-md"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-white shadow-lg transition duration-200 ease-in-out z-40`}>
        <nav className="mt-16 p-4">
          <Link href="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-100 hover:text-gray-900">
            Home
          </Link>
          <Link href="/features" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-100 hover:text-gray-900">
            Features
          </Link>
          <Link href="/about" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-100 hover:text-gray-900">
            About
          </Link>
        </nav>
      </div>
    </>
  )
}