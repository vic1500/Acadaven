const exams = [
  {
    code: 'WAEC',
    full: 'West African Senior School Certificate',
  },
  {
    code: 'JAMB',
    full: 'Unified Tertiary Matriculation Examination',
  },
  {
    code: 'GCSE',
    full: 'International General Certificate',
  },
  {
    code: 'A-LEVEL',
    full: 'Advanced Level Qualifications',
  },
]

export default function ExamPrep() {
  return (
    <section id="exams" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl text-[#1A744C]"
           >
            Comprehensive exam preparation
          </h2>
        </div>

        {/* Exam list with dividers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {exams.map(({ code, full }, idx) => (
            <div
              key={code}
              className="flex flex-col items-center text-center px-4 py-6"
              style={{
                borderRight: idx < exams.length - 1 ? '1px solid #e5e7eb' : 'none',
              }}
            >
              <h3
                className="text-2xl sm:text-3xl font-bold text-[#8E8E93] mb-2"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {code}
              </h3>
              <p className="text-xs text-gray-400 font-medium tracking-wide uppercase leading-relaxed">
                {full}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom divider bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 mt-2">
          {exams.map(({ code }) => (
            <div
              key={code}
              className="h-1 rounded-full"
              style={{ backgroundColor: '#1c6b3e', opacity: 0.15 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
