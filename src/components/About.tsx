import { motion } from 'framer-motion';
import { FiUser, FiBriefcase, FiAward, FiShield } from 'react-icons/fi';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import { profile, aboutHighlights } from '@/data/portfolio';
import { fadeInUp, scaleIn } from '@/lib/animations';

const focusAreas = [
  {
    icon: FiShield,
    title: 'Security First',
    desc: 'Hardening endpoints, firewall policies, and access controls to protect enterprise environments.',
  },
  {
    icon: FiBriefcase,
    title: 'Enterprise Operations',
    desc: 'Managing Windows Server, Active Directory, and Office 365 at scale with minimal downtime.',
  },
  {
    icon: FiAward,
    title: 'Certified Expertise',
    desc: 'Industry-recognized certifications across networking, security, and cloud platforms.',
  },
];

export default function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About Me"
        title="Building reliable IT, end to end"
        description="A systems-focused IT professional combining deep infrastructure knowledge with a security mindset."
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start">
        {/* Left: narrative + highlights */}
        <motion.div variants={fadeInUp} className="flex flex-col gap-6">
          <div className="glass-card relative overflow-hidden p-7 sm:p-8">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary-500/10 blur-2xl" />
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-400 text-white">
                <FiUser className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl font-semibold">Who I am</h3>
            </div>
            <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {profile.summary}
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-500 dark:text-slate-400">
              I specialize in keeping business-critical systems running — from Windows Server and
              Active Directory to virtualization on VMware and cloud workloads on Azure. My approach
              blends proactive monitoring, rapid troubleshooting, and ITIL-aligned processes to
              deliver infrastructure that is secure, reliable, and scalable.
            </p>
          </div>

          {/* Highlight chips */}
          <div className="flex flex-wrap gap-2.5">
            {aboutHighlights.map((h) => (
              <span
                key={h.label}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/40 px-3.5 py-2 text-sm font-medium text-slate-600 backdrop-blur transition-colors hover:border-primary-500/40 hover:text-primary-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-accent-400/40 dark:hover:text-accent-400"
              >
                <h.icon className="h-4 w-4 text-accent-500" />
                {h.label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right: focus cards */}
        <div className="flex flex-col gap-5">
          {focusAreas.map((area, i) => (
            <motion.div
              key={area.title}
              variants={scaleIn}
              transition={{ delay: i * 0.08 }}
              className="group glass-card relative overflow-hidden p-6 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/15 to-accent-400/15 text-primary-600 transition-colors group-hover:from-primary-500 group-hover:to-accent-400 group-hover:text-white dark:text-accent-400">
                  <area.icon className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-display text-lg font-semibold">{area.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {area.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
