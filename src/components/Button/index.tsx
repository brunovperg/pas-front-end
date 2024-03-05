import style from './Button.module.scss';
import Arrow from 'assets/arrow-up-right.svg?react';

interface ButtonProps {
	text: string;
	url?: string;
}

export default function Button({ text, url }: ButtonProps) {
   return (
      <a href={url} className={style.button} target="_blank" rel="noopener noreferrer" download>
         {text}
         <Arrow style={{marginLeft: '8px'}} />
      </a>
   );
}
