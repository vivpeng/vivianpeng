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

                <div className="relative z-10 px-6 py-4 bg-[#070C1E]/50">
                    <Typewriter
                        onComplete={() => setTypingComplete(true)}
                    />

                    <p
                        className={`text-base mt-6 ${
                            typingComplete ? "second-fade-in" : "opacity-0"
                        }`}
                    >
                        ▸ computer science @ ubc
                    </p>

                    <p
                        className={`text-base mt-1 ${
                            typingComplete ? "second-fade-in" : "opacity-0"
                        }`}
                    >
                        ▸ qa automation @ rbc
                    </p>
                </div>
            </section>

            <img
                src="/images/background-transition.png"
                alt="transition to next page"
            />
        </>
    );
}

export default Home;