import React from 'react';
import {useNavigate} from 'react-router-dom';
import ProfileLogo from "../../Assets/Image/Profile.jpg";
import TypeAnimation from '../homepage/TypeAnimation';
import Resume from './Resume';
import { motion } from "framer-motion";
import { SiLeetcode } from "react-icons/si";
import { IoMdContact } from "react-icons/io";
import AboutLogo from "../../Assets/Image/About.jpg"


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-lavender-200 to-pink-200 overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto"
        >
          <div className="flex-1 text-center">
            <motion.div
              initial={{ scale: 0.95, y: 0 }}
              animate={{ scale: [0.95, 1.05, 1], y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              className="mb-8 relative"
            >
              <img 
                src={ProfileLogo} 
                alt="Profile" 
                className="w-48 h-48 rounded-full mx-auto border-4 border-lavender-300 shadow-lg hover:shadow-xl transition-shadow duration-100"
              />

             
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-3xl md:text-5xl font-extrabold mb-2 text-gray-900 leading-tight"
            >
              <span className="block text-lg md:text-2xl font-light text-gray-700 mb-1">Hi, I'm</span>
              <span className="bg-gradient-to-r from-lavender-700 via-pink-500 to-lavender-600 bg-clip-text text-transparent drop-shadow-lg inline-block relative">
                RASHIKA SHARMA
                
              </span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl md:text-2xl mt-6 mb-6 text-gray-700 font-light"
            >
              <TypeAnimation />
            </motion.div>
            <div className="flex flex-wrap items-center mt-8 gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-lavender-100 hover:bg-lavender-200 text-lavender-700 px-6 py-3 rounded-full flex items-center gap-2 shadow-sm hover:shadow-md transition-all duration-300 font-semibold"
              >
                <Resume className="w-4 h-5" />
             
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="https://leetcode.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-50 hover:bg-pink-100 text-pink-600 px-6 py-3 rounded-full flex items-center gap-2 shadow-sm hover:shadow-md transition-all duration-300 font-semibold"
              >
                <SiLeetcode className="w-5 h-5" />
                LeetCode Profile
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-full flex items-center gap-2 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 font-semibold"
                onClick={() => navigate('/contact')}
              >
                <IoMdContact className="w-5 h-5" />
                Contact Me
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Section 2 */}
      <motion.div 
  className="flex flex-col md:flex-row items-center justify-center gap-16 py-16 px-4 max-w-5xl mx-auto 
             transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.8)] hover:ring-2 hover:ring-white/60"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.2 }}
  style={{
    background: 'linear-gradient(135deg, #fff 80%, #f5f3ff 100%)',
    borderRadius: '2rem',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
  }}
>
  {/* Left */}
  <div className="flex-1 p-6 md:p-8">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-lavender-700">About Me</h2>
    <p className="text-lg text-gray-700 leading-relaxed mb-2">
      Hi, I'm <span className="font-semibold text-purple-500">Rashika Sharma</span>, a final-year B.Tech CSE student at BBD University, Lucknow.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed mb-2">
      I'm a passionate <span className="font-semibold text-pink-500">Full Stack Developer</span> with expertise in the <span className="font-semibold text-lavender-600">MERN Stack</span> and a strong foundation in <span className="font-semibold text-purple-500">Data Structures & Algorithms</span> using <span className="font-semibold text-blue-500">C++</span>.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed">
      I love building <span className="font-semibold text-pink-500">dynamic, responsive, and scalable web applications</span> and constantly exploring new technologies to grow as a developer.
    </p>
  </div>

  {/* Right */}
  <motion.div 
    className="flex-1 flex justify-center items-center"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    <div className="relative">
      <div className="absolute w-56 h-56 bg-pink-200 rounded-full blur-2xl -z-10 left-6 top-6"></div>
      <img 
        src={AboutLogo}
        alt="About"
        className="rounded-2xl w-56 h-56 object-cover shadow-xl border-4 border-lavender-100 bg-pink-200"
      />
    </div>
  </motion.div>
</motion.div>

      {/* Section 3 */}
      <motion.div 
       className="flex flex-col items-center justify-center gap-4 mb-4 pb-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-8 mt-4 bg-gradient-to-r from-white to-pink-400 bg-clip-text text-left border-b-4 border-black pb-2">Find Me On</h1>
        <div className="flex gap-10">
          <a href="https://github.com/RashikaSharma2712">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png" alt="GitHub" className="h-10 w-10" />
          </a>
          <a href="https://www.linkedin.com/in/rashika-sharma2712">
            <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="h-10 w-10"  />
          </a>
          <a href="https://leetcode.com/u/Rashika_2712/">
            <SiLeetcode className="h-10 w-10 text-black" />
          </a>
        </div>
      </motion.div>  
    </div>
  );
};

export default Home;
