import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              Beamlak Kagnew
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Building elegant solutions to complex problems
            </p>
          </div>
          
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://github.com/beamlakkg"
              target="_blank"
              rel="bam github"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/beamlak-kagnew-48994b297"
              target="_blank"
              rel="bam linkedin"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com/beamlakkg"
              target="_blank"
              rel="bam twitter"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="mailto:beamlakkg@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-6 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {currentYear} Beamlak Kagnew. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;