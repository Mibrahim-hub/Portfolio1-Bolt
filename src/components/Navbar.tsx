import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { FiMoon, FiSun } from 'react-icons/fi';
import { navLinks, profile } from '@/data/portfolio';
import { useTheme } from '@/context/ThemeContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = navLinks.map((l) => l.href);
      let current = '#home';
      for (const id of sections) {
        const el = document.querySelector(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 120) current = id;
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4"
    >
      <nav
        className={`mt-3 flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled ? 'glass shadow-lg shadow-black/5' : 'border border-transparent'
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => handleNav('#home')}
          className="group flex items-center gap-2.5"
          aria-label="Home"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-400 font-display text-sm font-bold text-white shadow-glow-blue">
            MI
            <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-500 to-accent-400 opacity-0 blur-md transition-opacity group-hover:opacity-60" />
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight sm:block">
            Mohamed<span className="text-gradient"> Ibrahim</span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  active === link.href
                    ? 'text-primary-500 dark:text-accent-400'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                }`}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-gradient-to-r from-primary-500 to-accent-400"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200/60 text-slate-600 transition-colors hover:bg-slate-100 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === 'dark' ? (
                <motion.span key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <FiSun className="h-4 w-4" />
                </motion.span>
              ) : (
                <motion.span key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <FiMoon className="h-4 w-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <a
            href={profile.cvPath}
            download
            className="hidden rounded-lg bg-gradient-to-r from-primary-600 to-accent-500 px-4 py-2 text-sm font-semibold text-white shadow-glow-soft transition-transform hover:scale-[1.03] sm:block"
          >
            Download CV
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200/60 text-slate-700 dark:border-white/10 dark:text-slate-200 lg:hidden"
          >
            {open ? <HiX className="h-5 w-5" /> : <HiMenuAlt4 className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-4 top-[4.5rem] z-50 lg:hidden"
          >
            <ul className="glass flex flex-col gap-1 rounded-2xl p-3 shadow-xl">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                      active === link.href
                        ? 'bg-primary-500/10 text-primary-500 dark:text-accent-400'
                        : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="mt-1">
                <a
                  href={profile.cvPath}
                  download
                  className="block rounded-xl bg-gradient-to-r from-primary-600 to-accent-500 px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
