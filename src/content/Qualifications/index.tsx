import { useState } from 'react';
import { FaGraduationCap, FaSuitcase } from 'react-icons/fa';

import { A11y, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper/types';

import { Title } from '../../components/Title';
import { Studys } from '../Studys';
import { Works } from '../Works';
import { Container, Content } from './styles';

import 'swiper/css';

export function Qualifications(): JSX.Element {
  const [slideKey, setSlideKey] = useState<number>(0);
  const [choice, setChoice] = useState<'studys' | 'works'>('studys');

  function handleSlideChange(e?: SwiperClass, choice?: 'studys' | 'works') {
    setSlideKey(slideKey + 1);
    let newChoice: 'studys' | 'works' = 'studys';

    if (choice) newChoice = choice;
    if (e) newChoice = e.activeIndex === 0 ? 'studys' : 'works';

    setChoice(newChoice);
  }

  return (
    <Container id="qualificacoes">
      <Title text="Qualificações" scroll={1700} />

      <article>
        <Content>
          <h3>
            <button
              className="prev"
              onClick={() => handleSlideChange(undefined, 'studys')}
            >
              <FaGraduationCap size={30} />
              <p>Estudo</p>
            </button>
          </h3>

          <h3>
            <button
              className="next"
              onClick={() => handleSlideChange(undefined, 'works')}
            >
              <p>Trabalho</p>
              <FaSuitcase size={24} />
            </button>
          </h3>
        </Content>

        <Swiper
          navigation={{ prevEl: `.prev`, nextEl: `.next` }}
          modules={[Navigation, A11y]}
          style={{ padding: '5rem 0 2rem 0', maxWidth: '520px' }}
          onSlideChange={(e: SwiperClass) => handleSlideChange(e)}
        >
          <SwiperSlide>
            <Studys key={slideKey} choice={choice} />
          </SwiperSlide>

          <SwiperSlide>
            <Works key={slideKey} choice={choice} />
          </SwiperSlide>
        </Swiper>
      </article>
    </Container>
  );
}
