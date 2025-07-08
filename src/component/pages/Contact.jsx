import React, { useState } from "react";
import { CgMail } from "react-icons/cg";
import { FaHeart, FaLinkedin, FaGithub } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://portfolio-stvv.onrender.com/api/v1/contactUs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success) {
        setSent(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error(data.message || 'Failed to send message');
      }
    } catch (error) {
      toast.error(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white via-lavender-300 to-pink-200 py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white/90 rounded-3xl shadow-xl p-8 md:p-10 border border-lavender-200"
      >
        <div className="flex flex-col items-center mb-6">
          <div className="bg-gradient-to-r from-lavender-400 to-pink-400 rounded-full p-4 mb-2 shadow-md">
            <CgMail className="text-3xl text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-1 text-center">
            Contact <span className="text-lavender-600">Me</span>
          </h1>
          <p className="text-gray-500 text-center text-base max-w-xs">
            Have a question, project, or just want to say hi? Drop a message below!
          </p>
        </div>
        <AnimatePresence>
          {!sent ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              <div>
                <label htmlFor="name" className="block text-lavender-700 font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-lavender-200 bg-lavender-50 px-4 py-2 text-gray-800 focus:outline-none focus:border-pink-400 transition-colors placeholder:text-lavender-400"
                  placeholder="Your name"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lavender-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-lavender-200 bg-lavender-50 px-4 py-2 text-gray-800 focus:outline-none focus:border-pink-400 transition-colors placeholder:text-lavender-400"
                  placeholder="you@email.com"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lavender-700 font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full rounded-xl border border-lavender-200 bg-lavender-50 px-4 py-2 text-gray-800 focus:outline-none focus:border-pink-400 transition-colors placeholder:text-lavender-400 resize-none"
                  placeholder="Type your message..."
                  disabled={isSubmitting}
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-lavender-500 to-pink-400 shadow-md transition-all duration-200 mt-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-pink-500 hover:to-lavender-400'}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-8"
            >
              <div className="bg-gradient-to-r from-lavender-400 to-pink-400 rounded-full p-4 mb-2 shadow-md">
                <FaHeart className="text-3xl text-white animate-bounce" />
              </div>
              <h2 className="text-2xl font-bold text-lavender-600 mb-1 text-center">Thank you!</h2>
              <p className="text-gray-600 text-center mb-4">Your message has been sent. I'll get back to you soon.</p>
              <button
                className="px-6 py-2 bg-gradient-to-r from-lavender-500 to-pink-400 text-white rounded-xl font-bold hover:from-pink-500 hover:to-lavender-400 transition-colors"
                onClick={() => setSent(false)}
              >
                Send Another Message
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="mt-8 flex flex-col items-center gap-2">
          <span className="text-gray-400 text-sm">Or connect with me:</span>
          <div className="flex gap-4 mt-1">
            <a href="https://www.linkedin.com/in/rashika-sharma2712" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-lavender-100 hover:bg-pink-100 transition-colors shadow-sm">
              <FaLinkedin className="text-2xl text-lavender-600" />
            </a>
            <a href="mailto:rashikasharma2712@gmail.com" className="p-2 rounded-full bg-lavender-100 hover:bg-pink-100 transition-colors shadow-sm">
              <CgMail className="text-2xl text-pink-500" />
            </a>
            <a href="https://github.com/RashikaSharma2712" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-lavender-100 hover:bg-pink-100 transition-colors shadow-sm">
              <FaGithub className="text-2xl text-gray-700" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;