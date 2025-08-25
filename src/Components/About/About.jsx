import React, { Suspense } from 'react';

function About() {
  return (
    <main
      className="min-h-screen bg-gradient-to-b from-[#0a0a1f] to-[#0f172a] text-gray-100 pt-12"
      id="about"
    >
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 py-10 md:py-16">
        {/* Header */}
        <header className="text-center space-y-3 reveal">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Hi I'm <span className="text-blue-400">Gourav Sharma 👋</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            MERN Stack Developer focused on building performant, accessible, and delightful web experiences.
          </p>
        </header>

        {/* Main content */}
        <div className="mt-10 flex flex-col-reverse md:flex-row-reverse items-center gap-8 md:gap-12">
          {/* Visual: Image on mobile/tablet, Spline/iframe on desktop */}
          <div className="w-full md:w-1/2 flex justify-center reveal-right">
            <div className="w-full max-w-xs md:max-w-md h-48 md:h-80 rounded-2xl overflow-hidden bg-black/10">
              <Suspense fallback={<div className="flex justify-center items-center text-white h-full">Loading 3D...</div>}>
                <iframe
                  src="https://my.spline.design/genkubgreetingrobot-QbJYCH9hoq9kiBCM8295KYER/"
                  title="3D Greeting Robot"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                />
              </Suspense>
            </div>
          </div>

          {/* Text content */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-5 text-center md:text-left reveal">
            <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed max-w-xl">
              I craft end-to-end web apps using MongoDB, Express, React, and Node.js. My work blends clean code, scalable
              architecture, and thoughtful UI/UX to ship features users love.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed max-w-xl">
              I enjoy solving complex problems, collaborating with teams, and continuously learning new tools that improve
              developer experience and product quality.
            </p>

            {/* Skills */}
            <div className="w-full max-w-xl">
              <h3 className="text-sm font-semibold text-gray-200 mb-2">Core skills</h3>
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