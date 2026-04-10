import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="section-shell not-found">
      <div className="container not-found__content" data-reveal>
        <p className="eyebrow">404</p>
        <h1>Página no encontrada</h1>
        <p className="section-copy">
          Esta versión ya no depende de rutas ocultas ni estructuras de WordPress.
          Si llegaste aquí, volvamos al punto de inicio.
        </p>
        <Link className="button" to="/">
          Ir al inicio
        </Link>
      </div>
    </section>
  );
}
