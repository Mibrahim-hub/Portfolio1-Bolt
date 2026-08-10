import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';
import { staggerContainer } from '@/lib/animations';

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, children, className = '' }: SectionProps) {
  return (
    <motion.section
      id={id}
      variants={staggerContainer as Variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={`relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 md:py-28 ${className}`}
    >
      {children}
    </motion.section>
  );
}
