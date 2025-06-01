import { useState } from 'react';
import { FaGraduationCap, FaSuitcase } from 'react-icons/fa';

import { A11y, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Title } from '../../components/Title';
import { Studys } from '../Studys';
import { Works } from '../Works';
import { Container, Content } from './styles';

import 'swiper/css';

export function Qualifications(): JSX.Element {
  const [slideKey, setSlideKey] = useState<number>(0);

  function handleSlideChange() {
    setSlideKey(slideKey + 1);
  }

  return (
    <Container id="qualificacoes">
      <Title text="Qualificações" scroll={1700} />

      <article>
        <Content>
          <h3>
            <button className="prev" onClick={handleSlideChange}>
              <FaGraduationCap size={30} />
              <p>Estudo</p>
            </button>
          </h3>

          <h3>
            <button className="next" onClick={handleSlideChange}>
              <p>Trabalho</p>
              <FaSuitcase size={24} />
            </button>
          </h3>
        </Content>

        <Swiper
          navigation={{ prevEl: `.prev`, nextEl: `.next` }}
          modules={[Navigation, A11y]}
          style={{ padding: '5rem 0 2rem 0', maxWidth: '520px' }}
          onSlideChange={handleSlideChange}
        >
          <SwiperSlide>
            <Studys slideKey={slideKey} key={slideKey} />
          </SwiperSlide>

          <SwiperSlide>
            <Works slideKey={slideKey} key={slideKey} />
          </SwiperSlide>
        </Swiper>
      </article>
    </Container>
  );
}
