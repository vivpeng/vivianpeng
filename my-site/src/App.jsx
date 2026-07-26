import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { useEffect, useState, useRef } from "react";

function App() {
    const homeRef = useRef(null);
    const [isHomeVisible, setIsHomeVisible] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsHomeVisible(entry.isIntersecting);
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
            <header className={`
            fixed top-0 left-0 w-full z-[9999]
            flex justify-center pt-6
            transition-all duration-300
            first-fade-in
            ${isHomeVisible
                    ? "text-white"
                    : "text-[#070C1E]"
                }
        `}
            >
                <nav className={`
            flex gap-10 text-sm tracking-wide px-6 py-3 rounded-full
            transition-all duration-300 bg-transparent backdrop-blur-sm

        `}
                >
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