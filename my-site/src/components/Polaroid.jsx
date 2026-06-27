import { useState } from "react";

function Polaroid({ project, style, onClick }) {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <>
      <div
        className="absolute cursor-pointer transition-transform duration-300 hover:z-50 hover:scale-105"
        style={style}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={(e) => {
          setMousePos({ x: e.clientX, y: e.clientY });
        }}
        onClick={onClick}
      >
        {/* Polaroid */}
        <div className="bg-white shadow-xl p-3 w-52">
          <div className="w-full h-36 bg-gray-200 overflow-hidden">
            <img
              src={project.image}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="mt-3 font-semibold text-sm">{project.title}</p>

          <div className="flex flex-wrap gap-1 mt-2">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="text-[10px] border px-2 py-[2px] rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* hover tooltip */}
      {hovered && (
        <div
          className="fixed z-[999] pointer-events-none bg-black text-white text-xs px-3 py-2 rounded-md max-w-[220px] shadow-lg"
          style={{
            left: mousePos.x + 15,
            top: mousePos.y + 15,
          }}
        >
          {project.teaser}
        </div>
      )}
    </>
  );
}

export default Polaroid;