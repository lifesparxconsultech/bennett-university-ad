import {
  FiUsers,
  FiBriefcase,
  FiAward,
  FiGlobe,
} from "react-icons/fi"
import {
  MdOutlineTimer,
  MdOutlineSchool,
  MdOutlineLibraryBooks,
  MdOutlineOndemandVideo,
} from "react-icons/md"
import { TbTargetArrow } from "react-icons/tb"

// ── Stats Bar ──────────────────────────────────────────────
const stats = [
  { icon: <FiUsers className="w-5 h-5" />, value: "13,500+", label: "Alumini across 40+ Cities" },
  { icon: <FiBriefcase className="w-5 h-5" />, value: "1,200+", label: "Placement Partners" },
  { icon: <FiAward className="w-5 h-5" />, value: "Grade A+", label: "NAAC Accredited" },
  { icon: <FiGlobe className="w-5 h-5" />, value: "120+", label: "Intl. Collaborations" },
]

// ── Program Info Cards ─────────────────────────────────────
const programCards = [
  {
    icon: <MdOutlineTimer className="w-6 h-6 text-red-600" />,
    label: "Duration",
    value: "2 Years",
  },
  {
    icon: <MdOutlineSchool className="w-6 h-6 text-red-600" />,
    label: "Credits",
    value: "84 Credits",
  },
  {
    icon: <TbTargetArrow className="w-6 h-6 text-red-600" />,
    label: "Specializations",
    value: "9 Domain Options",
  },
  {
    icon: <MdOutlineOndemandVideo className="w-6 h-6 text-red-600" />,
    label: "Format",
    value: "Live + Recorded",
  },
]

export default function StatsSection() {
  return (
    <div>
      {/* ── Stats Bar ── */}
      <div className="bg-[#0f1e3c] py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-0 divide-y-2 sm:divide-y-0 sm:divide-x divide-white/10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center px-6 py-2 sm:py-0"
              >
                <div className="text-white/40 mb-1">{stat.icon}</div>
                <p className="text-white text-2xl sm:text-3xl font-semibold tracking-tight leading-tight">
                  {stat.value}
                </p>
                <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Program Overview ── */}
      <div className="bg-[#f5f7fa] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: Text Content */}
            <div className="space-y-5">
              {/* Decorative accent */}
              <div className="flex items-center gap-3">
                <span className="w-6 h-0.5 bg-red-600 rounded-full" />
                <span className="text-red-600 text-xs font-semibold uppercase tracking-widest">
                  About the Program
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 leading-snug">
                Producing Future-Ready Managers <br className="hidden sm:block" />
                Through Excellence
              </h2>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Our Online MBA program is designed to bridge the gap between traditional academic
                rigor and the demands of the modern digital economy. We focus on experiential
                learning, ensuring that every theoretical concept is backed by real-world
                application.
              </p>

              <p className="text-gray-500 text-sm leading-relaxed">
                The curriculum is co-created with industry experts from The Times Group, ensuring
                you master the skills that employers actually seek. From data-driven decision-making
                to emotional intelligence, we prepare you for the corner office.
              </p>

              {/* Inline badge */}
              <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
                <MdOutlineLibraryBooks className="w-4 h-4 text-red-600" />
                <span className="text-xs font-semibold text-gray-700">
                  Industry co-created curriculum
                </span>
              </div>
            </div>

            {/* Right: Program Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              {programCards.map((card) => (
                <div
                  key={card.label}
                  className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md border border-gray-100 transition-all duration-200 hover:-translate-y-1 group"
                >
                  <div className="mb-3 w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                    {card.icon}
                  </div>
                  <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">
                    {card.label}
                  </p>
                  <p className="text-[#0f1e3c] text-base font-bold">{card.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}