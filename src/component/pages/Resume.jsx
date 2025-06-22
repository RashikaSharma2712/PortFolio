import React from "react";
import { IoMdDownload } from "react-icons/io";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    // Direct download link from Google Drive
    link.href =
      "https://drive.google.com/uc?export=download&id=1r-dnOWtId9Hf2FmBFO2wOEh0q8mxB0-l";
    link.setAttribute("download", "Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="text-white">
      {/* Resume Download Button */}
      <button
        className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-400 transition-colors duration-300 flex items-center gap-2"
        onClick={handleDownload}
      >
        <IoMdDownload className="w-5 h-5" />
        Download Resume
      </button>
    </div>
  );
};

export default Resume;
