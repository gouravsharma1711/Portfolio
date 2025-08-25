import React, { Suspense } from 'react';
import './home.css';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0a1f] to-[#0f172a] text-gray-100 font-inter pt-20" id='home'>
      <section className="mx-auto w-full max-w-7xl px-6 sm:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 md:gap-14">
          <div className="order-1 lg:order-2 animate-fade-in-right">
            <div className="md:hidden flex items-center justify-center">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full imageDiv">
                <img
                  src="/Profile/profile.png"
                  alt="Gourav Sharma profile"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>

            <div className="hidden md:block w-full h-[360px] sm:h-[420px] lg:h-[520px] rounded-2xl overflow-hidden ">
              <Suspense fallback={<div className="flex justify-center items-center text-white">Loading 3D...</div>}>
                <Spline
                  scene="https://prod.spline.design/efVrCDtWVO6vKPUi/scene.splinecode" 
                />
              </Suspense>
            </div>
          </div>

          {/* Text content */}
          <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start gap-6 md:gap-7 animate-fade-in-up">
            <div className="space-y-2">
              <p className="text-base md:text-lg font-light text-gray-400">Hello, I'm</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Gourav Sharma</h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-400">MERN Stack Developer</h2>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl">
              I build dynamic, responsive web applications focused on performance, accessibility, and delightful user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="https://drive.google.com/uc?export=download&id=1BRufC4O_HIGveXi7BAL16B60Nd8yf9qn"
                download
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm md:text-base font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 active:scale-[.99] transition-transform duration-200"
                aria-label="Download CV"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm md:text-base font-semibold text-gray-900 bg-gray-200 rounded-full shadow-lg hover:bg-gray-300 active:scale-[.99] transition-transform duration-200"
                aria-label="Go to contact page"
              >
                Contact Info
              </a>
            </div>

            <div className="text-xs sm:text-sm text-gray-400">
              Available for freelance and full-time opportunities.
            </div>
          </div>

          
        </div>
      </section>
    </main>
  );
}

export default Home;