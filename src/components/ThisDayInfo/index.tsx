import { type FC } from 'react';
import s from './index.module.css';
import { MapPin } from 'lucide-react';
import { useWeatherContext } from '../../context/WeatherContext';

const CurrentDayInfo: FC = () => {
  const { weather } = useWeatherContext();

  return (
    <div className={s.info}>
      <div className={s.cityName}>
        <MapPin />
        <div>
          <p className={s.city}>{weather?.city}</p>
          <p className={s.country}>{weather?.country}</p>
        </div>
      </div>
      <div className={s.time}>
        <p>{weather?.date}</p>
        <p>{weather?.time}</p>
      </div>
    </div>
  );
};

export default CurrentDayInfo;
