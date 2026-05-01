import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Steps from '../components/Steps'
import AboutUs from '../components/AboutUs'
import Features from '../components/Features'
import ExamPrep from '../components/ExamPrep'
import Tutors from '../components/Tutors'
import AppDownload from '../components/AppDownload'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const links = [
{ label: 'About Us', href: '#about' },
{ label: 'Features', href: '#features' },
{ label: 'Exams', href: '#exams' },
{ label: 'Tutors', href: '#tutors' },
]

const buttons = [
{ label: 'Login', href: '#' },
{ label: 'Get Started', href: '#' },
]

const footerLinks = {
  courses: [
  'Physics & Chemistry',
  'Mathematics',
  'Further Mathematics',
  'English & Literature',
  ],
  company: [
    'About Us', 
    'Features', 
    'Exams', 
    'Tutors'
  ],
}

const lastSection = {
  'News Letter': 'Stay updated with Acadaven academic tips and news.'
}

export default function LandingPage() {
	return (
		<div className="min-h-screen">
			<Navbar links={links} buttons={buttons}/>
			<Hero />
			<Steps />
			<AboutUs />
			<Features />
			<ExamPrep />
			<Tutors />
			<AppDownload />
			<CTA />
			<Footer footerLinks={footerLinks} lastSection={lastSection} />
		</div>
	)
}
