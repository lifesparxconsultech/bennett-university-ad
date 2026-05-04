"use client"

import { scrollToForm } from "@/lib/scorll-to-form"
import Image from "next/image"
import { useState } from "react"

export default function HeroSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" })
  const [errors, setErrors] = useState({ name: "", phone: "", email: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  // ── Replace with your deployed Apps Script Web App URL ──
  const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxyR9a0NaKCZoC8VA0xEZLmP6ci3ncVNh_8lUzKeac2z8HH0BsfFLkRGAYhpDsrzgixGg/exec"

  // Indian mobile: starts with 6/7/8/9, exactly 10 digits
  const phoneRegex = /^[6-9]\d{9}$/
  // Must end with @gmail.com
  const emailRegex = /^[a-zA-Z0-9._%+\-]+@gmail\.com$/

  const validate = () => {
    const newErrors = { name: "", phone: "", email: "" }
    let valid = true

    if (!form.name.trim()) {
      newErrors.name = "Full name is required."
      valid = false
    }

    if (!form.phone) {
      newErrors.phone = "Mobile number is required."
      valid = false
    } else if (!phoneRegex.test(form.phone)) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number."
      valid = false
    }

    if (!form.email) {
      newErrors.email = "Email is required."
      valid = false
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Enter a valid Gmail address (must end with @gmail.com)."
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    // Phone: only allow digits, max 10
    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10)
      setForm({ ...form, phone: digitsOnly })
    } else {
      setForm({ ...form, [name]: value })
    }
    // Clear error on change
    setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const handleSubmit = async () => {
    if (!validate()) return

    setStatus("loading")

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Apps Script requires no-cors
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          name: form.name,
          email: form.email,
          phone: form.phone,
          program: "Online MBA",
          source: "Hero Form",
        }),
      })

      // no-cors means we can't read the response — assume success
      setStatus("success")
      setForm({ name: "", phone: "", email: "" })
      setErrors({ name: "", phone: "", email: "" })
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden" id="eligibility-form">

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero/university.jpg"
          alt="Bennett University Campus"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/70 to-gray-900/40" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/40 text-red-400 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide backdrop-blur-sm">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              ADMISSIONS OPEN 2024
            </span>

            <div className="space-y-1">
              <p className="text-white/80 text-lg sm:text-xl font-medium">Bennett University</p>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-semibold text-white leading-tight tracking-tight">
                Online <span className="text-red-500">MBA</span>
              </h1>
              <p className="text-white/90 text-xl sm:text-2xl font-semibold">(UGC-Approved)</p>
            </div>

            <p className="text-white/70 text-sm sm:text-base max-w-lg leading-relaxed">
              Build real business skills, move into higher-paying roles, and stay ahead in a competitive job market — all while continuing your current job.
            </p>

            <ul className="space-y-3">
              {[
                "Learn from industry-aligned curriculum",
                "Flexible online format (Live + Recorded)",
                "Backed by The Times Group ecosystem",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/85 text-sm sm:text-base">
                  <span className="flex-shrink-0 w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 pt-2">
              <button onClick={scrollToForm} className="bg-red-600 hover:bg-red-500 active:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-red-900/30 hover:-translate-y-0.5">
                Download Brochure
              </button>
              <button onClick={scrollToForm} className="border border-white/30 hover:border-white/60 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-7 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 hover:-translate-y-0.5">
                Check Scholarship
              </button>
            </div>

            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3">
              <div className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-widest font-medium">Recognized by</p>
                <p className="text-white font-semibold text-sm">UGC &amp; DEB Certified</p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full max-w-md mx-auto lg:ml-auto">
            <div className="bg-white rounded-2xl shadow-2xl shadow-black/30 overflow-hidden">

              {/* Form Header */}
              <div className="bg-gray-50 border-b border-gray-100 px-6 py-4 flex items-center gap-2">
                <div className="w-4 h-4 bg-red-600 rounded flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 text-base sm:text-lg">Quick Eligibility Check</h3>
              </div>

              {/* Success State */}
              {status === "success" ? (
                <div className="px-6 py-12 flex flex-col items-center text-center gap-4">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-800 font-semibold text-base">You&apos;re all set!</p>
                    <p className="text-gray-500 text-sm font-light mt-1">
                      Our counselor will reach out to you shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-red-600 text-sm font-semibold hover:underline mt-2"
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <div className="px-6 py-6 space-y-4">

                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Full Name</label>
                    <div className="relative">
                      <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className={`w-full border rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${errors.name ? "border-red-400 focus:ring-red-400" : "border-gray-200 focus:ring-red-500"}`}
                      />
                    </div>
                    {errors.name && <p className="text-red-500 text-xs font-light">{errors.name}</p>}
                  </div>

                  {/* Mobile Number */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Mobile Number</label>
                    <div className="relative flex items-center">
                      <span className="absolute left-3 text-sm text-gray-500 font-semibold select-none">+91</span>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="98765 43210"
                        maxLength={10}
                        inputMode="numeric"
                        className={`w-full border rounded-lg pl-12 pr-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${errors.phone ? "border-red-400 focus:ring-red-400" : "border-gray-200 focus:ring-red-500"}`}
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs font-light">{errors.phone}</p>}
                  </div>

                  {/* Work Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Gmail Address</label>
                    <div className="relative">
                      <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="yourname@gmail.com"
                        className={`w-full border rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${errors.email ? "border-red-400 focus:ring-red-400" : "border-gray-200 focus:ring-red-500"}`}
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs font-light">{errors.email}</p>}
                  </div>

                  {/* Error */}
                  {status === "error" && (
                    <p className="text-red-500 text-xs font-light text-center">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={status === "loading"}
                    className="w-full bg-red-600 hover:bg-red-500 active:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 shadow-md shadow-red-200 hover:shadow-red-300 hover:-translate-y-0.5 mt-2 flex items-center justify-center gap-2 group"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Check Eligibility
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center leading-relaxed">
                    By clicking, you agree to our privacy policy and to receive program updates.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}