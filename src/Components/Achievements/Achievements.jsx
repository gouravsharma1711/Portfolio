import React from 'react';

function Achievements() {
  const achievements = [
    {
      title: 'Runners Ups in Hack For Imapact',
      detail: 'My team won 2nd prize in the hackathon organized by IIIT Delhi for Developing real life solution in Medical Industry',
      tag: "Achievement"
    },
    {
      title: 'Top 6 Finalist in Build Wars Hackathon',
      detail: 'My Team was in Top 6 teams in the Hakathon Organized by MindFlare, MAIT',
      tag: "Achievement"
    },
    {
      title: '8.0+ CGPA in College',
      detail: 'my current cgpa is more than 8 which shows my dedication and hard work towards my studies.',
      tag: "Achievement"
    },
    {
      title: 'Advance Mern Stack Development',
      detail: 'I Had completed a mern stack course by PW skills which covered all the advanced concepts',
      tag: 'Certification',
    },
    {
      title: 'Dsa In Java',
      detail: 'Completed a certification course on Data Structures and Algorithms in Java.',
      tag: 'Certification',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0a1f] to-[#0f172a] text-gray-100 pt-12" id='achievements'>
      <section className="mx-auto w-full max-w-7xl px-6 sm:px-8 py-14 md:py-20">
        {/* Header */}
        <header className="text-center space-y-3 reveal">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Achievements</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            Highlights of my work, recognition, and community impact.
          </p>
        </header>

        {/* Achievements Grid */}
        <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {achievements.map((item, idx) => (
            <li key={idx} className="group rounded-xl border border-white/10 bg-white/5 p-5 shadow-md transition-transform duration-200 hover:-translate-y-0.5 reveal reveal-delay-1">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <span aria-hidden className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/20 ring-1 ring-blue-400/30">
                  {/* Trophy icon */}
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-blue-300">
                    <path d="M18 4h2a2 2 0 0 1 2 2v1a4 4 0 0 1-4 4h-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 4H4a2 2 0 0 0-2 2v1a4 4 0 0 0 4 4h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 4h8v5a4 4 0 0 1-4 4 4 4 0 0 1-4-4V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 13v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M9 21h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M8 19h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </span>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">{item.title}</h3>
                    <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-0.5 text-xs text-blue-300">
                      {item.tag}
                    </span>
                  </div>
                  <p className="mt-2 text-sm sm:text-base text-gray-300">{item.detail}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Achievements;