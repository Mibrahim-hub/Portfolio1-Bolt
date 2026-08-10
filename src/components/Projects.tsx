import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import { projects } from '@/data/portfolio';
import { fadeInUp } from '@/lib/animations';

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Hands-on Work"
        title="Projects"
        description="Practical labs and infrastructure builds demonstrating real-world IT and networking skills."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={fadeInUp}
            whileHover={{ y: -6 }}
            className="group glass-card relative flex flex-col overflow-hidden"
          >
            {/* Top accent */}
            <div className={`h-1.5 w-full bg-gradient-to-r ${project.accent}`} />

            {/* Visual header */}
            <div className="relative flex h-40 items-center justify-center overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-10 transition-opacity group-hover:opacity-20`} />
              <div className="absolute inset-0 bg-grid bg-grid-size opacity-30" />
              <span className={`relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${project.accent} text-4xl text-white shadow-glow-soft transition-transform group-hover:scale-110`}>
                <project.icon />
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl font-semibold">{project.title}</h3>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200/60 text-slate-400 transition-colors group-hover:border-primary-500/50 group-hover:text-primary-600 dark:border-white/10 dark:group-hover:text-accent-400">
                  <FiArrowUpRight className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-slate-200/60 bg-slate-50/50 px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
