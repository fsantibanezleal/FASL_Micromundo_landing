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

      <section className="section-shell about-team-shell" id="team">
        <div className="container">
          <div className="team-grid team-grid--directory">
            {teamMembers.map((member) => (
              <TeamCard member={member} key={member.name} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-shell--tint about-overview-shell">
        <div className="container">
          <SectionIntro
            eyebrow="Equipo Multidisciplinario"
            title="Equipo Multidisciplinario"
            description="Combinamos profesionales de múltiples áreas STEAM del inglés Ciencia, Tecnología, Ingeniería, Arte y Matemáticas."
            align="center"
          />

          <div className="discipline-grid discipline-grid--about">
            {disciplineGroups.map((group) => (
              <article
                className="discipline-card discipline-card--about"
                key={group.title}
                data-reveal
              >
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </article>
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
