import { useEffect, useState } from 'react';

interface TypewriterProps {
  msg: string;
  scroll?: number;
  delay?: number;
}

export function Typewriter({ msg, scroll, delay = 0 }: TypewriterProps) {
  const [textRender, setTextRender] = useState('');
  const scrollFixed = scroll;

  let fnTypewriter: () => void;

  useEffect(() => {
    function typerwriter() {
      const text = msg;
      let newText = '';

      setTimeout(() => {
        for (let i = 0; i < text.length; i++) {
          setTimeout(() => {
            newText += text[i];
            setTextRender(newText);
          }, i * 150);
        }
      }, delay);
    }

    fnTypewriter = typerwriter;
  }, []);

  useEffect(() => {
    if (!scrollFixed) return fnTypewriter();

    addEventListener('scroll', function typewriter() {
      if (window.scrollY >= scrollFixed) {
        fnTypewriter();
        this.removeEventListener('scroll', typewriter);
      }
    });
  }, []);

  return <span>{textRender}</span>;
}
