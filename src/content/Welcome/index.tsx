import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { MouseDown } from '../../components/MouseDown';
import { Typewriter } from '../../components/Typewriter';
import { Send } from '../../icons/send';
import { Container, Content, Img, Presentation } from './styles';

export function Welcome() {
  const rout = useRouter();

  const MotionContainer = motion(Container);

  return (
    <MotionContainer
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: 'spring',
        damping: 4,
        mass: 0.2,
        stiffness: 100,
        delay: 0.3,
      }}
    >
      <Content id="home">
        <motion.div>
          <Presentation>
            <div>
              <h1>
                <Typewriter msg="Hello World!" scroll={0} delay={800} />
              </h1>

              <p>
                I&apos;m <span>Luan Simões</span>
              </p>
            </div>

            <strong>
              Desenvolvedor NextJS | NodeJS | React Native | ElectronJS |
              Puppeteer
            </strong>

            <button
              onClick={() => rout.push('mailto:luaan.carlos@hotmail.com')}
            >
              Mandar Olá <Send />
            </button>

            <MouseDown />
          </Presentation>
        </motion.div>

        <Img>
          <Image
            src="/assets/welcome.png"
            alt="Minha foto"
            layout="fill"
            priority={true}
          />
        </Img>
      </Content>
    </MotionContainer>
  );
}
