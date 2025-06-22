import React from "react";
import { SiLeetcode } from "react-icons/si";
const Footer = ()=>{
    return(
        <div className= "className='text-black py-6 px-4 border-t-2 border-black bg-gradient-to-r from-lavender-200 to-pink-200 backdrop-blur-sm mt-0 mb-0 w-full'"


>
            <div className="max-w-[1450px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 ml-0">
                <div className=" font-semibold text-black hover:text-gray-700 transition-colors text-center md:text-left">
                    Design and Developed By Rashika Sharma
                </div>
                <div className="font-semibold text-black hover:text-gray-700 transition-colors">
                    Copyright © 2025 RS
                </div>
                <div className="flex gap-6">
                    <a 
                        href="https://github.com/RashikaSharma2712"
                        className="hover:opacity-150 transition-opacity"
                        
                        rel="noopener noreferrer"
                    >
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png" 
                            alt="GitHub" 
                            className="h-6 w-6 hover:scale-110 transition-transform" 
                        />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/rashika-sharma2712"
                        className="hover:opacity-150 transition-opacity"
                        
                        rel="noopener noreferrer"
                    >
                        <img  
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
                            alt="LinkedIn" 
                            className="h-6 w-6 hover:scale-110 transition-transform"
                        />
                    </a>
                    <a href="https://leetcode.com/u/Rashika_2712/">
                        <SiLeetcode className="h-6 w-6 hover:scale-110 transition-transform text-" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;