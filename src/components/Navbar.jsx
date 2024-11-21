import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation } from 'react-router-dom';

// Common styles as constants
const commonLinkStyles = "hover:text-opacity-80 cursor-pointer relative group py-2";

const underlineStyles = "absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 ease-in-out group-hover:w-full";

// Menu items array for easy maintenance
const MENU_ITEMS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' }
];

// Common class strings
const MOBILE_MENU_CLASSES = {
  visible: "fixed inset-0 w-full h-screen bg-white z-[100] overflow-y-auto",
  hidden: "hidden",
  base: "w-full lg:w-1/2 lg:block lg:static lg:pt-0 lg:mt-0"
};

const MenuItem = ({ path, label, isMobile, isActive, onClick }) => (
  <li 
    className={`
      cursor-pointer relative py-2 group text-xl
      ${isMobile 
        ? isActive ? 'text-orange-500' : 'text-gray-600 hover:text-orange-500' 
        : isActive ? 'text-white' : 'text-white/80 hover:text-white'
      }
      lg:text-white/80 lg:hover:text-white
    `}
    onClick={onClick}
  >
    <Link to={path} className="relative inline-block">
      {label}
      <span 
        className={`
          absolute bottom-0 left-0 h-0.5 
          ${isMobile ? 'bg-orange-500' : 'bg-current'}
          transition-all duration-300 ease-in-out
          ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
        `}
      />
    </Link>
  </li>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();
  const isProjectsPage = location.pathname === '/projects';

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-[90] transition-all duration-300
      ${hasScrolled 
        ? 'bg-gray-900/80 backdrop-blur-lg shadow-lg' 
        : isProjectsPage ? 'bg-gray-900' : 'bg-transparent'
      }
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-3xl">
              Arnav Singh
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-white/80 focus:outline-none"
            >
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className={`hidden lg:block`}>
            <ul className="flex space-x-8">
              {MENU_ITEMS.map((item) => (
                <MenuItem
                  key={item.path}
                  {...item}
                  isActive={location.pathname === item.path}
                  isMobile={false}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${isOpen ? MOBILE_MENU_CLASSES.visible : MOBILE_MENU_CLASSES.hidden} ${MOBILE_MENU_CLASSES.base} lg:hidden`}
      >
        {/* Close button for mobile menu */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-gray-600 hover:text-orange-500 focus:outline-none z-[101]"
        >
          <HiX className="h-8 w-8" />
        </button>

        {/* Brand/Logo in mobile menu */}
        <div className="text-center mb-8 pt-8">
          <h2 className="text-3xl font-bold text-gray-800">Arnav Singh</h2>
        </div>

        <div className="container mx-auto px-6 py-12">
          <ul className="space-y-6 text-2xl text-center">
            {MENU_ITEMS.map((item) => (
              <MenuItem
                key={item.path}
                {...item}
                isActive={location.pathname === item.path}
                isMobile={true}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
