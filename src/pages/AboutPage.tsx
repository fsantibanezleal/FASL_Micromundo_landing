import { Accordion } from "../components/Accordion";
import { PageHero } from "../components/PageHero";
import { SectionIntro } from "../components/SectionIntro";
import { TeamCard } from "../components/TeamCard";
import {
  disciplineGroups,
  faqItems,
  teamMembers,
} from "../data/siteData";

export function AboutPage() {
  return (
    <>
      <PageHero
        title="Acerca de Nosotros"
        description="Un equipo interdisciplinario que mezcla ciencias, ingeniería, visualidad y mediación para llevar experiencias memorables al aula."
      />

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
              eyebrow="Qué hacemos"
              title="Traducimos complejidad científica en experiencias escolares claras, táctiles y visuales."
              description="MicroMundo no es solamente un conjunto de talleres. Es una forma de diseñar experiencias de aprendizaje donde microscopía virtual, anatomía experimental, kits de bajo costo y narrativa visual trabajan juntos."
            />
          </div>
        </div>
      </section>

      <section className="section-shell section-shell--tint">
        <div className="container">
          <SectionIntro
            eyebrow="Capas del equipo"
            title="Científicos, ingenieros y artistas dentro del mismo sistema."
            description="La mezcla de perfiles no es decorativa: define cómo se piensan los contenidos, las interfaces, los objetos y la mediación."
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

      <section className="section-shell" id="team">
        <div className="container">
          <SectionIntro
            eyebrow="Equipo"
            title="Personas reales, roles concretos y trabajo multidisciplinario."
            description="La página original mostraba al equipo como una galería. Aquí mantenemos esa lógica, pero con una lectura más clara y directa."
          />
          <div className="team-grid team-grid--full">
            {teamMembers.map((member) => (
              <TeamCard member={member} key={member.name} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-shell--tint" id="faq">
        <div className="container">
          <SectionIntro
            eyebrow="Preguntas frecuentes"
            title="Lo básico, sin esconderlo detrás de toggles vacíos."
            description="En la web antigua varias respuestas estaban marcadas como “próximamente”. Aquí dejamos una versión útil y breve."
          />
          <Accordion items={faqItems} />
        </div>
      </section>
    </>
  );
}
