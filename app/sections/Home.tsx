import Section from "../components/Section";

export default function Home() {
  return (
    <Section id="home" className="mb-32">
      <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-100 md:text-6xl lg:text-7xl">
        Asaf Zenou
      </h1>
      <p className="mb-8 text-xl font-light text-gray-400 md:text-2xl">
        Third-year Software & Systems Engineering student at Ben-Gurion
        University
      </p>
      <p className="max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
        Software & Systems Engineering student at BGU and Software Engineer at
        Intel. Experienced in backend development, SQL optimization, ETL
        pipelines, and RESTful APIs. Skilled in Python, Java, C/C++, SQL, and
        tools like Airflow, Docker, Git, and ELK. Strong foundations in
        algorithms, data structures, and software engineering.
      </p>
    </Section>
  );
}

