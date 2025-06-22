
import React, { useState } from 'react';
import { SiGithub } from "react-icons/si";
import { FaExternalLinkAlt, FaCode, FaStar, FaImages } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const ProjectCard = ({ name, description, technologies, link, github, images, features }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-gradient-to-br from-white/80 to-lavender-50/80 backdrop-blur-sm 
                 rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 
                 transform hover:-translate-y-2 border border-lavender-200 
                 shadow-lg group max-w-md mx-auto relative overflow-hidden"
    >
      {/* Project Header */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-lavender-700 group-hover:text-purple-600 
                       transition-colors duration-300 flex items-center gap-2">
          <FaCode className="text-lavender-500" />
          {name}
        </h2>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {description}
        </p>
      </div>

      {/* Image Counter Badge */}
      {images.length > 1 && (
        <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm 
                        px-2 py-1 rounded-full text-xs font-medium text-gray-700 
                        flex items-center gap-1 border border-lavender-200">
          <FaImages className="text-lavender-500" />
          {currentImageIndex + 1}/{images.length}
        </div>
      )}

      {/* Image Carousel */}
      <div className="relative mb-4 rounded-xl overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={true}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 3
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          effect="fade"
          className="h-48 rounded-xl"
          onSlideChange={(swiper) => setCurrentImageIndex(swiper.activeIndex)}
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="relative h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm 
                                px-3 py-2 rounded-lg shadow-lg border border-lavender-200">
                  <span className="text-sm font-semibold text-gray-800">
                    {image.title}
                  </span>
                </div>
                {/* Image overlay on hover */}
               
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Technologies */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
          <FaStar className="text-yellow-500 text-xs" />
          Technologies
        </h3>
        <div className="flex flex-wrap gap-1">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-gradient-to-r from-lavender-100 to-pink-100 
                         text-lavender-700 rounded-full border border-lavender-200 
                         hover:from-lavender-200 hover:to-pink-200 transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Key Features</h3>
        <ul className="space-y-1">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="text-xs text-gray-600 flex items-start gap-1">
              <span className="text-lavender-500 mt-1">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Action Links */}
      <div className="flex justify-between items-center pt-2 border-t border-lavender-100">
        {link && (
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-lavender-600 hover:text-purple-600 
                       transition-colors text-sm font-medium"
          >
            <FaExternalLinkAlt className="text-xs" />
            Live Demo
          </motion.a>
        )}
        {github && (
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 
                       transition-colors text-sm font-medium"
          >
            <SiGithub className="text-sm" />
            Source Code
          </motion.a>
        )}
      </div>

      {/* Hover Effect Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 bg-gradient-to-br from-lavender-400/10 to-pink-400/10 
                   rounded-2xl pointer-events-none transition-opacity duration-300"
      />
    </motion.div>
  );
};

export default ProjectCard;