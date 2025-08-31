import { type FC, type ReactNode } from 'react';
import s from './index.module.css';
import { useWeatherContext } from '../../context/WeatherContext';

interface IProps {
  children: ReactNode;
}

const InfoContainer: FC<IProps> = ({ children }) => {
  const { weather, loading, error } = useWeatherContext();

  if (loading) return <p>Загрузка...</p>;
  if (error || !weather) return <p>{error ?? 'Нет данных'}</p>;

  return <div className={s.container}>{children}</div>;
};

export default InfoContainer;
