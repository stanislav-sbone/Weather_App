import { useEffect, useState, type FC } from 'react';
import s from './index.module.css'; // можно создать CSS для анимации

const loadingTexts = [
  'Проверяем облака…',
  'Ловим солнечные лучи…',
  'Город на паузе, погодные маги трудятся…',
  'Подсчитываем дождевые капли…',
  'Не уходите, мы спорим с солнцем!',
  'Погода загружается… Надеемся, что без сюрпризов!',
];

const Loading: FC = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingTexts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={s.loadingContainer}>
      <div className={s.cloud}>☁️</div>
      <p className={s.loadingText}>{loadingTexts[textIndex]}</p>
    </div>
  );
};

export default Loading;
