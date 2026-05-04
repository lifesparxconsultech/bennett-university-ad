import { TbTrendingUp } from "react-icons/tb"
import { MdOutlineHub } from "react-icons/md"

export default function WhyMBASection() {
  return (
    <div className="bg-[#f5f7fa] px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#0f1e3c] rounded-3xl px-8 sm:px-12 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* LEFT: Text */}
            <div className="space-y-6">
              <p className="text-white/60 text-sm font-light tracking-wide">
                Why This MBA Matters Now
              </p>

              <blockquote className="text-white text-xl sm:text-2xl font-light leading-relaxed">
                "If you're earning{" "}
                <span className="font-semibold">₹3–6 LPA today</span>, the next
                jump won't come from experience alone. It comes from skills,
                positioning, and the right qualification."
              </blockquote>

              <div className="flex items-center gap-4 pt-2">
                <span className="w-10 h-px bg-red-600" />
                <span className="text-white/50 text-xs tracking-[0.2em] uppercase font-light">
                  Career Acceleration
                </span>
              </div>
            </div>

            {/* RIGHT: Cards */}
            <div className="bg-[#162444] rounded-2xl p-6 space-y-6">

              {/* Card 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#1e2f55] flex items-center justify-center">
                  <TbTrendingUp className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <p className="text-white font-semibold text-base mb-1">Hike Potential</p>
                  <p className="text-white/50 text-sm font-light leading-relaxed">
                    Alumni report an average salary hike of 40–70% post-completion.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10" />

              {/* Card 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#1e2f55] flex items-center justify-center">
                  <MdOutlineHub className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <p className="text-white font-semibold text-base mb-1">Times Group Advantage</p>
                  <p className="text-white/50 text-sm font-light leading-relaxed">
                    Access to an elite network of CEOs and industry leaders via BCCL.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}