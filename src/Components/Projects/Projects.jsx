

import TiltedCard from './TiltedCard.jsx'

const projects = [
  {
    index:1,
    title: "Video Sharing Platform",
    description:
      "Developed a complete video platform from scratch where users can sign up, create channels, upload videos, and manage their personal dashboard. Features include commenting, liking, and subscribing to channels. Fully functional with secure code practices and a responsive design.",
    image: "https://res.cloudinary.com/dgavuxx13/image/upload/v1757421503/videosharingweb_kf2zmd.png",
    link: "https://videosharingplatformfrontend.onrender.com/",
  },
  {
    index:2,
    title: "Medisecure",
    description:
      "Designed and implemented a secure web-based platform for medical record management, allowing only authorized users to access data. Implemented robust authentication and search features for efficient use.",
    image: "https://res.cloudinary.com/dgavuxx13/image/upload/v1757421501/medisecure_mubseh.png",
    link: "https://medi-secure-henna.vercel.app/",
  },
];

function Projects() {
  return (
    <main
      className="min-h-1/2  text-gray-100 pt-12"
      id="projects"
    >
      <section className="mx-auto w-full max-w-7xl px-6 sm:px-8 py-14 md:py-20">
        <header className="text-center space-y-3 reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            My Projects 🎨
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            Some of the Projects  I’ve built.
          </p>
        </header>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <TiltedCard key={project.index} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;
