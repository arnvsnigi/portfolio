import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaCode, FaTools, FaBook, FaCogs } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiTypescript } from 'react-icons/si';

const SkillCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
    <Icon className="w-8 h-8 text-custom-orange mb-4" />
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-white/70">{description}</p>
  </div>
);

const About = () => {
  const skills = [
    {
      category: "Languages",
      skills: ["Java", "HTML/CSS", "JavaScript", "SQL", "NoSQL", "Python"],
      icon: <FaCode className="text-2xl text-orange-400" />,
    },
    {
      category: "Developer Tools",
      skills: ["VS Code", "Git"],
      icon: <FaTools className="text-2xl text-orange-400" />,
    },
    {
      category: "Libraries",
      skills: ["OpenCV", "Pandas", "Numpy", "Matplotlib"],
      icon: <FaBook className="text-2xl text-orange-400" />,
    },
    {
      category: "Technologies/Frameworks",
      skills: ["React", "Express", "Node", "AWS Cloud"],
      icon: <FaCogs className="text-2xl text-orange-400" />,
    },
  ];

  return (
    <div className="min-h-screen py-20 relative bg-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
                      from-orange-500/20 via-orange-500/10 to-transparent opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-black" />
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-gray-900 to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* About Me Title and Bio */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mb-8"></div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-white/80 leading-relaxed">
              I'm a passionate Full Stack Developer with a focus on creating elegant solutions 
              to complex problems. With a strong foundation in both frontend and backend technologies, 
              I strive to build applications that are not only functional but also provide an exceptional user experience.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-8 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 text-center">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto px-3 md:px-4">
            {/* MS Ramaiah */}
            <div className="bg-white/10 backdrop-blur-xl p-4 md:p-6 rounded-xl md:rounded-2xl aspect-[2/1.5] md:aspect-square group relative overflow-hidden flex flex-col justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-orange-600/20 to-orange-700/20 
                            opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative z-10">
                <h4 className="text-base md:text-xl font-semibold text-white leading-tight md:leading-normal">B.E. Information Science & Engineering</h4>
                <p className="text-orange-400 font-medium mt-1 md:mt-2 text-sm md:text-base leading-tight">MS Ramaiah Institute of Technology</p>
                <div className="mt-2 md:mt-4">
                  <p className="text-white/80 text-sm md:text-sm leading-tight">November 2021 – November 2025</p>
                  <p className="text-white font-semibold mt-1 md:mt-1 text-sm md:text-base">CGPA: 9.41</p>
                </div>
                <p className="text-white/80 text-sm md:text-sm mt-2 md:mt-4 leading-tight">Bengaluru, Karnataka</p>
              </div>
            </div>

            {/* Class 12 */}
            <div className="bg-white/10 backdrop-blur-xl p-4 md:p-6 rounded-xl md:rounded-2xl aspect-[2/1.5] md:aspect-square group relative overflow-hidden flex flex-col justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-orange-600/20 to-orange-700/20 
                            opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative z-10">
                <h4 className="text-base md:text-xl font-semibold text-white leading-tight md:leading-normal">Higher Secondary Class 12</h4>
                <p className="text-orange-400 font-medium mt-1 md:mt-2 text-sm md:text-base leading-tight">Delhi Public School</p>
                <div className="mt-2 md:mt-4">
                  <p className="text-white/80 text-sm md:text-sm leading-tight">July 2019 – July 2021</p>
                  <p className="text-white font-semibold mt-1 md:mt-1 text-sm md:text-base">Percentage: 95.1%</p>
                </div>
                <p className="text-white/80 text-sm md:text-sm mt-2 md:mt-4 leading-tight">Bhopal, Madhya Pradesh</p>
                <p className="text-white/80 text-sm md:text-sm mt-1 md:mt-1 leading-tight">CBSE</p>
              </div>
            </div>

            {/* Class 10 */}
            <div className="bg-white/10 backdrop-blur-xl p-4 md:p-6 rounded-xl md:rounded-2xl aspect-[2/1.5] md:aspect-square group relative overflow-hidden flex flex-col justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-orange-600/20 to-orange-700/20 
                            opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative z-10">
                <h4 className="text-base md:text-xl font-semibold text-white leading-tight md:leading-normal">Secondary Education Class 10</h4>
                <p className="text-orange-400 font-medium mt-1 md:mt-2 text-sm md:text-base leading-tight">Delhi Public School</p>
                <div className="mt-2 md:mt-4">
                  <p className="text-white/80 text-sm md:text-sm leading-tight">July 2019</p>
                  <p className="text-white font-semibold mt-1 md:mt-1 text-sm md:text-base">Percentage: 95.3%</p>
                </div>
                <p className="text-white/80 text-sm md:text-sm mt-2 md:mt-4 leading-tight">Bhopal, Madhya Pradesh</p>
                <p className="text-white/80 text-sm md:text-sm mt-1 md:mt-1 leading-tight">CBSE</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Experience Section */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-6">My Experience</h3>
            
            {/* Faircent Experience */}
            <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl space-y-4 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-orange-600/20 to-orange-700/20 
                            opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative z-10">
                <h4 className="text-xl font-semibold text-white">Full Stack Developer Intern</h4>
                <p className="text-orange-400 font-medium">Faircent</p>
                <p className="text-white/80">September 2022 – October 2022</p>
                <p className="text-white/80 text-sm">Gurugram, Haryana</p>
                <ul className="list-disc list-inside text-white/80 space-y-2 mt-4">
                  <li>Developed Node.js backend and React frontend for user management and identity verification.</li>
                  <li>Implemented OCR technology for automated user authentication and profile management.</li>
                </ul>
              </div>
            </div>

            {/* Club Cypher Experience */}
            <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl space-y-4 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-orange-600/20 to-orange-700/20 
                            opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative z-10">
                <h4 className="text-xl font-semibold text-white">Head Developer</h4>
                <p className="text-orange-400 font-medium">Club Cypher</p>
                <p className="text-white/80">July 2019 – October 2020</p>
                <p className="text-white/80 text-sm">Bhopal, Madhya Pradesh</p>
                <ul className="list-disc list-inside text-white/80 space-y-2 mt-4">
                  <li>Led a web development team of 20+ developers, optimizing website performance and user engagement.</li>
                  <li>Organized workshops and hackathons with 250+ active participants.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-6">My Skills</h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: FaCode,
                  title: "Programming Languages",
                  description: "Proficient in Java, JavaScript, Python, with expertise in SQL and NoSQL databases for robust application development."
                },
                {
                  icon: FaTools,
                  title: "Development Tools",
                  description: "Experienced with VS Code and Git for efficient code development, version control, and collaborative programming."
                },
                {
                  icon: FaBook,
                  title: "Libraries & Tools",
                  description: "Skilled in data manipulation and visualization using OpenCV, Pandas, Numpy, and Matplotlib for complex data processing."
                },
                {
                  icon: FaCogs,
                  title: "Frameworks & Cloud",
                  description: "Expert in full-stack development with React, Express, Node.js, and AWS Cloud services for scalable applications."
                }
              ].map((skill, index) => (
                <div key={index} 
                     className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-orange-600/20 to-orange-700/20 
                                opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <skill.icon className="w-8 h-8 text-orange-400" />
                      <h4 className="text-lg font-semibold text-white">{skill.title}</h4>
                    </div>
                    <p className="text-white/80">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Coding Profiles Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">Coding Profiles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* LeetCode Profile */}
            <div className="bg-white/10 backdrop-blur-xl p-5 rounded-2xl group relative overflow-hidden flex flex-col justify-center h-64">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-orange-600/20 to-orange-700/20 
                            opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative z-10 text-center">
                <img src="https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png" 
                     alt="LeetCode" 
                     className="h-12 mx-auto mb-3"/>
                <h4 className="text-lg font-semibold text-white mb-3">LeetCode</h4>
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-orange-400 text-xl font-bold">667+</p>
                    <p className="text-white/80 text-sm">Problems Solved</p>
                  </div>
                  <div>
                    <p className="text-orange-400 text-xl font-bold">1825+</p>
                    <p className="text-white/80 text-sm">Contest Rating</p>
                  </div>
                </div>
                <a href="https://leetcode.com/u/arnvsnigi/" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="inline-block px-4 py-1.5 bg-orange-500/20 hover:bg-orange-500/30 text-white rounded-lg transition-all duration-300 text-sm">
                  View Profile
                </a>
              </div>
            </div>

            {/* CodeChef Profile */}
            <div className="bg-white/10 backdrop-blur-xl p-5 rounded-2xl group relative overflow-hidden flex flex-col justify-center h-64">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-orange-600/20 to-orange-700/20 
                            opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative z-10 text-center">
                <img src="https://cdn.codechef.com/images/cc-logo.svg" 
                     alt="CodeChef" 
                     className="h-12 mx-auto mb-3 invert"/>
                <h4 className="text-lg font-semibold text-white mb-3">CodeChef</h4>
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-orange-400 text-xl font-bold">3★</p>
                    <p className="text-white/80 text-sm">Rating</p>
                  </div>
                  <div>
                    <p className="text-orange-400 text-xl font-bold">1600+</p>
                    <p className="text-white/80 text-sm">Max Rating</p>
                  </div>
                </div>
                <a href="https://www.codechef.com/users/singh_2002" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="inline-block px-4 py-1.5 bg-orange-500/20 hover:bg-orange-500/30 text-white rounded-lg transition-all duration-300 text-sm">
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
