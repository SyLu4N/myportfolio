import { BiCodeCurly } from 'react-icons/bi';
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import { MdOutlineBackupTable } from 'react-icons/md';
import { RiJavascriptFill } from 'react-icons/ri';
import {
  SiFastify,
  SiFauna,
  SiJest,
  SiNextdotjs,
  SiPrisma,
  SiVitest,
} from 'react-icons/si';

import { Skills as SkillsElements } from '../../components/Skills';
import { Title } from '../../components/Title';
import { Container, Header, Content } from './styles';

const FRONT_END_SKILLS = [
  { name: 'HTML', icon: FaHtml5, counter: 5 },
  { name: 'CSS', icon: FaCss3Alt, counter: 5 },
  { name: 'Javascript', icon: RiJavascriptFill, counter: 5 },
  { name: 'React', icon: FaReact, counter: 5 },
  { name: 'Next.Js', icon: SiNextdotjs, counter: 4 },
];

const BACK_END_SKILLS = [
  { name: 'Node.Js', icon: FaNodeJs, counter: 4 },
  { name: 'FaunaDB', icon: SiFauna, counter: 3 },
  { name: 'MySQL', icon: GrMysql, counter: 4 },
  { name: 'Prisma', icon: SiPrisma, counter: 4 },
  { name: 'Fastify', icon: SiFastify, counter: 4 },
  { name: 'Jest', icon: SiJest, counter: 3 },
  { name: 'Vitest', icon: SiVitest, counter: 4 },
];

export function Skills(): JSX.Element {
  return (
    <Container>
      <Header id="skills">
        <Title text="Habilidades" scroll={1300} />
      </Header>

      <Content>
        <SkillsElements
          skillsObject={FRONT_END_SKILLS}
          title="Front End Developer"
          defaultValue={true}
          icon={BiCodeCurly}
        />

        <SkillsElements
          skillsObject={BACK_END_SKILLS}
          title="Back End Developer"
          icon={MdOutlineBackupTable}
        />
      </Content>
    </Container>
  );
}
