import { Arrow } from '../ui/Arrow';

export function Hero() {
  return (
    <>
      <section className="hero">
        <div className="grid-lines" aria-hidden="true" />

        <p className="hero-stamp">
          PORTFOLIO 2026 <span>///</span> NEW DELHI, IN
        </p>

        <div className="hero-layout">
          <div className="hero-copy">
            <p className="kicker">
              <span /> FULL-STACK ENGINEER
            </p>

            <h1>
              Engineering
              <br />
              <strong>digital</strong> <em>clarity.</em>
            </h1>

            <p className="hero-intro">
              I am Gourav Sharma, a MERN-stack developer with production
              internship experience building dependable, high-performing web
              products.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#work">
                Explore my work <Arrow />
              </a>

              <a
                className="button ghost"
                href="https://github.com/gouravsharma1711"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <Arrow />
              </a>
            </div>
          </div>

          <div
            className="hero-system"
            aria-label="Engineering profile graphic"
          >
            <div className="orb orb-one" />
            <div className="orb orb-two" />

            <div className="profile-card">
              <div className="profile-image">
                <img
                  src="/Profile/profile.png"
                  alt="Gourav Sharma"
                />
              </div>

              <p>Gourav Sharma</p>
              <span>BUILDING IN PUBLIC</span>
            </div>

            <div className="code-card">
              <span>const engineer = {'{'}</span>
              <span>&nbsp;&nbsp;craft: 'web experiences',</span>
              <span>&nbsp;&nbsp;mode: 'always learning'</span>
              <span>{'}'};</span>
            </div>

            <p className="system-label">
              SYSTEM
              <br />
              ONLINE <b>+</b>
            </p>
          </div>
        </div>

        <a className="scroll-cue" href="#work">
          SCROLL TO DEPLOY <b>v</b>
        </a>
      </section>

      <section className="marquee" aria-label="Skills">
        <div>
          HTML <b>+</b> CSS <b>+</b> JAVASCRIPT <b>+</b> REACT.JS
          <b>+</b> NODE.JS <b>+</b> EXPRESS.JS <b>+</b> MONGODB <b>+</b> SQL
           <b>+</b> OOPS  <b>+</b> JAVA  <b>+</b> DSA  <b>+</b> FULL STACK DEVELOPMENT  <b>+</b>  FRONTEND  <b>+</b>  BACKEND
           <b>+</b>
          HTML <b>+</b> CSS <b>+</b> JAVASCRIPT <b>+</b> REACT.JS
          <b>+</b> NODE.JS <b>+</b> EXPRESS.JS <b>+</b> MONGODB <b>+</b> SQL
           <b>+</b> OOPS  <b>+</b> JAVA  <b>+</b> DSA  <b>+</b> FULL STACK DEVELOPMENT  <b>+</b>  FRONTEND  <b>+</b>  BACKEND
        </div>
      </section>
    </>
  );
}