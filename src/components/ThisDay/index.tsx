import { type FC } from 'react';
import s from './index.module.css';
import { Cloud, MapPin, Sunrise, Sunset } from 'lucide-react';
import { useWeatherContext } from '../../context/WeatherContext';
import { weatherIcons } from '../../icons/weatherIcons';

const ThisDay: FC = () => {
  const { weather } = useWeatherContext();
  const Icon = weather
    ? weatherIcons[weather.weather.toLowerCase()] || Cloud
    : Cloud;

  return (
    <div className={s.thisDay}>
      <div className={s.thisDayTop}>
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

      <div className={s.thisDayTemp}>
        <div>
          <p className={s.temp}>
            <span>{weather?.temperature}</span>℃
          </p>
          <p className={s.weather}>{weather?.weather}</p>
        </div>
        <div>
          <Icon className={s.weatherImage} />
        </div>
      </div>

      <div className={s.weatherCards}>
        <div className={s.card}>
          <p className={s.cardTitle}>Видимость</p>
          <p className={s.cardValue}>{weather?.visibility} км</p>
        </div>
        <div className={s.card}>
          <p className={s.cardTitle}>Скорость ветра</p>
          <p className={s.cardValue}>{weather?.windSpeed} м/с</p>
        </div>
        <div className={s.card}>
          <p className={s.cardTitle}>Влажность</p>
          <p className={s.cardValue}>{weather?.humidity}%</p>
        </div>
        <div className={s.card}>
          <p className={s.cardTitle}>Давление</p>
          <p className={s.cardValue}>{weather?.pressure} hPa</p>
        </div>
        <div className={s.card}>
          <p className={s.cardTitle}>Ощущается как</p>
          <p className={s.cardValue}>{weather?.feelsLike}℃</p>
        </div>
      </div>

      <div className={s.sunTime}>
        <div className={`${s.sunCard} ${s.sunrise}`}>
          <Sunrise className={s.sunCardImage} />
          <div className={s.sunCardDetails}>
            <p className={s.sunTimeLabel}>Восход</p>
            <p className={s.sunTimeValue}>{weather?.sunrise}</p>
          </div>
        </div>
        <div className={`${s.sunCard} ${s.sunset}`}>
          <Sunset className={s.sunCardImage} />
          <div className={s.sunCardDetails}>
            <p className={s.sunTimeLabel}>Закат</p>
            <p className={s.sunTimeValue}>{weather?.sunset}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThisDay;
