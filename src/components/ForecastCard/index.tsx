import { Cloud } from 'lucide-react';
import { type FC } from 'react';
import s from './index.module.css';
import type { DailyForecast } from '../../types';

interface IProps {
  forecast: DailyForecast;
}

const ForecastCard: FC<IProps> = ({ forecast }) => {
  return (
    <div className={s.forecastCard}>
      <div>
        <Cloud className={s.cardImage} />
      </div>
      <div className={s.cardInfo}>
        <p className={s.date}>
          {forecast.dayOfWeek}, {forecast.date}
        </p>
        <p className={s.weather}>{forecast.weather}</p>
      </div>
      <div className={s.temp}>
        <p className={s.maxTemp}>{forecast.tempMax}℃</p>
        <p className={s.minTemp}>{forecast.tempMin}℃</p>
      </div>
    </div>
  );
};

export default ForecastCard;
