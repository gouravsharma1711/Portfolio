import React from 'react';
import { motion } from 'framer-motion';

function SubAchievements() {
  const achievements = [
    {
      title: 'Runners Up in Hack For Impact',
      detail:
        'My team won 2nd prize in the hackathon organized by IIIT Delhi for developing a real-life solution in the medical industry.',
      tag: 'Achievement',
    },
    {
      title: 'Top 6 Finalist in Build Wars Hackathon',
      detail:
        'My team was in the top 6 teams in the Hackathon organized by MindFlare, MAIT.',
      tag: 'Achievement',
    },
    {
      title: '8.0+ CGPA in College',
      detail:
        'My current CGPA is more than 8, which shows my dedication and hard work towards my studies.',
      tag: 'Achievement',
    },
    {
      title: 'Advanced MERN Stack Development',
      detail:
        'Completed an advanced MERN stack course by PW Skills covering real-world projects and advanced concepts.',
      tag: 'Certification',
    },
    {
      title: 'DSA in Java',
      detail:
        'Completed a certification course on Data Structures and Algorithms in Java.',
      tag: 'Certification',
    },
  ];

  const tagColors = {
    Achievement: 'bg-yellow-400/10 text-yellow-300 ring-yellow-300/30',
    Certification: 'bg-cyan-400/10 text-cyan-300 ring-cyan-300/30',
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className=" text-gray-100 py-20 sm:py-28 min-h-1/2 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h1
          id="achievements"
          className="text-4xl md:text-5xl lg:text-6xl text-center font-extrabold text-white mb-16 animate-fade-in drop-shadow-lg"
        >
          My Achievement 🚀
        </h1>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              className="relative group rounded-3xl p-px bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-2xl overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative rounded-3xl bg-[#0b1020]/90 backdrop-blur-md min-h-[250px] p-8 flex flex-col h-full shadow-inner-lg">
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-700 text-white shadow-xl glow-on-hover transition-all duration-300">
                      <span className="text-3xl">
                        {ach.tag === 'Achievement' ? '🏅' : '📜'}
                      </span>
                    </div>
                    <span className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-medium ring-1 ring-inset ${tagColors[ach.tag]} tracking-wide text-shadow-sm`}>
                      {ach.tag}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3 leading-tight">
                    {ach.title}
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-300 mt-auto opacity-90">
                    {ach.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style >{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .glow-on-hover {
            box-shadow: 0 0 0px rgba(79, 70, 229, 0.6);
        }

        .glow-on-hover:hover {
            box-shadow: 0 0 15px rgba(139, 92, 246, 0.8), 0 0 30px rgba(168, 85, 247, 0.6);
        }
      `}</style>
    </div>
  );
}

export default SubAchievements;