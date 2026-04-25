export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div
          className="flex flex-col md:flex-row gap-10 md:gap-16 items-stretch rounded-2xl overflow-hidden"
        >
          {/* Image */}
          <div className="md:w-5/12 flex-shrink-0">
            <img
              src="/assets/about-us-image.png"
              alt="Child learning on tablet"
              className="w-full h-full object-cover rounded-2xl"
              style={{ minHeight: '340px', maxHeight: '480px' }}
            />
          </div>

          {/* Text content */}
          <div
            className="md:w-7/12 flex flex-col justify-center gap-5 px-8 py-10"
          >
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: '#1c6b3e' }}
            >
              About Us
            </span>

            <h2
              className="text-3xl sm:text-4xl text-gray-900 leading-snug"
            >
              Building a trusted path to academic success
            </h2>

            <div className="flex flex-col gap-4 text-[#8E8E93] text-sm leading-relaxed">
              <p>
                Acadaven was founded on the belief that premium education
                should be accessible and tailored. We bridge the gap between
                curriculum demands and student potential using an editorial
                approach to tutoring.
              </p>
              <p>
                Tailored concierge support and high E-learning environments
                for every student. Our students consistently achieve A* and
                Distinctions across all national and international exams.
              </p>
              <p>
                Acadaven isn't just a platform; it's a bridge. We connect
                ambitious students with the world's most dedicated educators
                to create an environment where learning is focused, structured,
                and results-driven.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
