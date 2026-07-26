import { useEffect, useState, useRef } from "react";
import { projects } from "../data/projects";
import Polaroid from "./Polaroid";
import PolaroidModal from "./PolaroidModal";

function Projects() {
    const [selected, setSelected] = useState(null);
    const [visible, setVisible] = useState(false);

    const ref = useRef(null);
    const carouselRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.4 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    const scroll = (direction) => {
        carouselRef.current.scrollBy({
            left: direction * 250,
            behavior: "smooth",
        });
    };

    return (
        <section
            id="projects"
            ref={ref}
            className="relative min-h-screen overflow-hidden pt-24 bg-[#B9D9EB]"
        >
            <h2
                className={`text-4xl font-bold text-center mb-20 transition-all duration-3000 ease-out
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
                projects
            </h2>

            <div className="relative">
                <button
                    onClick={() => scroll(-1)}
                    className="absolute left-5 top-1/2 -translate-y-1/2 z-20 text-3xl cursor-pointer"
                >
                    ←
                </button>

                <div
                    ref={carouselRef}
                    className="
                        flex gap-12 overflow-x-auto
                        px-[40vw] py-10
                        snap-x snap-mandatory
                        scrollbar-hide
                    "
                >
                    {projects.map((project, index) => (
                        <Polaroid
                            key={project.id}
                            project={project}
                            index={index}
                            onClick={() => setSelected(project)}
                        />
                    ))}
                </div>

                <button
                    onClick={() => scroll(1)}
                    className="absolute right-5 top-1/2 -translate-y-1/2 z-20 text-3xl cursor-pointer"
                >
                    →
                </button>
            </div>

            <PolaroidModal
                project={selected}
                onClose={() => setSelected(null)}
            />
        </section>
    );
}

export default Projects;