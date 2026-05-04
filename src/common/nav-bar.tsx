'use client'
import { scrollToForm } from "@/lib/scorll-to-form"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo/logo.png"
              alt="Logo"
              width={120}
              height={40}
              priority
              className="h-auto w-auto max-h-10"
            />
          </div>

          {/* CTA Button */}
          <div>
              <button onClick={scrollToForm} className="bg-red-600 hover:bg-red-500 active:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-red-900/30 hover:-translate-y-0.5">
               Apply Now
              </button>
          </div>

        </div>
      </div>
    </nav>
  )
}