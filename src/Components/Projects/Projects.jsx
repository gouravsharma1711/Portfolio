import React from "react";

const projects = [
  {
    title: "Video Sharing Platform",
    description:
      "Developed a complete video platform from scratch where users can sign up, create channels, upload videos, and manage their personal dashboard. Features include commenting, liking, and subscribing to channels. Fully functional with secure code practices and a responsive design",
    image: "./other/videosharingweb.png",
    link: "https://videosharingplatformfrontend.onrender.com/",
  },
  {
    title: "Medisecure",
    description:
      "Designed and implemented a secure web-based platform for medical record management, allowing only authorized users to access data. Implemented robust authentication and search features for efficient use.  ",
    image: "./other/medisecure.png",
    link: "https://medi-secure-henna.vercel.app/",
  },
  {
    title: "Hotel Listings Application",
    description:
      "Built a full-featured application for hotel listings and reviews, including user authentication, advanced search, and responsive UI.  ",
    image: "./other/hotelListingWeb.png",
    link: "https://github.com/gouravsharma1711/Hotel-Listing-Website",
  },
];

function Projects() {
  return (
    <main
      className="min-h-screen bg-gradient-to-b from-[#0a0a1f] to-[#0f172a] text-gray-100 pt-12"
      id="projects"
    >
      <section className="mx-auto w-full max-w-7xl px-6 sm:px-8 py-14 md:py-20">
        <header className="text-center space-y-3 reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            My Projects
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            Some of the products I’ve built and shipped.
          </p>
        </header>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div className="relative group p-1 transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] reveal reveal-delay-1">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 animate-pulse-slow"></div>
              <div className="relative z-10 rounded-[1.95rem] overflow-hidden backdrop-blur-3xl bg-white/5 border border-white/10 shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                {/* Card Image */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="relative p-6 flex flex-col flex-1">
                  <h3 className="text-2xl sm:text-2xl font-extrabold mb-2 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 flex-1 text-base sm:text-lg leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative overflow-hidden inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-blue-700 hover:tracking-wide active:scale-95"
                    >
                      <span className="relative z-10">View Project</span>
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 -translate-x-full transition-all duration-500 group-hover:translate-x-full"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;
