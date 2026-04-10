import type { TeamMember } from "../data/siteData";
import { SocialIcon } from "./SocialIcon";

type TeamCardProps = {
  member: TeamMember;
};

export function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="team-card" data-reveal>
      <img src={member.image} alt={member.name} className="team-card__image" />
      <div className="team-card__body">
        <p className="eyebrow">{member.role}</p>
        <h3>{member.name}</h3>
        <p>{member.focus}</p>
        {member.links?.length ? (
          <div className="social-row">
            {member.links.map((link) => (
              <a
                key={`${member.name}-${link.label}`}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${member.name} en ${link.label}`}
                className="social-button"
              >
                <SocialIcon kind={link.icon} className="social-button__icon" />
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
