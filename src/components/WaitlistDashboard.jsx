import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import Phone1 from "../../public/assets/phone-1.png"
import Phone2 from "../../public/assets/phone-2.png"

const REFERRAL_LINK = 'acadaven.com/wl/ref-492k'
const POSITION = 3
const TOP_PERCENT = 10
const PROGRESS = 15

export default function WaitlistDashboard() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://${REFERRAL_LINK}`).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-10 pb-20 px-5 sm:px-8" style={{ backgroundColor: '#f7f9f7' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10">

          {/* ── Left panel ── */}
          <div className="w-full lg:w-7/12 flex flex-col gap-8">

            {/* Position card */}
            <div
              className="bg-white rounded-2xl p-8 pb-12 shadow-sm flex flex-col gap-5"
              style={{ border: '1px solid #ebebeb' }}
            >
              <div>
                <div className="flex items-baseline gap-2 text-[#00261B]">
                  <span className="text-3xl font-normal leading-none">
                    {POSITION}
                  </span>
                  <span className="text-2xl font-normal">
                    your place in line
                  </span>
                </div>
                <p className="text-sm text-[#404944] mt-3">
                  Start moving up the waitlist today by sharing with friends and family.
                </p>
              </div>

              {/* Progress bar */}
              <div>
                <div
                  className="w-full h-2.5 rounded-full overflow-hidden"
                  style={{ backgroundColor: '#f0f0f0' }}
                >
                  <div
                    className="h-full rounded-l-full transition-all duration-700"
                    style={{ width: `${PROGRESS}%`, backgroundColor: '#F29525' }}
                  />
                </div>
                <div className="flex justify-between mt-2.5">
                  <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                    Position: 1,253
                  </span>
                  <span
                    className="text-xs font-normal uppercase tracking-wide"
                    style={{ color: '#474742' }}
                  >
                    Top {TOP_PERCENT}% Get Early Access
                  </span>
                </div>
              </div>
            </div>

            {/* Referral link */}
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="font-normal text-[#00261B] text-2xl">
                  Your Unique Referral Link
                </h3>
                <p className="text-sm text-[#404944] mt-2">
                  Share your unique referral link to jump ahead of the queue.
                </p>
              </div>

              <div
                className="flex items-center justify-between gap-2 bg-white rounded-xl px-5 py-4"
                style={{ border: '1px solid #e0e0e0' }}
              >
                <span className="text-sm text-[#8E8E93] truncate">
                  {REFERRAL_LINK}
                </span>
                <button
                  onClick={handleCopy}
                  className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:opacity-80 active:scale-95"
                  style={{ backgroundColor: copied ? '#1c6b3e' : '#e8f5ee' }}
                  aria-label="Copy referral link"
                >
                  {copied
                    ? <Check size={16} className="text-white" />
                    : <Copy size={16} style={{ color: '#1c6b3e' }} />
                  }
                </button>
              </div>
            </div>

          </div>

          {/* ── Right panel: phone mockups ── */}
          <div className="w-full lg:w-7/12 flex items-end justify-center">
            <img
              src={Phone1}
              alt="Acadaven app onboarding"
              className="md:-mr-20"
              style={{
                height: '480px',
                width: 'auto',
                filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.15))',
              }}
            />
            <img
              src={Phone2}
              className="hidden md:block"
              alt="Acadaven app dashboard"
              style={{
                height: '480px',
                width: 'auto',
                filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.15))',
              }}
            />
          </div>

        </div>
      </div>
    </section>
  )
}