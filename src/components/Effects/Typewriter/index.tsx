import { useEffect, useState } from 'react';

interface TypewriterProps {
  msg: string;
  scroll: number;
}

export function Typewriter({ msg, scroll }: TypewriterProps) {
  const [textRender, setTextRender] = useState('');

  useEffect(() => {
    const text = msg;
    let newText = '';

    if (window.scrollY !== scroll) return;

    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        setTimeout(() => {
          newText += text[i];
          setTextRender(newText);
        }, i * 150);
      }, 1300);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <h1>{textRender}</h1>;
}
