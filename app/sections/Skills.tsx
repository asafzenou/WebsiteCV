"use client";

import Section from "../components/Section";
import {
  SiPython,
  SiPostgresql,
  SiApacheairflow,
  SiGit,
  SiJira,
  SiDocker,
  SiKubernetes,
  SiElasticsearch,
  SiDotnet,
  SiLinux,
} from "react-icons/si";
import { TbDatabase, TbBrain, TbCode, TbServer, TbNetwork, TbTerminal } from "react-icons/tb";

const skillIcons: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Python: SiPython,
  SQL: SiPostgresql,
  Airflow: SiApacheairflow,
  "Git and GitHub": SiGit,
  Jira: SiJira,
  "Docker, Kubernetes, and Rancher (developer-side use)": SiDocker,
  "ELK Stack – Elasticsearch, Logstash, Kibana": SiElasticsearch,
  "RESTful API development (.NET)": SiDotnet,
  "Data structures": TbDatabase,
  Algorithms: TbBrain,
  "Software development principles": TbCode,
  "Familiarity with Linux environment and Bash scripting": TbTerminal,
  "Network & IT": TbNetwork,
  "Working with multi-server environments": TbServer,
  "Working under pressure": TbBrain,
  "Communication skills": TbBrain,
  SOLID: TbCode,
  "Design patterns": TbCode,
};

export default function Skills() {
  const skills = [
    "Python",
    "SQL",
    "Airflow",
    "Git and GitHub",
    "Jira",
    "Docker, Kubernetes, and Rancher (developer-side use)",
    "ELK Stack – Elasticsearch, Logstash, Kibana",
    "RESTful API development (.NET)",
    "Data structures",
    "Algorithms",
    "Software development principles",
    "Familiarity with Linux environment and Bash scripting",
    "Network & IT",
    "Working with multi-server environments",
    "Working under pressure",
    "Communication skills",
    "SOLID",
    "Design patterns",
  ];

  return (
    <Section id="skills" className="mb-32">
      <h2 className="mb-16 text-3xl font-semibold tracking-tight text-gray-100 md:text-4xl">
        Skills
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, idx) => {
          const IconComponent = skillIcons[skill];
          return (
            <div
              key={idx}
              className="group flex items-start gap-3 rounded-lg border border-gray-800/50 bg-gray-900/20 p-4 transition-all duration-200 hover:border-accent/30 hover:bg-gray-900/40"
            >
              {IconComponent ? (
                <IconComponent className="mt-0.5 h-5 w-5 shrink-0 text-accent transition-transform group-hover:scale-110" />
              ) : (
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent transition-transform group-hover:scale-125" />
              )}
              <span className="text-gray-400 transition-colors group-hover:text-gray-300">
                {skill}
              </span>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
