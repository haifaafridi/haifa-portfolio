import { useState, useEffect } from "react";
import { profile } from "../content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="site-header__inner">
        <a href="#top" className="site-header__mark">
          HKA<span className="dot">.</span>
        </a>

        <nav className="site-header__nav site-header__nav--desktop">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a href={`mailto:${profile.email}`} className="site-header__cta">
            Say hello
          </a>
        </nav>

        <button
          className="site-header__burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className="site-header__nav--mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={`mailto:${profile.email}`} onClick={() => setOpen(false)}>
            Say hello
          </a>
        </nav>
      )}
    </header>
  );
}
