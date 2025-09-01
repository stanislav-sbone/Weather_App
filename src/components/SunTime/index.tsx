import { type FC } from 'react';
import s from './index.module.css';
import { useWeatherContext } from '../../context/WeatherContext';
import { Sunrise, Sunset } from 'lucide-react';
import SunCard from '../SunCard';

const SunTime: FC = () => {
  const { weather } = useWeatherContext();
  const sunData = [
    {
      icon: <Sunrise className={s.sunCardImage} />,
      label: 'Восход',
      time: weather?.sunrise,
      className: s.sunrise,
    },
    {
      icon: <Sunset className={s.sunCardImage} />,
      label: 'Закат',
      time: weather?.sunset,
      className: s.sunset,
    },
  ];

  return (
    <div className={s.sunTime}>
      {sunData.map((data) => (
        <SunCard
          key={data.label}
          icon={data.icon}
          label={data.label}
          time={data.time}
          cn={data.className}
        />
      ))}
    </div>
  );
};

export default SunTime;
