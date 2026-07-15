import { motion } from 'framer-motion';
import { useInView } from '@/lib/hooks';

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export function SectionReveal({ children, className = '', delay = 0 }: SectionRevealProps) {
  const [ref, inView] = useInView();

  return (
    <motion.div
      ref={ref}
      variants={fadeUpVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}
