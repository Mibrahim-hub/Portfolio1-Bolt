import { motion } from 'framer-motion';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import { skills, skillCategories } from '@/data/portfolio';
import { fadeInUp, scaleIn } from '@/lib/animations';

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Capabilities"
        title="Skills & Expertise"
        description="Hands-on proficiency across systems, cloud, networking, security, and IT operations."
      />

      <div className="space-y-12">
        {skillCategories.map((category) => {
          const items = skills.filter((s) => s.category === category);
          if (items.length === 0) return null;
          return (
            <motion.div key={category} variants={fadeInUp}>
              <h3 className="mb-5 flex items-center gap-3 font-display text-lg font-semibold">
                <span className="h-px w-8 bg-gradient-to-r from-primary-500 to-accent-400" />
                {category}
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={scaleIn}
                    whileHover={{ y: -4 }}
                    className="group glass-card relative flex items-center gap-3 overflow-hidden p-4"
                  >
                    <span className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-primary-500/0 blur-2xl transition-colors group-hover:bg-primary-500/20" />
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/15 to-accent-400/15 text-xl text-primary-600 transition-colors group-hover:from-primary-500 group-hover:to-accent-400 group-hover:text-white dark:text-accent-400">
                      <skill.icon />
                    </span>
                    <span className="text-sm font-semibold">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
