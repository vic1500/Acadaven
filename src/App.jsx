import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Steps from './components/Steps'
import AboutUs from './components/AboutUs'
import Features from './components/Features'
import ExamPrep from './components/ExamPrep'
import Tutors from './components/Tutors'
import AppDownload from './components/AppDownload'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'DM Sans, sans-serif' }}>
      <Navbar />
      <Hero />
      <Steps />
      <AboutUs />
      <Features />
      <ExamPrep />
      <Tutors />
      <AppDownload />
      <CTA />
      <Footer />
    </div>
  )
}
