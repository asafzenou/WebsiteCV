"use client";

import Section from "../components/Section";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Contact() {
  const links = [
    {
      label: "GitHub",
      href: "https://github.com/asafzenou",
      external: true,
      icon: SiGithub,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/asaf-zenou-8362621a4/",
      external: true,
      icon: SiLinkedin,
    },
  ];

  return (
    <Section id="contact" className="mb-16">
      <h2 className="mb-16 text-3xl font-semibold tracking-tight text-gray-100 md:text-4xl">
        Contact
      </h2>
      <div className="space-y-5">
        {links.map((link, idx) => {
          const IconComponent = link.icon;
          return (
            <div key={idx}>
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="group inline-flex items-center gap-3 text-lg text-gray-300 transition-all duration-200 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-gray-950"
              >
                {IconComponent && (
                  <IconComponent className="h-5 w-5 transition-transform group-hover:scale-110" />
                )}
                <span className="relative">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all duration-200 group-hover:w-full" />
                </span>
                {link.external && (
                  <svg
                    className="ml-1 h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                )}
              </a>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

