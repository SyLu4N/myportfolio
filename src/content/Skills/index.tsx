import { BiCodeCurly } from 'react-icons/bi';
import { MdOutlineBackupTable } from 'react-icons/md';

import { Skills as SkillsElements } from '../../components/Skills';
import { Title } from '../../components/Title';
import { BACK_END_SKILLS, FRONT_END_SKILLS } from '../../constant/skills';
import { Container, Header, Content } from './styles';

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
