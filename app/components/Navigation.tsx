"use client";

import { useActiveSection } from "../hooks/useActiveSection";

export default function Navigation() {
  const sectionIds = ["home", "experience", "skills", "contact"];
  const activeSection = useActiveSection(sectionIds);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-900/50 bg-gray-950/80 backdrop-blur-md supports-[backdrop-filter]:bg-gray-950/60">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <button
          onClick={() => scrollToSection("home")}
          className="text-lg font-medium text-gray-100 transition-all duration-200 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-gray-950"
        >
          Asaf Zenou
        </button>
        <div className="flex gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-gray-950 ${
                  isActive
                    ? "text-gray-100"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent transition-all duration-200" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

