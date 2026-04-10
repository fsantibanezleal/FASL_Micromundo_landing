import { PageHero } from "../components/PageHero";
import { SectionIntro } from "../components/SectionIntro";
import { privacySections } from "../data/siteData";

export function PrivacyPage() {
  return (
    <>
      <PageHero title="Políticas de Privacidad" />

      <section className="section-shell" id="privacidad">
        <div className="container">
          <SectionIntro
            eyebrow="Resumen"
            title="Privacidad y uso del sitio."
            description="Resumen de los puntos principales sobre privacidad, uso y tratamiento de datos."
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
