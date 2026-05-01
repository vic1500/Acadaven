export default function WaitlistCTA() {
  return (
    <section className="py-20 px-5 sm:px-8 text-center" style={{ backgroundColor: '#f7f9f7' }}>
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-5">

        {/* Headline */}
        <h2
          className="text-3xl sm:text-4xl font-normal leading-tight"
          style={{
            color: '#1E9060',
          }}
        >
          Ready to change your Future?
        </h2>

        {/* Subtext */}
        <p className="text-[#8E8E93] text-sm sm:text-base leading-relaxed max-w-4xl">
          Don't wait until the exam date is fixed. Join the waitlist now — don't
          miss out on early access benefits. Join 1,250+ ambitious families
          waiting for the best education experience.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-2">
          <button
            className="px-8 py-3.5 rounded-md text-sm font-normal text-white transition-all hover:opacity-90 active:scale-95"
            style={{ backgroundColor: '#1E9060' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Join Waitlist!
          </button>
          <button
            className="px-8 py-3.5 rounded-md text-sm font-normal transition-all hover:bg-orange-50 active:scale-95"
            style={{
              border: '1.5px solid #F29525',
              color: '#F29525',
            }}
          >
            Contact Support
          </button>
        </div>

      </div>
    </section>
  )
}
