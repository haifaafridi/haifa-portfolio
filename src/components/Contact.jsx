import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "./icons";
import { profile } from "../content";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <p className="section__eyebrow section__eyebrow--light">Get in touch</p>
        <h2 className="contact__title">
          Looking for an intern who reads
          <br />
          the constraints before the code.
        </h2>
        <p className="contact__sub">
          I'm currently looking for internship opportunities. If something I've built
          is relevant to what you're working on, I'd like to hear from you.
        </p>

        <div className="contact__links">
          <a href={`mailto:${profile.email}`} className="contact__link">
            <MailIcon size={18} />
            {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="contact__link">
            <PhoneIcon size={18} />
            {profile.phone}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link"
          >
            <GithubIcon size={18} />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link"
          >
            <LinkedinIcon size={18} />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="contact__footer">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with React</p>
      </div>
    </section>
  );
}
