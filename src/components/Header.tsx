import { Mail, Menu, Phone, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import {
  contactInfo,
  navigation,
  siteName,
  socialLinks,
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
  const location = useLocation();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const isHome = location.pathname === "/";
  const menuOpen = menuPath === location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={[
        "site-header",
        isHome ? "site-header--home" : "site-header--inner",
        isScrolled ? "site-header--scrolled" : "site-header--rest",
      ].join(" ")}
    >
      {isHome ? (
        <div className="site-header__mountain" aria-hidden="true" />
      ) : null}

      <div className="site-header__top">
        <div className="container site-header__top-inner">
          <div className="header-meta">
            <a href={`mailto:${contactInfo.email}`} className="header-meta__item">
              <Mail size={15} />
              <span>{contactInfo.email}</span>
            </a>
            <span className="header-meta__divider" aria-hidden="true" />
            <a href={contactInfo.phoneHref} className="header-meta__item">
              <Phone size={15} />
              <span>{contactInfo.phoneDisplay}</span>
            </a>
          </div>

          <div className="header-utility">
            <div className="social-row social-row--compact">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="social-button social-button--header"
                >
                  <SocialIcon kind={link.icon} className="social-button__icon" />
                </a>
              ))}
            </div>

            <span className="header-meta__divider" aria-hidden="true" />

            <a
              href="https://micromundo.app/classroom"
              target="_blank"
              rel="noreferrer"
              className="utility-bar__cta"
            >
              INTRODUCE CÓDIGO AULA
            </a>
          </div>
        </div>
      </div>

      <div className="site-header__main">
        <div className="container site-header__main-inner">
          <button
            type="button"
            onClick={() =>
              setMenuPath((current) =>
                current === location.pathname ? null : location.pathname,
              )
            }
            className="icon-button icon-button--mobile site-header__menu-button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <NavLink to="/" className="brand" aria-label={`${siteName} inicio`}>
            <img
              src="/media/branding/logo-crop-2.png"
              alt={siteName}
              className="brand__logo brand__logo--wide"
            />
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
              className="search-trigger"
              aria-label="Abrir buscador"
            >
              <Search size={18} />
              <span>Buscar</span>
            </button>
          </div>
        </div>

        <div className={`mobile-nav ${menuOpen ? "is-open" : ""}`}>
          <div className="container mobile-nav__panel">
            <div className="mobile-nav__meta">
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              <a href={contactInfo.phoneHref}>{contactInfo.phoneDisplay}</a>
            </div>

            {navigation.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mobile-nav__link"
                  onClick={() => setMenuPath(null)}
                >
                  {item.label}
                </a>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className="mobile-nav__link"
                  onClick={() => setMenuPath(null)}
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
