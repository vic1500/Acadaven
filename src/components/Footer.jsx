import { Globe, Share2, Mail, ArrowRight } from 'lucide-react'
import Global from "../../public/assets/global-reach-icon.png"
import CertifiedQuality from "../../public/assets/certified-quality-icon.png"
const courses = [
  'Physics & Chemistry',
  'Mathematics',
  'Further Mathematics',
  'English & Literature',
]

const company = ['About Us', 'Features', 'Exams', 'Tutors']

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1A744C' }}>
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 gap-10">
          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <span
              className="text-white font-bold text-xl tracking-wide"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Acadaven
            </span>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Premium academic tutoring platform dedicated to student success
              through 1-on-1 expert guidance.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-1">
              {[Globe, Share2, Mail].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-opacity hover:opacity-80"
                  style={{ backgroundColor: '#F29525' }}
                  aria-label="Social link"
                >
                  <Icon size={15} className="text-white" />
                </button>
              ))}
            </div>
          </div>

          {/* Courses column */}
          <div className="flex flex-col pl-10 gap-4">
            <h4 className="text-white text-xs font-bold tracking-widest uppercase">
              Courses
            </h4>
            <ul className="flex flex-col gap-2.5">
              {courses.map((c) => (
                <li key={c}>
                  <a
                    href="#"
                    className="text-white text-sm hover:text-white transition-colors"
                  >
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="flex flex-col pl-10 gap-4">
            <h4 className="text-white text-xs font-bold tracking-widest uppercase">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {company.map((c) => (
                <li key={c}>
                  <a
                    href="#"
                    className="text-white text-sm hover:text-white transition-colors"
                  >
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white text-xs font-bold tracking-widest uppercase">
              News Letter
            </h4>
            <p className="text-white text-sm leading-relaxed">
              Stay updated with Acadaven academic tips and news.
            </p>
            <div className="flex items-center gap-2 mt-1">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-[#E5E5EA] text-white text-sm px-4 py-3 rounded-xl outline-none placeholder:text-[#8E8E93] focus:bg-white/15 transition-colors"
              />
              <button
                className="px-3 py-3 rounded-xl border border-white text-white flex items-center justify-center transition-opacity hover:opacity-80"
                style={{ backgroundColor: '#1A744C' }}
                aria-label="Subscribe"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 border-t border-white/90 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/90 text-sm">
            © 2027 Acadaven, All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <span className="text-white/90 text-sm flex items-center gap-1.5">
              <img src={Global} alt="" width={10}/>
              Global Reach
            </span>
            <span className="text-white/90 text-sm flex items-center gap-1.5">
              <img src={CertifiedQuality} alt="" width={10}/>
              Certified Quality
            </span>
          </div>
        </div>
    </footer>
  )
}
