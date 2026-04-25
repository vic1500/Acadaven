import Search from '../../public/assets/search-icon.png'
import CalendarCheck from '../../public/assets/calendar-check-icon.png'
import Meet from '../../public/assets/meet-icon.png'
import Chart from '../../public/assets/chart-icon.png'

const steps = [
  {
    icon: Search,
    title: 'Find',
    desc: 'Browse our curated list of top-tier tutors specialized in your curriculum.',
  },
  {
    icon: CalendarCheck,
    title: 'Book',
    desc: 'Select a slot that fits your schedule. No more back-and-forth emails.',
  },
  {
    icon: Meet,
    title: 'Attend',
    desc: 'Join interactive, live 1-on-1 sessions from any device, anywhere.',
  },
  {
    icon: Chart,
    title: 'Track',
    desc: 'Monitor progress with detailed session reports and milestone tracking.',
  },
]

export default function Steps() {
  return (
    <section className="py-20" style={{ backgroundColor: '#F7F9FC' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl text-[#1A744C] mb-3"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Academic excellence in four simple steps
          </h2>
          <p className="text-[#8E8E93] text-base max-w-2xl mx-auto">
            We've streamlined the journey to success so you can focus on what
            matters: learning.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#ffffff' }}
              >
                <img src={icon} alt="" width={20}/>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base mb-1.5">
                  {title}
                </h3>
                <p className="text-sm text-black leading-relaxed max-w-sm mx-auto">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
