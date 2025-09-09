import React, { useEffect, useRef, useState } from "react";

function Education() {
  const education = [
    {
      title: "Bachelor of Technology in Computer Science",
      place: "Maharaja Agrasen Institute of Technology (MAIT), GGSIPU",
      period: "2022 - 2026",
      detail: "In the field of Computer Science And Engineering",
    },
    {
      title: "Higher Secondary Education",
      place: "B.M Bharti Model School",
      period: "2019 - 2020",
      detail: "Specialized in Science Stream",
    },
    {
      title: "Secondary Education",
      place: "B.M Bharti Model School",
      period: "2017 - 2018",
      detail: "Completed Secondary Education with a focus on Science.",
    },
  ];

  // Small hook logic inside the component
  const useScrollAnimation = () => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );

      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);

    return [ref, isVisible];
  };

  return (
    <main
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-100 pt-12"
      id="education"
    >
      <section className="mx-auto w-full max-w-7xl px-6 sm:px-8 py-14 md:py-20">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Education 🏫
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            A snapshot of my academic journey and milestones.
          </p>
        </header>

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full" />

          <ol className="relative pl-12 space-y-12">
            {education.map((item, idx) => {
              const [ref, isVisible] = useScrollAnimation();
              return (
                <li
                  key={idx}
                  ref={ref}
                  className={`relative transform transition-all duration-700 ease-out
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  style={{ transitionDelay: `${idx * 200}ms` }}
                >
                  {/* Marker */}
                  <span className="absolute -left-7 flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 ring-4 ring-gray-900" />

                  {/* Card */}
                  <div className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-md hover:shadow-blue-500/20 transition">
                    <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-blue-400 transition">
                      {item.title}
                    </h3>

                    <div className="mt-3 flex flex-wrap gap-2 text-xs sm:text-sm">
                      <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-blue-300">
                        {item.place}
                      </span>
                      <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-gray-300">
                        {item.period}
                      </span>
                    </div>

                    <p className="mt-4 text-sm sm:text-base text-gray-300 group-hover:text-gray-200 transition">
                      {item.detail}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </main>
  );
}

export default Education;
