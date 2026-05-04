import {
  MdOutlineBarChart,
  MdOutlineAccountBalance,
  MdOutlinePeople,
  MdOutlinePermMedia,
  MdOutlineLocalShipping,
  MdOutlineFactory,
  MdOutlineLocalHospital,
  MdOutlineSportsSoccer,
} from "react-icons/md"
import { TbSpeakerphone } from "react-icons/tb"

const specializations = [
  {
    icon: <TbSpeakerphone className="w-6 h-6" />,
    title: "Marketing",
    description: "Digital strategy, consumer behavior, and brand building in the AI era.",
  },
  {
    icon: <MdOutlineBarChart className="w-6 h-6" />,
    title: "Business Analytics",
    description:
      "Data-driven decision making, predictive modeling, and business intelligence.",
  },
  {
    icon: <MdOutlineAccountBalance className="w-6 h-6" />,
    title: "Finance",
    description: "Investment banking, corporate finance, and fintech innovation.",
  },
  {
    icon: <MdOutlinePeople className="w-6 h-6" />,
    title: "HRM",
    description:
      "Strategic human resources, talent management, and organizational psychology.",
  },
  {
    icon: <MdOutlinePermMedia className="w-6 h-6" />,
    title: "Media Management",
    description: "Content strategy, media ethics, and management in the digital age.",
  },
  {
    icon: <MdOutlineLocalShipping className="w-6 h-6" />,
    title: "Logistics",
    description:
      "Supply chain optimization, global trade, and operations management.",
  },
  {
    icon: <MdOutlineFactory className="w-6 h-6" />,
    title: "Production",
    description:
      "Industrial management, lean manufacturing, and quality control.",
  },
  {
    icon: <MdOutlineLocalHospital className="w-6 h-6" />,
    title: "Healthcare",
    description:
      "Hospital administration, healthcare ethics, and pharmaceutical management.",
  },
  {
    icon: <MdOutlineSportsSoccer className="w-6 h-6" />,
    title: "Sports Management",
    description:
      "Sports marketing, event management, and athlete representation.",
  },
]

export default function SpecializationsSection() {
  return (
    <div className="bg-[#f5f7fa] px-4 py-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <p className="text-red-600 text-sm font-semibold tracking-widest uppercase">
            9 Advanced Specializations
          </p>
          <p className="text-gray-500 text-sm sm:text-base font-light max-w-lg mx-auto leading-relaxed">
            Master the niche domains that are currently driving the global economy. Each
            specialization is curated by industry practitioners.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {specializations.map((spec) => (
            <div
              key={spec.title}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 group cursor-pointer"
            >
              {/* Icon Box */}
              <div className="w-11 h-11 rounded-xl bg-slate-100 group-hover:bg-red-50 flex items-center justify-center text-slate-500 group-hover:text-red-600 transition-colors duration-200 mb-5">
                {spec.icon}
              </div>

              <h3 className="text-[#0f1e3c] text-base font-semibold mb-2">
                {spec.title}
              </h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                {spec.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}