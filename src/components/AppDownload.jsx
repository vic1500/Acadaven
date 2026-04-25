import Play from '../../public/assets/play.png'
import Ios from '../../public/assets/ios.png'

export default function AppDownload() {
  return (
    <section
      className="py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1c6b3e 0%, #2d9e5f 40%, #c8a227 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:px-30">
          {/* Left: text + buttons */}
          <div className="flex-1 text-white max-w-lg">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              Learning never stop
            </h2>
            <p className="text-white/80 text-base leading-relaxed mb-15">
              Manage bookings, chat with tutors, and join video sessions from
              the palm of your hand. Available on iOS and Android.
            </p>

            {/* Store buttons */}
            <div className="flex flex-wrap gap-4">
              {/* App Store */}
              <a
                href="#"
                className="flex items-center gap-3 px-8 py-5 rounded-lg bg-black text-white hover:bg-gray-900 transition-colors"
                style={{ minWidth: '160px' }}
              >
                <img src={Ios} alt="" width={15} />
                <div className="flex flex-col leading-tight">
                  <span className="text-[8px] mb-1 font-medium text-white/70 uppercase tracking-wider">
                    Download on the
                  </span>
                  <span className="text-sm font-bold">App Store</span>
                </div>
              </a>

              {/* Google Play */}
              <a
                href="#"
                className="flex items-center gap-3 px-8 py-5 rounded-lg bg-black text-white hover:bg-gray-900 transition-colors"
                style={{ minWidth: '160px' }}
              >
                <img src={Play} alt="" width={12} />
                <div className="flex flex-col leading-tight">
                  <span className="text-[8px] mb-1 font-medium text-white/70 uppercase tracking-wider">
                    Get it on
                  </span>
                  <span className="text-sm font-bold">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right: phone mockup */}
          <div className="flex-shrink-0 hidden md:flex justify-center lg:justify-end">
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{
                width: '200px',
                height: '200px',
                backgroundColor: '#0f4a28',
              }}
            >
              <img
                src="/assets/learning-never-stop-img.png"
                alt="Acadaven mobile app"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
