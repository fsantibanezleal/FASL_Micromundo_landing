import { Accordion } from "../components/Accordion";
import { PageHero } from "../components/PageHero";
import { SectionIntro } from "../components/SectionIntro";
import { TeamCard } from "../components/TeamCard";
import {
  aboutStats,
  disciplineGroups,
  faqItems,
  teamMembers,
} from "../data/siteData";

export function AboutPage() {
  return (
    <>
      <PageHero title="#micromundoteam" />

      <section className="section-shell">
        <div className="container about-intro">
          <div className="about-intro__visual" data-reveal>
            <img
              src="/media/decor/about-figure.png"
              alt="Visual complementario de MicroMundo"
              className="about-intro__image"
            />
          </div>

          <div className="about-intro__copy" data-reveal>
            <SectionIntro
              eyebrow="Que hacemos"
              title="Traducimos complejidad cientifica en experiencias escolares claras, tactiles y visuales."
              description="MicroMundo no es solamente un conjunto de talleres. Es una forma de diseñar experiencias donde microscopía virtual, anatomía experimental, kits de bajo costo y narrativa visual trabajan juntos."
            />
          </div>
        </div>
      </section>

      <section className="section-shell section-shell--tint" id="team">
        <div className="container">
          <SectionIntro
            eyebrow="Equipo Multidisciplinario"
            title="Personas reales, roles concretos y trabajo interdisciplinario."
            description="Combinamos profesionales de multiples areas STEAM: Ciencia, Tecnologia, Ingenieria, Arte y Matematicas."
          />

          <div className="team-grid team-grid--full">
            {teamMembers.map((member) => (
              <TeamCard member={member} key={member.name} />
            ))}
          </div>

          <div className="counter-grid counter-grid--wide">
            {aboutStats.map((item, index) => (
              <article
                className="counter-card"
                key={item.label}
                data-reveal
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container">
          <SectionIntro
            eyebrow="Capas del equipo"
            title="Cientificos, ingenieros y artistas dentro del mismo sistema."
            description="La mezcla de perfiles no es decorativa: define como se piensan los contenidos, las interfaces, los objetos y la mediacion."
          />

          <div className="discipline-grid">
            {disciplineGroups.map((group) => (
              <article className="discipline-card" key={group.title} data-reveal>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-shell--tint" id="faq">
        <div className="container">
          <SectionIntro
            eyebrow="Preguntas frecuentes"
            title="Preguntas frecuentes sobre microscopios, microscopía virtual y programas educativos."
          />
          <Accordion items={faqItems} />
        </div>
      </section>
    </>
  );
}
