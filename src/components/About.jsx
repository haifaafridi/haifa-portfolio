import { useState } from "react";
import { experience, education, skills, credentials } from "../content";
import Reveal from "./Reveal";

function SkillTag({ skill }) {
  const [active, setActive] = useState(false);
  const hasProof = skill.used.length > 0;

  return (
    <div
      className={`skill-tag ${hasProof ? "skill-tag--proven" : ""} ${active ? "is-active" : ""}`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={() => setActive((v) => !v)}
      tabIndex={hasProof ? 0 : -1}
      onFocus={() => hasProof && setActive(true)}
      onBlur={() => setActive(false)}
    >
      <span className="skill-tag__label">{skill.name}</span>

      {hasProof && (
        <div className="skill-tag__pop" role="tooltip">
          <p className="skill-tag__pop-used">
            {skill.used.join(" · ")}
          </p>
          <p className="skill-tag__pop-note">{skill.note}</p>
        </div>
      )}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section section--alt">
      <div className="section__inner">
        <Reveal>
          <p className="section__eyebrow">Background</p>
          <h2 className="section__title">Still in school. Already shipping.</h2>
        </Reveal>

        <div className="about-grid">
          <div className="about-col">
            <Reveal>
              <h3 className="about-col__title">Experience</h3>
            </Reveal>
            {experience.map((e, i) => (
              <Reveal key={e.company} delay={i * 80}>
                <div className="exp-item">
                  <div className="exp-item__row">
                    <p className="exp-item__title">{e.title}</p>
                    <p className="exp-item__period">{e.period}</p>
                  </div>
                  <p className="exp-item__company">
                    {e.company} · {e.location}
                  </p>
                  <ul className="exp-item__points">
                    {e.points.map((pt, j) => (
                      <li key={j}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}

            <Reveal>
              <h3 className="about-col__title about-col__title--spaced">Education</h3>
            </Reveal>
            <Reveal>
              <div className="exp-item">
                <div className="exp-item__row">
                  <p className="exp-item__title">{education.degree}</p>
                  <p className="exp-item__period">{education.expected}</p>
                </div>
                <p className="exp-item__company">
                  {education.school} · {education.location}
                </p>
                <p className="exp-item__gpa">CGPA {education.gpa}</p>
                <ul className="exp-item__points">
                  <li>{education.coursework.join(", ")}</li>
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="about-col">
            <Reveal>
              <h3 className="about-col__title">Stack</h3>
              <p className="skills-hint">Hover or tap a skill to see where it was used</p>
            </Reveal>

            <div className="skills-block">
              {Object.entries(skills).map(([category, items], i) => (
                <Reveal key={category} delay={i * 60}>
                  <div className="skills-row">
                    <p className="skills-row__cat">{category}</p>
                    <div className="skills-row__tags">
                      {items.map((s) => (
                        <SkillTag key={s.name} skill={s} />
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <h3 className="about-col__title about-col__title--spaced">
                Certifications & achievements
              </h3>
            </Reveal>
            <Reveal>
              <ul className="credentials-list">
                {credentials.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
