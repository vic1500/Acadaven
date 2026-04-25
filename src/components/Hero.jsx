export default function Hero() {
  return (
    <section className="bg-white pt-14 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-10 lg:px-20 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-8">
        {/* Left: text content */}
        <div className="flex-1 max-w-xl animate-fade-up">
          <h1
            className="text-5xl sm:text-6xl font-bold leading-tight tracking-tight text-[#8E8E93] mb-2"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Learn and Succeed
            <br />
            with{' '}
            <span style={{ color: '#1c6b3e' }}>expert</span>
            <br />
            tutors.
          </h1>

          <p className="text-base text-[#8E8E93] leading-relaxed mb-8 max-w-md">
            Verified tutors. Structured learning. Proven results.
            <br />
            Join thousands of students achieving academic excellence
            through precision-guided pedagogy.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#tutors"
              className="inline-flex items-center gap-2 px-8 py-5 rounded-lg text-sm text-white transition-all hover:opacity-90 active:scale-95"
              style={{ backgroundColor: '#1c6b3e' }}
            >
              Find a Tutor
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-5 rounded-lg text-sm transition-all hover:bg-orange-50 active:scale-95"
              style={{
                border: '1.5px solid #ea580c',
                color: '#ea580c',
              }}
            >
              Become a Tutor
            </a>
          </div>
        </div>

        {/* Right: hero image */}
        <div className="flex-1 flex justify-center md:justify-end animate-fade-up-delay-2">
          <div className="relative w-full max-w-md">
            <img
              src="/assets/banner-image.png"
              alt="Student celebrating academic success"
              className="w-full h-auto rounded-2xl object-cover"
              style={{ maxHeight: '460px', objectPosition: 'center top' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
