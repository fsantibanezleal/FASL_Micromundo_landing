import { ArrowUpRight, Download } from "lucide-react";

import { PageHero } from "../components/PageHero";
import { SectionIntro } from "../components/SectionIntro";
import { resources } from "../data/siteData";

export function ResourcesPage() {
  return (
    <>
      <PageHero
        title="Material Complementario"
        description="Recursos de apoyo, enlaces externos y documentos descargables reunidos en una página simple y estable."
      />

      <section className="section-shell" id="recursos">
        <div className="container">
          <SectionIntro
            eyebrow="Biblioteca base"
            title="Lo importante aquí no es el contenedor, sino que el material esté claro y accesible."
            description="Se mantienen los recursos visibles del sitio actual: manual, repositorio visual y PDF de evaluación."
          />

          <div className="resource-grid">
            {resources.map((resource) => (
              <article className="resource-card" key={resource.title} data-reveal>
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="resource-card__image"
                />
                <div className="resource-card__body">
                  <span className="tag">{resource.tag}</span>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <a
                    className="button button--ghost"
                    href={resource.href}
                    target={resource.external ? "_blank" : undefined}
                    rel={resource.external ? "noreferrer" : undefined}
                  >
                    {resource.external ? "Abrir recurso" : "Descargar PDF"}
                    {resource.external ? (
                      <ArrowUpRight size={18} />
                    ) : (
                      <Download size={18} />
                    )}
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="pdf-preview" data-reveal>
            <iframe
              title="Encuestas de evaluación"
              src="/media/materials/encuestas-evaluacion.pdf#view=FitH"
            />
          </div>
        </div>
      </section>
    </>
  );
}
