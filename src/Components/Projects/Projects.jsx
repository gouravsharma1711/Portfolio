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
    <section className="bg-white dark:bg-gray-900 py-12 px-4" id="projects">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-700 dark:text-blue-400">My Projects</h2>
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto px-4 py-2 bg-blue-700 dark:bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-800 dark:hover:bg-blue-700 transition-colors"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
