import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaArrowRight } from 'react-icons/fa';

const SocialLink = ({ href, icon: Icon, label, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 
             transition-all duration-300 group"
    style={{ '--hover-color': color }}
  >
    <Icon className={`w-6 h-6 ${label === 'GitHub' ? 'text-white' : 'text-white/80'} 
                   group-hover:text-[var(--hover-color)] transition-colors duration-300`} />
    <span className="text-white/80 group-hover:text-white font-medium">
      {label}
    </span>
  </a>
);

const FormInput = ({ label, type = "text", name, value, onChange, ...props }) => (
  <div className="relative">
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="peer w-full px-6 py-4 bg-white/15 rounded-xl text-white font-medium
                focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20
                placeholder-transparent transition-all duration-300"
      placeholder={label}
      required
      {...props}
    />
    <label
      htmlFor={name}
      className="absolute left-6 -top-6 text-sm font-medium text-white/90 peer-placeholder-shown:text-base
                peer-placeholder-shown:text-white/70 peer-placeholder-shown:top-4 
                peer-focus:-top-6 peer-focus:text-sm peer-focus:text-white
                transition-all duration-300"
    >
      {label}
    </label>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const socialLinks = [
    {
      href: 'mailto:arnsvnigi@gmail.com',
      icon: FaEnvelope,
      label: 'Email',
      color: '#EA4335'
    },
    {
      href: 'https://github.com/arnvsnigi',
      icon: FaGithub,
      label: 'GitHub',
      color: '#333333'
    },
    {
      href: 'https://www.linkedin.com/in/arnav-singh-4746041aa/',
      icon: FaLinkedin,
      label: 'LinkedIn',
      color: '#0077b5'
    },
    {
      href: 'https://twitter.com/yourusername',
      icon: FaTwitter,
      label: 'Twitter',
      color: '#1DA1F2'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 relative bg-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
                      from-custom-blue/20 via-purple-500/10 to-transparent opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-black" />
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-gray-900 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-custom-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-6 gap-12 items-start">
          {/* Social Links */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl group relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-custom-blue/20 via-purple-500/20 to-pink-500/20 
                            opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-8">Connect With Me</h3>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <SocialLink key={index} {...link} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-4">
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-custom-blue/30 to-purple-500/30 
                            rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-8">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormInput
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <FormInput
                      label="Email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      placeholder="Message"
                      className="peer w-full px-6 py-4 bg-white/15 rounded-xl text-white font-medium
                               focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20
                               resize-none placeholder-transparent transition-all duration-300"
                      required
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="absolute left-6 -top-6 text-sm font-medium text-white/90 peer-placeholder-shown:text-base
                               peer-placeholder-shown:text-white/70 peer-placeholder-shown:top-4
                               peer-focus:-top-6 peer-focus:text-sm peer-focus:text-white
                               transition-all duration-300"
                    >
                      Message
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="group relative flex items-center justify-center gap-2 w-full py-4 px-6 
                             bg-gradient-to-br from-custom-blue via-purple-500 to-pink-500 text-white 
                             font-medium rounded-xl overflow-hidden transition-all duration-500 
                             hover:shadow-xl hover:shadow-purple-500/30 active:scale-[0.98]
                             before:absolute before:inset-0 before:bg-gradient-to-tl 
                             before:from-white/20 before:to-transparent before:translate-x-[-100%]
                             hover:before:translate-x-[100%] before:transition-transform
                             before:duration-700 isolate border-2 border-transparent
                             hover:border-white/50"
                  >
                    <div className="absolute inset-0 bg-[size:400%] animate-gradient-slow
                                  bg-gradient-to-r from-custom-blue via-purple-500 to-pink-500" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                  bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
                    <div className="relative flex items-center justify-center gap-3 group-hover:scale-[1.03] 
                                  transition-transform duration-500">
                      <span className="transform group-hover:translate-x-[-4px] transition-all duration-500">
                        Send Message
                      </span>
                      <FaArrowRight className="transform group-hover:translate-x-3 transition-all duration-500 
                                             group-hover:scale-125 group-hover:rotate-[-5deg]" />
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
