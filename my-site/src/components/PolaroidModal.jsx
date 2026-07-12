import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

function PolaroidModal({ project, onClose }) {
    const [index, setIndex] = useState(0);

    if (!project) return null;

    const images = project.images || [project.image];

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-white w-[90%] max-w-3xl max-h-[85vh] overflow-hidden shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* image gallery */}
                <div className="relative bg-black flex items-center justify-center h-80">
                    <img
                        src={images[index]}
                        className="h-full object-cover"
                    />

                    {/* left arrow */}
                    {images.length > 1 && (
                        <button
                            className="absolute left-3 text-white text-2xl cursor-pointer"
                            onClick={() =>
                                setIndex((i) => (i - 1 + images.length) % images.length)
                            }
                        >
                            ‹
                        </button>
                    )}

                    {/* right arrow */}
                    {images.length > 1 && (
                        <button
                            className="absolute right-3 text-white text-2xl cursor-pointer"
                            onClick={() =>
                                setIndex((i) => (i + 1) % images.length)
                            }
                        >
                            ›
                        </button>
                    )}

                    {/* dots */}
                    <div className="absolute bottom-2 flex gap-1">
                        {images.map((_, i) => (
                            <div
                                key={i}
                                className={`w-2 h-2 rounded-full ${i === index ? "bg-white" : "bg-white/40"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* content */}
                <div className="p-6 overflow-y-auto">
                    {/* title */}
                    <h2 className="text-2xl font-bold">{project.title}</h2>

                    {/* text */}
                    <div className="text-sm mt-5">
                        {project.description.map((section, index) => (
                            <div key={index} className="mb-3">
                                <h3 className="font-semibold">{section.heading}</h3>
                                <p className="text-[#070C1E] mt-2">{section.text}</p>
                            </div>
                        ))}
                    </div>

                    {/* tech */}
                    <div className="flex flex-wrap gap-2 mt-8 text-[#D87F6F]">
                        {project.tech.map((t, i) => (
                            <span
                                key={i}
                                className="text-xs border px-2 py-1 rounded-full"
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* links */}
                    <div className="flex gap-4 mt-8 text-[#D87F6F]">
                        {project.github && (
                            <a className="underline" href={project.github} target="_blank" rel="noopener noreferrer">
                                GitHub <FiExternalLink className="text-sm" />
                            </a>
                        )}
                        {project.demo && (
                            <a className="underline" href={project.demo} target="_blank" rel="noopener noreferrer">
                                Demo <FiExternalLink className="text-sm" />
                            </a>
                        )}
                        {project.website && (
                            <a className="underline" href={project.website} target="_blank" rel="noopener noreferrer">
                                Check it out! <FiExternalLink className="text-sm" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PolaroidModal;