import React from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, url: 'https://github.com/beamlakkg', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/beamlak-kagnew-48994b297', label: 'LinkedIn' },
    { icon: Mail, url: 'mailto:beamlakkg@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative overflow-hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(6,182,212,0.05),_transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-3 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-white">
              Beamlak Kagnew
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Software engineering graduate. Frontend developer and UI/UX designer.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {['Home', 'About', 'Projects', 'Resume', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    {link}
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-cyan-400 dark:hover:bg-cyan-500/10 dark:hover:text-cyan-400"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-600 dark:text-slate-400">
              Addis Ababa, Ethiopia<br />
              beamlakkg@gmail.com
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600 dark:text-slate-400">
          <p>© {currentYear} Beamlak Kagnew. All rights reserved.</p>
          <p>React and TypeScript</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;