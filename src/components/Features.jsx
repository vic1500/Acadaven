import QualityControl from '../../public/assets/quality-control.png'
import PersonalizedFlow from '../../public/assets/personalized-flow.png'
import PremiumContent from '../../public/assets/premium-content.png'
import AcademicConcierge from '../../public/assets/academic-concierge.png'

const features = [
  {
    icon: QualityControl,
    title: 'Quality Control',
    desc: 'Continuous monitoring of session quality and tutor performance.',
  },
  {
    icon: PersonalizedFlow,
    title: 'Personalized Flow',
    desc: 'Adaptive learning paths of your child\'s speed.',
  },
  {
    icon: PremiumContent,
    title: 'Premium Content',
    desc: 'Access to a library of proprietary study guides and mocks.',
  },
  {
    icon: AcademicConcierge,
    title: 'Academic Concierge',
    desc: 'Direct access to coordinators for schedule management.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20" style={{ backgroundColor: '#F7F9FC' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl  mb-3"
            style={{ color: '#1A744C' }}
          >
            The Acadaven features
          </h2>
          <p className="text-gray-500 text-sm mx-auto">
            We believe in quality over quantity. Every feature of our platform
            is designed to prioritize learning outcomes.
          </p>
        </div>

        {/* Two-column layout: feature cards + testimonial */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Feature cards 2x2 grid */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shadow-sm"
                >
                  <img src={icon} alt="" width={15} />
                </div>
                <div>
                  <h3 className="font-[900] text-gray-900 text-sm mb-2">
                    {title}
                  </h3>
                  <p className="text-xs text-black">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Parent Story testimonial */}
          <div className="lg:w-1/2 bg-white rounded-2xl p-8 flex flex-col gap-6 shadow-sm">
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: '#1c6b3e' }}
            >
              Parent Story
            </span>

            <blockquote
              className="text-2xl font-medium text-[#8E8E93] leading-relaxed"
            >
              "AceDemy transformed my daughter's relationship with Math. I'm
              really grateful from failing mock exams to scoring an A1 in WAEC
              the structured sessions made all the difference."
            </blockquote>

            <div className="flex items-center gap-3 pt-2">
              <img
                src="/assets/parent-story-avatar-image.png"
                alt="Mr Bright Adeyemi"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div>
                <p className="font-bold text-sm text-black">
                  Mr Bright Adeyemi
                </p>
                <p className="text-xs text-gray-500">Lagos State.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
