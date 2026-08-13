import React from 'react';
import { SectionLabel } from '../ui/SectionLabel';

const experiences = [
  {
    id: '01',
    period: 'JAN — JUN 2026',
    employer: 'Urban Sky Media',
    role: 'Full-Stack Web Developer Intern',
    location: 'New Delhi, India',
    status: 'SHIPPED',
    type: 'INTERNSHIP',

    summary:
      'Contributed to a production web application, improving features, performance, and maintainability across the stack.',

    stack: [
      'Next.js',
      'React.js',
      'Node.js',
      'MongoDB',
      'REST APIs',
      'Tailwind CSS',
    ],

    contributions: [
      {
        number: '01',
        title: 'Product delivery',
        detail:
          'Built and maintained production features across Next.js, React.js, Node.js, and MongoDB.',
      },
      {
        number: '02',
        title: 'Experience quality',
        detail:
          'Improved responsive UI and page-load performance with Tailwind CSS.',
      },
      {
        number: '03',
        title: 'Team practice',
        detail:
          'Used Git/GitHub to collaborate, resolve issues, and ship changes with a cross-functional team.',
      },
    ],
  },

  // Add future experiences here.
  // {
  //   id: '02',
  //   period: 'JUL — DEC 2026',
  //   employer: 'Company Name',
  //   role: 'Software Engineer',
  //   location: 'New Delhi, India',
  //   status: 'CURRENT',
  //   type: 'FULL-TIME',
  //   summary: '...',
  //   stack: ['React', 'Node.js', 'PostgreSQL'],
  //   contributions: [
  //     {
  //       number: '01',
  //       title: 'Product engineering',
  //       detail: '...',
  //     },
  //   ],
  // },
];

