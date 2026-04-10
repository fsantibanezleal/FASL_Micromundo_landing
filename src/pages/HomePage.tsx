import { useState } from "react";
import type { CSSProperties, ComponentType, SVGProps } from "react";
import {
  ArrowRight,
  Cog,
  FlaskConical,
  Globe,
  Lightbulb,
  Monitor,
  Pencil,
  Rocket,
  Search,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import { SectionIntro } from "../components/SectionIntro";
import {
  benefitList,
  collaboratorLogos,
  contactInfo,
  courses,
  homeServiceSteps,
  homeStats,
  technicalList,
} from "../data/siteData";

const methodologyLayerImages = [
  {
    src: "/media/decor/image-layer-12-1.png",
    className: "home-image-layer__panel home-image-layer__panel--one slide_left",
  },
  {
    src: "/media/decor/image-layer-12-2.png",
    className: "home-image-layer__panel home-image-layer__panel--two slide_right",
  },
  {
    src: "/media/decor/image-layer-12-3.png",
    className: "home-image-layer__panel home-image-layer__panel--three fade_in",
  },
  {
    src: "/media/decor/image-layer-12-4.png",
    className: "home-image-layer__panel home-image-layer__panel--four fade_in",
  },
];

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const primaryServiceIcons: IconComponent[] = [Monitor, FlaskConical, Globe, Rocket];

const circuitServices = [
  {
    subtitle: "Metodología",
    title: "Aprendizaje basado en fenómenos",
    description:
      '"Phenomenon Learning" eliminamos las asignaturas tradicionales generando contenidos transversales interdisciplinarios.',
    icon: Pencil,
    position: { top: "7%", left: "50%" },
  },
  {
    subtitle: "Innovación",
    title: "Telemedicina en educación escolar",
    description:
      "Adaptamos metodologías de manejo de datos e información facilitando el trabajo a distancia y disminuyendo costos.",
    icon: Sparkles,
    position: { top: "26%", left: "82%" },
  },
  {
    subtitle: "TICs",
    title: "Microscopía Virtual",
    description:
      "Google Maps del mundo microscópico, librería de preparados que permiten simular la experiencia de hacer zoom y usar un microscopio real.",
    icon: Search,
    position: { top: "64%", left: "82%" },
  },
  {
    subtitle: "Currículum",
    title: "Anatomía Experimental",
    description:
      "Utilizamos piezas reales, impresiones 3D y un método de anatomía comparada de criaturas de fantasía para todas las edades.",
    icon: FlaskConical,
    position: { top: "84%", left: "50%" },
  },
  {
    subtitle: "Tecnología",
    title: "Construye tú Microscopio",
    description:
      "Microscopía de bajo costo, replicamos metodologías del primer microscopio de la historia y las combinamos con impresión 3D y microscopios de papel.",
    icon: Cog,
    position: { top: "64%", left: "18%" },
  },
  {
    subtitle: "STEAM",
    title: "Storytelling y Artes-Ciencia",
    description:
      "Arte-ciencia, pinturas, grafitis y obras plásticas para contar experimentos que cambiaron el mundo y sus historias de vida.",
    icon: Lightbulb,
    position: { top: "26%", left: "18%" },
  },
];

const featuredCourses = courses.slice(0, 6);
const marqueeLogos = [...collaboratorLogos, ...collaboratorLogos];

export function HomePage() {
  const [activeInfoTab, setActiveInfoTab] = useState<"benefits" | "technical">(
    "technical",
  );
  const [activeCircuitIndex, setActiveCircuitIndex] = useState(0);

  const infoList = activeInfoTab === "benefits" ? benefitList : technicalList;
  const activeCircuitService = circuitServices[activeCircuitIndex];

  return (
    <>
      <section className="hero hero--micromundo hero--seofy">
        <div className="hero__wash" aria-hidden="true" />

        <div className="container hero__grid">
          <div className="hero__copy" data-reveal>
            <p className="eyebrow hero__eyebrow">
              Phenomenon Learning | Microscopía Virtual | Ciencia escolar
            </p>
            <h1>Microscopía Virtual en la Sala de Clases</h1>
            <p className="section-copy hero__description">
              Tecnología desarrollada para el diagnóstico digital y adaptada de
              manera pionera a educación escolar, visitas a colegios, talleres y
              experiencias interdisciplinarias.
            </p>

            <div className="button-row">
              <a className="button" href="#metodologia">
                Ver metodología
                <ArrowRight size={18} />
              </a>
              <a
                className="button button--ghost hero__ghost-button"
                href="https://micromundo.app/library"
                target="_blank"
                rel="noreferrer"
              >
                Microscopio virtual
              </a>
            </div>

            <div className="hero__contact-line">
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              <span aria-hidden="true">/</span>
              <a href={contactInfo.phoneHref}>{contactInfo.phoneDisplay}</a>
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
              alt="Microscopio digital"
              className="hero__device"
            />
            <img src="/media/hero/animals.png" alt="" className="hero__animals" />
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

        <div className="section-mountain section-mountain--landing" aria-hidden="true" />
      </section>

      <section className="home-title-band">
        <div className="container" data-reveal>
          <h2>Experimenta el metodo cientifico con microscopía</h2>
        </div>
      </section>

      <section className="home-service-strip">
        <div className="container home-service-strip__grid">
          {homeServiceSteps.map((step, index) => {
            const Icon = primaryServiceIcons[index];

            return (
              <article
                key={step.step}
                className="home-hex-card"
                data-reveal
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <Link className="home-hex-card__link" to="/courses">
                  <div className="home-hex-card__shape" aria-hidden="true">
                    <svg viewBox="0 0 177.4 197.4">
                      <path d="M0,58.4v79.9c0,6.5,3.5,12.6,9.2,15.8l70.5,40.2c5.6,3.2,12.4,3.2,18,0l70.5-40.2c5.7-3.2,9.2-9.3,9.2-15.8V58.4c0-6.5-3.5-12.6-9.2-15.8L97.7,2.4c-5.6-3.2-12.4-3.2-18,0L9.2,42.5C3.5,45.8,0,51.8,0,58.4z" />
                    </svg>
                  </div>
                  <div className="home-hex-card__number">{step.step}</div>
                  <div className="home-hex-card__content">
                    <div className="home-hex-card__icon">
                      <Icon />
                    </div>
                    <h3>{step.title}</h3>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-shell section-shell--plain home-microscopy" id="programas">
        <div className="section-shell__atmosphere" aria-hidden="true">
          <img
            src="/media/decor/vector-smart-object-copy-34.png"
            alt=""
            className="section-shell__decor section-shell__decor--vector"
          />
          <img
            src="/media/decor/section-about-us-02.png"
            alt=""
            className="section-shell__decor section-shell__decor--soft"
          />
        </div>

        <div className="container home-microscopy__grid">
          <div className="home-split__visual home-split__visual--layered" data-reveal>
            <div className="home-image-layer" aria-hidden="true">
              {methodologyLayerImages.map((image) => (
                <figure key={image.src} className={`img-layer-image-wrapper ${image.className}`}>
                  <img src={image.src} alt="" className="img-layer-image" />
                </figure>
              ))}
            </div>
          </div>

          <div className="home-microscopy__content" data-reveal>
            <div className="home-section-title">
              <span className="home-section-title__divider" aria-hidden="true" />
              <h2>Microscopía Virtual en la Sala de Clases</h2>
            </div>

            <p className="section-copy">
              Tecnología desarrollada para el diagnóstico digital y utilizada de
              manera pionera en educación escolar.
            </p>

            <div className="home-info-tabs" role="tablist" aria-label="Información de microscopía virtual">
              <button
                type="button"
                className={`home-info-tabs__button ${
                  activeInfoTab === "benefits" ? "is-active" : ""
                }`}
                onClick={() => setActiveInfoTab("benefits")}
              >
                Beneficios
              </button>
              <button
                type="button"
                className={`home-info-tabs__button ${
                  activeInfoTab === "technical" ? "is-active" : ""
                }`}
                onClick={() => setActiveInfoTab("technical")}
              >
                Características Técnicas
              </button>
            </div>

            <ul className="home-info-list">
              {infoList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="home-gallery-wall">
        <div className="container">
          <div className="home-gallery-wall__header" data-reveal>
            <Link className="home-gallery-wall__button" to="/about-us">
              Galería Imágenes
            </Link>
          </div>

          <div className="home-gallery-wall__video" data-reveal>
            <iframe
              src="https://www.youtube.com/embed/0L6EGejEI0w?si=Q3m5qQ6z7H0Qk4Y7"
              title="Puerto de Ideas I"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div className="home-portfolio-grid">
            {featuredCourses.map((course, index) => (
              <article
                key={course.slug}
                className="home-portfolio-card"
                data-reveal
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <Link to="/courses#catalogo" className="home-portfolio-card__image">
                  <img src={course.image} alt={course.title} />
                  <span className="home-portfolio-card__overlay" aria-hidden="true" />
                </Link>
                <div className="home-portfolio-card__body">
                  <h3>{course.title}</h3>
                  <p>{course.tags[0]}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell home-methodology" id="metodologia">
        <div className="section-shell__atmosphere" aria-hidden="true">
          <img
            src="/media/decor/hexagoon-triple.png"
            alt=""
            className="section-shell__decor section-shell__decor--hex"
          />
        </div>

        <div className="container home-methodology__grid">
          <div className="home-methodology__copy" data-reveal>
            <div className="home-section-title">
              <span className="home-section-title__divider" aria-hidden="true" />
              <h2>Nuestra Metodología Multidisciplinaria y Experimental</h2>
            </div>

            <p className="section-copy">
              “Phenomenon Learning” aprendizaje basado en fenómenos. Se
              incorporan conocimientos desde la generación de proyectos con una
              perspectiva interdisciplinaria.
            </p>

            <p className="section-copy">
              Ambientado en temáticas como reanimación cardiopulmonar,
              criminalística y forenses, exobiología, cocina molecular,
              reciclaje y cambio climático, combinamos disciplinas del
              currículum escolar obligatorio destacando educación física,
              ciencias naturales, historia, comunicación, matemáticas y artes.
            </p>

            <div className="counter-grid counter-grid--compact">
              {homeStats.map((item, index) => (
                <article
                  key={item.label}
                  className="counter-card"
                  data-reveal
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="circuit-services" data-reveal>
            <div className="circuit-services__orb">
              <div className="circuit-services__ring" aria-hidden="true" />
              <div className="circuit-services__core">
                <p className="circuit-services__subtitle">{activeCircuitService.subtitle}</p>
                <h3>{activeCircuitService.title}</h3>
                <p>{activeCircuitService.description}</p>
              </div>

              {circuitServices.map((item, index) => {
                const Icon = item.icon;

                return (
                  <button
                    type="button"
                    key={item.title}
                    className={`circuit-services__node ${
                      index === activeCircuitIndex ? "is-active" : ""
                    }`}
                    style={item.position as CSSProperties}
                    onClick={() => setActiveCircuitIndex(index)}
                    aria-label={item.title}
                  >
                    <Icon />
                  </button>
                );
              })}
            </div>

            <div className="circuit-services__list">
              {circuitServices.map((item, index) => (
                <button
                  type="button"
                  key={item.title}
                  className={`circuit-services__list-item ${
                    index === activeCircuitIndex ? "is-active" : ""
                  }`}
                  onClick={() => setActiveCircuitIndex(index)}
                >
                  <span>{item.subtitle}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell section-shell--logos home-collaborators" id="colaboradores">
        <div className="home-collaborators__particles" aria-hidden="true" />

        <div className="container">
          <SectionIntro
            eyebrow="Nuestros Colaboradores"
            title="Instituciones, laboratorios y redes que sostienen la experiencia."
            description="La franja de colaboradores vuelve a funcionar como en el sitio original: logos monocromos sobre fondo claro, con acentos y movimiento continuo."
            align="center"
          />

          <div className="logo-marquee logo-marquee--hover" data-reveal>
            <div className="logo-marquee__track">
              {marqueeLogos.map((logo, index) => (
                <div className="logo-marquee__item logo-marquee__item--swap" key={`${logo.label}-${index}`}>
                  <img src={logo.monoSrc} alt={logo.label} className="logo-marquee__mono" />
                  <img src={logo.colorSrc} alt="" aria-hidden="true" className="logo-marquee__color" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
