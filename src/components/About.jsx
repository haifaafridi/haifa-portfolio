import { experience, education, skills, credentials } from "../content";

export default function About() {
  return (
    <section id="about" className="section section--alt">
      <div className="section__inner">
        <p className="section__eyebrow">Background</p>
        <h2 className="section__title">Still in school. Already shipping.</h2>

        <div className="about-grid">
          <div className="about-col">
            <h3 className="about-col__title">Experience</h3>
            {experience.map((e) => (
              <div key={e.company} className="exp-item">
                <div className="exp-item__row">
                  <p className="exp-item__title">{e.title}</p>
                  <p className="exp-item__period">{e.period}</p>
                </div>
                <p className="exp-item__company">
                  {e.company} · {e.location}
                </p>
                <ul className="exp-item__points">
                  {e.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}

            <h3 className="about-col__title about-col__title--spaced">Education</h3>
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
          </div>

          <div className="about-col">
            <h3 className="about-col__title">Stack</h3>
            <div className="skills-block">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="skills-row">
                  <p className="skills-row__cat">{category}</p>
                  <div className="skills-row__tags">
                    {items.map((s) => (
                      <span key={s} className="stack-tag">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="about-col__title about-col__title--spaced">
              Certifications & achievements
            </h3>
            <ul className="credentials-list">
              {credentials.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
