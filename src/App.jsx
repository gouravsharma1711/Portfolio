import { useRevealOnScroll } from './hooks/useRevealOnScroll';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Profile } from './components/sections/Profile';
import { Milestones } from './components/sections/Milestones';
import { Resume } from './components/sections/Resume';
import { Contact } from './components/sections/Contact';

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
