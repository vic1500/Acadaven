export default function CTA() {
  return (
    <section className="py-24 bg-white mb-10">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <h2
          className="text-3xl mt-5 sm:text-4xl md:text-5xl text-[#0A1E41] mb-4"
        >
          Ready for academic excellence?
        </h2>
        <p className="text-gray-500 text-base mx-auto mb-15 leading-relaxed">
          Join thousands of student achieving their best results, Give your
          child the academic advantage they deserve.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-5  rounded-lg text-xs font-normal text-white transition-all hover:opacity-90 active:scale-95"
            style={{ backgroundColor: '#1A744C' }}
          >
            Get Started Today
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-5 rounded-lg text-xs font-normal transition-all hover:bg-orange-50 active:scale-95"
            style={{
              border: '1.5px solid #ea580c',
              color: '#000000',
            }}
          >
            Talk to an Expert
          </a>
        </div>
      </div>
    </section>
  )
}
