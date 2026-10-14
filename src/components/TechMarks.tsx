import { motion, useReducedMotion } from 'framer-motion';

interface MarkProps {
  className?: string;
}

// type MarkProps = { className?: string };

const base = (className: string) => ({
  viewBox: '0 0 24 24',
  className,
  'aria-hidden': true as const,
  focusable: false as const,
});

/* React */
const ReactMark = ({ className = 'h-8 w-8' }: MarkProps) => (
  <svg {...base(className)}>
    <circle cx="12" cy="12" r="2" fill="#61DAFB" />
    <g fill="none" stroke="#61DAFB" strokeWidth="1.1">
      <ellipse cx="12" cy="12" rx="10" ry="3.9" />
      <ellipse cx="12" cy="12" rx="10" ry="3.9" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="3.9" transform="rotate(120 12 12)" />
    </g>
  </svg>
);

/* Next.js */
const NextMark = ({ className = 'h-8 w-8' }: MarkProps) => (
  <svg {...base(className)}>
    <circle cx="12" cy="12" r="10.5" className="fill-zinc-950 dark:fill-white" />
    <path
      d="M9.2 16V8l6.2 8.1M15.4 8v4"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-white dark:stroke-zinc-950"
    />
  </svg>
);

/* TypeScript */
const TypeScriptMark = ({ className = 'h-8 w-8' }: MarkProps) => (
  <svg {...base(className)}>
    <rect x="1" y="1" width="22" height="22" rx="4" fill="#3178C6" />
    <g fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.6 11.2h6.2M7.7 11.2V19" />
      <path d="M19.2 11.9c-.5-.6-1.3-.9-2.2-.9-1.3 0-2.2.7-2.2 1.7 0 2.4 4.6 1.2 4.6 3.9 0 1.2-1.1 2-2.5 2-1.1 0-2-.4-2.6-1.2" />
    </g>
  </svg>
);

/* Tailwind */
const TailwindMark = ({ className = 'h-8 w-8' }: MarkProps) => (
  <svg {...base(className)}>
    <path
      fill="#38BDF8"
      d="M12 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6 1.2 1.2 2.5 2.6 5.5 2.6 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6C16.3 6.2 15 4.8 12 4.8zM6 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6 1.2 1.2 2.5 2.6 5.5 2.6 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6C10.3 13.4 9 12 6 12z"
    />
  </svg>
);

