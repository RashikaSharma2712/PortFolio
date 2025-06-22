import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaEye } from 'react-icons/fa';
import NITImage from '../../Assets/Image/NIT.jpg';
import NEXUSImage from '../../Assets/Image/NEXUS.jpg';
import IISCImage from '../../Assets/Image/IISC.jpg';
import IBMImage from '../../Assets/Image/IBM.jpg';
import HackerRankImage from '../../Assets/Image/Hackerank.jpg';
import FlipkartImage from '../../Assets/Image/FLIPKART GRID.jpg';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      id: 1,
      name: "Arjuna TechFest 1.0",
      issuer: "National Institute of Technology  Agartala",
      date: "2024",
      image: NITImage,
     
    },
    {
      id: 2,
      name: "NEXUS Certificate",
      issuer: "IIT Kanpur",
      date: "2024",
      image: NEXUSImage,
      
    },
    {
      id: 3,
      name: "Code Conquest",
      issuer: "Indian Institute of Science",
      date: "2024",
      image: IISCImage,
     
    },
    {
      id: 4,
      name: "IBM SkillBuild",
      issuer: "IBM",
      date: "2024",
      image: IBMImage,
      
    },
    {
      id: 5,
      name: "Python",
      issuer: "HackerRank",
      date: "2024",
      image: HackerRankImage,
      
    },
    {
      id: 6,
      name: "Flipkart Grid 6.0",
      issuer: "Flipkart",
      date: "2024",
      image: FlipkartImage,
      
    }
  ];

  return (
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
            <FaCertificate className="text-3xl text-lavender-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              My <span className="text-lavender-600">Certificates</span>
            </h1>
            <FaCertificate className="text-3xl text-pink-500" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of my professional certifications and achievements in various domains
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-lavender-100">
                {/* Certificate Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={certificate.image}
                    alt={certificate.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Action Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedCertificate(certificate)}
                      className="bg-white/90 text-gray-800 p-3 rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <FaEye className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-lavender-100 text-lavender-700 rounded-full text-sm font-medium">
                      {certificate.category}
                    </span>
                    <span className="text-sm text-gray-500">{certificate.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-lavender-600 transition-colors duration-300">
                    {certificate.name}
                  </h3>
                  
                  <p className="text-lavender-600 font-medium mb-3">
                    {certificate.issuer}
                  </p>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {certificate.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">{selectedCertificate.name}</h2>
                  <button
                    onClick={() => setSelectedCertificate(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.name}
                  className="w-full h-auto rounded-lg mb-6"
                />
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800">Issuer</h3>
                    <p className="text-lavender-600">{selectedCertificate.issuer}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800">Date</h3>
                    <p className="text-gray-600">{selectedCertificate.date}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800">Description</h3>
                    <p className="text-gray-600">{selectedCertificate.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-lavender-100 to-pink-100 rounded-2xl p-8 border border-lavender-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Continuously Learning & Growing
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I believe in continuous learning and professional development. 
            </p>
            
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certificates; 