import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  navigation,
  siteName,
  socialLinks,
  utilityCta,
} from "../data/siteData";
import { SocialIcon } from "./SocialIcon";

type HeaderProps = {
  onSearchOpen: () => void;
};

type InternalNavProps = {
  href: string;
  label: string;
  onClick?: () => void;
};

function InternalNavLink({ href, label, onClick }: InternalNavProps) {
  return (
    <NavLink
      to={href}
      onClick={onClick}
      className={({ isActive }) =>
        `site-nav__link ${isActive ? "site-nav__link--active" : ""}`
      }
    >
      {label}
    </NavLink>
  );
}

export function Header({ onSearchOpen }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="container utility-bar__inner">
          <div className="social-row social-row--compact">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="social-button social-button--ghost"
              >
                <SocialIcon kind={link.icon} className="social-button__icon" />
              </a>
            ))}
          </div>

          <a
            href={utilityCta.href}
            target="_blank"
            rel="noreferrer"
            className="utility-bar__cta"
          >
            {utilityCta.label}
          </a>
        </div>
      </div>

      <div className="site-header__main">
        <div className="container site-header__main-inner">
          <NavLink to="/" className="brand" aria-label={`${siteName} inicio`}>
            <img src="/media/branding/logo.png" alt={siteName} className="brand__logo" />
            <div className="brand__copy">
              <span className="brand__name">{siteName}</span>
              <span className="brand__tag">Microscopía, tecnología y experiencias STEAM</span>
            </div>
          </NavLink>

          <nav className="site-nav">
            {navigation.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="site-nav__link"
                >
                  {item.label}
                </a>
              ) : (
                <InternalNavLink key={item.label} href={item.href} label={item.label} />
              ),
            )}
          </nav>

          <div className="site-header__actions">
            <button
              type="button"
              onClick={onSearchOpen}
              className="icon-button"
              aria-label="Abrir buscador"
            >
              <Search size={18} />
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              className="icon-button icon-button--mobile"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <div className={`mobile-nav ${menuOpen ? "is-open" : ""}`}>
          <div className="container mobile-nav__panel">
            {navigation.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mobile-nav__link"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className="mobile-nav__link"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
