import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WaitlistHero from '../components/WaitlistHero'
import WaitlistDashboard from '../components/WaitlistDashboard'
import WaitlistCTA from '../components/WaitlistCTA'

const links = [
  { label: 'About Us', href: '#about' },
  { label: 'Referral', href: '#referral' },
]

const buttons = [
  { label: 'Login', href: '#' },
  { label: 'Join Waitlist', href: '#' },
]

const footerLinks = {
  features: [
  'About Us',
  'Referrals',
  'Join Waitlist',
  'Contact',
  ],
}

const lastSection = {
  'Join Waitlist': 'Stay updated with Acadaven academic launching.'
}


export default function WaitlistPage() {
  const [joined, setJoined] = useState(false)

  const handleJoin = (email) => {
    // TODO: POST email to your backend / Mailchimp / ConvertKit etc.
    console.log('Joined with:', email)
    setJoined(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar links={links} buttons={buttons} />

      {/* Success toast */}
      {joined && (
        <div
          className="fixed top-20 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-xl shadow-lg text-white text-sm font-medium"
          style={{ backgroundColor: '#1c6b3e' }}
        >
          <span>🎉</span>
          <span>You're on the list! Check your inbox for confirmation.</span>
          <button
            onClick={() => setJoined(false)}
            className="ml-2 text-white/70 hover:text-white text-lg leading-none"
          >
            ×
          </button>
        </div>
      )}

      <main className="flex-1">
        <WaitlistHero onJoin={handleJoin} />
        <WaitlistDashboard />
        <WaitlistCTA />
      </main>

      <Footer footerLinks={footerLinks} lastSection={lastSection} />
    </div>
  )
}
