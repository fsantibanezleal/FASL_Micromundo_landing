import { Link } from "react-router-dom";

import type { TeamMember } from "../data/siteData";
import { SocialIcon } from "./SocialIcon";

type TeamCardProps = {
  member: TeamMember;
};

export function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="team-card" data-reveal>
      <div className="team-card__media">
        <Link
          to={member.profileHref}
          className="team-card__image-link"
          aria-label={`Ver perfil de ${member.name}`}
        >
          <img
            src={member.image}
            alt={member.name}
            className="team-card__image"
          />
        </Link>
      </div>

      <div className="team-card__body">
        {member.links?.length ? (
          <div className="team-card__socials" aria-label={`Redes de ${member.name}`}>
            {member.links.map((link) => (
              link.href ? (
                <a
                  key={`${member.name}-${link.label}`}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${member.name} en ${link.label}`}
                  className="social-button social-button--team"
                >
                  <SocialIcon kind={link.icon} className="social-button__icon" />
                </a>
              ) : (
                <span
                  key={`${member.name}-${link.label}`}
                  aria-hidden="true"
                  title={link.label}
                  className="social-button social-button--team social-button--team-static"
                >
                  <SocialIcon kind={link.icon} className="social-button__icon" />
                </span>
              )
            ))}
          </div>
        ) : null}

        <div className="team-card__titles">
          <div className="team-card__role">{member.role}</div>
          <h3 className="team-card__title">
            <Link to={member.profileHref}>{member.name}</Link>
          </h3>
        </div>

        <p className="team-card__excerpt">{member.focus}</p>
        <Link
          to={member.profileHref}
          className="team-card__profile-link"
          aria-label={`Abrir perfil de ${member.name}`}
        >
          Ver perfil
        </Link>
      </div>
    </article>
  );
}
