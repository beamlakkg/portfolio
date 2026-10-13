import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import AllProjects from './pages/AllProjects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const getCurrentPath = () => window.location.pathname || '/';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentPath, setCurrentPath] = useState(getCurrentPath);

  const navigate = (path: string) => {
    const nextPath = path === '/' ? '/' : path.startsWith('/') ? path : `/${path}`;

    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
    }

    setCurrentPath(nextPath);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (currentPath !== '/') {
        return;
      }

      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionId = section.getAttribute('id') || '';
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    const handlePopState = () => {
      setCurrentPath(getCurrentPath());
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [currentPath]);

  useEffect(() => {
    if (currentPath === '/allproject' || currentPath.startsWith('/allproject/')) {
      setActiveSection('projects');
    } else if (currentPath === '/') {
      setActiveSection('home');
    }
  }, [currentPath]);

  const isAllProjectRoute = currentPath === '/allproject' || currentPath.startsWith('/allproject/');

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#f4f1ea] text-zinc-900 transition-colors duration-300 dark:bg-[#101114] dark:text-zinc-100">
        <Navbar activeSection={activeSection} currentPath={currentPath} navigate={navigate} />
        <main>
          {isAllProjectRoute ? (
            <AllProjects currentPath={currentPath} navigate={navigate} />
          ) : (
            <>
              <Home />
              <About />
              <Projects navigate={navigate} />
              <Resume />
              <Contact />
            </>
          )}
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;