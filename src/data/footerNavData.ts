type FooterLink = {
  label: string;
  href: string;
  icon?: "Mail" | "instagram" | "tiktok"
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

export const footerNavData: FooterSection[] = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "/" },
      { label: "About me", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "How I Build", href: "/how-i-build" },
      { label: "Creative Process", href: "/creative-process" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "For Brands",
    links: [
      { label: "Work With Me", href: "mailto:hello@kaithuerta.com" },
      { label: "Content Strategy Call", href: "https://calendly.com/your-link" },
    ],
  },
  {
    title: "Let's Connect",
    links: [
      { label: "hello@kaithuerta.com", href: "mailto:hello@kaithuerta.com", icon:  "Mail" },
      { label: "kait.huerta", href: "https://instagram.com/kait.huerta", icon:  "instagram" },
      { label: "@kait.huerta", href: "https://tiktok.com/@kait.huerta", icon:  "tiktok" },
    ],
  },
];