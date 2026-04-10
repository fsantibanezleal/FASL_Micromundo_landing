import { PageHero } from "../components/PageHero";
import { SectionIntro } from "../components/SectionIntro";
import { privacySections } from "../data/siteData";

export function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Políticas de Privacidad"
        description="Versión legible de los temas legales principales presentes en el sitio original."
      />

      <section className="section-shell" id="privacidad">
        <div className="container">
          <SectionIntro
            eyebrow="Resumen"
            title="Una política clara vale más que una página pesada con scroll infinito."
            description="Esta versión conserva los títulos y la intención de la página original, pero presentada en bloques más fáciles de recorrer."
          />

          <div className="privacy-grid">
            {privacySections.map((section) => (
              <article className="privacy-card" key={section.title} data-reveal>
                <h3>{section.title}</h3>
                <p>{section.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
