import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypeAnimation = () => {
    return (
        <div className="lg:text-5xl  font-sans sm:text-2xl text-black font-bold">
            <Typewriter
                words={[
                    'Frontend Developer',
                    'Backend Developer',
                    'MERN Stack Developer',
                    'Web Developer',
                    'React Developer'
                ]}
                loop={0}            
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={70}
                delaySpeed={900}
            />
        </div>
    );
};

export default TypeAnimation;