import { useState } from "react";

function Polaroid({ project, index, onClick }) {
    const [hovered, setHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const rotations = [-4, 3, -2, 4, -3];
    const rotation = rotations[index % rotations.length];

    return (
        <>
            <div
                className="cursor-pointer transition-transform duration-500 z-20"
                style={{
                    transform: `rotate(${rotation}deg) scale(${hovered ? 1.05 : 1})`,
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onMouseMove={(e) =>
                    setMousePos({ x: e.clientX, y: e.clientY })
                }
                onClick={onClick}
            >
                <div className="bg-white shadow-xl p-3 w-52">
                    <div className="w-full h-36 overflow-hidden">
                        <img
                            src={project.images[0]}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <p className="mt-3 font-semibold text-sm">
                        {project.title}
                    </p>

                    <div className="flex flex-wrap gap-1 mt-2">
                        {project.tech.map((t) => (
                            <span
                                key={t}
                                className="text-[10px] border px-2 py-[2px] rounded-full"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {hovered && (
                <div
                    className="fixed z-[999] pointer-events-none bg-black text-white text-xs px-3 py-2 rounded-md max-w-[220px] shadow-lg"
                    style={{
                        left: mousePos.x,
                        top: mousePos.y - 30,
                    }}
                >
                    {project.teaser}
                </div>
            )}
        </>
    );
}

export default Polaroid;