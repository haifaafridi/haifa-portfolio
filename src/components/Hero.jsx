import { ArrowDownIcon } from "./icons";
import { profile } from "../content";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <p className="hero__eyebrow">{profile.location} — open to internships</p>

        <h1 className="hero__headline">
          I build software that
          <br />
          <span className="hero__headline-accent">holds up under real use.</span>
        </h1>

        <p className="hero__sub">
          Software Engineering student at NUST. I've shipped a school-management
          platform tracking 1,200+ students, a sub-3-second cross-exchange trading
          system, and an NLP pipeline for misinformation detection — each one built
          around the constraint that actually mattered, not just the feature list.
        </p>

        <div className="hero__actions">
          <a href="#work" className="btn btn--primary">
            See the work
          </a>
          <a href={`mailto:${profile.email}`} className="btn btn--ghost">
            {profile.email}
          </a>
        </div>
      </div>

      <a href="#work" className="hero__scroll-cue" aria-label="Scroll to work">
        <ArrowDownIcon size={16} />
      </a>
    </section>
  );
}
