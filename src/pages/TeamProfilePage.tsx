import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { SocialIcon } from "../components/SocialIcon";
import { getTeamMemberBySlug } from "../data/siteData";
import { NotFoundPage } from "./NotFoundPage";

export function TeamProfilePage() {
  const { slug = "" } = useParams();
  const member = getTeamMemberBySlug(slug);

  useEffect(() => {
    if (member) {
      document.title = `${member.name} | MicroMundo`;
    }
  }, [member]);

  if (!member) {
    return <NotFoundPage />;
  }

  return (
    <section className="section-shell team-profile">
      <div className="container team-profile__grid">
        <div className="team-profile__media" data-reveal>
          <img
            src={member.image}
            alt={member.name}
            className="team-profile__image"
          />

          {member.links?.length ? (
            <div className="team-profile__socials">
              {member.links.map((link) =>
                link.href ? (
                  <a
                    key={`${member.slug}-${link.label}`}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${member.name} en ${link.label}`}
                    className="social-button social-button--team"
                  >
                    <SocialIcon
                      kind={link.icon}
                      className="social-button__icon"
                    />
                  </a>
                ) : (
                  <span
                    key={`${member.slug}-${link.label}`}
                    aria-hidden="true"
                    title={link.label}
                    className="social-button social-button--team social-button--team-static"
                  >
                    <SocialIcon
                      kind={link.icon}
                      className="social-button__icon"
                    />
                  </span>
                ),
              )}
            </div>
          ) : null}
        </div>

        <div className="team-profile__content" data-reveal>
          <p className="eyebrow">#micromundoteam</p>
          <h1 className="team-profile__title">{member.name}</h1>
          <p className="team-profile__role">{member.role}</p>
          <p className="team-profile__copy">{member.focus}</p>

          <div className="team-profile__actions">
            <Link to="/about-us#team" className="button button--ghost">
              <ArrowLeft size={16} />
              Volver al equipo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
