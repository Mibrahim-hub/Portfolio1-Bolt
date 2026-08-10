import { motion } from 'framer-motion';
import { FiCheck, FiClock } from 'react-icons/fi';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import { certifications } from '@/data/portfolio';
import { fadeInUp, scaleIn } from '@/lib/animations';

export default function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading
        eyebrow="Credentials"
        title="Certifications"
        description="Industry-recognized certifications validating expertise across networking, security, and cloud."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <motion.div
            key={cert.name}
            variants={scaleIn}
            whileHover={{ y: -5 }}
            className="group glass-card relative flex items-center gap-4 overflow-hidden p-6"
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-primary-500/10 to-accent-400/10 blur-2xl transition-opacity group-hover:opacity-150" />
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500/15 to-accent-400/15 text-2xl text-primary-600 transition-colors group-hover:from-primary-500 group-hover:to-accent-400 group-hover:text-white dark:text-accent-400">
              <cert.icon />
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-lg font-semibold">{cert.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{cert.issuer}</p>
            </div>
            <span
              className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
                cert.status === 'Certified'
                  ? 'bg-success-500/10 text-success-600 dark:text-success-400'
                  : 'bg-warning-500/10 text-warning-600 dark:text-warning-400'
              }`}
            >
              {cert.status === 'Certified' ? <FiCheck className="h-3 w-3" /> : <FiClock className="h-3 w-3" />}
              {cert.status}
            </span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