export function Experience() {
  return (
    <section
      className="experience relative w-full overflow-hidden bg-[#f4f3fb] text-[#11111b]"
      id="experience"
    >
      {/* ─────────────────────────────────────────
          BACKGROUND GRID
      ───────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(38, 31, 111, 0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(38, 31, 111, 0.055) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Decorative vertical line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-0 hidden h-full w-px bg-[#252064]/10 lg:block"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">

        {/* ─────────────────────────────────────────
            SECTION LABEL
        ───────────────────────────────────────── */}
        <div className="mb-12">
          <SectionLabel number="01">
            EXPERIENCE / FIELD NOTES
          </SectionLabel>
        </div>

        {/* ─────────────────────────────────────────
            EDITORIAL HEADER
        ───────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-10 border-b border-[#17172a]/15 pb-12 lg:grid-cols-12 lg:items-end">

          <div className="lg:col-span-8">
            <div className="mb-5 flex items-center gap-3 font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-[#0a8f72]">
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute h-2 w-2 animate-ping rounded-full bg-[#58e0b5] opacity-60" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-[#0a8f72]" />
              </span>

              CAREER LOG / SELECTED EXPERIENCE
            </div>

            <h2 className="max-w-4xl text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-[#11111b]">
              Building things.
              <br />

              <em className="font-serif font-normal italic text-[#5142c9]">
                Learning through shipping.
              </em>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-1">
            <div className="border-l-2 border-[#5142c9] pl-5">
              <p className="text-sm leading-7 text-[#555565]">
                A record of the teams, products, and production environments
                where engineering knowledge became real, shipped work.
              </p>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────
            EXPERIENCE ENTRIES
        ───────────────────────────────────────── */}
        <div className="mt-12 space-y-8">
          {experiences.map((exp) => (
            <article
              key={exp.id}
              className="group relative overflow-hidden border border-[#17172a]/15 bg-[#fbfbfe] transition-all duration-500 hover:-translate-y-1 hover:border-[#5142c9]/40 hover:shadow-[0_25px_70px_rgba(38,31,111,0.10)]"
            >
              {/* Accent line */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#5142c9] via-[#8c7cf2] to-[#58e0b5] opacity-80" />

              {/* ─────────────────────────────
                  TOP META BAR
              ───────────────────────────── */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#17172a]/10 bg-[#f5f5fa] px-5 py-4 pl-7 sm:px-7">

                <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em]">
                  <span className="font-bold text-[#5142c9]">
                    {exp.id}
                  </span>

                  <span className="text-[#aaaab7]">/</span>

                  <span className="text-[#555565]">
                    {exp.period}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="border border-[#17172a]/10 bg-white px-3 py-1.5 font-mono text-[9px] font-medium uppercase tracking-[0.15em] text-[#777783]">
                    {exp.type}
                  </span>

                  <span className="flex items-center gap-2 border border-[#0a8f72]/20 bg-[#58e0b5]/10 px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-[#087a62]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0a8f72]" />
                    {exp.status}
                  </span>
                </div>
              </div>

              {/* ─────────────────────────────
                  MAIN DOSSIER
              ───────────────────────────── */}
              <div className="grid grid-cols-1 lg:grid-cols-12">

                {/* LEFT — ROLE */}
                <div className="border-b border-[#17172a]/10 p-7 sm:p-9 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-10">

                  <div className="mb-10 flex items-start justify-between">
                    <div>
                      <p className="mb-3 font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9999a7]">
                        ROLE / {exp.id}
                      </p>

                      <h3 className="max-w-md text-2xl font-semibold leading-tight tracking-[-0.035em] text-[#11111b] sm:text-3xl">
                        {exp.role}
                      </h3>

                      <p className="mt-3 text-sm font-medium text-[#5142c9]">
                        {exp.employer}
                        <span className="text-[#8b8b99]">
                          {' '}
                          — {exp.location}
                        </span>
                      </p>
                    </div>

                    {/* Big number */}
                    <span className="hidden select-none font-mono text-5xl font-bold tracking-[-0.08em] text-[#ececf5] sm:block">
                      {exp.id}
                    </span>
                  </div>

                  <div className="mb-10 h-px w-12 bg-[#58e0b5]" />

                  <p className="max-w-lg text-sm leading-7 text-[#5f5f6d]">
                    {exp.summary}
                  </p>

                  {/* STACK */}
                  <div className="mt-10">
                    <p className="mb-3 font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9999a7]">
                      TECHNOLOGY / STACK
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.stack.map((tool) => (
                        <span
                          key={tool}
                          className="border border-[#17172a]/10 bg-white px-3 py-1.5 font-mono text-[10px] text-[#555565] transition-colors duration-300 hover:border-[#5142c9]/40 hover:text-[#5142c9]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RIGHT — CONTRIBUTIONS */}
                <div className="bg-[#f8f8fc] p-7 sm:p-9 lg:col-span-7 lg:p-10">

                  <div className="mb-8 flex items-center justify-between border-b border-[#17172a]/10 pb-4">
                    <div>
                      <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9999a7]">
                        WORK LOG
                      </p>

                      <p className="mt-1 text-xs font-medium text-[#11111b]">
                        Selected contributions
                      </p>
                    </div>

                    <span className="font-mono text-[10px] text-[#5142c9]">
                      {exp.contributions.length
                        .toString()
                        .padStart(2, '0')}{' '}
                      ITEMS
                    </span>
                  </div>

                  <div>
                    {exp.contributions.map(
                      ({ number, title, detail }, index) => (
                        <div
                          key={number}
                          className={`group/contribution grid grid-cols-[42px_1fr] gap-5 py-6 ${
                            index !== exp.contributions.length - 1
                              ? 'border-b border-[#17172a]/10'
                              : ''
                          }`}
                        >
                          {/* Number */}
                          <div className="flex h-8 w-8 items-center justify-center border border-[#5142c9]/20 bg-[#5142c9]/5 font-mono text-[10px] font-bold text-[#5142c9] transition-all duration-300 group-hover/contribution:border-[#5142c9] group-hover/contribution:bg-[#5142c9] group-hover/contribution:text-white">
                            {number}
                          </div>

                          {/* Content */}
                          <div>
                            <h4 className="text-sm font-semibold tracking-[-0.01em] text-[#22222e] transition-colors duration-300 group-hover/contribution:text-[#5142c9]">
                              {title}
                            </h4>

                            <p className="mt-2 max-w-xl text-xs leading-6 text-[#737380]">
                              {detail}
                            </p>
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  {/* Small status indicator */}
                  <div className="mt-6 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.15em] text-[#0a8f72]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0a8f72]" />
                    Production experience logged
                  </div>
                </div>
              </div>

              {/* ─────────────────────────────
                  FOOTER
              ───────────────────────────── */}
              <div className="flex flex-col gap-2 border-t border-[#17172a]/10 bg-[#f5f5fa] px-7 py-3 font-mono text-[9px] uppercase tracking-[0.15em] text-[#9999a7] sm:flex-row sm:items-center sm:justify-between">

                <span>
                  ENTRY / {exp.id}
                </span>

                <span>
                  {exp.employer}
                </span>

                <span className="flex items-center gap-2 text-[#0a8f72]">
                  <span className="h-1 w-1 rounded-full bg-[#0a8f72]" />
                  {exp.status}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* ─────────────────────────────────────────
            END MARKER
        ───────────────────────────────────────── */}
        <div className="mt-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-[#17172a]/10" />

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#9999a7]">
            END OF EXPERIENCE LOG
          </span>

          <div className="h-px flex-1 bg-[#17172a]/10" />
        </div>
      </div>
    </section>
  );
}