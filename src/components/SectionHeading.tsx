import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className={`mb-12 flex flex-col gap-3 md:mb-16 ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-500 dark:text-primary-400">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-pulse-glow" />
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base text-slate-500 dark:text-slate-400 md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
