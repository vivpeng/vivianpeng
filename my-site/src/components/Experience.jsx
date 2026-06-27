import { useState } from "react";

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
    return (
        <section
            id="experience"
            className="min-h-screen bg-[#C7DDF8] flex flex-col pt-24"
        >
            <div className="w-full max-w-4xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-10">experience</h2>

                <div className="space-y-6">
                    <ExperienceItem
                        company="Royal Bank of Canada"
                        location="Vancouver, BC"
                        role="Quality Assurance Automation Engineer"
                        period="May 2026 – Aug 2026"
                        logo="/images/rbc-logo.png"
                    >
                        <ul className="space-y-1">
                            <li>here</li>
                            <li>are</li>
                            <li>points</li>
                        </ul>
                    </ExperienceItem>

                    {/* <ExperienceItem ... /> */}
                </div>
            </div>
        </section>
    );
}

export default Experience;