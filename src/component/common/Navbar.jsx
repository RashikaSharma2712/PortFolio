import React from 'react';
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { NavLink as navLinks } from '../../Data/Navlink';
import NameLogo from '../../Assets/Image/Name.jpg';

const Navbar = () => {
  const location = useLocation();
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
        <ul className="flex gap-8">
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
              >
                {link.title}
              </RouterNavLink>
            </li>
          ))}
        </ul>
      </div>
      {/* Empty right side for symmetry */}
      <div className="w-10" />
    </nav>
  );
};

export default Navbar; 