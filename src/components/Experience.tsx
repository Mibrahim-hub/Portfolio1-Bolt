import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import { experience } from '@/data/portfolio';
import { fadeInUp } from '@/lib/animations';

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Career Path"
        title="Experience"
        description="A progressive journey across enterprise IT support, administration, and infrastructure."
      />

      <div className="relative mx-auto max-w-3xl">
        {/* Vertical line */}
        <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-primary-500 via-accent-400 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

        <div className="space-y-10">
          {experience.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={`${item.company}-${item.role}`}
                variants={fadeInUp}
                className={`relative flex items-start gap-6 sm:gap-0 ${
                  isLeft ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Node */}
                <span className="absolute left-4 top-2 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-400 text-white shadow-glow-blue sm:left-1/2">
                  <FiBriefcase className="h-3.5 w-3.5" />
                </span>

                {/* Spacer for alternating layout on desktop */}
                <div className="hidden sm:block sm:w-1/2" />

                {/* Card */}
                <div className={`w-full pl-12 sm:w-1/2 sm:pl-0 ${isLeft ? 'sm:pr-10 sm:text-right' : 'sm:pl-10'}`}>
                  <div className="group glass-card relative overflow-hidden p-6 transition-transform hover:-translate-y-1">
                    <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-400 opacity-0 transition-opacity group-hover:opacity-100" />
                    <span className="inline-block rounded-full bg-primary-500/10 px-3 py-1 text-xs font-semibold text-primary-600 dark:text-accent-400">
                      {item.period}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-semibold">{item.role}</h3>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      {item.company}
                    </p>
                    <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                      {item.description}
                    </p>
                    <div className={`mt-4 flex flex-wrap gap-2 ${isLeft ? 'sm:justify-end' : ''}`}>
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-slate-200/60 bg-slate-50/50 px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
