import { useState } from "react";
import { projects } from "../data/projects";

function Projects() {
    const [selectedProject, setSelectedProject] = useState(projects[0]);
    const [selectedImage, setSelectedImage] = useState(0);

    const handleProjectChange = (project) => {
        setSelectedProject(project);
        setSelectedImage(0);
    };

    const handlePreviousImage = () => {
        setSelectedImage((current) =>
            current === 0
                ? selectedProject.images.length - 1
                : current - 1
        );
    };

    const handleNextImage = () => {
        setSelectedImage((current) =>
            current === selectedProject.images.length - 1
                ? 0
                : current + 1
        );
    };

    return (
        <div
            className="
                min-h-[600px]
                md:h-[600px]
                rounded-[2rem]
                bg-white/70
                border border-white
                shadow-sm
                p-5
                sm:p-6
                md:p-8
                flex
                flex-col
            "
        >
            {/* =========================================
                TITLE
            ========================================= */}

            <h2 className="text-xl text-[#27243A] text-left mynerve">
                projects °˖➴
            </h2>

            {/* =========================================
                PROJECT CONTENT
            ========================================= */}

            <div
                className="
                    flex-1
                    min-h-0
                    mt-3
                    grid
                    grid-cols-1
                    md:grid-cols-[3fr_2fr]
                    gap-6
                    md:gap-5
                "
            >
                {/* =====================================
                    LEFT — GALLERY
                ===================================== */}

                <div
                    className="
                        min-w-0
                        min-h-0
                        flex
                        flex-col
                        items-center
                        justify-center
                    "
                >
                    {/* Main image */}

                    <div
                        className="
                            relative
                            w-[calc(100%-1rem)]
                            sm:w-[calc(100%-2rem)]
                            md:w-full
                            aspect-[16/10]
                            rounded-2xl
                            overflow-hidden
                            bg-[#F5E8E3]
                            flex-shrink-0
                            flex
                            items-center
                            justify-center
                        "
                    >
                        <img
                            src={selectedProject.images[selectedImage]}
                            alt={`${selectedProject.title} screenshot`}
                            className="
                                w-full
                                h-full
                                object-contain
                            "
                        />

                        {/* Left + Right arrows */}

                        {selectedProject.images.length > 1 && (
                            <>
                                <button
                                    onClick={handlePreviousImage}
                                    className="
                                        absolute
                                        left-2
                                        sm:left-3
                                        top-1/2
                                        -translate-y-1/2
                                        text-[#8F8589]
                                        hover:text-[#625D68]
                                        text-2xl
                                        transition-colors
                                        duration-200
                                        cursor-pointer
                                        leading-none
                                    "
                                    aria-label="Previous image"
                                >
                                    ‹
                                </button>

                                <button
                                    onClick={handleNextImage}
                                    className="
                                        absolute
                                        right-2
                                        sm:right-3
                                        top-1/2
                                        -translate-y-1/2
                                        text-[#8F8589]
                                        hover:text-[#625D68]
                                        text-2xl
                                        transition-colors
                                        duration-200
                                        cursor-pointer
                                        leading-none
                                    "
                                    aria-label="Next image"
                                >
                                    ›
                                </button>
                            </>
                        )}
                    </div>

                    {/* Gallery thumbnails */}

                    {selectedProject.images.length > 1 && (
                        <div
                            className="
                                flex
                                gap-2
                                mt-2
                                flex-shrink-0
                                overflow-x-auto
                                pb-1
                                max-w-full
                            "
                        >
                            {selectedProject.images.map(
                                (image, index) => (
                                    <button
                                        key={image}
                                        onClick={() =>
                                            setSelectedImage(index)
                                        }
                                        className={`
                                            w-11
                                            h-8
                                            rounded-lg
                                            overflow-hidden
                                            flex-shrink-0
                                            transition-all
                                            duration-200
                                            ${
                                                selectedImage === index
                                                    ? "ring-2 ring-[#B9A2A0] opacity-100"
                                                    : "opacity-50 hover:opacity-100"
                                            }
                                        `}
                                    >
                                        <img
                                            src={image}
                                            alt=""
                                            className="
                                                w-full
                                                h-full
                                                object-cover
                                            "
                                        />
                                    </button>
                                )
                            )}
                        </div>
                    )}
                </div>

                {/* =====================================
                    RIGHT — PROJECT OVERVIEW
                ===================================== */}

                <div
                    className="
                        min-w-0
                        flex
                        flex-col
                    "
                >
    
                    {/* Project name */}

                    <h2
                        className="
                            text-base
                            sm:text-lg
                            text-[#27243A]
                            break-words
                            text-left
                            mt-2
                        "
                    >
                        {selectedProject.title}
                    </h2>

                    {/* Teaser */}

                    <p
                        className="
                            mt-2
                            text-sm
                            leading-5
                            text-[#77717A]
                            text-left
                        "
                    >
                        {selectedProject.teaser}
                    </p>

                    {/* Tech stack */}

                    <div className="mt-5">
                        <div
                            className="
                                flex
                                flex-wrap
                                gap-2
                            "
                        >
                            {selectedProject.tech.map((technology) => (
                                <span
                                    key={technology}
                                    className="
                                        px-2
                                        py-1
                                        rounded-full
                                        bg-[#F5E8E3]
                                        text-[#75646A]
                                        text-xs
                                    "
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Links */}

                    <div
                        className="
                            mt-5
                            flex
                            items-center
                            gap-5
                            text-left
                        "
                    >
                        {selectedProject.github && (
                            <a
                                href={selectedProject.github}
                                target="_blank"
                                rel="noreferrer"
                                className="
                                    text-sm
                                    text-[#62545A]
                                    hover:text-[#d87f6f]
                                    transition
                                    underline
                                "
                            >
                                github
                            </a>
                        )}

                        {selectedProject.demo && (
                            <a
                                href={selectedProject.demo}
                                target="_blank"
                                rel="noreferrer"
                                className="
                                    text-sm
                                    text-[#62545A]
                                    hover:text-[#d87f6f]
                                    transition
                                    underline
                                "
                            >
                                demo
                            </a>
                        )}

                        {selectedProject.website && (
                            <a
                                href={selectedProject.website}
                                target="_blank"
                                rel="noreferrer"
                                className="
                                    text-sm
                                    text-[#62545A]
                                    hover:text-[#d87f6f]
                                    transition
                                    underline
                                "
                            >
                                site
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* =========================================
                PROJECT SELECTOR
            ========================================= */}

            <div
                className="
                    flex-shrink-0
                    mt-5
                    pt-5
                    md:pt-7
                    border-t
                    border-[#E8E1E5]
                    flex
                    justify-start
                    md:justify-center
                    gap-5
                    overflow-x-auto
                    pb-1
                "
            >
                {projects.map((project) => (
                    <button
                        key={project.id}
                        onClick={() =>
                            handleProjectChange(project)
                        }
                        className="
                            group
                            flex
                            flex-col
                            items-center
                            gap-1.5
                            flex-shrink-0
                        "
                    >
                        {project.icon ? (
                            <img
                                src={project.icon}
                                alt={project.title}
                                className={`
                                    w-9
                                    h-9
                                    rounded-xl
                                    object-cover
                                    transition-all
                                    duration-200
                                    ${
                                        selectedProject.id === project.id
                                            ? "scale-110 shadow-md opacity-100"
                                            : "opacity-45 group-hover:opacity-90"
                                    }
                                `}
                            />
                        ) : (
                            <div
                                className={`
                                    w-9
                                    h-9
                                    rounded-xl
                                    bg-[#F5E8E3]
                                    flex
                                    items-center
                                    justify-center
                                    text-xs
                                    text-[#75646A]
                                    transition-all
                                    duration-200
                                    ${
                                        selectedProject.id === project.id
                                            ? "scale-110 shadow-md opacity-100"
                                            : "opacity-45 group-hover:opacity-90"
                                    }
                                `}
                            >
                                {project.title.charAt(0)}
                            </div>
                        )}

                        <span
                            className={`
                                text-[10px]
                                whitespace-nowrap
                                transition
                                ${
                                    selectedProject.id === project.id
                                        ? "text-[#40363B]"
                                        : "text-[#9A8E92]"
                                }
                            `}
                        >

                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Projects;