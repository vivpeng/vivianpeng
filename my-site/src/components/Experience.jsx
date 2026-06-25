import { useState } from "react";

function ExperienceItem({ title, role, period, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-6 border-b border-black/10">
      {/* clickable header row */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-start text-left group"
      >
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <p className="text-gray-600">{role}</p>
          <p className="text-sm text-gray-400">{period}</p>
        </div>

        {/* subtle arrow */}
        <div
          className={`text-gray-400 transition-transform duration-300 group-hover:text-black ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </div>
      </button>

      {/* dropdown content with fade */}
      <div
        className={`
          overflow-hidden
          transition-all duration-500 ease-in-out
          ${open ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}
        `}
      >
        <div className="text-gray-700 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-[#FCF2EE] flex flex-col pt-24 px-10"
    >
      <h2 className="text-4xl font-bold mb-10">experience</h2>

      <div className="space-y-6">
        <ExperienceItem
          title="Royal Bank of Canada"
          role="Software Developer Intern"
          period="May 2026 – Aug 2026"
        >
          <ul className="space-y-2">
            <li>Built feature X using React</li>
            <li>Improved performance by 20%</li>
            <li>Collaborated with a small team</li>
          </ul>
        </ExperienceItem>

        <ExperienceItem
          title="Another Experience"
          role="Project / Club Role"
          period="2025"
        >
          <p>
            Description goes here. This section fades in smoothly instead of popping.
          </p>
        </ExperienceItem>
      </div>
    </section>
  );
}

export default Experience;