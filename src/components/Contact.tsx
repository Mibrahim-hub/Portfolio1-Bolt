import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import { profile } from '@/data/portfolio';
import { fadeInUp } from '@/lib/animations';

const contactCards = [
  { icon: FiPhone, label: 'Phone', value: '0538377925', href: 'https://wa.me/96653837925', external: true },
  { icon: FiMail, label: 'Email', value: profile.email, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=IT.Systemadmin91@gmail.com', external: true },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'Connect on LinkedIn', href: profile.linkedin, external: true },
  { icon: FaGithub, label: 'GitHub', value: 'View repositories', href: profile.github, external: true },
];

export default function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Let's work together"
        description="Have a role or project in mind? Reach out — I usually respond within a day."
      />

      <div className="mx-auto flex max-w-2xl flex-col gap-4">
        {contactCards.map((c) => (
          <motion.a
            key={c.label}
            variants={fadeInUp}
            href={c.href}
            target={c.external ? '_blank' : undefined}
            rel={c.external ? 'noopener noreferrer' : undefined}
            className="group glass-card flex items-center gap-4 p-5 transition-transform hover:-translate-y-1"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/15 to-accent-400/15 text-xl text-primary-600 transition-colors group-hover:from-primary-500 group-hover:to-accent-400 group-hover:text-white dark:text-accent-400">
              <c.icon />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">{c.label}</p>
              <p className="truncate text-sm font-semibold text-slate-700 dark:text-slate-200">{c.value}</p>
            </div>
          </motion.a>
        ))}

        <motion.div variants={fadeInUp} className="glass-card flex items-center gap-3 p-5">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/15 to-accent-400/15 text-primary-600 dark:text-accent-400">
            <FiMapPin className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Location</p>
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{profile.location}</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
