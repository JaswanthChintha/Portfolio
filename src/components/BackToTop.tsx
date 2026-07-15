import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useScrolled } from '@/lib/hooks';

export function BackToTop() {
  const visible = useScrolled(400);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          onClick={handleClick}
          aria-label="Back to top"
          className="fixed bottom-8 right-6 z-50 p-3 rounded-xl
                     bg-themeNeutral-800 border border-themeNeutral-700 text-themeNeutral-200
                     hover:bg-themeNeutral-700 hover:text-themeNeutral-50 hover:border-themeNeutral-600
                     transition-colors duration-200
                     focus-visible:ring-2 focus-visible:ring-accent-400"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
