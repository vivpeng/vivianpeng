import { useEffect, useState, useRef} from "react";

function ExperienceItem({ company, location, role, period, logo, children }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="py-6 border-b border-black/10">
            {/* clickable header row */}
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center text-left group"
            >
                {/* LEFT: logo + company + location */}
                <div className="flex-1 flex items-center gap-1">
                    {/* logo */}
                    <img
                        src={logo}
                        alt={`${company} logo`}
                        className="w-20 h-20 rounded-full object-contain"
                    />

                    {/* text */}
                    <div>
                        <p>{company}</p>
                        <p className="text-sm text-gray-600">{location}</p>
                    </div>
                </div>

                {/* RIGHT: role + period */}
                <div className="flex-1 text-right">
                    <p>{role}</p>
                    <p className="text-sm text-gray-600">{period}</p>
                </div>

                {/* arrow */}
                <div
                    className={`ml-4 text-gray-400 transition-transform duration-300 group-hover:text-black ${open ? "rotate-180" : ""
                        }`}
                >
                    ▼
                </div>
            </button>

            {/* dropdown content */}
            <div
                className={`
        overflow-hidden
        transition-all duration-500 ease-in-out
        ${open ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}
    `}
            >
                <div className="text-sm text-gray-700">
                    {children}
                </div>
            </div>
        </div>
    );
}

function Experience() {

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

    return (
        <section
            id="experience"
            ref = {ref}
            className="bg-[#B9D9EB] pt-24"
        >
            <div className={`w-full max-w-4xl mx-auto px-6 transition-all duration-3000 ease-out
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} `}>
                <h2 className="text-4xl font-bold mb-10">experience</h2>

                <div className="space-y-6">
                    <ExperienceItem
                
                        company="Royal Bank of Canada"
                        location="Vancouver, BC"
                        role="Quality Assurance Automation Engineer"
                        period="May 2026 – Aug 2026"
                        logo="/images/rbc-logo.png"
                    >
                        <ul className="list-disc pl-5 space-y-5 text-black text-left leading-relaxed">
                            <li>Built automated regression tests using Python and Playwright to validate UI functionality, API behavior, and end-to-end scenarios for client-facing and internal financial platforms. </li>
                            <li>Increased automated test reliability and coverage by debugging failures through log analysis, code tracing, UI validation, and targeted fixes to address script, data, and application issues.</li>
                            <li>Ensured production readiness across QAT/UAT environments by validating application behavior through SQL queries, API responses, and database verification, identifying defects before release.</li>
                            <li>Expanded automated testing capabilities by designing scalable test structures based on existing frameworks and onboarding new applications into regression testing pipelines.</li>
                            <li>Collaborated with team in Agile sprint workflows to investigate defects, validate fixes, and deliver production-ready features.</li>
                        </ul>
                    </ExperienceItem>
                </div>
            </div>
        </section>
    );
}

export default Experience;