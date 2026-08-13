import { projects } from '../../data/portfolio';
import { Arrow } from '../ui/Arrow';
import { SectionLabel } from '../ui/SectionLabel';

const projectMeta = {
  'Med1 Plus': {
    date: 'MAR - APR 2025',
    role: 'SECURE HEALTHCARE WORKFLOW',
    stack: ['React', 'Node.js', 'MongoDB', 'RBAC'],
    color: 'mint',
    outcome: 'Fast, protected patient record retrieval.',
  },
  'Video Sharing Platform': {
    date: 'AUG - SEP 2025',
    role: 'CREATOR PLATFORM',
    stack: ['React', 'Express', 'MongoDB', 'JWT'],
    color: 'coral',
    outcome: 'A full creator journey, from upload to audience.',
  },
};

export function Projects() {
  return (
    <section className="work section reveal" id="work">
      <SectionLabel number="02">SELECTED BUILDS / CASE FILES</SectionLabel>

      <div className="work-intro">
        <div>
          <p className="kicker">
            <span /> PROJECT ARCHIVE
          </p>

          <h2>
            Built to be
            <br />
            <em>used.</em>
          </h2>
        </div>

        <p>
          Two end-to-end products that show how I think about product flows, secure systems,
          and real user needs.
        </p>
      </div>

      <div className="case-list">
        {projects.map((project, index) => {
          const meta = projectMeta[project.title];

          return (
            <article className={`case-file case-${meta.color}`} key={project.title}>
              <div className="case-header">
                <span>CASE / {project.number}</span>
                <span>{meta.date}</span>
                <span>STATUS: SHIPPED</span>
              </div>

              <div className="case-body">
                <div className="case-identity">
                  <p>{meta.role}</p>
                  <h3>{project.title}</h3>
                  <p className="case-description">{project.description}</p>

                  <a href={project.url} target="_blank" rel="noreferrer">
                    Open live project <Arrow />
                  </a>
                </div>

                <div className="case-preview">
                  <div className="browser-dots">
                    <i />
                    <i />
                    <i />
                    <span>LIVE PREVIEW</span>
                  </div>

                  <img src={project.image} alt={`${project.title} interface`} />

                  <div className="preview-caption">
                    <span>{meta.outcome}</span>
                    <b>0{index + 1}</b>
                  </div>
                </div>
              </div>

              <div className="case-footer">
                <p>TECHNICAL BUILD</p>

                <div>
                  {meta.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <b>{index === 0 ? '01' : '02'} / 02</b>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
