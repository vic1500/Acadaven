import { Star, ArrowRight } from 'lucide-react'

const tutors = [
  {
    name: 'Adewale Taiwo',
    subject: 'Physics & Chemistry',
    subjectColor: '#1a1a1a',
    rating: 5.0,
    desc: 'Prof in Physics & Chemistry. Expert in complex scientific concept.',
    price: '4000 EC',
    image: '/assets/adewale-taiwo-image.png',
  },
  {
    name: 'Dr. Alade Precious',
    subject: 'Mathematics',
    subjectColor: '#1a1a1a',
    rating: 5.0,
    desc: 'Expert in Advanced Calculus and JAMB Mathematics prep.',
    price: '700 EC',
    image: '/assets/dr-alade-precious.png',
  },
  {
    name: 'Oladare Mary',
    subject: 'Further Mathematics',
    subjectColor: '#1a1a1a',
    rating: 5.0,
    desc: 'Expert in Further Mathematics. First class graduate from UNILAG.',
    price: '2500 EC',
    image: '/assets/oladare-mary.png',
  },
  {
    name: 'Olamide',
    subject: 'English & Literature',
    subjectColor: '#1a1a1a',
    rating: 5.0,
    desc: 'Expert in English & Literature. First class graduate from U.',
    price: '200 EC',
    image: '/assets/olamide.png',
  },
]

export default function Tutors() {
  return (
    <section id="tutors" className="py-20" style={{ backgroundColor: '#f7f9f7' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header row */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2
              className="text-3xl sm:text-4xl text-[#1A744C] mb-1"
            >
              Learn from the best
            </h2>
            <p className="text-[#8E8E93] text-md">
              Selected from the best universities globally
            </p>
          </div>
          <a
            href="#"
            className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-[#8E8E93] hover:text-green-700 transition-colors underline underline-offset-4"
          >
            View All Tutors
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Scrollable tutor cards */}
        <div
          className="tutors-scroll flex gap-5 overflow-x-auto pb-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {tutors.map((tutor) => (
            <div
              key={tutor.name}
              className="flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              style={{
                width: '290px',
                scrollSnapAlign: 'start',
              }}
            >
              {/* Tutor image */}
              <div className="relative">
                <img
                  src={tutor.image}
                  alt={tutor.name}
                  className="w-full object-cover"
                  style={{ height: '200px', objectPosition: 'center top' }}
                />
                {/* Subject badge */}
                <span
                  className="absolute top-3 left-3 text-xs font-semibold text-white px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
                >
                  {tutor.subject}
                </span>
              </div>

              {/* Tutor details */}
              <div className="p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-black text-lg">
                    {tutor.name}
                  </h3>
                  <div className="flex items-center gap-1 text-[#1A744C]">
                    <Star size={13} fill="currentColor" />
                    <span className="text-xs font-semibold">
                      {tutor.rating.toFixed(1)}
                    </span>
                  </div>
                </div>

                <p className="text-xs font-[500] text-black leading-relaxed">
                  {tutor.desc}
                </p>

                <div
                  className="border-t pt-3"
                  style={{ borderColor: '#e5e7eb' }}
                />

                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-gray-900 text-sm">
                      {tutor.price}/<br />
                    </span>
                    <span className="text-sm text-gray-400"> session</span>
                  </div>
                  <button
                    className="text-xs font-semibold text-white px-4 py-2 rounded-lg transition-all hover:opacity-90 active:scale-95"
                    style={{ backgroundColor: '#1c6b3e' }}
                  >
                    BOOK SESSION
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile view all */}
        <div className="sm:hidden mt-5 text-center">
          <a
            href="#"
            className="text-sm font-medium text-gray-700 underline underline-offset-4"
          >
            View All Tutors
          </a>
        </div>
      </div>
    </section>
  )
}
