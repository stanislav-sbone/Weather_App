import { type FC } from 'react';
import s from './index.module.css';

const Header: FC = () => {
  return (
    <header className={s.header}>
      <div className={s.info}>
        <h1 className={s.title}>
          React <span>Weather</span>
        </h1>
        <p className={s.text}>
          Наблюдайте за погодой так, как никогда раньше, благодаря данным в
          режиме реального времени, красивым визуальным эффектам и точным
          прогнозам для любого местоположения по всему миру
        </p>
      </div>
    </header>
  );
};

export default Header;
