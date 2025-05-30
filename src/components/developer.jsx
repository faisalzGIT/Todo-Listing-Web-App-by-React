import { useState } from "react";

function Developer() {
  const [activeLink, setActiveLink] = useState(null);
  
  const developerInfo = {
    name: "Mohammad Faisal",
    title: "Full-Stack Web Developer",
    description: "Hi! I'm Mohammad Faisal, a passionate web developer focused on building clean and efficient web applications. I love working with modern JavaScript frameworks and creating tools that help people stay productive.",
    links: [
      {
        label: "My Portfolio",
        url: "https://faisalzportfolio.netlify.app/",
        icon: "📂",
      },
      {
        label: "GitHub",
        url: "https://github.com/faisalzGIT",
        icon: "💻",
      },
      {
        label: "LinkedIn",
        url: "https://linkedin.com/in/faisalz1",
        icon: "🖇️",
      },
    ],
  };

  return (
    <div className="mt-5 max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
      {/* Header Section */}
      <div className="mb-8 text-center">
        <div className="inline-block relative mb-2">
          <h1 className="text-3xl md:text-5xl monoton-regular font-bold  bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-purple-900 tracking-widest">Meet the Developer</h1>
          <div className="absolute h-[2px] md:h-[3px] mt-3 md:mt-0  w-full bg-gradient-to-r from-purple-700 to-purple-900 bottom-[-1] rounded-full"></div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gradient-to-r from-purple-50 to-purple-100   p-6 rounded-xl shadow-md border border-purple-100 mb-8 ">

        <p className="text-purple-800 text-lg font-medium leading-relaxed">
          {developerInfo.description}
        </p>
      </div>

      {/* Links Section */}
      <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl shadow-md border border-purple-100  ">
        <h2 className="text-xl md:text-3xl font-semibold text-purple-900 mb-4 border-l-4 border-purple-900 pl-3 ">
          Connect With Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {developerInfo.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white hover:bg-purple-200 transition-all duration-300 p-4 rounded-lg flex flex-col items-center justify-center text-center border-2 border-purple-200 hover:border-purple-400"
              onMouseEnter={() => setActiveLink(index)}
              onMouseLeave={() => setActiveLink(null)}
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {link.icon}
              </div>
              <span className="font-semibold text-purple-900">
                {link.label}
              </span>
              <div className={`h-1 bg-purple-600 rounded-full mt-2 duration-300 ${activeLink === index ? 'w-16' : 'w-0'}`}></div>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 text-center text-purple-300 text-sm">
        © {new Date().getFullYear()} Mohammad Faisal | Made with passion
      </div>
    </div>
  );
}

export default Developer;