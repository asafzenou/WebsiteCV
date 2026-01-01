import Navigation from "./components/Navigation";
import Home from "./sections/Home";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

export default function Page() {
  return (
    <main className="min-h-screen antialiased">
      <Navigation />
      <div className="mx-auto max-w-4xl px-6 py-32 md:px-8 lg:py-40">
        <Home />
        <Experience />
        <Skills />
        <Contact />
      </div>
      <footer className="border-t border-gray-900/50 py-8">
        <div className="mx-auto max-w-4xl px-6 text-center text-sm text-gray-500 md:px-8">
          <p>© {new Date().getFullYear()} Asaf Zenou</p>
        </div>
      </footer>
    </main>
  );
}

