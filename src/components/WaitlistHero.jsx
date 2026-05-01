import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function WaitlistHero({ onJoin }) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setLoading(true)
    // Simulate async
    setTimeout(() => {
      setLoading(false)
      onJoin?.(email)
      setEmail('')
    }, 800)
  }

  return (
    <section className="pt-20 pb-12 text-center px-5 sm:px-8" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-5">

        {/* Coming Soon badge */}
        <span
          className="inline-flex items-center px-6 py-1 rounded-full text-md font-extrabold tracking-wide"
          style={{
            backgroundColor: '#CAE9DB',
            color: '#1E9060',
            border: '1px solid #a7d7bc',
          }}
        >
          Coming Soon
        </span>

        {/* Headline */}
        <h1
          className="text-3xl sm:text-5xl font-extrabold text-[#8E8E93] leading-tight max-w-4xl"
        >
          Your Journey to{' '}
          <span style={{ color: '#1E9060' }}>Success</span>{' '}
          Starts Here
        </h1>

        {/* Subtext */}
        <p className="text-[#8E8E93] text-sm sm:text-lg leading-relaxed max-w-3xl">
          Verified tutors. Structured learning. Proven results. Join thousands
          of students achieving academic excellence through precision-guided
          pedagogy.
        </p>

        {/* Email form */}
        <form
          onSubmit={handleSubmit}
          className="flex p-5 gap-5 w-full max-w-xl space-between overflow-hidden"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 bg-white px-5 py-3.5 text-sm text-gray-800 outline-none placeholder:text-[#D9D9D9] border rounded-md border-[#D9D9D9]"
          />
          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 px-6 py-3.5 text-sm font-normal text-white transition-all hover:opacity-90 active:scale-95 disabled:opacity-70 whitespace-nowrap cursor-pointer rounded-md"
            style={{ backgroundColor: '#1A744C' }}
          >
            {loading ? (
              <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            ) : null}
            Join Waitlist
          </button>
        </form>

      </div>
    </section>
  )
}
