import { type FC, type ReactNode } from 'react';
import s from './index.module.css';
import { useWeatherContext } from '../../context/WeatherContext';
import Loading from '../Loading';
import Error from '../Error';

interface IProps {
  children: ReactNode;
}

const InfoContainer: FC<IProps> = ({ children }) => {
  const { weather, loading, error } = useWeatherContext();

  if (loading) return <Loading />;
  if (error || !weather) return <Error />;

  return <div className={s.container}>{children}</div>;
};

export default InfoContainer;