/* Node.js */
const NodeMark = ({ className = 'h-8 w-8' }: MarkProps) => (
  <svg {...base(className)}>
    <path
      d="M12 1.8 20.9 6.9v10.2L12 22.2 3.1 17.1V6.9z"
      fill="#339933"
      stroke="#339933"
      strokeWidth="1"
      strokeLinejoin="round"
    />
    <path
      d="M9 16V8l6 8V8"
      fill="none"
      stroke="#fff"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* Figma */
const FigmaMark = ({ className = 'h-8 w-8' }: MarkProps) => (
  <svg {...base(className)}>
    <path fill="#F24E1E" d="M12 2.25H8.75a3.25 3.25 0 0 0 0 6.5H12z" />
    <path fill="#FF7262" d="M12 2.25h3.25a3.25 3.25 0 0 1 0 6.5H12z" />
    <path fill="#A259FF" d="M12 8.75H8.75a3.25 3.25 0 0 0 0 6.5H12z" />
    <circle fill="#1ABCFE" cx="15.25" cy="12" r="3.25" />
    <path fill="#0ACF83" d="M8.75 21.75A3.25 3.25 0 0 0 12 18.5v-3.25H8.75a3.25 3.25 0 0 0 0 6.5z" />
  </svg>
);

/* Git */
const GitMark = ({ className = 'h-8 w-8' }: MarkProps) => (
  <svg {...base(className)}>
    <rect x="4.2" y="4.2" width="15.6" height="15.6" rx="2.2" fill="#F05032" transform="rotate(45 12 12)" />
    <path d="M10 9v6M10.8 9.9l2.9 1.4" fill="none" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
    <g fill="#fff">
      <circle cx="10" cy="7.8" r="1.7" />
      <circle cx="10" cy="16.2" r="1.7" />
      <circle cx="14.6" cy="12" r="1.7" />
    </g>
  </svg>
);

/* MongoDB */
const MongoMark = ({ className = 'h-8 w-8' }: MarkProps) => (
  <svg {...base(className)}>
    <path
      fill="#00ED64"
      d="M12 1.5c.6 2 5.6 5 5.6 11 0 3.8-2.3 6.3-4.8 7.5L12.4 22.5h-.8l-.4-2.5c-2.5-1.2-4.8-3.7-4.8-7.5 0-6 5-9 5.6-11z"
    />
    <path d="M12 7v15.5" fill="none" stroke="#00684A" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

/* JavaScript */
const JavaScriptMark = ({ className = 'h-8 w-8' }: MarkProps) => (
  <svg {...base(className)}>
    <rect x="1" y="1" width="22" height="22" rx="3.5" fill="#F7DF1E" />
    <g fill="none" stroke="#323330" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 11v5c0 1.2-.6 1.8-1.6 1.8-.8 0-1.3-.4-1.7-1" />
      <path d="M19.2 11.9c-.5-.6-1.3-.9-2.2-.9-1.3 0-2.2.7-2.2 1.7 0 2.4 4.6 1.2 4.6 3.9 0 1.2-1.1 2-2.5 2-1.1 0-2-.4-2.6-1.2" />
    </g>
  </svg>
);

/* Express */
const ExpressMark = ({ className = 'h-8 w-8' }: MarkProps) => (
  <svg {...base(className)}>
    <rect x="1" y="1" width="22" height="22" rx="4" className="fill-zinc-950 dark:fill-white" />
    <g
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-white dark:stroke-zinc-950"
    >
      <path d="M5 12.3h5.4c0-1.7-1-2.8-2.7-2.8C6.1 9.5 5 10.8 5 12.6c0 1.9 1.1 3.1 2.8 3.1.9 0 1.7-.4 2.2-1.1" />
      <path d="M13 9.7l5.8 5.9M18.8 9.7L13 15.6" />
    </g>
  </svg>
);

/* React Native */
const ReactNativeMark = ({ className = 'h-8 w-8' }: MarkProps) => (
  <svg {...base(className)}>
    <rect x="4" y="1.5" width="16" height="21" rx="3.5" fill="none" stroke="#61DAFB" strokeWidth="1.1" opacity="0.55" />
    <circle cx="12" cy="12" r="1.4" fill="#61DAFB" />
    <g fill="none" stroke="#61DAFB" strokeWidth="0.95">
      <ellipse cx="12" cy="12" rx="6.6" ry="2.6" />
      <ellipse cx="12" cy="12" rx="6.6" ry="2.6" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="6.6" ry="2.6" transform="rotate(120 12 12)" />
    </g>
  </svg>
);

/* Python */
const PySnake = ({ fill }: { fill: string }) => (
  <g>
    <rect x="8" y="2" width="8" height="8" rx="3.2" fill={fill} />
    <rect x="3" y="8.5" width="13" height="3.4" rx="1.7" fill={fill} />
    <rect x="3" y="8.5" width="4.2" height="6.6" rx="2.1" fill={fill} />
    <circle cx="10.4" cy="4.9" r="0.75" fill="#fff" />
  </g>
);

const PythonMark = ({ className = 'h-8 w-8' }: MarkProps) => (
  <svg {...base(className)}>
    <PySnake fill="#3776AB" />
    <g transform="rotate(180 12 12)">
      <PySnake fill="#FFD43B" />
    </g>
  </svg>
);

/* C++ */
const CPlusPlusMark = ({ className = 'h-8 w-8' }: MarkProps) => (
  <svg {...base(className)}>
    <path
      d="M12 1.8 20.9 6.9v10.2L12 22.2 3.1 17.1V6.9z"
      fill="#00599C"
      stroke="#00599C"
      strokeWidth="1"
      strokeLinejoin="round"
    />
    <g fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round">
      <path d="M12.2 9.9A3.45 3.45 0 1 0 12.2 14.1" />
      <path d="M14.1 12h2.4M15.3 10.8v2.4M17.3 12h2.4M18.5 10.8v2.4" strokeWidth="1.2" />
    </g>
  </svg>
);

/* Java */
const JavaMark = ({ className = 'h-8 w-8' }: MarkProps) => (
  <svg {...base(className)}>
    <path d="M9 10.5c-1.2-1.2 1.2-2.4 0-4S10 3 10 3M13 10.5c-1.2-1.2 1.2-2.4 0-4s1-3.5 1-3.5" fill="none" stroke="#F89820" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M4.8 12h11.4v3.4a4 4 0 0 1-4 4H8.8a4 4 0 0 1-4-4z" fill="#5382A1" />
    <path d="M16.2 13h1a2.3 2.3 0 0 1 0 4.6h-1.5" fill="none" stroke="#5382A1" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M4 21.6h13" stroke="#5382A1" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

/* Canvas */
const ring = (r: number, offset = 0) =>
  Array.from({ length: 8 }, (_, i) => {
    const a = ((i * 45 + offset) * Math.PI) / 180;
    return { x: 12 + r * Math.cos(a), y: 12 + r * Math.sin(a) };
  });

const CanvasMark = ({ className = 'h-8 w-8' }: MarkProps) => (
  <svg {...base(className)}>
    <g fill="#E72429">
      <circle cx="12" cy="12" r="1.9" />
      {ring(5).map((p, i) => (
        <circle key={`i${i}`} cx={p.x} cy={p.y} r="1.15" />
      ))}
      {ring(9, 22.5).map((p, i) => (
        <circle key={`o${i}`} cx={p.x} cy={p.y} r="1.5" />
      ))}
    </g>
  </svg>
);

const tools = [
  { name: 'React', Icon: ReactMark },
  { name: 'Next.js', Icon: NextMark },
  { name: 'TypeScript', Icon: TypeScriptMark },
  { name: 'JavaScript', Icon: JavaScriptMark },
  { name: 'Tailwind', Icon: TailwindMark },
  { name: 'Node.js', Icon: NodeMark },
  { name: 'Figma', Icon: FigmaMark },
  { name: 'Git', Icon: GitMark },
  { name: 'MongoDB', Icon: MongoMark },
  { name: 'Express', Icon: ExpressMark },
  { name: 'React Native', Icon: ReactNativeMark },
  { name: 'Python', Icon: PythonMark },
  { name: 'C++', Icon: CPlusPlusMark },
  { name: 'Java', Icon: JavaMark },
  { name: 'Canvas', Icon: CanvasMark },
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
