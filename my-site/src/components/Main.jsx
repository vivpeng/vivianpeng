import About from "./About";
import Projects from "./Projects";

function Main() {
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

            {/* About + Projects */}
            <div
                className="
                    relative
                    w-full
                    px-8
                    py-24
                "
            >
                {/* Decorative clouds */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">

                    <img
                        src="/images/cloud-1.png"
                        alt=""
                        className="
                            cloud
                            absolute
                            w-40
                            left-[-10%]
                            top-[10%]
                        "
                    />

                    <img
                        src="/images/cloud-2.png"
                        alt=""
                        className="
                            cloud
                            absolute
                            w-52
                            right-[-12%]
                            top-[25%]
                        "
                    />

                    <img
                        src="/images/cloud-3.png"
                        alt=""
                        className="
                            cloud
                            absolute
                            w-36
                            left-[-8%]
                            bottom-[20%]
                        "
                    />

                    <img
                        src="/images/cloud-4.png"
                        alt=""
                        className="
                            cloud
                            absolute
                            w-48
                            right-[-10%]
                            bottom-[5%]
                        "
                    />

                </div>

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