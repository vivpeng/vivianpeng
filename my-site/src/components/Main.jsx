import { useEffect, useRef } from "react";
import About from "./About";
import Projects from "./Projects";

function Main() {
    const cloudRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("cloud-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15,
            }
        );

        cloudRefs.current.forEach((cloud) => {
            if (cloud) observer.observe(cloud);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="main"
            className="
                relative
                min-h-screen
                bg-[#FCF2EE]
                overflow-hidden
            "
        >
            {/* Top cloud transition */}
            <img
                src="/images/site_background_new.svg"
                alt=""
                className="block w-screen h-auto max-w-none"
            />

            {/* Cloud 1 - enters from left */}
            <img
                ref={(el) => (cloudRefs.current[0] = el)}
                src="/images/cloud-1.png"
                alt=""
                className="
                    cloud
                    cloud-left
                    absolute
                    w-100
                    left-[-3%]
                    top-[17%]
                    z-[100]
                "
            />

            {/* Cloud 2 - enters from left */}
            <img
                ref={(el) => (cloudRefs.current[1] = el)}
                src="/images/cloud-2.png"
                alt=""
                className="
                    cloud
                    cloud-left
                    absolute
                    w-40
                    left-[30%]
                    top-[28%]
                    z-[100]
                "
            />

            {/* Cloud 3 - enters from right */}
            <img
                ref={(el) => (cloudRefs.current[2] = el)}
                src="/images/cloud-3.png"
                alt=""
                className="
                    cloud
                    cloud-right
                    absolute
                    w-120
                    right-[-3%]
                    top-[78%]
                    z-[100]
                "
            />

            {/* Cloud 4 - enters from left */}
            <img
                ref={(el) => (cloudRefs.current[3] = el)}
                src="/images/cloud-4.png"
                alt=""
                className="
                    cloud
                    cloud-left
                    absolute
                    w-70
                    left-[-1%]
                    top-[77%]
                    z-[100]
                "
            />

            {/* Cloud 5 - enters from right */}
            <img
                ref={(el) => (cloudRefs.current[4] = el)}
                src="/images/cloud-5.png"
                alt=""
                className="
                    cloud
                    cloud-right
                    absolute
                    w-80
                    right-[12%]
                    top-[20%]
                    z-[100]
                "
            />

            {/* Cloud 6 - enters from right */}
            <img
                ref={(el) => (cloudRefs.current[5] = el)}
                src="/images/cloud-6.png"
                alt=""
                className="
                    cloud
                    cloud-right
                    absolute
                    w-70
                    right-[-5%]
                    top-[28%]
                    z-[100]
                "
            />

            {/* Cloud 7 - enters from left */}
            <img
                ref={(el) => (cloudRefs.current[6] = el)}
                src="/images/cloud-7.png"
                alt=""
                className="
                    cloud
                    cloud-left
                    absolute
                    w-99
                    left-[19%]
                    top-[78%]
                    z-[100]
                "
            />

            {/* About + Projects */}
            <div
                className="
                    relative
                    w-full
                    px-8
                    py-24
                "
            >
                {/* Content */}
                <div
                    className="
                        relative
                        z-10
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        gap-6
                    "
                >
                    <About />
                    <Projects />
                </div>
            </div>

            {/* Bottom cloud transition */}
            <img
                src="/images/background-end.png"
                alt=""
                className="block w-screen h-auto max-w-none"
            />

            {/* Footer */}
            <div className="absolute bottom-3 left-8 italic text-xs text-[#625D68]">
                © 2026 vivian peng
            </div>

            <div className="absolute bottom-3 right-8 italic text-xs text-[#625D68]">
                thanks for visiting!
            </div>
        </section>
    );
}

export default Main;