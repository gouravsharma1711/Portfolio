import React from 'react';

function Education() {
  const education = [
    {
      title: 'Bachelor of Technology in Computer Science',
      place: 'Maharaja Agrasen Institute of Technology (MAIT), GGSIPU',
      period: '2022 - 2026',
      detail: 'Specialization in Artificial Intelligence',
    },
    {
      title: 'Higher Secondary Education',
      place: 'B.M Bharti Model School',
      period: '2019 - 2020',
      detail: 'Specialized in Science Stream',
    },
    {
      title: 'Secondary Education',
      place: 'B.M Bharti Model School',
      period: '2017 - 2018',
      detail: 'Completed Secondary Education with a focus on Science.',
    },
  ];

  return (
    <main className="min-h-1/2  bg-gradient-to-b from-[#0a0a1f] to-[#0f172a] text-gray-100 pt-8" id='education'>
      <section className="mx-auto w-full max-w-7xl px-6 sm:px-8 py-14 md:py-20">
        {/* Header */}
        <header className="text-center space-y-3 reveal">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Education</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            A snapshot of my academic journey and milestones.
          </p>
        </header>

        <div className="mt-12">

          {/* Timeline */}
          <div className="order-2 lg:order-1">
            <ol className="relative border-s border-white/10 pl-6">
              {education.map((item, idx) => (
                <li key={idx} className={`relative mb-10 ms-4 ${idx % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}>
                  {/* Marker */}
                  <span aria-hidden className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 ring-4 ring-blue-600/30" />

                  {/* Card */}
                  <div className="group rounded-xl border border-white/10 bg-white/5 p-5 shadow-md transition-transform duration-200 hover:-translate-y-0.5">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <div className="mt-2 flex flex-wrap gap-2 text-xs sm:text-sm">
                      <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-1 text-blue-300">
                        {item.place}
                      </span>
                      <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-gray-300">
                        {item.period}
                      </span>
                    </div>

                    <p className="mt-3 text-sm sm:text-base text-gray-300">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Education;