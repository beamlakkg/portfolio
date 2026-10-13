import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  currentPath: string;
  navigate: (path: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, currentPath, navigate }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);

    if (currentPath !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'border-b border-zinc-200/80 bg-[#f4f1ea]/90 py-3 backdrop-blur-md dark:border-zinc-800 dark:bg-[#101114]/90'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="text-xl font-semibold tracking-tight text-zinc-950 transition-opacity hover:opacity-70 dark:text-white"
        >
          Beamlak
        </button>

        <nav className="hidden md:flex items-center space-x-10">
          {['home', 'about', 'projects', 'resume', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`relative text-sm font-medium transition-colors ${
                activeSection === section
                  ? 'text-zinc-950 dark:text-white'
                  : 'text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {activeSection === section && (
                <span className="absolute -bottom-1 left-0 h-px w-full bg-zinc-950 dark:bg-white" />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800 transition-colors"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800 transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full right-0 left-0 border-b border-zinc-200 bg-[#f4f1ea]/95 backdrop-blur-md md:hidden dark:border-zinc-800 dark:bg-[#101114]/95">
          <nav className="mx-auto flex max-w-6xl flex-col space-y-1 p-4">
            {['home', 'about', 'projects', 'resume', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`rounded-lg px-4 py-2 text-left text-sm font-medium transition-colors ${
                  activeSection === section
                    ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950'
                    : 'text-zinc-700 hover:bg-white dark:text-zinc-200 dark:hover:bg-zinc-900'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;