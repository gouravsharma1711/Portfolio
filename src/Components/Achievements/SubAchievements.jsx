import React from "react";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

function SubAchievements() {
  const achievements = [
    {
      title: "Runners Ups in Hack For Imapact",
      detail:
        "My team won 2nd prize in the hackathon organized by IIIT Delhi for Developing real life solution in Medical Industry",
      tag: "Achievement",
    },
    {
      title: "Top 6 Finalist in Build Wars Hackathon",
      detail:
        "My Team was in Top 6 teams in the Hakathon Organized by MindFlare, MAIT",
      tag: "Achievement",
    },
    {
      title: "8.0+ CGPA in College",
      detail:
        "My current CGPA is more than 8 which shows my dedication and hard work towards my studies.",
      tag: "Achievement",
    },
    {
      title: "Advance Mern Stack Development",
      detail:
        "Completed an advanced MERN stack course by PW Skills covering real-world projects and advanced concepts.",
      tag: "Certification",
    },
    {
      title: "DSA in Java",
      detail:
        "Completed a certification course on Data Structures and Algorithms in Java.",
      tag: "Certification",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1f] to-[#0f172a] text-gray-100 py-16 sm:pt-20 sm:pb-48 md:pt-24 md:pb-64 lg:pt-20 lg:pb-78 pb-20 overflow-x-hidden">
      <h1
        id="achievements"
        className="text-3xl sm:text-4xl md:text-5xl py-5 text-center font-bold reveal"
      >
        Achievements
      </h1>

      <ScrollStack blurAmount={2}>
        {achievements.map((ach, idx) => (
          <ScrollStackItem key={idx}>
            <div className="relative group rounded-3xl p-[1px] sm:p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl reveal">
              <div className="relative overflow-hidden rounded-3xl bg-[#0b1020]/80 backdrop-blur-xl min-h-[200px] sm:min-h-[240px] md:min-h-[260px] lg:min-h-[280px] p-4 sm:p-6 md:p-8">
                {/* Decorative Blurs */}
                <div className="absolute -right-10 -top-10 h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 rounded-full bg-indigo-500/10 blur-2xl md:blur-3xl" />
                <div className="absolute -left-8 -bottom-8 h-20 w-20 sm:h-28 sm:w-28 md:h-36 md:w-36 rounded-full bg-pink-500/10 blur-2xl md:blur-3xl" />

                {/* Content */}
                <div className="relative z-10 flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  {/* Icon */}
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg ring-1 ring-white/10">
                    <span className="text-xl sm:text-2xl md:text-3xl">
                      {ach.tag === "Achievement" ? "🏆" : "📜"}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 sm:mb-3 flex flex-wrap items-center gap-2 sm:gap-3">
                      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-white">
                        {ach.title}
                      </h2>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 text-[11px] sm:text-xs md:text-sm font-medium ring-1 ring-inset ${
                          ach.tag === "Achievement"
                            ? "bg-yellow-400/10 text-yellow-300 ring-yellow-300/30"
                            : "bg-cyan-400/10 text-cyan-300 ring-cyan-300/30"
                        }`}
                      >
                        {ach.tag}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
                      {ach.detail}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </div>
  );
}

export default SubAchievements;