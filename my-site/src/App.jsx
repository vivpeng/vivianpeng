import Home from "./components/Home";
import Main from "./components/Main";
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
            

            <div ref={homeRef}>
                <Home />
            </div>

            <Main/>

            {/* <About />
            <Experience />
            <Projects /> */}
        </>
    );
}

export default App;