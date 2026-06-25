import Stars from "./Stars";
import Typewriter from "./Typewriter"

function Home() {
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

                <div className="relative z-10 px-6 py-4 bg-[#070C1E]/80">
                    <h1 className="text-5xl mb-6 first-fade-in">
                        vivian peng
                    </h1>

                    <p className="text-mid mb-6 italic second-fade-in">
                        computer science @ UBC · qa automation engineer @ RBC
                    </p>

                    <Typewriter />
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