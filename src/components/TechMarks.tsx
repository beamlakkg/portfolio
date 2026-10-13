import { motion, useReducedMotion } from 'framer-motion';

interface MarkProps {
  className?: string;
}

const ReactMark = ({ className = 'h-8 w-8' }: MarkProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="2.05" fill="#61DAFB" />
    <g fill="none" stroke="#61DAFB" strokeWidth="1">
      <ellipse cx="12" cy="12" rx="10" ry="3.8" />
      <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(120 12 12)" />
    </g>
  </svg>
);

const NextMark = ({ className = 'h-8 w-8' }: MarkProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="10" className="fill-zinc-950 dark:fill-white" />
    <path d="M8 16V8h1.4l6.2 8H17V8h-1.3v6.6L9.6 8H8v8z" className="fill-white dark:fill-zinc-950" />
  </svg>
);

const TypeScriptMark = ({ className = 'h-8 w-8' }: MarkProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <rect width="24" height="24" rx="4" fill="#3178C6" />
    <path d="M5.2 10.2h5.2v1.3H8.6V18H7.1v-6.5H5.2v-1.3zm7.1 0H18v1.3h-2.1V18h-1.5v-6.5h-2.1v-1.3z" fill="white" />
  </svg>
);

const TailwindMark = ({ className = 'h-8 w-8' }: MarkProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="#38BDF8"
      d="M12 6c-2.7 0-4.4 1.3-5.2 4 1-.7 2.2-.9 3.5-.6.7.2 1.3.7 1.9 1.3C13.3 12 14.6 13 17.2 13c2.7 0 4.4-1.3 5.2-4-1 .7-2.2.9-3.5.6-.7-.2-1.3-.7-1.9-1.3C16 7 14.7 6 12 6zM6.8 13c-2.7 0-4.4 1.3-5.2 4 1-.7 2.2-.9 3.5-.6.7.2 1.3.7 1.9 1.3C8.1 19 9.4 20 12 20c2.7 0 4.4-1.3 5.2-4-1 .7-2.2.9-3.5.6-.7-.2-1.3-.7-1.9-1.3C10.8 14 9.5 13 6.8 13z"
    />
  </svg>
);

const NodeMark = ({ className = 'h-8 w-8' }: MarkProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path fill="#339933" d="M12 2.2 20.5 7v10L12 21.8 3.5 17V7L12 2.2z" />
    <path fill="#fff" d="M12 6.2 16.8 9v6L12 17.8 7.2 15V9L12 6.2zm0 1.8L8.7 10.2v4.6L12 17l3.3-2.2v-4.6L12 8z" />
  </svg>
);

const FigmaMark = ({ className = 'h-8 w-8' }: MarkProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path fill="#F24E1E" d="M9 3h3.2a3.2 3.2 0 0 1 0 6.4H9V3z" />
    <path fill="#FF7262" d="M9 9.4h3.2a3.2 3.2 0 0 1 0 6.4H9V9.4z" />
    <path fill="#A259FF" d="M9 15.8h3.2a3.2 3.2 0 1 1-3.2 3.2v-3.2z" />
    <path fill="#1ABCFE" d="M5.8 9.4A3.2 3.2 0 0 1 9 6.2v6.4a3.2 3.2 0 0 1-3.2-3.2z" />
    <path fill="#0ACF83" d="M15.4 3H12.2v6.4h3.2a3.2 3.2 0 0 0 0-6.4z" />
  </svg>
);

const GitMark = ({ className = 'h-8 w-8' }: MarkProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="#F05032"
      d="M21.6 10.4 13.6 2.4a1.6 1.6 0 0 0-2.2 0l-1.8 1.8 2.2 2.2a1.9 1.9 0 0 1 2.4 2.4l2.1 2.1a1.9 1.9 0 1 1-1.1 1.1l-2-2v5.1a1.9 1.9 0 1 1-1.6 0V10a1.9 1.9 0 0 1-1-1.7L8.4 6.1 2.4 12.1a1.6 1.6 0 0 0 0 2.2l8 8a1.6 1.6 0 0 0 2.2 0l8-8a1.6 1.6 0 0 0 0-2.2z"
    />
  </svg>
);

const MongoMark = ({ className = 'h-8 w-8' }: MarkProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path fill="#00ED64" d="M12.4 2s4.8 3.6 4.8 9.2c0 4.2-2.2 7.4-4.2 9.4-.4.4-1 .2-1.1-.3-.2-1.2-.6-3.2-.6-3.2s-.2 2.4-.7 3.4c-.2.4-.7.5-1 .2C7.6 19 5 15.6 5 11.2 5 5.6 12.4 2 12.4 2z" />
    <path fill="#001E2B" d="M12.2 21.6c.2 0 .4-.2.3-.4-.6-2.2.1-5.8.1-5.8s.8 3.2 1.6 4.8c.1.2 0 .4-.2.4-1 .4-1.6.8-1.8 1z" />
  </svg>
);

const tools = [
  { name: 'React', Icon: ReactMark },
  { name: 'Next.js', Icon: NextMark },
  { name: 'TypeScript', Icon: TypeScriptMark },
  { name: 'Tailwind', Icon: TailwindMark },
  { name: 'Node.js', Icon: NodeMark },
  { name: 'Figma', Icon: FigmaMark },
  { name: 'Git', Icon: GitMark },
  { name: 'MongoDB', Icon: MongoMark },
];

interface TechMarksProps {
  compact?: boolean;
}

const TechMarks = ({ compact = false }: TechMarksProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <ul className={`grid grid-cols-4 ${compact ? 'gap-2' : 'gap-3'}`}>
      {tools.map((tool, index) => (
        <motion.li
          key={tool.name}
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.35, delay: index * 0.04 }}
          whileHover={reduceMotion ? undefined : { y: -6 }}
          className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-zinc-200/80 bg-white px-2 py-4 shadow-[0_10px_30px_rgba(20,20,20,0.04)] dark:border-zinc-800 dark:bg-zinc-900"
        >
          <tool.Icon />
          <span className="text-[11px] font-medium tracking-tight text-zinc-600 dark:text-zinc-300">{tool.name}</span>
        </motion.li>
      ))}
    </ul>
  );
};

export default TechMarks;
