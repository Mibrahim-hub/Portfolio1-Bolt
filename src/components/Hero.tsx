import { motion } from 'framer-motion';
import { FiDownload, FiArrowDown, FiMail, FiMapPin } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { profile, stats } from '@/data/portfolio';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { useCountUp } from '@/hooks/useCountUp';
import { fadeInUp } from '@/lib/animations';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import profilePhoto from '@/assets/profile.png';

function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useCountUp(value, 1800, inView);
  return (
    <div ref={ref} className="flex flex-col items-center">
      <span className="font-display text-3xl font-bold text-gradient sm:text-4xl">
        {count}
        {suffix}
      </span>
      <span className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const typed = useTypingEffect(profile.roles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid bg-grid-size opacity-60 dark:opacity-100" />
        <div className="absolute inset-0 bg-hero-radial-light dark:bg-hero-radial" />
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary-500/20 blur-[120px] animate-float-slow" />
        <div className="absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-accent-500/20 blur-[120px] animate-float" />
        <div className="absolute bottom-0 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-primary-600/10 blur-[100px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        {/* Left: content */}
        <div className="flex flex-col items-start">
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-xs font-medium text-primary-600 dark:text-primary-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success-500" />
            </span>
            Available for opportunities
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Mohamed <span className="text-gradient-animated">Ibrahim</span>
          </motion.h1>

          <motion.div
            variants={fadeInUp}
            className="mt-4 flex h-9 items-center font-mono text-lg font-medium text-slate-700 dark:text-slate-200 sm:text-2xl"
          >
            <span className="text-gradient">{typed}</span>
            <span className="ml-1 inline-block h-6 w-0.5 animate-blink bg-accent-400 sm:h-7" />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-xl text-base text-slate-500 dark:text-slate-400 sm:text-lg"
          >
            {profile.subtitle}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-7 flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400"
          >
            <span className="inline-flex items-center gap-1.5">
              <FiMapPin className="h-4 w-4 text-accent-400" /> {profile.location}
            </span>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
            <a
              href={profile.cvPath}
              download
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-600 to-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-glow-soft transition-transform hover:scale-[1.04]"
            >
              <FiDownload className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              Download CV
            </a>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-2 rounded-xl border border-slate-300/70 bg-white/40 px-6 py-3 text-sm font-semibold text-slate-700 backdrop-blur transition-colors hover:border-primary-500/50 hover:text-primary-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:border-accent-400/50 dark:hover:text-accent-400"
            >
              <FiMail className="h-4 w-4" />
              Contact Me
            </button>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8 flex items-center gap-4">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-400 transition-colors hover:text-primary-500 dark:hover:text-accent-400">
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-400 transition-colors hover:text-primary-500 dark:hover:text-accent-400">
              <FaGithub className="h-5 w-5" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="text-slate-400 transition-colors hover:text-primary-500 dark:hover:text-accent-400">
              <FiMail className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        {/* Right: profile picture */}
        <div className="relative flex items-center justify-center lg:block">
          <div className="relative mx-auto w-[220px] sm:w-[280px] lg:w-[340px]">
            {/* outer ambient glow with pulse */}
            <div className="profile-glow absolute -inset-6 rounded-full bg-gradient-to-br from-primary-500/40 to-accent-500/40 blur-3xl" />
            {/* static gradient ring */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-primary-500 via-accent-400 to-primary-600 opacity-80" />
            {/* white gap ring */}
            <div className="absolute -inset-0.5 rounded-full bg-white dark:bg-slate-900" />
            {/* image wrapper with fade-in, float, and hover scale */}
            <div className="profile-image-wrapper relative aspect-square w-full overflow-hidden rounded-full shadow-2xl">
              <img
                src={profilePhoto}
                alt="Mohamed Ibrahim"
                className="h-full w-full object-cover object-center"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 transition-colors hover:text-accent-400"
        aria-label="Scroll down"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <FiArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
