import { useEffect, useRef, useState } from "react";

function About() {

    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    const [mountainsVisible, setMountainsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);

                    // start mountain animation slightly after about fades in
                    setTimeout(() => setMountainsVisible(true), 300);
                }
            },
            { threshold: 0.4 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="about"
            ref={ref}
            className="
                relative
                min-h-screen
                bg-[#FCF2EE]
                flex items-center justify-center
                px-6
                overflow-hidden
            "
        >
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

                <img
                    src="/images/mountain-background.png"
                    className="absolute bottom-0 left-0 w-full h-auto z-0"
                />

                <img
                    src="/images/mountain-1.png"
                    className={`absolute bottom-10 right-0 z-10
        transition-all duration-1000 ease-out w-[90vw] 
        ${mountainsVisible ? "translate-x-0 opacity-100" : "translate-x-24 opacity-0"}
    `}
                />

                <img
                    src="/images/mountain-2.png"
                    className={`absolute bottom-10 left-0 z-20
        transition-all duration-1000 ease-out delay-300 w-[90vw]
        ${mountainsVisible ? "translate-x-0 opacity-100" : "-translate-x-24 opacity-0"}
    `}
                />

                <img
                    src="/images/mountain-3.png"
                    className={`absolute bottom-0 right-0 z-30
        transition-all duration-1000 ease-out delay-500 w-[35vw]
        ${mountainsVisible ? "translate-x-0 opacity-100" : "translate-x-32 opacity-0"}
    `}
                />

                <img
                    src="/images/mountain-4.png"
                    className={`absolute bottom-0 left-0 z-40
        transition-all duration-1000 ease-out delay-700 w-[40vw]
        ${mountainsVisible ? "translate-x-0 opacity-100" : "-translate-x-32 opacity-0"}
    `}
                />

            </div>
            <div className={`relative z-50 max-w-2xl text-center transition-all duration-3000 ease-out
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                `}>
                <h2 className="text-4xl font-bold mb-6">
                    about
                </h2>

                <div className="flex justify-center mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-300">
                        <img
                            src="/images/profile.png"
                            alt="profile photo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <p className="leading-relaxed text-sm text-gray-800 mb-6">
                    Hey! I’m Vivian, a Computer Science student at the University of British Columbia.
                    I love exploring and learning new things, whether that’s through building software, picking up new activities, or meeting and talking to various people along the way.
                    <br /><br />
                    I’m especially drawn to the intersection of creativity and code.
                    As a pianist, artist, and software developer, my goal is to create meaningful experiences and real impact through the software I design and build.
                    <br /><br />
                    When I'm not doing that, you’ll usually find me swimming, journaling, listening to a podcast, or watching a horror game playthrough.
                    <br /><br />
                    See you around! I’m always happy to chat (:
                </p>

                <div className="mt-10 flex justify-center gap-5">

                    {/* GitHub */}
                    <a
                        href="https://github.com/vivpeng"
                        className="w-11 h-11 flex items-center justify-center rounded-full border hover:bg-[#FCF2EE] transition"
                        aria-label="GitHub"
                    >
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                            <path d="M12 .5C5.7.5.8 5.4.8 11.8c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.4 1.3-3.3-.1-.3-.6-1.5.1-3.1 0 0 1-.3 3.4 1.3a11.5 11.5 0 0 1 6.2 0C17.4 5.3 18.4 5.6 18.4 5.6c.7 1.6.2 2.8.1 3.1.8.9 1.3 2 1.3 3.3 0 4.5-2.8 5.5-5.4 5.8.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.2 5.4 18.3.5 12 .5z" />
                        </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/vivianzhqpeng/"
                        className="w-11 h-11 flex items-center justify-center rounded-full border hover:bg-[#FCF2EE] transition"
                        aria-label="LinkedIn"
                    >
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                            <path d="M4.98 3.5C4.98 4.9 3.87 6 2.5 6S0 4.9 0 3.5 1.12 1 2.5 1s2.48 1.1 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 5-2.7 5.3 0 6.3 3.5 6.3 8v8.5h-5V15c0-2.2 0-5-3-5s-3.4 2.3-3.4 4.8V24h-5V8z" />
                        </svg>
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:vivianzhqpeng@gmail.com"
                        className="w-11 h-11 flex items-center justify-center rounded-full border hover:bg-[#FCF2EE] transition"
                        aria-label="Email"
                    >
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                    </a>

                </div>
            </div>
        </section>
    );
}

export default About;