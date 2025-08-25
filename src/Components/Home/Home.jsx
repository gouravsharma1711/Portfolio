import React, { Suspense } from 'react';
import './home.css';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0a1f] to-[#0f172a] text-gray-100 font-inter pt-20" id='home'>
      <section className="mx-auto w-full max-w-7xl px-6 sm:px-8 py-14 md:py-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 md:gap-8">
          {/* Profile image - only visible on small screens */}
          <div className="md:hidden w-full flex items-center justify-center mb-6 reveal">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full imageDiv">
              <img
                src="/Profile/profile.png"
                alt="Gourav Sharma profile"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start gap-6 md:gap-7 reveal">
            <div className="space-y-2">
              <p className="text-base md:text-lg font-light text-gray-400">Hello, I'm</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Gourav Sharma</h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-400">MERN Stack Developer</h2>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl">
              I build dynamic, responsive web applications focused on performance, accessibility, and delightful user experiences.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-2">
              <a
                href="https://github.com/gouravsharma1711"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="hover:scale-110 transition-transform text-white text-4xl"
              >
                <i class="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/gourav-sharma-682a8525b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="hover:scale-110 transition-transform text-white text-4xl"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto mt-4">
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

          {/* 3D Component - hidden on small screens, right of text on large screens, below text on tablets */}
          <div className="hidden md:flex w-full lg:w-[420px] md:w-[360px] justify-center lg:justify-end mt-8 lg:mt-0 reveal-right">
            <div className="w-full h-[360px] sm:h-[420px] lg:h-[520px] rounded-2xl overflow-hidden">
              <Suspense fallback={<div className="flex justify-center items-center text-white">Loading 3D...</div>}>
                <Spline
                  scene="https://prod.spline.design/efVrCDtWVO6vKPUi/scene.splinecode"
                />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;