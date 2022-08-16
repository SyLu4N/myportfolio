import { useEffect, useState } from 'react';

interface TypewriterProps {
  msg: string;
  scroll?: number;
}

export function Typewriter({ msg, scroll }: TypewriterProps) {
  const [textRender, setTextRender] = useState('');
  const scrollFixed = scroll;

  let fnTypewriter: () => void;

  useEffect(() => {
    function typerwriter() {
      const text = msg;
      let newText = '';

      for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
          newText += text[i];
          setTextRender(newText);
        }, i * 150);
      }
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
