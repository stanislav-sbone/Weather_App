import { type FC } from 'react';
import s from './index.module.css';
import { useWeatherContext } from '../../context/WeatherContext';
import WeatherCard from '../WeatherCard';

const WeatherCards: FC = () => {
  const { weather } = useWeatherContext();
  const weatherData = [
    { title: 'Видимость', value: weather?.visibility, unit: 'км' },
    { title: 'Скорость ветра', value: weather?.windSpeed, unit: 'м/с' },
    { title: 'Влажность', value: weather?.humidity, unit: '%' },
    { title: 'Давление', value: weather?.pressure, unit: 'hPa' },
    { title: 'Ощущается как', value: weather?.feelsLike, unit: '℃' },
  ];

  return (
    <div className={s.cards}>
      {weatherData.map(({ title, value, unit }) => (
        <WeatherCard key={title} title={title} value={value} unit={unit} />
      ))}
    </div>
  );
};

export default WeatherCards;
