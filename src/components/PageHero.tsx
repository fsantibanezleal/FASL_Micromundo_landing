import { Link } from "react-router-dom";

type PageHeroProps = {
  title: string;
  description: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container page-hero__content" data-reveal>
        <p className="eyebrow">MicroMundo</p>
        <h1>{title}</h1>
        <p className="section-copy page-hero__copy">{description}</p>
        <div className="page-hero__breadcrumb">
          <Link to="/">Inicio</Link>
          <span>/</span>
          <strong>{title}</strong>
        </div>
      </div>
      <div className="page-hero__shape page-hero__shape--one" />
      <div className="page-hero__shape page-hero__shape--two" />
      <div className="section-mountain section-mountain--page" aria-hidden="true" />
    </section>
  );
}
