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
          Experience weather like never before with real-time data, beautiful
          visuals, and precise forecasts for any location worldwide
        </p>
      </div>
    </header>
  );
};

export default Header;
