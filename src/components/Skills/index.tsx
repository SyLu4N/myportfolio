import { BackEnd } from './backEnd';
import { FrontEnd } from './FrontEnd';
import { Header } from './styles';

export function Skills(): JSX.Element {
  return (
    <>
      <Header id="skills">
        <h1>Habilidades</h1>
        <p>Skilss</p>
      </Header>

      <FrontEnd />
      <BackEnd />
    </>
  );
}
