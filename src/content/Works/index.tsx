import { useEffect, useRef } from 'react';

import { useAnimation, useInView, Variants, motion } from 'framer-motion';

import { Passage } from '../../components/Passage';
import { WORKS } from '../../constant/works';
import { side } from '../../utils/side';
import { Sentinela } from './styles';

interface StudysProps {
  key: number;
  choice: 'work' | 'study';
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: { staggerChildren: 0.1 },
  },
};

export function Works({ key, choice }: StudysProps) {
  const sentinela = useRef<HTMLDivElement>(null);

  const controls = useAnimation();
  const isInView = useInView(sentinela, { once: true, amount: 0 });

  useEffect(() => {
    if (isInView && choice === 'work') controls.start('visible');
  }, [isInView, controls, key]);

  return (
    <div>
      <Sentinela ref={sentinela} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {WORKS.map((work, index) => (
          <Passage
            index={index}
            key={key}
            {...work}
            ballEnd={index === WORKS.length - 1}
            position={side(index)}
          />
        ))}
      </motion.div>
    </div>
  );
}
