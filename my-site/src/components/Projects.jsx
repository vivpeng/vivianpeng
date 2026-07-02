import { useEffect, useState, useRef} from "react";
import { projects } from "../data/projects";
import Polaroid from "./Polaroid";
import PolaroidModal from "./PolaroidModal";

function Projects() {
    
  const [selected, setSelected] = useState(null);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.4 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

  // polaroid scatter layout
  const layout = [
    { top: "15%", left: "10%", rotate: "-6deg" },
    { top: "10%", left: "40%", rotate: "4deg" },
    { top: "18%", left: "70%", rotate: "-3deg" },
    { top: "55%", left: "20%", rotate: "5deg" },
    { top: "60%", left: "60%", rotate: "-4deg" },
  ];

  return (
    <section
      id="projects"
      ref = {ref}
      className="relative min-h-screen overflow-hidden pt-24 bg-[#C7DDF8]"
    >
      {/* dock background */}
      {/* <div className="absolute inset-0 z-0">
        <img
          src="/images/dock.png"
          className="w-full h-full object-cover"
        />
      </div> */}

      {/* title */}
      <h2 className={`relative z-10 text-4xl font-bold text-center mb-10 transition-all duration-3000 ease-out
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} `}>
        projects
      </h2>

      {/* polaroids */}
      <div className={`relative z-10 w-full h-[80vh] transition-all duration-3000 ease-out
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} `}>
        {projects.map((project, i) => {
          const pos = layout[i];

          return (
            <Polaroid
              key={project.id}
              project={project}
              onClick={() => setSelected(project)}
              style={{
                top: pos.top,
                left: pos.left,
                transform: `rotate(${pos.rotate})`,
              }}
            />
          );
        })}
      </div>

      {/* modal */}
      <PolaroidModal
        project={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}

export default Projects;