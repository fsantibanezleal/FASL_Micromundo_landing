import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { SearchOverlay } from "./components/SearchOverlay";
import { searchEntries } from "./data/siteData";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { CoursesPage } from "./pages/CoursesPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { TeamProfilePage } from "./pages/TeamProfilePage";

const pageTitles: Record<string, string> = {
  "/": "MicroMundo | Landing",
  "/about-us": "Acerca de Nosotros | MicroMundo",
  "/courses": "Cursos | MicroMundo",
  "/contact-us": "Contáctenos | MicroMundo",
  "/material-complementario": "Material Complementario | MicroMundo",
  "/politicas-de-privacidad": "Políticas de Privacidad | MicroMundo",
};

function AppEffects() {
  const location = useLocation();

  useEffect(() => {
    document.title = pageTitles[location.pathname] ?? "MicroMundo";
  }, [location.pathname]);

  useEffect(() => {
    const targetId = location.hash.replace("#", "");

    if (targetId) {
      window.requestAnimationFrame(() => {
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.hash, location.pathname]);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -40px 0px" },
    );

    elements.forEach((element) => {
      element.classList.remove("is-visible");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
}

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <AppEffects />
      <Header onSearchOpen={() => setSearchOpen(true)} />
      <main className="site-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/Equipo/:slug" element={<TeamProfilePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/material-complementario" element={<ResourcesPage />} />
          <Route
            path="/politicas-de-privacidad"
            element={<PrivacyPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <SearchOverlay
        entries={searchEntries}
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
}
