import { projects } from "../content";
import Reveal from "./Reveal";

function ProjectCard({ project, index }) {
  return (
    <article className="project">
      <div className="project__head">
        <div>
          <p className="project__index">PROJECT {String(index + 1).padStart(2, "0")}</p>
          <h3 className="project__name">{project.name}</h3>
        </div>
        <p className="project__period">{project.period}</p>
      </div>

      <div className="project__body">
        <div className="project__field">
          <p className="project__label">Problem</p>
          <p className="project__text">{project.problem}</p>
        </div>

        <div className="project__field">
          <p className="project__label">Approach</p>
          <p className="project__text">{project.approach}</p>
        </div>

        {project.deployNote && (
          <div className="project__field">
            <p className="project__label">Delivery</p>
            <p className="project__text">{project.deployNote}</p>
          </div>
        )}
      </div>

      <div className="project__constraints">
        {project.constraints.map((c) => (
          <span key={c} className="constraint-tag">
            {c}
          </span>
        ))}
      </div>

      <div className="project__stack">
        {project.stack.map((s) => (
          <span key={s} className="stack-tag">
            {s}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="section">
      <div className="section__inner">
        <Reveal>
          <p className="section__eyebrow">Selected work</p>
          <h2 className="section__title">Three systems, three different failure modes solved.</h2>
        </Reveal>

        <div className="projects-list">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 90}>
              <ProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
