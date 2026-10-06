import React from 'react';
import { motion } from 'framer-motion';

export default function FadeIn({ children, delay = 0, direction = 'up', distance = 40 }) {
  const getInitialY = () => {
    if (direction === 'up') return distance;
    if (direction === 'down') return -distance;
    return 0;
  };

  const getInitialX = () => {
    if (direction === 'left') return distance;
    if (direction === 'right') return -distance;
    return 0;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: getInitialY(), x: getInitialX() }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98] // custom smooth ease curve
      }}
    >
      {children}
    </motion.div>
  );
}
