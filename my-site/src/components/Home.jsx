import Stars from "./Stars";

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
          bg-[#0E202F]
          text-white
          overflow-hidden
        "
      >
        
        <Stars />

        <div className="absolute inset-0 pointer-events-none"></div>

        <div className="relative z-10">
          <h1 className="text-4xl mb-6">
            welcome to vivian's space
          </h1>

          <a href="#about" className="home-button">
            about
          </a>

          <a href="#experience" className="home-button">
            experience
          </a>

          <a href="#projects" className="home-button">
            projects
          </a>

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