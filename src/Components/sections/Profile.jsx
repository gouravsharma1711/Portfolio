import { Arrow } from '../ui/Arrow';
import { SectionLabel } from '../ui/SectionLabel';

const capabilities = [
  {
    number: '01',
    name: 'Interface',
    description:
      'Responsive, accessible experiences that make complex tasks feel clear.',
    tools: 'React.js / Next.js / Tailwind CSS / SCSS',
  },
  {
    number: '02',
    name: 'Application',
    description:
      'Thoughtful product logic, secure user flows, and maintainable APIs.',
    tools: 'Node.js / Express.js / REST APIs / JWT',
  },
  {
    number: '03',
    name: 'Data',
    description:
      'Reliable data models and efficient retrieval for real-world product needs.',
    tools: 'MongoDB / MySQL / CRUD / Postman',
  },
];

export function Profile() {
  return (
    <section className="about section reveal" id="about">
      <SectionLabel number="03">ENGINEER PROFILE</SectionLabel>

      <div className="profile-hero">
        <div className="profile-title">
          <p className="kicker">
            <span /> HOW I WORK
          </p>

          <h2>
            Code with
            <br />
            <em>context.</em>
          </h2>
        </div>

        <div className="profile-statement">
          <p>
            I am a full-stack developer who likes to understand the whole system before
            improving a single part of it.
          </p>

          <p>
            Currently completing a B.Tech in Computer Science and Engineering at MAIT, GGSIPU,
            I bring an engineering mindset to building useful, dependable web products.
          </p>

          <a
            className="inline-link"
            href="https://www.linkedin.com/in/gourav-sharma-682a8525b/"
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn <Arrow />
          </a>
        </div>
      </div>

      <div className="profile-dashboard">
        <div className="availability-card">
          <div className="availability-dot" />
          <p>ENGINEER STATUS</p>
          <h3>
            Open to
            <br />
            opportunities.
          </h3>

          <span>FULL-STACK / FRONTEND / BACKEND</span>
          <div className="availability-grid" aria-hidden="true" />
        </div>

        <div className="capability-list">
          {capabilities.map((capability) => (
            <article key={capability.number}>
              <span>{capability.number}</span>

              <div>
                <h3>{capability.name}</h3>
                <p>{capability.description}</p>
              </div>

              <small>{capability.tools}</small>
            </article>
          ))}
        </div>
      </div>

      <div className="profile-bottom">
        <p>FOUNDATION</p>

        <div className="profile-metric">
          <strong>8.3</strong>
          <span>
            CGPA / 10
            <br />
            B.Tech CSE
          </span>
        </div>

        <div className="profile-metric">
          <strong>2026</strong>
          <span>
            GRADUATION
            <br />
            MAIT, GGSIPU
          </span>
        </div>

        <div className="profile-metric">
          <strong>02</strong>
          <span>
            LIVE FULL-STACK
            <br />
            PRODUCTS
          </span>
        </div>

        <p className="profile-signoff">BUILD WITH INTENT <b>+</b> LEARN WITHOUT PAUSE</p>
      </div>
    </section>
  );
}
