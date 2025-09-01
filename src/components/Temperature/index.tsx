import { type FC } from 'react';
import s from './index.module.css';
import { useWeatherContext } from '../../context/WeatherContext';
import { weatherIcons } from '../../icons/weatherIcons';
import { Cloud } from 'lucide-react';

const Temperature: FC = () => {
  const { weather } = useWeatherContext();
  const Icon = weather
    ? weatherIcons[weather.weather.toLowerCase()] || Cloud
    : Cloud;

  return (
    <div className={s.temperature}>
      <div>
        <p className={s.temp}>
          <span>{weather?.temperature}</span>℃
        </p>
        <p className={s.weather}>{weather?.weather}</p>
      </div>
      <div>
        <Icon className={s.image} />
      </div>
    </div>
  );
};

export default Temperature;
