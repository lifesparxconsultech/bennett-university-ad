import {
  MdOutlineEmail,
  MdOutlinePhone,
  MdOutlineLocationOn,
  MdOutlineVerifiedUser,
  MdOutlinePublic,
} from "react-icons/md"
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"
import { TbSchool } from "react-icons/tb"
import Image from "next/image"

const contactItems = [
  {
    icon: <MdOutlineEmail className="w-4 h-4" />,
    label: "Support Email",
    value: "info@educollege.in",
    href: "mailto:info@educollege.in",
  },
  {
    icon: <MdOutlinePhone className="w-4 h-4" />,
    label: "Career Helpline",
    value: "+91-6394258442",
    href: "tel:+916394258442",
  },
  {
    icon: <MdOutlineLocationOn className="w-4 h-4" />,
    label: "Headquarters",
    value: "Corporate Tower NX One,\nGreater Noida West, UP",
    href: null,
  },
]

const socials = [
  { icon: <FaFacebookF className="w-4 h-4" />, href: "#", label: "Facebook" },
  { icon: <FaTwitter className="w-4 h-4" />, href: "#", label: "Twitter" },
  { icon: <FaInstagram className="w-4 h-4" />, href: "#", label: "Instagram" },
  { icon: <FaLinkedinIn className="w-4 h-4" />, href: "#", label: "LinkedIn" },
]

export default function Footer() {
  return (
    <footer className="bg-[#0d1630] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* ── Col 1: Brand ── */}
        <div className="space-y-5">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
                src="/logo/logo-white.svg"
                alt="EduCollege Logo"
                width={120}
                height={40}
                priority
                className="h-auto w-auto max-h-10"
            />
          </div>

          <p className="text-white/50 text-sm font-light leading-relaxed max-w-xs">
            We bridge the gap between ambition and accessibility. Helping professionals discover
            world-class accredited degrees from India's top universities.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-white/60 text-xs font-semibold uppercase tracking-widest">
              <MdOutlineVerifiedUser className="w-4 h-4 text-red-500" />
              UGC Approved
            </div>
            <div className="flex items-center gap-2 text-white/60 text-xs font-semibold uppercase tracking-widest">
              <MdOutlinePublic className="w-4 h-4 text-red-500" />
              Pan India
            </div>
          </div>
        </div>

        {/* ── Col 2: Contact ── */}
        <div className="space-y-6">
          <p className="text-white/40 text-xs font-semibold uppercase tracking-widest">
            Get in Touch
          </p>

          <div className="space-y-5">
            {contactItems.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-0.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white/80 text-sm font-light hover:text-white transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white/80 text-sm font-light whitespace-pre-line">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Col 3: Social + Quick Links ── */}
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-white/40 text-xs font-semibold uppercase tracking-widest">
              Find Us On
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-white/40 text-xs font-semibold uppercase tracking-widest">
              Quick Links
            </p>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms & Conditions", "Refund Policy", "Contact Us"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/50 text-sm font-light hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* ── Disclaimer ── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 space-y-3">
          <p className="text-white/30 text-xs font-light leading-relaxed">
            <span className="font-semibold text-white/40">Disclaimer: </span>
            We act as a marketing service partner only. Bennett University holds the right to
            request the change or removal of any non-relevant content. Images used are for
            illustrative purposes and do not directly represent the respective colleges or
            universities.
          </p>
          <p className="text-white/20 text-xs font-light">
            © {new Date().getFullYear()} EduCollege. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}