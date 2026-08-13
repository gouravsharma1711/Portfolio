import { Arrow } from '../ui/Arrow';

export function Resume() {
  return (
    <section className="resume section reveal" id="resume">
      <div className="resume-intro">
        <p className="kicker">
          <span /> CAREER SNAPSHOT
        </p>

        <h2>
          Ready to
          <br />
          <em>contribute.</em>
        </h2>

        <p>
          I am looking for an entry-level Full-Stack, Frontend, or Backend role where I can
          build, learn, and create real value from day one.
        </p>
      </div>

      <div className="resume-panel">
        <p className="panel-title">RECRUITER QUICK VIEW</p>

        <div>
          <span>CURRENTLY</span>
          <p>Open to entry-level software engineering opportunities.</p>
        </div>

        <div>
          <span>EDUCATION</span>
          <p>
            B.Tech, Computer Science and Engineering
            <br />
            <small>MAIT, GGSIPU / 2022 - 2026 / CGPA: 8.3</small>
          </p>
        </div>

        <div>
          <span>CERTIFIED</span>
          <p>Full Stack Web Development, Introduction to Python, and DSA in Java.</p>
        </div>

        <a className="button primary" href="/Gourav-Sharma-Resume.html" target="_blank" rel="noreferrer">
          Open full resume <Arrow />
        </a>
      </div>
    </section>
  );
}
