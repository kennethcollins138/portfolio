import React from "react";

export default function LandingSection({ children, classname }: { children?: React.ReactNode; classname?: string }) {
  return (
    <section className={`${classname} character-section flex flex-col items-center justify-center`}>
      {/* Name displayed above the portal */}
      <div className="header-content text-center mb-8 w-full z-20">
        <h1 className="text-8xl font-bold mb-2 text-white">Kenny Collins</h1>
        <p className="text-4xl text-blue-200">Fullstack Software Engineer</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto px-4">
        {/* Left panel - Skills */}
        <div className="hidden md:block md:w-1/4 p-4">
          <div className="flex flex-col p-6 rounded-lg bg-blue-900 bg-opacity-30 backdrop-filter backdrop-blur-sm border border-blue-700 hover:bg-opacity-40 transition-all duration-300">
            <h3 className="text-xl font-bold mb-2 text-blue-300">Skills</h3>
            <p className="text-gray-200">Languages: Typescript, Go, Python.</p>
          </div>
        </div>
        {children}
        {/* Right panel - Experience */}
        <div className="hidden md:block md:w-1/4 p-4">
          <div className="flex flex-col p-6 rounded-lg bg-blue-900 bg-opacity-30 backdrop-filter backdrop-blur-sm border border-blue-700 hover:bg-opacity-40 transition-all duration-300">
            <h3 className="text-xl font-bold mb-2 text-blue-300">Experience</h3>
            <p className="text-gray-200">Filler: Make this an experience portion or about me?</p>
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
      </div>
    </section>
  );
}
