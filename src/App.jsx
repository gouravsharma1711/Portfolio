import { useRevealOnScroll } from './hooks/useRevealOnScroll';
import { Header } from './Components/layout/Header';
import { Hero } from './Components/sections/Hero';
import { Experience } from './Components/sections/Experience';
import { Projects } from './Components/sections/Projects';
import { Profile } from './Components/sections/Profile';
import { Milestones } from './Components/sections/Milestones';
import { Resume } from './Components/sections/Resume';
import { Contact } from './Components/sections/Contact';

function App() {
  useRevealOnScroll();

  return <div className="site-shell">
    <Header />
    <main id="top">
      <Hero />
      <Experience />
      <Projects />
      <Profile />
      <Milestones />
      <Resume />
      <Contact />
    </main>
  </div>;
}

export default App;
