import { ArrowRight, Microscope, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { CourseCard } from "../components/CourseCard";
import { SectionIntro } from "../components/SectionIntro";
import { TeamCard } from "../components/TeamCard";
import {
  benefitList,
  collaborators,
  courses,
  heroCards,
  methodologyCards,
  teamMembers,
  technicalList,
} from "../data/siteData";

const previewCourses = courses.slice(0, 6);
const previewTeam = teamMembers.slice(0, 4);

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy" data-reveal>
            <p className="eyebrow">Microscopía virtual en la sala de clases</p>
            <h1>
              La esencia de MicroMundo, pero en un frontend limpio, rápido y
              enfocado en la experiencia.
            </h1>
            <p className="section-copy">
              Tecnología desarrollada para el diagnóstico digital, adaptada de
              forma pionera a educación escolar, visitas a colegios, talleres y
              programas interdisciplinarios.
            </p>
            <div className="button-row">
              <a className="button" href="#programas">
                Explorar programas
                <ArrowRight size={18} />
              </a>
              <Link className="button button--ghost" to="/about-us">
                Conocer al equipo
              </Link>
            </div>
            <div className="hero__chips">
              <span className="hero-chip">
                <Microscope size={16} />
                Microscopía virtual
              </span>
              <span className="hero-chip">
                <Sparkles size={16} />
                Artes, ciencia y tecnología
              </span>
            </div>
          </div>

          <div className="hero__visual" data-reveal>
            <img
              src="/media/decor/hex-bg.png"
              alt=""
              className="hero__floating hero__floating--bg"
            />
            <img
              src="/media/hero/microscope.png"
              alt="Microscopio"
              className="hero__device"
            />
            <img
              src="/media/hero/animals.png"
              alt="Ilustración de animales"
              className="hero__animals"
            />
            <img
              src="/media/hero/layer-1.png"
              alt=""
              className="hero__floating hero__floating--one"
            />
            <img
              src="/media/hero/layer-2.png"
              alt=""
              className="hero__floating hero__floating--two"
            />
            <img
              src="/media/hero/layer-3.png"
              alt=""
              className="hero__floating hero__floating--three"
            />
          </div>
        </div>

        <div className="container hero-card-grid">
          {heroCards.map((card) => (
            <article className="feature-card" key={card.title} data-reveal>
              <p className="eyebrow">{card.eyebrow}</p>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell section-shell--tint" id="esencia">
        <div className="container">
          <SectionIntro
            eyebrow="Beneficios y características"
            title="Replicamos el core visual y pedagógico del sitio original, no su complejidad técnica."
            description="La nueva base conserva la identidad naranja-azul, los fondos con hexágonos, la navegación multipágina, el buscador y la estructura editorial de MicroMundo, pero sin paneles WordPress ni plugins."
          />

          <div className="split-panel">
            <article className="panel" data-reveal>
              <p className="eyebrow">Beneficios</p>
              <ul className="list-clean">
                {benefitList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="panel" data-reveal>
              <p className="eyebrow">Características técnicas</p>
              <ul className="list-clean">
                {technicalList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section-shell" id="programas">
        <div className="container">
          <SectionIntro
            eyebrow="Cursos y talleres"
            title="Diviértete investigando en alguno de nuestros programas."
            description="Cursos de fin de semana, visitas a colegios, activaciones abiertas y programas semestrales co-diseñados junto a cada institución."
          />

          <div className="course-grid">
            {previewCourses.map((course) => (
              <CourseCard course={course} key={course.slug} />
            ))}
          </div>

          <div className="section-actions" data-reveal>
            <Link className="button" to="/courses#catalogo">
              Ver todos los cursos
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell section-shell--dark" id="metodologia">
        <div className="container methodology">
          <div className="methodology__intro" data-reveal>
            <SectionIntro
              eyebrow="Nuestra metodología"
              title="Phenomenon Learning para conectar salud, observación, relato, datos y cultura visual."
              description="Se incorporan conocimientos desde proyectos con perspectiva interdisciplinaria. Trabajamos temáticas como criminalística, cambio climático, reanimación cardiopulmonar, exobiología o cocina molecular para cruzar ciencias naturales, historia, comunicación, matemáticas, arte y educación física."
            />
          </div>

          <div className="method-grid">
            {methodologyCards.map((item) => (
              <article className="method-card" key={item.title} data-reveal>
                <p className="eyebrow">{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" id="equipo-preview">
        <div className="container">
          <SectionIntro
            eyebrow="Acerca de nosotros"
            title="Un equipo pequeño, interdisciplinario y suficientemente raro para que la propuesta funcione."
            description="Científicos, ingenieros, artistas y mediadores construyen una experiencia que mezcla microscopía, narrativa, visualización y trabajo con colegios."
          />

          <div className="team-preview">
            <div className="team-preview__figure" data-reveal>
              <img
                src="/media/decor/team-figure.png"
                alt="Figura del equipo"
                className="team-preview__image"
              />
            </div>
            <div className="team-grid">
              {previewTeam.map((member) => (
                <TeamCard member={member} key={member.name} />
              ))}
            </div>
          </div>

          <div className="section-actions" data-reveal>
            <Link className="button button--ghost" to="/about-us#team">
              Ver equipo completo
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell section-shell--tint" id="colaboradores">
        <div className="container">
          <SectionIntro
            eyebrow="Colaboradores"
            title="La experiencia se sostiene con redes académicas, escolares, clínicas y creativas."
            align="center"
          />
          <div className="logo-cloud" data-reveal>
            {collaborators.map((item) => (
              <span className="logo-cloud__item" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container">
          <div className="cta-banner" data-reveal>
            <div>
              <p className="eyebrow">Siguiente paso</p>
              <h2>Si la web vieja gustaba por su energía, esta versión puede quedarse con eso y soltar el resto.</h2>
              <p>
                La nueva base ya está pensada para crecer con contenido local,
                componentes reutilizables y despliegue estático.
              </p>
            </div>
            <Link className="button" to="/contact-us#formulario">
              Hablemos del siguiente iterado
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
