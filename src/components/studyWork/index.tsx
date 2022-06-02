import { GiPencilRuler } from 'react-icons/gi';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { Container, Content } from './styles';

export function StudyWork(): JSX.Element {
  return (
    <Container>
      <Content>
        <p>
          <GiPencilRuler size={60} />
        </p>
        <h1>Estudos</h1>
        <div className="main">
          <strong>HTML e CSS Curso no vídeo</strong>
          <p>
            Curso totalmente focado para iniciantes, com uma didatica incrivel e
            aulas bem animadas, sendo incrível para iniciantes.
          </p>
          <div>
            <em>
              <a href="/">Saiba mais...</a>
            </em>
          </div>
        </div>
        <div className="main">
          <strong>Full Stack Developer Udemy</strong>
          <p>
            O curso que de fato me preparou para o mercado de trabalho, aonde
            encontra-se meus maiores projetos, foi abordado basicante um pouco
            tudo, mais de 144 horas de curso e chegando a mais de 15 projetos,
            praticamente todos feitos em ReactJs.
          </p>
          <div>
            <em>
              <a href="/">Saiba mais...</a>
            </em>
          </div>
        </div>
        <div className="main">
          <strong>NLW Return Rocketseat</strong>
          <p>
            Aonde consegui refinar os meus códigos, entender melhor oque é feito
            por de baixo dos panos, curso breve, porém bem intuitivo.
          </p>
          <div>
            <em>
              <a href="/">Saiba mais...</a>
            </em>
          </div>
        </div>
      </Content>
      <Content>
        <p>
          <MdOutlineWorkOutline size={60} />
        </p>
        <h1>Experiência</h1>
        <div className="main">
          <strong>Gerente de Marketing</strong>
          <p>Asimões | dez de 2020 - presente</p>
          <p>
            Responsável pelo desenvolvimento e gerenciamento de propragandas
            para rede socias, panfletagem e banners.
          </p>
        </div>
        <div className="main">
          <strong>Design</strong>
          <p>Asimões | julho de 2018 - ago de 2020</p>
          <p>
            Responsável pelo desenvolvimento de artes e edição de conteúdo, para
            rede sociais, panfletagem e banners
          </p>
        </div>
      </Content>
    </Container>
  );
}
