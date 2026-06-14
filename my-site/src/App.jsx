import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience"
import Projects from "./components/Projects";
import { useEffect, useState, useRef } from "react";

function App() {
  const homeRef = useRef(null);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // if Home is not visible, show header
        setShowHeader(!entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`
          fixed top-0 left-0 w-full z-50
          flex justify-center pt-6
          transition-all duration-300
          ${showHeader ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
        `}
      >
        <nav className="flex gap-10 text-sm tracking-wide text-[#0E202F]">
          <a href="#about" className="hover:opacity-60 transition">
            about
          </a>

          <a href="#experience" className="hover:opacity-60 transition">
            experience
          </a>

          <a href="#projects" className="hover:opacity-60 transition">
            projects
          </a>
        </nav>
      </header>

      <div ref={homeRef}>
        <Home />
      </div>

      <About />
      <Experience />
      <Projects />
    </>
  );
}

export default App;