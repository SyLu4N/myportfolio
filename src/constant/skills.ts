import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import { RiJavascriptFill } from 'react-icons/ri';
import {
  SiFastify,
  SiFauna,
  SiJest,
  SiNextdotjs,
  SiPrisma,
  SiVitest,
} from 'react-icons/si';

export const FRONT_END_SKILLS = [
  { name: 'HTML', icon: FaHtml5, counter: 5 },
  { name: 'CSS', icon: FaCss3Alt, counter: 5 },
  { name: 'Javascript', icon: RiJavascriptFill, counter: 5 },
  { name: 'React', icon: FaReact, counter: 5 },
  { name: 'Next.Js', icon: SiNextdotjs, counter: 4 },
];

export const BACK_END_SKILLS = [
  { name: 'Node.Js', icon: FaNodeJs, counter: 4 },
  { name: 'FaunaDB', icon: SiFauna, counter: 3 },
  { name: 'MySQL', icon: GrMysql, counter: 4 },
  { name: 'Prisma', icon: SiPrisma, counter: 4 },
  { name: 'Fastify', icon: SiFastify, counter: 4 },
  { name: 'Jest', icon: SiJest, counter: 3 },
  { name: 'Vitest', icon: SiVitest, counter: 4 },
];
