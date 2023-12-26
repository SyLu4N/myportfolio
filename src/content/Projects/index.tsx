import { Project } from '../../components/Project';
import { Title } from '../../components/Title';
import { Projects, Container } from './styles';

export function Portfolio(): JSX.Element {
  return (
    <Container>
      <Title text="Portfolio" scroll={2750} />

      <Projects>
        <Project
          lado="Right"
          title="Candy And Cakes"
          src="/assets/apCandyAndCakes.jpeg"
          summary="Candy and Cakes: Bolos e doces personalizados. Sua doçura única em cada mordida!"
          link="https://candyandcakes.vercel.app"
          description="Outro freelancer, uma página simples, mas estou bastante satisfeito com o resultado alcançado. Optei por utilizar Next.js 14 e Bootstrap, aproveitando a oportunidade para aprimorar minhas habilidades, especialmente explorando as funcionalidades mais recentes do Next.js 14."
        />

        <Project
          title="SL Cosméticos"
          src="/assets/apSlCosmeticos.png"
          summary="Beleza em um clique! SL Cosméticos: produtos profissionais para cabelos e maquiagens."
          link="https://slcosmeticos.com.br/"
          description="Meu primeiro freelancer, foi uma experiência que me preparou para o mercado de trabalho. Lidar com prazos e desafios reais foi muito desafiante, tive que estudar muito e até sacrificar algumas noites de sono. No entanto, valeu muito a pena. Sem dúvida, foi o meu maior aprendizado até agora. Graças a essa jornada, hoje me sinto preparado e confiante para fazer parte do mercado."
        />

        <Project
          lado="Right"
          title="Rodiziopizza"
          src="/assets/rodiziopizza.png"
          summary="Gerenciar o seu rodízio nunca foi tão fácil, com poucos cliques tenha o resultado em tela"
          link="https://rodiziopizza.vercel.app/"
          description='Um dos primeiros projetos que desenvolvi por uma necessidade do "dia a dia", aproveitei para treinar um pouco o designer. A experiência de transformar uma imagem em um site funcional é incrível. Gostei muito do resultado atual, mas tenho mudanças em mente e estou implementando aos poucos.'
        />

        <Project
          title="SearchCep"
          src="/assets/apSearchCep.png"
          summary="Gerenciar endereços nunca foi tão facil, apenas com o CEP localize e
            salve seus endereços."
          link="https://newsearchcep.netlify.app/"
          description="Desenvolvi como treinamento de consumo de dados e usando fake API
            para simular um back-end, é possível localizar endereços pelo CEP, e
            salvamos, a principio estava usando JSON Server para amarzenar os
            dados, mais com a necessidade do deploy, migrei para o localStorage."
        />

        <Project
          title="Worldtrip"
          lado="Right"
          src="/assets/apWorldtrip.png"
          summary="Quer viajar? Mas não sabe para onde? Na Worldtrip mostramos os melhores continentes e cidades!"
          link="https://worldtrip-pearl.vercel.app/"
          description="O Worldtrip foi outro desafio proposto pelo curso da rockeatseat, da trilha de front-end, nele praticamos o uso do Chakra UI para estilização do site e responsividade, o projeto em um todo foi bem desafiante, mas até que obtive um resultado satisfatório."
        />
      </Projects>
      <div id="contato" />
    </Container>
  );
}
