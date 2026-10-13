import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import TechMarks from '../components/TechMarks';

const Home = () => {
  const reduceMotion = useReducedMotion();

  const socialLinks = [
    { icon: Github, url: 'https://github.com/beamlakkg', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/beamlak-kagnew-48994b297', label: 'LinkedIn' },
    { icon: Mail, url: 'mailto:beamlakkg@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24 pb-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="space-y-7"
        >
          <p className="text-sm font-medium tracking-[0.18em] text-cyan-700 uppercase dark:text-cyan-300">
            Software engineering graduate
          </p>
          <div className="space-y-4">
            <h1 className="text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl dark:text-white">
              Beamlak Kagnew
            </h1>
            <p className="max-w-xl text-2xl font-medium tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
              Frontend developer and UI/UX designer.
            </p>
          </div>
          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            I design the flow, then build it. The recent work is EthioMaterial, including a mobile app with my team, insurance tools at Birrama, and the WegoAddis Tour website.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="#projects"
              onClick={(event) => {
                event.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-zinc-950"
            >
              View the work
              <ArrowUpRight size={16} />
            </a>
            {socialLinks.map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 text-zinc-700 transition-colors hover:border-zinc-950 hover:text-zinc-950 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-white dark:hover:text-white"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <p className="mb-3 text-sm font-medium text-zinc-500 dark:text-zinc-400">Tools and frameworks</p>
          <TechMarks />
        </motion.div>
      </div>

      <motion.button
        type="button"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-400 transition-colors hover:text-zinc-950 dark:hover:text-white"
        aria-label="Scroll to about"
      >
        <ArrowDown size={22} />
      </motion.button>
    </section>
  );
};

export default Home;
