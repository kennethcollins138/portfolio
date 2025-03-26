import LandingSection from "@/components/about-me/LandingSection";
import CosmicPortal from "@/components/space/CosmicPortal";

export default function Home() {
  return (
    <div className="background-page">
      {/* TODO: make stars more random and spread out */}
      <div className="cosmic-background">
        <div className="stars"></div>
        <div className="nebula-fog"></div>
      </div>

      <LandingSection>
        {/* Separating space content and about me for easier navigation when coding. */}
        <CosmicPortal />
      </LandingSection>

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
