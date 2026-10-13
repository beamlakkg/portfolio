import { motion, useReducedMotion } from 'framer-motion';
import TechMarks from '../components/TechMarks';

const About = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-sm font-medium tracking-[0.18em] text-cyan-700 uppercase dark:text-cyan-300">About</p>
          <h2 className="mt-3 max-w-xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl dark:text-white">
            Interfaces that get the job done.
          </h2>
          <div className="mt-6 max-w-xl space-y-4 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            <p>
              I am a software engineering graduate. I design in Figma and build with React, Next.js, and TypeScript.
            </p>
            <p>
              At Meson Technologies I designed EthioMaterial and I am building the mobile app with the team. The app adds price comparison, payments, and chat on top of the marketplace. At Birrama Technologies I built the insurance administration screens. I also took WegoAddis Tour from design to a live website.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="rounded-[28px] border border-zinc-200 bg-white/70 p-4 dark:border-zinc-800 dark:bg-zinc-900/60 sm:p-5"
        >
          <TechMarks compact />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
