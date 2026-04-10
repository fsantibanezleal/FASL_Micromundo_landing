import { ArrowRight, Microscope, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { SectionIntro } from "../components/SectionIntro";
import {
  collaboratorLogos,
  homeServiceSteps,
  homeStats,
  methodologyCards,
} from "../data/siteData";

const methodologyImages = [
  "/media/decor/method-1.png",
  "/media/decor/method-2.png",
  "/media/decor/method-3.png",
  "/media/decor/method-4.png",
  "/media/decor/hex-2.png",
  "/media/decor/spark.png",
];

const methodologyLayerImages = [
  {
    src: "/media/decor/image-layer-12-1.png",
    className: "home-image-layer__panel home-image-layer__panel--one fade_in",
  },
  {
    src: "/media/decor/image-layer-12-2.png",
    className: "home-image-layer__panel home-image-layer__panel--two slide_left",
  },
  {
    src: "/media/decor/image-layer-12-3.png",
    className: "home-image-layer__panel home-image-layer__panel--three slide_right",
  },
  {
    src: "/media/decor/image-layer-12-4.png",
    className: "home-image-layer__panel home-image-layer__panel--four fade_in",
  },
];

const marqueeLogos = [...collaboratorLogos, ...collaboratorLogos];

export function HomePage() {
  return (
    <>
      <section className="hero hero--micromundo">
        <div className="hero__wash" aria-hidden="true" />

        <div className="container hero__grid">
          <div className="hero__copy" data-reveal>
            <p className="eyebrow">Phenomenon Learning | Experimentos | E-Learning | Proyectos</p>
            <h1>Experimenta el metodo cientifico con microscopia.</h1>
            <p className="section-copy hero__description">
              Tecnologia desarrollada para diagnostico digital, adaptada de forma
              pionera a educacion escolar, visitas a colegios, talleres y
              programas interdisciplinarios.
            </p>

            <div className="button-row">
              <a className="button" href="#programas">
                Explorar metodologia
                <ArrowRight size={18} />
              </a>
              <a
                className="button button--ghost"
                href="https://micromundo.app/library"
                target="_blank"
                rel="noreferrer"
              >
                Microscopio virtual
              </a>
            </div>

            <div className="hero__chips">
              <span className="hero-chip">
                <Microscope size={16} />
                Microscopía virtual
              </span>
              <span className="hero-chip">
                <Sparkles size={16} />
                Multidisciplinaria y experimental
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
              alt="Microscopio digital"
              className="hero__device"
            />
            <img
              src="/media/hero/animals.png"
              alt=""
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

        <div className="container service-flow">
          <img
            src="/media/decor/home2-line.png"
            alt=""
            aria-hidden="true"
            className="service-flow__line"
          />

          <div className="service-flow__grid">
            {homeServiceSteps.map((step, index) => (
              <article
                className="service-step"
                key={step.step}
                data-reveal
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className="service-step__shape" aria-hidden="true" />
                <span className="service-step__number">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="section-mountain section-mountain--landing" aria-hidden="true" />
      </section>

      <section className="section-shell section-shell--plain section-shell--phenomenon" id="metodologia">
        <div className="section-shell__atmosphere section-shell__atmosphere--phenomenon" aria-hidden="true">
          <img
            src="/media/decor/vector-smart-object-copy-34.png"
            alt=""
            className="section-shell__decor section-shell__decor--vector"
          />
          <img
            src="/media/decor/hexagoon-triple.png"
            alt=""
            className="section-shell__decor section-shell__decor--hex"
          />
        </div>

        <div className="container home-split">
          <div className="home-split__copy" data-reveal>
            <SectionIntro
              eyebrow="Phenomenon Learning"
              title="Aprendizaje basado en fenomenos."
              description="Se incorporan conocimientos desde proyectos con perspectiva interdisciplinaria para activar ciencia, observacion, relato, visualidad y experiencia en una misma secuencia."
            />

            <p className="section-copy">
              Trabajamos tematicas como criminalistica, cambio climatico,
              reanimacion cardiopulmonar, exobiologia o cocina molecular para
              cruzar ciencias naturales, historia, comunicacion, matematicas,
              artes y educacion fisica.
            </p>

            <div className="counter-grid">
              {homeStats.map((item, index) => (
                <article
                  key={item.label}
                  className="counter-card"
                  data-reveal
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="home-split__visual home-split__visual--layered" data-reveal>
            <img
              src="/media/decor/section-about-us-02.png"
              alt=""
              aria-hidden="true"
              className="home-split__ghost home-split__ghost--one"
            />
            <img
              src="/media/decor/vector-smart-object-copy-34.png"
              alt=""
              aria-hidden="true"
              className="home-split__ghost home-split__ghost--two"
            />

            <div className="home-image-layer" aria-hidden="true">
              {methodologyLayerImages.map((image, index) => (
                <figure
                  key={image.src}
                  className={`img-layer-image-wrapper ${image.className}`}
                  style={{ transitionDelay: `${index * 140}ms` }}
                >
                  <img src={image.src} alt="" className="img-layer-image" />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="community-band">
        <div className="community-band__particles" aria-hidden="true">
          <img
            src="/media/decor/hexagoon-triple.png"
            alt=""
            className="community-band__decor community-band__decor--hex"
          />
          <img
            src="/media/decor/vector-smart-object-copy-34.png"
            alt=""
            className="community-band__decor community-band__decor--ring"
          />
        </div>

        <div className="container community-band__inner" data-reveal>
          <div className="community-band__copy">
            <p className="eyebrow">Unete a la comunidad</p>
            <h2>Microscopia, experiencias memorables y colaboracion entre universidad y escuela.</h2>
            <p>
              La propuesta mezcla cultura CTI, actividades en colegios,
              cursos anuales, visitas, material complementario y una biblioteca
              digital lista para escalar sin la carga tecnica del sitio antiguo.
            </p>
          </div>

          <div className="button-row community-band__actions">
            <Link className="button" to="/contact-us#formulario">
              Contacto
              <ArrowRight size={18} />
            </Link>
            <Link className="button button--ghost" to="/courses">
              Ver cursos
            </Link>
          </div>
        </div>

        <div className="section-mountain section-mountain--home3" aria-hidden="true" />
      </section>

      <section className="section-shell section-shell--tint section-shell--circuit" id="programas">
        <div className="section-shell__atmosphere section-shell__atmosphere--circuit" aria-hidden="true">
          <img
            src="/media/decor/section-about-us-02.png"
            alt=""
            className="section-shell__decor section-shell__decor--soft"
          />
          <img
            src="/media/decor/hexagoon-triple.png"
            alt=""
            className="section-shell__decor section-shell__decor--hex-small"
          />
        </div>

        <div className="container">
          <SectionIntro
            eyebrow="Multidisciplinaria y Experimental"
            title="Nuestra metodologia. Cientificos desde la universidad a la escuela."
            description="Seis frentes de trabajo que condensan el tono del sitio original: experiencia, fenomenos, tecnologia, salud, mediacion y proyectos colaborativos."
            align="center"
          />

          <div className="pillar-grid">
            {methodologyCards.map((item, index) => (
              <article
                className="pillar-card"
                key={item.title}
                data-reveal
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="pillar-card__visual">
                  <img
                    src={methodologyImages[index]}
                    alt=""
                    className="pillar-card__icon"
                  />
                </div>
                <p className="eyebrow">{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-shell--logos" id="colaboradores">
        <div className="container">
          <SectionIntro
            eyebrow="Nuestros colaboradores"
            title="Instituciones, laboratorios y redes que sostienen la experiencia."
            description="La versión nueva mantiene la franja de colaboradores como una pieza visual central, pero con logos reales y movimiento continuo."
            align="center"
          />

          <div className="logo-marquee" data-reveal>
            <div className="logo-marquee__track">
              {marqueeLogos.map((logo, index) => (
                <div className="logo-marquee__item" key={`${logo.label}-${index}`}>
                  <img
                    src={index < collaboratorLogos.length ? logo.colorSrc : logo.monoSrc}
                    alt={logo.label}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
