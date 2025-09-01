import { type FC } from 'react';
import s from './index.module.css';

interface IProps {
  title: string;
  value: number | undefined;
  unit: string;
}

const WeatherCard: FC<IProps> = ({ title, value, unit }) => {
  return (
    <div className={s.card}>
      <p className={s.title}>{title}</p>
      <p className={s.value}>
        {value} {unit}
      </p>
    </div>
  );
};

export default WeatherCard;
