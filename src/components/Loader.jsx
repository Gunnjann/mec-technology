import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(onDone, 400);
          return 100;
        }
        return p + 2;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onDone]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 bg-carbon-900 z-[100] flex flex-col items-center justify-center"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Animated glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"
      />

      <div className="relative flex flex-col items-center gap-8">
        {/* Logo animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="w-20 h-20 bg-amber-500 flex items-center justify-center">
            <span className="font-display text-3xl text-black">MEC</span>
          </div>
          <div className="absolute -inset-2 border border-amber-500/30 animate-ping" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <div className="font-display text-2xl text-white tracking-widest mb-1">TECHNOLOGY</div>
          <div className="font-mono text-xs text-amber-500/70 tracking-widest uppercase">Machines (I) Pvt Ltd</div>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 240 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="h-px bg-white/10 relative"
          style={{ width: 240 }}
        >
          <motion.div
            className="absolute top-0 left-0 h-full bg-amber-500"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
          <div className="absolute -top-5 right-0 font-mono text-xs text-amber-500/70">
            {progress}%
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="font-mono text-xs text-steel-600 tracking-widest uppercase"
        >
          Loading precision technology...
        </motion.div>
      </div>
    </motion.div>
  );
}
