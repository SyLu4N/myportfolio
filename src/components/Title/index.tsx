import { useEffect, useState } from 'react';

interface TitleProps {
  msg: string;
  scroll: number;
}

export function Title({ msg, scroll }: TitleProps) {
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
  }, []);

  return <h1>{textRender}</h1>;
}
