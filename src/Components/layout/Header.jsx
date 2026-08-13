export function Header() {
  return <header className="topbar">
    <a className="wordmark" href="#top" aria-label="Gourav Sharma home">G<span>/</span>S</a>
    <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">Profile</a><a href="#resume">Resume</a></nav>
    <a className="availability" href="#contact"><i /> Available for work</a>
  </header>;
}
