import React, { useState } from 'react';
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { NavLink as navLinks } from '../../Data/Navlink';
import NameLogo from '../../Assets/Image/Name.jpg';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm py-2 px-4 flex items-center justify-between fixed top-0 left-0 z-50 overflow-hidden">
      {/* Logo on the left */}
      <div className="flex items-center">
        <img
          src={NameLogo}
          alt="Logo"
          className="h-18 w-16 object-contain mr-2"
        />
      </div>
      {/* Centered Nav Links */}
      <div className="flex-1 flex justify-center">
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <RouterNavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-lg font-medium px-2 py-1 rounded transition-colors duration-200 ${
                    isActive || location.pathname === link.path
                      ? 'text-lavender-600 bg-lavender-50'
                      : 'text-gray-700 hover:text-lavender-600 hover:bg-lavender-50'
                  }`
                }
                end={link.path === '/'}
                onClick={() => setMenuOpen(false)}
              >
                {link.title}
              </RouterNavLink>
            </li>
          ))}
        </ul>
      </div>
      {/* Empty right side for symmetry */}
      <div className="w-10" />
      {/* Hamburger for mobile - moved to right */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
      >
        <span className={`block w-4 h-0.5 bg-lavender-600 mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-4 h-0.5 bg-lavender-600 mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-4 h-0.5 bg-lavender-600 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {/* Mobile Nav Dropdown */}
      <div className={`md:hidden fixed top-16 left-0 w-full bg-white shadow-lg border-t border-lavender-100 transition-all duration-300 z-40 ${menuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center gap-4 py-4">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <RouterNavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-lg font-medium px-4 py-2 rounded transition-colors duration-200 block w-full text-center ${
                    isActive || location.pathname === link.path
                      ? 'text-lavender-600 bg-lavender-50'
                      : 'text-gray-700 hover:text-lavender-600 hover:bg-lavender-50'
                  }`
                }
                end={link.path === '/'}
                onClick={() => setMenuOpen(false)}
              >
                {link.title}
              </RouterNavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 