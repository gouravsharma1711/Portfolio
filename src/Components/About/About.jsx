import '../Home/Home.css'
import { Suspense } from 'react';
function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0a1f] to-[#0f172a] text-gray-100 pt-12" id='about'>
      {/* Header */}
      <section className="mx-auto w-full max-w-7xl px-6 sm:px-8 py-14 md:py-20">
        <header className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Hi I'm <span className="text-blue-400">Gourav Sharma 👋</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            MERN Stack Developer focused on building performant, accessible, and delightful web experiences.
          </p>
        </header>

        {/* Main content */}
        <div className="mt-12 flex flex-row-reverse items-center gap-10 md:gap-14">
          {/* Visual: Image on mobile/tablet, Spline/iframe on desktop */}
          <div className="w-3/4">
            <div className="hidden md:block w-full h-[320px] sm:h-[380px] lg:h-[480px] rounded-2xl overflow-hidden  ">
              <Suspense fallback={<div className="flex justify-center items-center text-white">Loading 3D...</div>}>
              <iframe
                src="https://my.spline.design/genkubgreetingrobot-QbJYCH9hoq9kiBCM8295KYER/"
                title="3D Greeting Robot"
                className="w-full h-full"
                frameBorder="0"
              />
              </Suspense>
            </div>
          </div>

          {/* Text content */}
          <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start gap-6">
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl">
              I craft end-to-end web apps using MongoDB, Express, React, and Node.js. My work blends clean code, scalable
              architecture, and thoughtful UI/UX to ship features users love.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl">
              I enjoy solving complex problems, collaborating with teams, and continuously learning new tools that improve
              developer experience and product quality.
            </p>

            {/* Skills */}
            <div className="w-full max-w-2xl">
              <h3 className="text-base font-semibold text-gray-200 mb-3">Core skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'JavaScript',
                  'React',
                  'Redux Toolkit',
                  'Node.js',
                  'Express',
                  'MongoDB',
                  'REST APIs',
                  'Tailwind CSS',
                  'JWT/Auth',
                  'Git/GitHub',
                  'Vite',
                  'Dsa In Java',
                  'Python'
                ].map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs sm:text-sm text-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;