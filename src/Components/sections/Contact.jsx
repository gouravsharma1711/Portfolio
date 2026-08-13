import { Arrow } from '../ui/Arrow';

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-glow" />

      <div className="contact-grid">
        <div>
          <p className="kicker">
            <span /> CONTACT CHANNEL OPEN
          </p>

          <h2>
            Let us build
            <br />
            something <em>bold.</em>
          </h2>

          <p className="contact-copy">
            Whether you have a role, an interesting product problem, or just want to talk web
            engineering - my inbox is open.
          </p>
        </div>

        <div className="contact-card">
          <p>START A CONVERSATION</p>

          <a className="contact-email"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=gouravsharma.s172@gmail.com"
            target="_blank"
            rel="noopener noreferrer">
            gouravsharma.s172@gmail.com <Arrow />
          </a>

          <div className="contact-links">
            <a href="https://github.com/gouravsharma1711" target="_blank" rel="noreferrer">
              GitHub <Arrow />
            </a>
            <a href="https://www.linkedin.com/in/gourav-sharma-682a8525b/" target="_blank" rel="noreferrer">
              LinkedIn <Arrow />
            </a>
          </div>

          <span>
            DELHI, INDIA
            <br />
            AVAILABLE FOR OPPORTUNITIES
          </span>
        </div>
      </div>

      <footer>
        <span>GOURAV SHARMA / 2026</span>
        <span>DESIGNED + ENGINEERED IN INDIA</span>
      </footer>
    </section>
  );
}
