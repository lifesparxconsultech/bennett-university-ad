"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function ThankYouPage() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(10)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    const timeout = setTimeout(() => {
      router.push("/")
    }, 10000)

    return () => {
      clearInterval(timer)
      clearTimeout(timeout)
    }
  }, [router])

  return (
    <main className="flex-1 flex items-center justify-center bg-gray-50 px-4 py-20">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl shadow-black/5 overflow-hidden border border-gray-100">
        <div className="bg-red-600 h-2 w-full" />
        <div className="px-8 py-12 sm:px-12 sm:py-16 text-center space-y-8">
          
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto ring-8 ring-green-50">
            <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Submission Successful!
            </h1>
            <p className="text-gray-500 text-lg sm:text-xl font-light leading-relaxed max-w-md mx-auto">
              Thank you for your interest in Bennett University. Our admissions counselor will contact you shortly.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 inline-block w-full max-w-sm">
             <p className="text-sm text-gray-400 font-medium uppercase tracking-widest">
              Redirecting to Homepage in
            </p>
            <div className="text-4xl font-black text-red-600 mt-2">
              {countdown}s
            </div>
          </div>

          <div className="pt-4">
            <button 
              onClick={() => router.push("/")}
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Go Back Home
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
