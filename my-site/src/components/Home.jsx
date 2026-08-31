import { useState } from "react";
import Stars from "./Stars";
import Typewriter from "./Typewriter";

function Home() {
    const [typingComplete, setTypingComplete] = useState(false);

    return (
        <>
            <section
                id="home"
                className="
                    relative
                    min-h-screen
                    flex
                    items-center
                    justify-center
                    bg-[#070C1E]
                    text-white
                    overflow-hidden
                "
            >
                <Stars />

                <div className="relative z-10 px-6 py-4 bg-[#070C1E]/50 text-center -translate-y-12">

                    {/* Logo */}
                    <img
                        src="/images/logo.png"
                        alt="Logo"
                        className="logo-fade-in mx-auto mb-6 w-35"
                    />

                    <Typewriter
                        onComplete={() => setTypingComplete(true)}
                    />

                    <p
                        className={`text-base mt-6 ${typingComplete ? "second-fade-in" : "opacity-0"
                            }`}
                    >
                        computer science @ ubc
                    </p>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40">
                    <span className="text-xs tracking-widest -mb-2">scroll</span>
                    <span className="text-s">⌄</span>
                </div>

            </section>

            {/* <img
                src="/images/site_background_new.svg"
                alt="transition to next page"
            /> */}
        </>
    );
}

export default Home;