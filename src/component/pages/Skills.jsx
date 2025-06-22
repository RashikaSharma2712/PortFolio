import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiMongodb, 
  SiExpress, 
  SiReact, 
  SiNodedotjs,
  SiCplusplus,
  SiGithub,
  SiGit,
  SiPostman,
  SiLeetcode
} from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import Spinner from "../common/Spinner";

const Skills = () => {
  const [flippedCards, setFlippedCards] = useState({});
  const [leetcodeStats, setLeetcodeStats] = useState(null);
  const [loadingLeet, setLoadingLeet] = useState(true);
  const [leetError, setLeetError] = useState(null);

  useEffect(() => {
    fetch('https://leetcode-stats-api.herokuapp.com/Rashika_2712')
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
          setLeetcodeStats(data);
        } else {
          setLeetError('Could not fetch LeetCode stats');
        }
        setLoadingLeet(false);
      })
      .catch(() => {
        setLeetError('Could not fetch LeetCode stats');
        setLoadingLeet(false);
      });
  }, []);

  const skills = [
    {
      id: 'html',
      name: 'HTML5',
      icon: <SiHtml5 className="text-6xl text-orange-600" />,
      description: 'Semantic markup, accessibility, and modern HTML5 features',
    },
    {
      id: 'css',
      name: 'CSS3',
      icon: <SiCss3 className="text-6xl text-blue-600" />,
      description: 'Responsive design, Flexbox, Grid, animations, and modern CSS',
    },
    {
      id: 'js',
      name: 'JavaScript',
      icon: <SiJavascript className="text-6xl text-yellow-500" />,
      description: 'ES6+, DOM manipulation, async programming, and modern JS',
    },
    {
      id: 'mongodb',
      name: 'MongoDB',
      icon: <SiMongodb className="text-6xl text-green-600" />,
      description: 'NoSQL database, document-based storage, and data modeling',
    },
    {
      id: 'express',
      name: 'Express.js',
      icon: <SiExpress className="text-6xl text-gray-800" />,
      description: 'Web application framework, RESTful APIs, and middleware',
    },
    {
      id: 'react',
      name: 'React.js',
      icon: <SiReact className="text-6xl text-blue-500" />,
      description: 'Frontend library, component-based architecture, and state management',
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      icon: <SiNodedotjs className="text-6xl text-green-700" />,
      description: 'Server-side JavaScript, event-driven programming, and npm ecosystem',
    },
    {
      id: 'cpp',
      name: 'C++',
      icon: <SiCplusplus className="text-6xl text-blue-700" />,
      description: 'Object-oriented programming, STL, and system-level development',
    },
    {
      id: 'dsa',
      name: 'DSA',
      icon: <FaCode className="text-6xl text-pink-700" />,
      description: 'Data Structures & Algorithms, problem-solving, and optimization',
    },
    {
      id: 'github',
      name: 'GitHub',
      icon: <SiGithub className="text-6xl text-black" />,
      description: 'Version control, collaboration, open source, and project management',
    },
    {
      id: 'git',
      name: 'Git',
      icon: <SiGit className="text-6xl text-orange-600" />,
      description: 'Version control, branching, merging, and code collaboration',
    },
    {
      id: 'postman',
      name: 'Postman',
      icon: <SiPostman className="text-6xl text-orange-600" />,
      description: 'API testing, automation, and collaboration for backend development',
    }
  ];

  const toggleCard = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-lavender-300 to-pink-200 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My <span className="text-lavender-800">Skills</span>
          </h1>
          <p className="text-3xl text-gray-600 max-w-2xl mx-auto">
            ᴴᵉʳᵉ ᵃʳᵉ ᵗʰᵉ ᵗᵉᶜʰⁿᵒˡᵒᵍⁱᵉˢ ᵃⁿᵈ ˢᵏⁱˡˡˢ ᴵ'ᵛᵉ ˡᵉᵃʳⁿᵉᵈ ᵗʰʳᵒᵘᵍʰ ᵐʸ ʲᵒᵘʳⁿᵉʸ 
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative h-64 cursor-pointer"
              onClick={() => toggleCard(skill.id)}
              style={{ perspective: 1000 }}
            >
              {/* Card Container */}
              <div
                className={`relative w-full h-full transition-transform duration-700`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flippedCards[skill.id] ? 'rotateY(180deg)' : 'none',
                }}
              >
                {/* Front of Card */}
                <div
                  className="absolute w-full h-full rounded-2xl border-2 border-transparent bg-lavender-100 backdrop-blur-md shadow-lg flex flex-col items-center justify-center p-7 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-gradient-to-r hover:from-lavender-400 hover:to-pink-400"
                  style={{ backfaceVisibility: 'hidden', boxShadow: '0 8px 32px 0 rgba(216, 144, 250, 0.15)' }}
                >
                  <div className="mb-5 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-lavender-100 to-pink-100 shadow-md">
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-1 tracking-tight drop-shadow-sm">
                    {skill.name}
                  </h3>
                  <div className="w-10 h-1 bg-gradient-to-r from-lavender-400 to-pink-400 rounded-full mb-2"></div>
                  <p className="text-xs text-lavender-700 text-center flex items-center gap-1">
                    <span className="inline-block animate-bounce">↓</span> Click to learn more
                  </p>
                </div>
                {/* Back of Card */}
                <div
                  className="absolute w-full h-full bg-gradient-to-br from-lavender-50 to-pink-50 rounded-2xl shadow-lg border border-lavender-300 flex flex-col items-center justify-center p-6"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{skill.name}</h3>
                  <p className="text-sm text-gray-700 text-center leading-relaxed">
                    {skill.description}
                  </p>
                  <div className="mt-4 w-16 h-1 bg-gradient-to-r from-lavender-400 to-pink-400 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* LeetCode Stats Section - interactive and cool */}
        <div className="my-12 w-full flex flex-col items-center">
          <h2 className="text-3xl font-bold text-black mb-6 flex items-center gap-2">
            <SiLeetcode className="text-3xl " /> LeetCode Stats
          </h2>
          {loadingLeet ? (
            <Spinner />
          ) : leetError ? (
            <div className="text-red-500">{leetError}</div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 w-full max-w-2xl">
                <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-4 flex flex-col items-center shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">
                  <span className="text-2xl font-bold text-yellow-700">{leetcodeStats.totalSolved}</span>
                  <span className="text-xs text-gray-500">Total Solved</span>
                </div>


                <div className="bg-green-50 border-2 border-green-300 rounded-xl p-4 flex flex-col items-center shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">
                  <span className="text-xl font-semibold text-green-700">{leetcodeStats.easySolved}</span>
                  <span className="text-xs text-gray-500">Easy</span>
                </div>
                <div className="bg-yellow-50 border-2 border-orange-200 rounded-xl p-4 flex flex-col items-center shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">
                  <span className="text-xl font-semibold text-orange-500">{leetcodeStats.mediumSolved}</span>
                  <span className="text-xs text-gray-500">Medium</span>
                </div>
                <div className="bg-pink-50 border-2 border-pink-300 rounded-xl p-4 flex flex-col items-center shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">
                  <span className="text-xl font-semibold text-pink-500">{leetcodeStats.hardSolved}</span>
                  <span className="text-xs text-gray-500">Hard</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-8 mb-4 w-full max-w-2xl">
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 flex flex-col items-center shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">
                  <span className="text-base font-semibold text-blue-700">{leetcodeStats.acceptanceRate}%</span>
                  <span className="text-xs text-gray-500">Acceptance</span>
                </div>
                <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-4 flex flex-col items-center shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">
                  <span className="text-base font-semibold text-purple-700">#{leetcodeStats.ranking}</span>
                  <span className="text-xs text-gray-500">Ranking</span>
                </div>
              </div>
              <img
                src={`https://leetcard.jacoblin.cool/Rashika_2712?font=volkhov&theme=light&extension=heatmap`}
                alt="LeetCode Stats"
                className="mx-auto rounded-lg shadow-lg border border-gray-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-200/20 hover:border-lavender-400mb-2"
                style={{ width: '550px', maxWidth: '100%' }}
              />
              <a href="https://leetcode.com/u/Rashika_2712/" target="_blank" rel="noopener noreferrer" className="mt-4 text-xs text-lavender-700 underline hover:text-pink-500">View Full Profile</a>
            </>
          )} 
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-lavender-700">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Always Learning</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              I'm constantly exploring new technologies and frameworks to stay updated with the latest trends in web development and software engineering.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;