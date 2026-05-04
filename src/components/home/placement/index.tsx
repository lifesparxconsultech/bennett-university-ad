import Image from "next/image"
import { TbCircleCheck } from "react-icons/tb"

const placementStats = [
    {
        label: "Highest Package",
        value: "₹ 42 LPA",
        sub: "International Offer",
        subColor: "text-red-600",
        accent: "border-red-500",
    },
    {
        label: "Average Package",
        value: "₹ 7.57 LPA",
        sub: "Overall Program",
        subColor: "text-gray-500",
        accent: "border-[#0f1e3c]",
    },
    {
        label: "Recruiting Partners",
        value: "143+",
        sub: "Global Organizations",
        subColor: "text-gray-500",
        accent: "border-gray-300",
    },
]

const recognitions = [
    "WES (World Education Services) Recognized",
    "Accepted for Higher Studies Globally",
    "Eligible for PSU and Government Jobs",
]

// Company logos as text/SVG representations (replace with actual logo images if available)
const companies = [
    { name: "TCS", url: '/placement/tata.png' },
    { name: "Google", url: '/placement/google.png' },
    { name: "KPMG", url: '/placement/kpmg.png' },
    { name: "amazon", url: '/placement/amazon.png' },
    { name: "Deloitte.", url: '/placement/deloitte.png' },
    { name: "Microsoft", url: '/placement/microsoft.png' },
]

export default function PlacementSection() {
    return (
        <div className="bg-[#f5f7fa] px-4 py-16 space-y-14">
            <div className="max-w-7xl mx-auto space-y-14">

                {/* ── Header ── */}
                <div className="text-center space-y-3">
                    <h2 className="text-[#0f1e3c] text-lg font-semibold">Unmatched Placement Support</h2>
                    <p className="text-gray-500 text-sm font-light max-w-lg mx-auto leading-relaxed">
                        Our dedicated career cell works tirelessly to connect you with the right opportunities
                        in global conglomerates.
                    </p>
                </div>

                {/* ── Stats Cards ── */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {placementStats.map((stat) => (
                        <div
                            key={stat.label}
                            className={`bg-white rounded-2xl px-6 py-8 border-t-4 ${stat.accent} shadow-sm`}
                        >
                            <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-3">
                                {stat.label}
                            </p>
                            <p className="text-[#0f1e3c] text-3xl sm:text-4xl font-semibold tracking-tight mb-2">
                                {stat.value}
                            </p>
                            <p className={`text-sm font-light ${stat.subColor}`}>{stat.sub}</p>
                        </div>
                    ))}
                </div>

                {/* ── Company Logos ── */}
                <div className="bg-white rounded-2xl px-6 py-8 shadow-sm border border-gray-100">
                    <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
                        {companies.map((co) => (
                            <Image
                                key={co.name}
                                src={co.url}
                                alt={co.name}
                                width={150}
                                height={100}
                                className="object-contain"
                            />
                        ))}
                    </div>
                </div>

                {/* ── Certificate + Degree Recognition ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    {/* Certificate Image */}
                    <div className="relative w-full max-w-lg mx-auto lg:mx-0 aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                            src="/certificate/certificate.png"
                            alt="Bennett University Certificate"
                            fill
                            priority
                            className="w-20 h-20 object-contain object-top"
                        />
                    </div>

                    {/* Right: Recognition */}
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <h3 className="text-[#0f1e3c] text-xl font-semibold leading-snug">
                                A Degree That Opens Doors Everywhere
                            </h3>
                            <p className="text-gray-500 text-sm font-light leading-relaxed">
                                Our Online MBA degree is fully recognized by the UGC and is equivalent to an
                                on-campus MBA degree. It carries the same prestige and institutional weight,
                                ensuring you never have to justify your choice of learning format.
                            </p>
                        </div>

                        <div className="space-y-3">
                            {recognitions.map((item) => (
                                <div
                                    key={item}
                                    className="bg-white rounded-xl px-5 py-4 flex items-center gap-3 border border-gray-100 shadow-sm"
                                >
                                    <TbCircleCheck className="w-5 h-5 text-red-600 flex-shrink-0" />
                                    <p className="text-gray-700 text-sm font-light">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}