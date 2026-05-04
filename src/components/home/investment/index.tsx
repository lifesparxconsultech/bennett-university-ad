'use client'
import { scrollToForm } from "@/lib/scorll-to-form"
import { FiInfo } from "react-icons/fi"
import { MdOutlineShield, MdOutlineSchool, MdOutlineAccessible } from "react-icons/md"

const scholarships = [
  {
    icon: <MdOutlineShield className="w-5 h-5 text-slate-500" />,
    title: "Defence Personnel",
    subtitle: "For active/retired members",
    discount: "20% Off",
    color: "text-red-600",
  },
  {
    icon: <MdOutlineSchool className="w-5 h-5 text-slate-500" />,
    title: "Bennett Alumni",
    subtitle: "For our returning students",
    discount: "10% Off",
    color: "text-gray-800",
  },
  {
    icon: <MdOutlineAccessible className="w-5 h-5 text-slate-500" />,
    title: "Divyangjan",
    subtitle: "For differently-abled students",
    discount: "15% Off",
    color: "text-gray-800",
  },
]

export default function InvestmentSection() {
  return (
    <div className="bg-[#f5f7fa] px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT: Fee Table */}
          <div className="space-y-4">
            <h2 className="text-[#0f1e3c] text-lg font-semibold">Investment in Your Future</h2>

            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              {/* Table Header */}
              <div className="bg-[#0f1e3c] px-6 py-4 grid grid-cols-2">
                <p className="text-white/60 text-xs font-semibold uppercase tracking-widest">Fee Component</p>
                <p className="text-white/60 text-xs font-semibold uppercase tracking-widest">Amount (₹)</p>
              </div>

              {/* Row 1 */}
              <div className="bg-white px-6 py-4 grid grid-cols-2 border-b border-gray-100">
                <p className="text-gray-700 text-sm font-light">Semester Fee</p>
                <p className="text-gray-700 text-sm font-light">₹ 52,500 / Semester</p>
              </div>

              {/* Row 2 */}
              <div className="bg-white px-6 py-4 grid grid-cols-2 border-b border-gray-100">
                <p className="text-gray-700 text-sm font-light">Total Program Fee</p>
                <p className="text-gray-700 text-sm font-light">₹ 2,10,000 Total</p>
              </div>

              {/* Row 3 — EMI highlight */}
              <div className="bg-white px-6 py-4 grid grid-cols-2 items-center">
                <p className="text-red-600 text-sm font-semibold">No Cost EMI</p>
                <p className="text-red-600 text-sm font-semibold">Starts at ₹ 3,334/month</p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="flex items-start gap-2 text-gray-400">
              <FiInfo className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <p className="text-xs font-light leading-relaxed">
                Application fee of ₹1,000 is extra. All taxes included as per government norms.
              </p>
            </div>
          </div>

          {/* RIGHT: Scholarships + CTA */}
          <div className="space-y-4">
            <h2 className="text-[#0f1e3c] text-lg font-semibold">Scholarships &amp; Support</h2>

            {/* Scholarship Cards */}
            <div className="space-y-3">
              {scholarships.map((s) => (
                <div
                  key={s.title}
                  className="bg-white rounded-xl px-5 py-4 border border-gray-100 shadow-sm flex items-center gap-4"
                >
                  <div className="w-1 self-stretch bg-red-600 rounded-full flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-800 text-sm font-semibold">{s.title}</p>
                    <p className="text-gray-400 text-xs font-light mt-0.5">{s.subtitle}</p>
                  </div>
                  <p className={`text-lg font-semibold flex-shrink-0 ${s.color}`}>{s.discount}</p>
                </div>
              ))}
            </div>

            {/* Limited Time Offer Card */}
            <div className="bg-[#0f1e3c] rounded-2xl px-6 py-6 space-y-4 mt-2">
              <div>
                <p className="text-red-500 text-xs font-semibold uppercase tracking-widest mb-1">
                  Limited Time Offer
                </p>
                <h3 className="text-white text-xl font-semibold">Book Early &amp; Save</h3>
                <p className="text-white/50 text-sm font-light mt-1 leading-relaxed">
                  Enroll before end of month to avail corporate discount of ₹10,000.
                </p>
              </div>

              <div className="space-y-3">
                <button onClick={scrollToForm} className="w-full bg-white hover:bg-gray-100 active:bg-gray-200 text-[#0f1e3c] text-sm font-semibold py-3 rounded-xl transition-all duration-200 cursor-pointer">
                  Check Eligibility
                </button>
                <button onClick={scrollToForm} className="w-full bg-white/10 hover:bg-white/20 active:bg-white/30 border border-white/20 text-white text-sm font-semibold py-3 rounded-xl transition-all duration-200 cursor-pointer">
                  Check Your EMI
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}