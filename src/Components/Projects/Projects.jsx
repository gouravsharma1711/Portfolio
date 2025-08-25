import React from "react";

const projects = [
  {
    title: "Video Sharing Website",
    description: "Developed a complete video platform from scratch where users can sign up, create channels, upload videos, and manage their personal dashboard. Features include commenting, liking, and subscribing to channels. Fully functional with secure code practices and a responsive design",
    image: "../../../public/other/videosharingWeb.png",
    link: "https://videosharingplatformfrontend.onrender.com/"
  },
  {
    title: "Medisecure",
    description: "Designed and implemented a secure web-based platform for medical record management, allowing only authorized users to access data. Implemented robust authentication and search features for efficient use.  ",
    image: "../../../public/other/medisecure.png",
    link: "https://medi-secure-henna.vercel.app/"
  },
  {
    title: "E-commerce Store",
    description: "An online store built with MERN stack, supporting payments.",
    image: "../../../public/other/medisecure.png",
    link: "https://ecommerce-link.com"
  }
];

function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0a1f] to-[#0f172a] text-gray-100 pt-12" id="projects">
      <section className="mx-auto w-full max-w-7xl px-6 sm:px-8 py-14 md:py-20">
        <header className="text-center space-y-3 reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">My Projects</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto">Some of the products I’ve built and shipped.</p>
        </header>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-xl border border-white/10 bg-white/5 shadow-md transition-transform duration-200 hover:-translate-y-0.5 flex flex-col reveal reveal-delay-1"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4 flex-1 text-sm sm:text-base">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-auto px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;
