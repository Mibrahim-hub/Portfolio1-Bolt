import { FiHeart } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { profile, navLinks } from '@/data/portfolio';

export default function Footer() {
  const handleNav = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative mt-10 border-t border-slate-200/60 dark:border-white/10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <button onClick={() => handleNav('#home')} className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-400 font-display text-sm font-bold text-white">
                MI
              </span>
              <span className="font-display text-sm font-semibold">
                Mohamed<span className="text-gradient"> Ibrahim</span>
              </span>
            </button>
            <p className="max-w-xs text-center text-sm text-slate-500 dark:text-slate-400 md:text-left">
              IT Administrator & System Administrator building secure, reliable IT infrastructure.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-sm text-slate-500 transition-colors hover:text-primary-600 dark:text-slate-400 dark:hover:text-accent-400"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-400 transition-colors hover:text-primary-500 dark:hover:text-accent-400">
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-400 transition-colors hover:text-primary-500 dark:hover:text-accent-400">
              <FaGithub className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 border-t border-slate-200/60 pt-6 dark:border-white/10 md:flex-row md:justify-between">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Mohamed Ibrahim. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-slate-400">
            Built with <FiHeart className="h-3 w-3 text-error-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
