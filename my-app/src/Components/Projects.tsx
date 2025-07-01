import Nav from "./Nav";
import "../App.css";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <>
      <div className="sm:w-3/4 bg-pink-50 mt-20 border border-4 border-pink-400 flex justify-center flex-wrap p-4 w-11/12 rounded m-auto">
        <div className="sm:w-full border border-4 bg-white border-pink-300 flex justify-between flex-wrap w-11/12 rounded m-auto p-1">
          <h6 className="small-text">https://www.joolie.codes</h6>
          <div className="relative w-3 h-6 mx-2">
            <div className="w-2 h-0.5 bg-white border border-black right-5 absolute p-2 top-0.5 m-0.5"></div>
            <div className="absolute inset-0 bg-black w-0.5 h-11/12 mx-auto rotate-45"></div>
            <div className="absolute inset-0 bg-black w-0.5 h-11/12 mx-auto -rotate-45"></div>
          </div>
        </div>

        <div className="sm:w-full border border-4 border-pink-300 flex justify-center flex-wrap p-2 w-11/12 rounded m-auto">
          <Nav />
          <div className="w-full flex gap-5 flex-wrap justify-center sm:p-8 p-2 lg:p-2 mb-20">
            {/* techmage */}
            <ProjectCard
              title="TechMage Robotics Simulator"
              description="A real-time 3D robotics simulator built with Three.js, designed to visualize and test robotic motion sequences in a web browser. I created and animated robot models in Blender, integrated them into an interactive scene with Three.js, and developed custom controls to manipulate arms and joints. I also contributed UI components in React (MUI), managed responsive layout, debugged physics issues, and supported Azure deployment pipelines and QA."
              iframeSrc="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7343301488011636736?compact=1"
              projectUrl="https://techmage.us/"
              mediaType="iframe"
              technologies={["Three.js", "React", "TypeScript", "Blender", "MUI", "Azure Gov", "Python"]} 
              />

            {/* flightsat */}
            <ProjectCard
              title="Flightsat"
              description="A secure aerospace dashboard portal built for Baxter Aerospace. The application is similar to Starlink. I led frontend development using React and TypeScript, with deployment on Azure Government Cloud and full UI/UX implementation. "
              imageUrl="/images/portfoliofsimg.png"
              mediaType="image"
              imageAlt="Flightsat aerospace dashboard screenshot"
              projectUrl="https://flightsat.com/"
              technologies={["TypeScript", "React", "TailwindCSS", "Azure Gov", "Node", "Express", "Stripe", "Salesforce API", "Quickbooks API", "Framer Motion"]}
            />


            {/* darling doll */}
            <ProjectCard
              title="Darling Doll Cosmetics Eccomerce Website"
              description=" A full stack application for my small business. I used React, TypeScript, PostgreSQL, AWS Beanstalk, Node, and Express. The site is currently shutdown to save on hosting costs, but you can view the code on GitHub."
              imageUrl="/images/darlingdollwebsite.png"
              imageAlt="darling doll cosmetics website image"
              projectUrl="https://joolie.codes/"
              technologies={["TypeScript", "React", "TailWindCSS", "PostgreSQL", "AWS", "Node", "Express"]}
              mediaType="image"
            />
            {/* project card for valorant project */}
            <ProjectCard
              title="VALORANT Collections AJAX Project"
              description="A website showcasing all the VALORANT Skins using the unofficial VALORANT API. I used vanilla JavaScript, HTML, and CSS."
              imageUrl="/images/valorantcollections.png"
              imageAlt="valorant collections website image"
              projectUrl="https://jooliecodes.github.io/valorant-collections/"
              technologies={["JavaScript", "HTML", "CSS", "AJAX", "API", "Valorant API"]}
              mediaType="image"
            />
            {/* portfolio project */}
            <ProjectCard
              title="Portfolio Website"
              description="My portfolio website showcasing my experience, skills, and projects. Created with React, TypeScript, and Tailwind CSS."
              imageUrl="/images/Gif.gif"
              imageAlt="julie's animated software engineer gif"
              projectUrl="https://joolie.codes/"
              technologies={["TypeScript", "React", "TailWindCSS"]}
              mediaType="image"
            />
          </div>
        </div>
      </div>
    </>
  );
}
