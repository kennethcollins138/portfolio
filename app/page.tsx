import CosmicPortal from "@/components/space/CosmicPortal";

export default function Home() {
  return (
    <div className="background-page">
      {/* Fixed cosmic background that extends everywhere */}
      <div className="cosmic-background">
        <div className="stars"></div>
        <div className="nebula-fog"></div>
      </div>

      {/* Character section with centered portal and name above */}
      <section className="character-section flex flex-col items-center justify-center">
        {/* Name displayed above the portal */}
        <div className="header-content text-center mb-8 w-full z-20">
          <h1 className="text-5xl font-bold mb-2 text-white">Kenny Collins</h1>
          <p className="text-xl text-blue-200">Software Engineer & Developer</p>
        </div>

        {/* Main content container for portal and info panels */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto px-4">
          {/* Left panel - Skills */}
          <div className="hidden md:block md:w-1/4 p-4">
            <div className="glass-panel bg-blue-900 bg-opacity-30 backdrop-filter backdrop-blur-sm rounded-lg p-4 border border-blue-700">
              <h3 className="text-xl font-bold mb-2 text-blue-300">Skills</h3>
              <p className="text-gray-200">Filler: Think about listing frameworks/languages etc.</p>
            </div>
          </div>

          {/* Center portal */}
          <div className="md:w-2/4 flex justify-center">
            <CosmicPortal />
          </div>

          {/* Right panel - Experience */}
          <div className="hidden md:block md:w-1/4 p-4">
            <div className="glass-panel bg-blue-900 bg-opacity-30 backdrop-filter backdrop-blur-sm rounded-lg p-4 border border-blue-700">
              <h3 className="text-xl font-bold mb-2 text-blue-300">Experience</h3>
              <p className="text-gray-200">Filler: Make this an experience portion or about me?</p>
            </div>
          </div>
        </div>

        {/* Mobile-only about section */}
        <div className="w-full px-4 mt-8 md:hidden">
          <div className="glass-panel bg-blue-900 bg-opacity-30 backdrop-filter backdrop-blur-sm rounded-lg p-4 border border-blue-700">
            <h3 className="text-xl font-bold mb-2 text-center text-blue-300">About Me</h3>
            <p className="text-gray-200">
              Full-stack developer passionate about creating exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Projects section */}
      <section id="projects" className="content-section py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-white">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project cards */}
            <div className="flex flex-col p-6 rounded-lg bg-blue-900 bg-opacity-30 backdrop-filter backdrop-blur-sm border border-blue-700 hover:bg-opacity-40 transition-all duration-300">
              <div className="flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-blue-300">Frontend Development</h3>
                <p className="text-gray-300">Filler: place fashion site here.</p>
              </div>
            </div>

            <div className="flex flex-col p-6 rounded-lg bg-blue-900 bg-opacity-30 backdrop-filter backdrop-blur-sm border border-blue-700 hover:bg-opacity-40 transition-all duration-300">
              <div className="flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-blue-300">Fullstack</h3>
                <p className="text-gray-300">Describe fullstack project here.</p>
              </div>
            </div>

            <div className="flex flex-col p-6 rounded-lg bg-blue-900 bg-opacity-30 backdrop-filter backdrop-blur-sm border border-blue-700 hover:bg-opacity-40 transition-all duration-300">
              <div className="flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-blue-300">Data Engineer</h3>
                <p className="text-gray-300">Data pipeline explanation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="content-section py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-white">About</h2>
          <div className="max-w-2xl mx-auto bg-blue-900 bg-opacity-30 backdrop-filter backdrop-blur-sm p-8 rounded-lg border border-blue-700">
            <p className="text-gray-200 mb-4">Filler: Think about where to put this</p>
            <p className="text-gray-200">Need a contact section as well</p>
          </div>
        </div>
      </section>
    </div>
  );
}
