import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import {
  contactInfo,
  footerLinks,
  socialLinks,
  utilityCta,
} from "../data/siteData";
import { SocialIcon } from "./SocialIcon";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand" data-reveal>
          <img src="/media/branding/logo.png" alt="MicroMundo" className="site-footer__logo" />
          <p>
            Experiencias de microscopía, salud, ciencia y artes que traducen la
            complejidad técnica a un formato claro para colegios y comunidades.
          </p>
          <div className="social-row">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="social-button"
              >
                <SocialIcon kind={link.icon} className="social-button__icon" />
              </a>
            ))}
          </div>
        </div>

        <div data-reveal>
          <p className="site-footer__heading">Líneas de trabajo</p>
          <ul className="footer-list">
            {footerLinks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div data-reveal>
          <p className="site-footer__heading">Contacto</p>
          <ul className="footer-contact">
            <li>
              <MapPin size={16} />
              <a href={contactInfo.addressHref} target="_blank" rel="noreferrer">
                {contactInfo.address}
              </a>
            </li>
            <li>
              <Mail size={16} />
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </li>
            <li>
              <Phone size={16} />
              <a href={contactInfo.phoneHref}>{contactInfo.phoneDisplay}</a>
            </li>
          </ul>
          <a
            href={utilityCta.href}
            target="_blank"
            rel="noreferrer"
            className="button button--ghost footer-button"
          >
            Abrir aula virtual
          </a>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>MicroMundo, versión frontend independiente.</p>
        <div className="site-footer__bottom-links">
          <Link to="/politicas-de-privacidad">Términos y privacidad</Link>
          <a href={contactInfo.site} target="_blank" rel="noreferrer">
            Sitio original
          </a>
        </div>
      </div>
    </footer>
  );
}
