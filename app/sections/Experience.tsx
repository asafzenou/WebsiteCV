"use client";

import Section from "../components/Section";
import { SiIntel, SiRaspberrypi } from "react-icons/si";
import { MdSecurity, MdComputer } from "react-icons/md";

const companyIcons: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Intel: SiIntel,
  Cyber7: MdSecurity,
  "BGU Space Gurion": SiRaspberrypi,
  "Rav-Barich": MdComputer,
};

export default function Experience() {
  const experiences = [
    {
      company: "Intel",
      role: "Software Engineer Student",
      period: "Jun 2024 – Present",
      details: [
        "Backend developer working on AI-driven products",
        "Experienced in database maintenance and optimization (Microsoft SQL Server), including stored procedures, views, indexing, and performance tuning",
        "Developed and maintained ETL pipelines with Python and SQL, processed and transformed data from CSV and Parquet files, executed and monitored complex workflows via Apache Airflow",
        "Deployed and ran code in containerized environments using Docker, Kubernetes, and Rancher (developer-side usage)",
        "Maintained and developed .NET-based APIs using RESTful architecture",
        "Utilized Git and GitHub for version control and collaboration",
        "Analyzed logs and debugged issues using the ELK stack (Elasticsearch, Logstash, Kibana)",
        "Worked in an Agile team using Jira for planning and tracking",
        "Actively participated in meetings and collaborated with global teams and clients across different time zones",
      ],
    },
    {
      company: "Cyber7",
      role: "Threat Intelligence Team",
      period: "Nov 2023 – Feb 2024",
      details: [
        "Volunteered in Cyber7's Threat Intelligence Team (OSINT-WEBINT)",
        "Enhanced Python automation and identified defacement incidents on Israeli websites during Iron Sword operation",
      ],
    },
    {
      company: "BGU Space Gurion",
      role: "Flight Computer Division, Software Developer",
      period: "May 2024 – Present",
      details: [
        "Volunteering in Space Gurion, helping build a Raspberry Pi with sensors flight computer for the inaugural rocket mission",
        "The system stored and relayed data to ground computers, focusing on Python coding for efficient data management and transmission",
      ],
    },
    {
      company: "Rav-Barich",
      role: "Tech Department, IT Support",
      period: "Sep 2021 – Sep 2022",
      details: [
        "Provided on-site and remote IT support for 600 users",
        "Managed multi-server environments (AD, Exchange, DHCP)",
        "Optimized SysAid workflows",
        "Handled diverse hardware/software/network issues",
      ],
    },
  ];

  return (
    <Section id="experience" className="mb-32">
      <h2 className="mb-16 text-3xl font-semibold tracking-tight text-gray-100 md:text-4xl">
        Experience
      </h2>
      <div className="space-y-16">
        {experiences.map((exp, idx) => {
          const IconComponent = companyIcons[exp.company];
          return (
            <div
              key={idx}
              className="group relative border-l-2 border-gray-800 pl-8 transition-all duration-300 hover:border-accent/30"
            >
              <div className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-800 bg-gray-950 transition-all duration-300 group-hover:border-accent group-hover:bg-accent/10">
                {IconComponent ? (
                  <IconComponent className="h-3.5 w-3.5 text-gray-400 transition-colors group-hover:text-accent" />
                ) : (
                  <div className="h-2 w-2 rounded-full bg-gray-600 transition-colors group-hover:bg-accent" />
                )}
              </div>
              <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-baseline md:gap-3">
                <div className="flex items-center gap-3">
                  {IconComponent && (
                    <IconComponent className="hidden h-6 w-6 text-gray-500 transition-colors group-hover:text-accent md:block" />
                  )}
                  <h3 className="text-xl font-semibold text-gray-100 transition-colors group-hover:text-accent md:text-2xl">
                    {exp.company}
                  </h3>
                </div>
                <span className="hidden text-gray-600 md:inline">—</span>
                <span className="text-lg font-normal text-gray-300">
                  {exp.role}
                </span>
              </div>
            <p className="mb-6 text-sm font-medium text-gray-500">
              {exp.period}
            </p>
            <ul className="space-y-3 text-gray-400">
              {exp.details.map((detail, detailIdx) => (
                <li
                  key={detailIdx}
                  className="flex items-start gap-3 transition-colors group-hover:text-gray-300"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
