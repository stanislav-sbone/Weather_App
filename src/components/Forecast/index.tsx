import { type FC } from 'react';
import s from './index.module.css';
import { Calendar } from 'lucide-react';
import ForecastCard from '../ForecastCard';
import { useWeatherContext } from '../../context/WeatherContext';

const Forecast: FC = () => {
  const { weeklyForecast } = useWeatherContext();

  return (
    <div className={s.forecast}>
      <div className={s.title}>
        <Calendar />
        <h3>Прогноз погоды на 5 дней</h3>
      </div>

      <div className={s.cards}>
        {weeklyForecast?.map((forecast) => (
          <ForecastCard key={forecast.date} forecast={forecast} />
        ))}
      </div>
    </div>
  );
};

export default Forecast;
