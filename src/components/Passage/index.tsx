import { AiOutlineCalendar } from 'react-icons/ai';

import { Variants, motion } from 'framer-motion';

import { Container, Content, LollipopContainer } from './styles';

interface PassageProps {
  ballEnd?: boolean;
  position: 'left' | 'right';
  title: string;
  description: string;
  date: string;
  index: number;
}

const textAnimate: Variants = {
  hidden: (direction: number) => ({
    opacity: 0,
    x: direction === 1 ? -100 : 100,
    scale: 0.9,
    rotate: direction === 1 ? 4 : -4,
  }),

  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotate: 0,

    transition: {
      duration: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99],
      type: 'spring',
      stiffness: 200,
      damping: 30,
    },
  },
};

const LollipopAnimate: Variants = {
  hidden: {
    opacity: 0,
    scaleY: 0,
    transformOrigin: 'top',
  },

  visible: {
    opacity: 1,
    scaleY: 1,

    transition: {
      scaleY: { type: 'spring', stiffness: 100, damping: 20 },
    },
  },
};

const BallAnimate: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotate: 0,
  },

  visible: {
    opacity: 1,
    scale: [2, 1],
    rotate: 360,

    transition: {
      scale: { type: 'spring', stiffness: 200, damping: 15 },
      rotate: { type: 'spring', stiffness: 200, damping: 15 },
    },
  },
};

const ContentMotion = motion(Content);

export function Passage({
  ballEnd = false,
  position,
  date,
  description,
  title,
  index,
}: PassageProps) {
  return (
    <Container>
      <LollipopContainer ballEnd={ballEnd}>
        {!ballEnd ? (
          <>
            <motion.span variants={BallAnimate} />
            <motion.div variants={LollipopAnimate} />
          </>
        ) : (
          <motion.span variants={BallAnimate} />
        )}
      </LollipopContainer>

      <ContentMotion
        position={position}
        ballEnd={ballEnd}
        variants={textAnimate}
        custom={index % 2 === 0 ? 1 : -1}
        style={{ position: 'absolute', top: ballEnd ? '-350%' : '-50%' }}
      >
        <strong>{title}</strong>
        <p>{description}</p>

        <time>
          <AiOutlineCalendar /> {date}
        </time>
      </ContentMotion>
    </Container>
  );
}
