import { useState } from 'react';
import { IconType } from 'react-icons';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { Variants, motion } from 'framer-motion';

import { Skill as SkillType } from '../../@types/Skill';
import { Skill } from './skill';
import { Container, Content, Title } from './styles';

interface SkillsProps {
  skillsObject: SkillType[];
  title: string;
  icon: IconType;
  defaultValue?: boolean;
}

export function Skills({
  skillsObject,
  title,
  icon,
  defaultValue = false,
}: SkillsProps) {
  const [isOpen, setIsOpen] = useState(defaultValue);

  const IconElement = icon;

  const contentVariants: Variants = {
    open: {
      opacity: 1,
      height: 'auto',

      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
        duration: 0.5,
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },

    closed: {
      height: 0,
      opacity: 0,

      transition: {
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      },
    },
  };

  const iconVariants: Variants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };

  const itemVariants: Variants = {
    open: {
      opacity: 1,
      x: 0,

      transition: { type: 'spring', stiffness: 150, damping: 10 },
    },

    closed: { opacity: 0, x: -30, transition: { duration: 0.2 } },
  };

  return (
    <Container>
      <Title onClick={() => setIsOpen(!isOpen)}>
        <IconElement size={25} />

        <h2>{title}</h2>

        <motion.span
          variants={iconVariants}
          animate={isOpen ? 'open' : 'closed'}
          transition={{
            duration: 0.3,
            type: 'spring',
            stiffness: 150,
            damping: 16,
          }}
        >
          <MdKeyboardArrowDown size={30} />
        </motion.span>
      </Title>

      <motion.div
        initial={'closed'}
        variants={contentVariants}
        animate={isOpen ? 'open' : 'closed'}
      >
        <Content>
          {skillsObject.map((element) => (
            <motion.div key={element.name} variants={itemVariants}>
              <Skill element={element} />
            </motion.div>
          ))}
        </Content>
      </motion.div>
    </Container>
  );
}
