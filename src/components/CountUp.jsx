import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

const CountUp = ({ end, duration = 2, suffix = "" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      animate(count, end, { 
        duration,
        ease: "easeOut"
      });
    }
  }, [inView, end, duration, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export default CountUp;
