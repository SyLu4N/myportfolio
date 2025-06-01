import { useEffect, useRef } from 'react';

import { motion, useAnimation, useInView, Variants } from 'framer-motion';

import { Passage } from '../../components/Passage';
import { COURSES } from '../../constant/courses';
import { side } from '../../utils/side';
import { Sentinela } from './styles';

interface StudysProps {
  slideKey: number;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: { staggerChildren: 0.1 },
  },
};

export function Studys({ slideKey }: StudysProps) {
  const sentinela = useRef<HTMLDivElement>(null);

  const controls = useAnimation();
  const isInView = useInView(sentinela, { once: true, amount: 0 });

  useEffect(() => {
    if (side(slideKey) === 'left') return;
    if (isInView) controls.start('visible');
  }, [isInView]);

  return (
    <div>
      <Sentinela ref={sentinela} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {COURSES.map((course, index) => (
          <Passage
            {...course}
            index={index}
            key={index}
            ballEnd={index === COURSES.length - 1}
            position={side(index)}
          />
        ))}
      </motion.div>
    </div>
  );
}
