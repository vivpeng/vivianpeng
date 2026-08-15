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
                flex
                items-center
                justify-center
                px-8
                py-24
                overflow-hidden
            "
        >
            {/* Clouds go here */}

            <div
                className="
                    relative
                    z-10
                    w-full
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    gap-6
                "
            >
                <About />
                <Projects />
            </div>
        </section>
    );
}

export default Main;