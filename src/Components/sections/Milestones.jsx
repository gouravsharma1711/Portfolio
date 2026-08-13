import { milestones } from '../../data/portfolio';
import { SectionLabel } from '../ui/SectionLabel';

function MilestoneIcon({ index }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.7',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };

  if (index === 0) {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...common} d="M15 8h18v13a9 9 0 0 1-18 0V8Z" />
        <path {...common} d="M15 12H9v3a7 7 0 0 0 6 7M33 12h6v3a7 7 0 0 1-6 7M24 30v8M17 40h14" />
        <path {...common} d="m24 14 2 4 4 .5-3 3 .8 4-3.8-2-3.8 2 .8-4-3-3 4-.5 2-4Z" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle {...common} cx="24" cy="20" r="10" />
        <path {...common} d="m18 29-3 12 9-4 9 4-3-12M20 20l3 3 5-6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path {...common} d="m6 18 18-9 18 9-18 9L6 18Z" />
      <path {...common} d="M14 23v8c5 5 15 5 20 0v-8M42 19v10" />
      <path {...common} d="M38 30v5" />
    </svg>
  );
}

export function Milestones() {
  return (
    <section className="milestones section reveal" id="milestones">
      <div className="milestone-noise" aria-hidden="true" />

      <SectionLabel number="04">MILESTONES / SIGNAL LOG</SectionLabel>

      <div className="milestone-header">
        <div>
          <p className="kicker">
            <span /> SELECTED SIGNALS
          </p>

          <h2>
            Built.
            <br />
            <em>Recognized.</em>
          </h2>
        </div>

        <p>
          Three markers from the journey so far: learning fast, building in public, and
          turning ideas into working outcomes.
        </p>
      </div>

      <div className="signal-line" aria-hidden="true">
        <i />
        <span>2022</span>
        <span>2025</span>
        <span>2026</span>
      </div>

      <div className="signal-cards">
        {milestones.map((milestone, index) => (
          <article
            className={`signal-card signal-card-${index + 1}`}
            key={milestone.title}
          >
            <div className="signal-top">
              <span>{milestone.number}</span>
              <b>0{index + 1}</b>
            </div>

            <div className="signal-mark">
              <div className="signal-icon">
                <MilestoneIcon index={index} />
              </div>
              <span>ACHIEVEMENT</span>
            </div>

            <div className="signal-copy">
              <p>{milestone.detail}</p>
              <h3>{milestone.title}</h3>
              <span>{milestone.place}</span>
            </div>
          </article>
        ))}
      </div>

      <p className="milestone-footnote">
        STATUS: STILL BUILDING <b>+</b> NEXT CHAPTER LOADING
      </p>
    </section>
  );
}
