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
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: { opacity: 1, y: 0, rotateX: 0 },
  };

  const handleMouseMove = (e, setRotation) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = (x - centerX) / centerX * 15; // Max 15 degrees rotation
    const rotateX = -((y - centerY) / centerY) * 15; // Max 15 degrees rotation
    setRotation({ rotateX, rotateY });
  };

  return (
    <div className="bg-gradient-to-br from-[#0a0a1f] to-[#0f172a] text-gray-100 py-20 sm:py-28 min-h-screen relative overflow-hidden">
      {/* Background Orbs/Blobs for extra flair */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/15 rounded-full filter blur-3xl opacity-50 animate-blob" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-pink-600/15 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-600/15 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-4 relative z-10">
        <h1
          id="achievements"
          className="text-4xl md:text-5xl lg:text-6xl text-center font-extrabold text-white mb-16 animate-fade-in drop-shadow-lg"
        >
          My Stellar Journey 🚀
        </h1>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 perspective-1000">
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              className="relative group rounded-3xl p-px bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-2xl overflow-hidden transform-gpu"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              onMouseMove={(e) => {
                const { currentTarget: target } = e;
                const rect = target.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateY = (x - centerX) / centerX * 10; // Max 10 degrees rotation
                const rotateX = -((y - centerY) / centerY) * 10; // Max 10 degrees rotation
                e.currentTarget.style.setProperty('--rotateX', `${rotateX}deg`);
                e.currentTarget.style.setProperty('--rotateY', `${rotateY}deg`);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.setProperty('--rotateX', '0deg');
                e.currentTarget.style.setProperty('--rotateY', '0deg');
              }}
              style={{
                '--rotateX': '0deg',
                '--rotateY': '0deg',
                transform: 'rotateX(var(--rotateX)) rotateY(var(--rotateY))',
                transition: 'transform 0.2s ease-out'
              }}
            >
              {/* Inner glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                   style={{
                     background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.08) 0%, transparent 70%)'
                   }}
              />

              <div className="relative rounded-3xl bg-[#0b1020]/90 backdrop-blur-md min-h-[250px] p-8 flex flex-col h-full shadow-inner-lg">
                {/* Decorative Blurs inside card */}
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-indigo-500/15 blur-3xl opacity-70 animate-pulse-slow" />
                <div className="absolute -left-8 -bottom-8 h-20 w-20 rounded-full bg-pink-500/15 blur-3xl opacity-70 animate-pulse-slow animation-delay-1000" />
                
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

      {/* Tailwind CSS keyframes for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        @keyframes blob {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.28, 0.95);
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 0.9; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 5s infinite ease-in-out;
        }

        .perspective-1000 {
            perspective: 1000px;
        }
        
        .transform-gpu {
            transform-style: preserve-3d;
        }

        .glow-on-hover {
            box-shadow: 0 0 0px rgba(79, 70, 229, 0.6); /* Initial subtle glow */
        }

        .glow-on-hover:hover {
            box-shadow: 0 0 15px rgba(139, 92, 246, 0.8), 0 0 30px rgba(168, 85, 247, 0.6); /* Enhanced glow on hover */
        }
      `}</style>
    </div>
  );
}

export default SubAchievements;