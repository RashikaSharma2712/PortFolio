import React from "react";
import {ProjectData} from '../../Data/ProjectData';
import ProjectCard from "../../ProjectCard"
import { motion } from "framer-motion";
import { FaRocket, FaCode } from "react-icons/fa";

const Project = ()=>{
    return(
        <div className="min-h-screen bg-gradient-to-br from-white via-lavender-200 to-pink-200 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <FaRocket className="text-3xl text-lavender-600" />
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                            My <span className="text-lavender-600">Projects</span>
                        </h1>
                        <FaCode className="text-3xl text-pink-500" />
                    </div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore my latest projects showcasing modern web development and innovative solutions
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ProjectData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <ProjectCard
                                name={project.name}
                                description={project.description}
                                technologies={project.technologies}
                                link={project.link}
                                github={project.github}
                                images={project.images}
                                features={project.features}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-lavender-100 to-pink-100 rounded-2xl p-8 border border-lavender-200">
                        {/* <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Want to collaborate?
                        </h3> */}
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            I'm always excited to work on new projects and explore innovative technologies. 
                            Let's create something amazing together!
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-lavender-600 to-pink-600 text-white px-8 py-3 
                                       rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                        >
                            Get In Touch
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Project