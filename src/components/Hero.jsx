import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { ReactTyped } from "react-typed";
import profilePic from '../assets/profile.jpeg';  // Import the image
import resume from '../assets/resume.pdf';

const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-white/70 hover:text-orange-400 px-4 py-2 rounded-lg hover:bg-white/5 backdrop-blur-sm transition-all duration-300"
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </a>
);

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] relative flex items-center justify-center bg-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-orange-500/20 rounded-full blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-orange-600/20 rounded-full blur-3xl -bottom-20 -right-20"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-12 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            {/* Mobile Profile Picture */}
            <div className="lg:hidden flex justify-center mb-8">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-orange-500/20 backdrop-blur-xl">
                <img
                  src={profilePic}
                  alt="Arnav Singh"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-white">
                Hi 👋, I'm <ReactTyped className="text-orange-400" strings={["Arnav Singh"]} typeSpeed={40} />
              </h1>
              <h2 className="text-2xl lg:text-3xl text-white/80">
                Java and MERN Developer
              </h2>
            </div>

            <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Software developer with a passion for turning complex problems into elegant solutions. 
              Specializing in full-stack development with a keen eye for performance optimization 
              and user-centric design. Always eager to embrace new technologies and contribute to 
              innovative projects.
            </p>

            {/* Social Links */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 pt-4">
              <SocialLink
                href="https://github.com/arnvsnigi"
                icon={FiGithub}
                label="GitHub"
              />
              <SocialLink
                href="https://www.linkedin.com/in/arnav-singh-4746041aa/"
                icon={FiLinkedin}
                label="LinkedIn"
              />
              <SocialLink
                href="mailto:arnvsnigi@gmail.com"
                icon={FiMail}
                label="Email"
              />
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href={resume}
                download="Arnav_Singh_Resume.pdf"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-xl text-white rounded-xl hover:bg-orange-500/20 transition-all duration-300 transform hover:scale-105"
              >
                <FiDownload className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="hidden lg:block relative">
            <div className="relative w-full aspect-square rounded-full bg-gradient-to-br from-orange-500/20 to-transparent p-8">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-500/20 to-transparent backdrop-blur-xl overflow-hidden">
                {/* Profile Image */}
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-orange-500/20">
                  <img
                    src={profilePic}
                    alt="Arnav Singh"
                    className="w-full h-full object-cover object-center transform scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;