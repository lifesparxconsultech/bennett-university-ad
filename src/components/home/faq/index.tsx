"use client"

import { scrollToForm } from "@/lib/scorll-to-form"
import { useState } from "react"
import { FiChevronDown } from "react-icons/fi"

const faqs = [
  {
    question: "What is the eligibility for Bennett Online MBA?",
    answer:
      "Candidates must have a Bachelor's degree in any discipline from a recognized university with a minimum of 50% aggregate marks.",
  },
  {
    question: "Do I need CAT/XAT scores for admission?",
    answer:
      "No, CAT/XAT scores are not mandatory. Bennett University conducts its own BU-MAT entrance exam for Online MBA admissions.",
  },
  {
    question: "Is the BU-MAT entrance exam mandatory?",
    answer:
      "BU-MAT is the preferred route, but candidates with strong academic profiles or relevant work experience may be considered through a personal interview process.",
  },
  {
    question: "What is the difference between Online MBA and PGDM?",
    answer:
      "An MBA is a university-awarded degree recognized by UGC, while a PGDM is a diploma awarded by autonomous institutes. The Bennett Online MBA holds full degree equivalence.",
  },
  {
    question: "How are exams conducted in the online format?",
    answer:
      "Exams are conducted online through a proctored platform. Students can appear from home with a stable internet connection and a webcam-enabled device.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div className="bg-[#f5f7fa] px-4 py-16 space-y-12">
      <div className="max-w-2xl mx-auto space-y-12">

        {/* ── FAQ ── */}
        <div className="space-y-6">
          <h2 className="text-[#0f1e3c] text-lg font-semibold text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left gap-4 group"
                >
                  <span className="text-gray-800 text-sm font-light">{faq.question}</span>
                  <FiChevronDown
                    className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""
                      }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-gray-500 text-sm font-light leading-relaxed border-t border-gray-50 pt-3">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA Card ── */}
        <div className="bg-[#0f1e3c] rounded-3xl px-8 py-12 text-center space-y-5">
          <div className="space-y-2">
            <p className="text-white/60 text-sm font-light tracking-wide">
              Ready to Transform Your Career?
            </p>
            <p className="text-white text-base sm:text-lg font-light leading-relaxed max-w-sm mx-auto">
              Your next career move is waiting — your MBA shouldn’t.
              <br />
              Cohorts are filling fast. Secure your seat today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button onClick={scrollToForm} className="bg-red-600 hover:bg-red-500 active:bg-red-700 text-white text-sm font-semibold px-8 py-3 rounded-full transition-all duration-200 shadow-lg shadow-red-900/30 hover:-translate-y-0.5 w-full sm:w-auto cursor-pointer">
              Apply Now
            </button>
            <button onClick={scrollToForm} className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto cursor-pointer">
              Talk to Academic Counselor
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}