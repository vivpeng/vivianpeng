function About() {
    return (
        <div
            className="
                h-[600px]
                rounded-[2rem]
                bg-white/70
                border border-white
                shadow-sm
                p-8
                flex
                flex-col
            "
        >
            <h2 className="text-xl text-[#27243A] text-left mynerve">
                about me ‧˚₊⊹
            </h2>

            <div
                className="
                    mt-3
                    overflow-y-auto
                    text-[#625D68]
                    text-sm
                    text-left
                "
            >
                <p className="italic mt-3">
                    i love exploring and learning new things, whether through building software, picking up new activities, or meeting various people along the way.
                    especially drawn to where creativity and code come together, my goal is to create meaningful experiences and real impact through what i design and build.
                </p>
                <p className="mt-5">
                    ✦ computer science @ university of british columbia
                </p>

                <p className="mt-5">
                    ✦ quality assurance automation @ royal bank of canada
                </p>
                <p className="mt-1 ml-4">
                    - python
                </p>
                <p className="mt-1 ml-4">
                    - playwright
                </p>
                <p className="mt-1 ml-4">
                    - sql
                </p>

                <p className="mt-5">
                    ✦ interests
                </p>
                <p className="mt-1 ml-4">
                    - pen sketching & piano
                </p>
                <p className="mt-1 ml-4">
                    - horror, indie games & podcasts
                </p>
                <p className="mt-1 ml-4">
                    - swimming
                </p>
                
            </div>

            {/* Social links */}
            <div
                className="
                    mt-12
                    pt-7
                    flex
                    items-center
                    justify-center
                    gap-6
                    text-sm
                    text-[#625D68]
                "
            >
                <a
                    href="https://github.com/vivpeng"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#d87f6f] transition-colors duration-200 underline"
                >
                    github
                </a>

                <span className="text-[#C8C0C6]">✦</span>

                <a
                    href="https://www.linkedin.com/in/vivpeng/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#d87f6f] transition-colors duration-200 underline"
                >
                    linkedin
                </a>

                <span className="text-[#C8C0C6]">✦</span>

                <a
                    href="mailto:vivpeng@student.ubc.ca"
                    className="hover:text-[#d87f6f] transition-colors duration-200 underline"
                >
                    email
                </a>
            </div>

        </div>
    );
}

export default About;