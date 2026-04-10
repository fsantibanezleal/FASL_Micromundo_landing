import { Mail, MapPin, Phone, Send } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";

import { PageHero } from "../components/PageHero";
import { SectionIntro } from "../components/SectionIntro";
import { contactInfo } from "../data/siteData";

type ContactFormState = {
  name: string;
  email: string;
  school: string;
  message: string;
};

const initialState: ContactFormState = {
  name: "",
  email: "",
  school: "",
  message: "",
};

export function ContactPage() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `Consulta MicroMundo: ${form.school || form.name}`;
    const body = [
      `Nombre: ${form.name}`,
      `Email: ${form.email}`,
      `Institución: ${form.school || "No indicada"}`,
      "",
      form.message,
    ].join("\n");

    const href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        title="Contáctenos"
        description="Dirección, correo, teléfono y un formulario ligero que abre el canal de contacto sin requerir backend."
      />

      <section className="section-shell" id="formulario">
        <div className="container contact-grid">
          <div className="contact-stack">
            <SectionIntro
              eyebrow="Contacto directo"
              title="La versión nueva no necesita plugins para algo tan básico."
              description="Los datos siguen siendo los mismos del sitio actual, pero la experiencia es más clara y corta."
            />

            <article className="contact-card" data-reveal>
              <MapPin size={20} />
              <div>
                <h3>Visítenos</h3>
                <a href={contactInfo.addressHref} target="_blank" rel="noreferrer">
                  {contactInfo.address}
                </a>
              </div>
            </article>

            <article className="contact-card" data-reveal>
              <Mail size={20} />
              <div>
                <h3>Escríbenos</h3>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </div>
            </article>

            <article className="contact-card" data-reveal>
              <Phone size={20} />
              <div>
                <h3>Llámanos</h3>
                <a href={contactInfo.phoneHref}>{contactInfo.phoneDisplay}</a>
              </div>
            </article>
          </div>

          <div className="contact-form-wrap" data-reveal>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Nombre
                <input
                  type="text"
                  value={form.name}
                  required
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      name: event.target.value,
                    }))
                  }
                />
              </label>
              <label>
                Correo
                <input
                  type="email"
                  value={form.email}
                  required
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      email: event.target.value,
                    }))
                  }
                />
              </label>
              <label>
                Colegio o institución
                <input
                  type="text"
                  value={form.school}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      school: event.target.value,
                    }))
                  }
                />
              </label>
              <label>
                Mensaje
                <textarea
                  rows={7}
                  value={form.message}
                  required
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      message: event.target.value,
                    }))
                  }
                />
              </label>
              <button className="button" type="submit">
                Enviar por correo
                <Send size={18} />
              </button>
              {submitted ? (
                <p className="form-note">
                  Se abrió tu cliente de correo con el mensaje preparado.
                </p>
              ) : (
                <p className="form-note">
                  Este formulario evita servicios intermedios y usa tu correo
                  local para enviar la consulta.
                </p>
              )}
            </form>

            <div className="poster-card">
              <img
                src="/media/contact/poster.png"
                alt="Poster de MicroMundo"
                className="poster-card__image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
