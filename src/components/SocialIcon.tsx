import type { ReactElement, SVGProps } from "react";

import type { IconKind } from "../data/siteData";

type IconComponent = (props: SVGProps<SVGSVGElement>) => ReactElement;

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M14.5 8H16V5.2c-.26-.04-1.14-.12-2.18-.12-2.16 0-3.64 1.32-3.64 3.76V11H8v3.12h2.18V19h3.18v-4.88H16L16.4 11h-3.04V9.15c0-.9.24-1.15 1.14-1.15Z"
        fill="currentColor"
      />
    </svg>
  );
}

function FlickrIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="8" cy="12" r="3.15" fill="currentColor" />
      <circle cx="16" cy="12" r="3.15" fill="currentColor" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="4.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.9 9.3H4.2V19h2.7V9.3Zm.18-3.08A1.57 1.57 0 1 0 3.94 6.2a1.57 1.57 0 0 0 3.14 0ZM19.8 13.1c0-2.98-1.6-4.36-3.73-4.36-1.72 0-2.48.95-2.9 1.61V9.3h-2.7c.04.7 0 9.7 0 9.7h2.7v-5.42c0-.29.02-.58.1-.78.23-.58.75-1.18 1.63-1.18 1.15 0 1.61.88 1.61 2.17V19h2.7v-5.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M18.9 7.12c.01.18.01.36.01.54 0 5.52-4.2 11.89-11.89 11.89-2.36 0-4.55-.69-6.39-1.88.33.04.66.05 1 .05 1.96 0 3.76-.67 5.19-1.79a4.18 4.18 0 0 1-3.9-2.9c.26.04.52.07.8.07.38 0 .76-.05 1.11-.15a4.17 4.17 0 0 1-3.35-4.09v-.05c.56.31 1.2.5 1.88.52A4.17 4.17 0 0 1 2.7 5.8a11.85 11.85 0 0 0 8.6 4.36 4.71 4.71 0 0 1-.1-.95 4.17 4.17 0 0 1 7.21-2.85 8.2 8.2 0 0 0 2.64-1.01 4.18 4.18 0 0 1-1.83 2.3 8.33 8.33 0 0 0 2.39-.65 8.96 8.96 0 0 1-2.09 2.17Z"
        fill="currentColor"
      />
    </svg>
  );
}

function WhatsappIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12.04 3.4a8.62 8.62 0 0 0-7.45 12.95L3.4 20.6l4.38-1.15a8.64 8.64 0 1 0 4.26-16.05Zm0 15.64c-1.36 0-2.7-.37-3.87-1.07l-.28-.17-2.6.68.7-2.54-.18-.3a7.16 7.16 0 1 1 6.23 3.4Zm3.93-5.37c-.21-.1-1.25-.62-1.44-.69-.2-.08-.34-.1-.49.1-.15.21-.57.69-.7.83-.13.15-.25.16-.46.05a5.77 5.77 0 0 1-1.7-1.04 6.37 6.37 0 0 1-1.19-1.48c-.13-.22-.02-.33.1-.43.11-.1.21-.25.31-.38.1-.13.13-.21.2-.36.07-.15.03-.28-.02-.38-.06-.1-.49-1.18-.67-1.61-.18-.43-.36-.37-.49-.37h-.42a.8.8 0 0 0-.58.28c-.2.2-.76.74-.76 1.8 0 1.06.77 2.08.88 2.22.11.15 1.5 2.29 3.64 3.21.51.22.9.35 1.21.45.51.16.98.14 1.35.09.41-.06 1.25-.51 1.43-1 .18-.49.18-.91.13-1-.05-.1-.18-.15-.39-.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

const iconMap: Record<IconKind, IconComponent> = {
  facebook: FacebookIcon,
  flickr: FlickrIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
  whatsapp: WhatsappIcon,
};

type SocialIconProps = {
  kind: IconKind;
  className?: string;
};

export function SocialIcon({ kind, className }: SocialIconProps) {
  const Icon = iconMap[kind];
  return <Icon className={className} strokeWidth={1.75} />;
}
