import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import  ProfileImg from '../assets/45.png';

const Home: React.FC = () => {
  const typingRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const roles = ['Software Engineer', 'Front-end Developer', 'UI/UX Enthusiast', 'Problem Solver'];
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const type = () => {
      const currentRole = roles[currentRoleIndex];
      
      if (isDeleting) {
        if (typingRef.current) {
          typingRef.current.textContent = currentRole.substring(0, currentCharIndex - 1);
        }
        currentCharIndex--;
        typingSpeed = 50;
      } else {
        if (typingRef.current) {
          typingRef.current.textContent = currentRole.substring(0, currentCharIndex + 1);
        }
        currentCharIndex++;
        typingSpeed = 100;
      }
      
      if (!isDeleting && currentCharIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause at the end
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before typing next word
      }
      
      setTimeout(type, typingSpeed);
    };
    
    const typingTimeout = setTimeout(type, 1000);
    
    return () => clearTimeout(typingTimeout);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative pt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-2 animate-fadeIn">
              <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">Hello, I'm</h2>
              <h1 className="text-4xl md:text-6xl font-bold">
                Beamlak Kagnew
              </h1>
              <div className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 h-12 flex items-center">
                I'm a <span ref={typingRef} className="ml-2 font-medium"></span>
                <span className="animate-blink ml-1">|</span>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl animate-fadeIn animation-delay-100">
              I build exceptional and accessible digital experiences for the web and mobile. 
              Focused on creating elegant solutions to complex problems with clean, 
              efficient code and user-friendly interfaces.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fadeIn animation-delay-200">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-md"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get in Touch
              </a>
              
              <a 
                href="#projects" 
                className="px-6 py-3 border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-md hover:bg-blue-600 hover:bg-opacity-10 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Work
              </a>
            </div>
            
            <div className="flex space-x-5 pt-4 animate-fadeIn animation-delay-300">
              <a
                href="https://github.com/beamlakkg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/beamlak-kagnew-48994b297"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:beamlakkg@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2 animate-fadeIn animation-delay-400">
              <img 
                src= { ProfileImg}
                alt="Beamlak Kagnew" 
                className="w-full h-full object-cover "
              />
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-blue-600 dark:text-blue-400 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Home;