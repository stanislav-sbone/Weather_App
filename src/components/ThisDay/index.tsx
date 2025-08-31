import { type FC } from 'react';
import s from './index.module.css';
import { MapPin, Sun } from 'lucide-react';

const ThisDay: FC = () => {
  return (
    <div className={s.thisDay}>
      <div className={s.thisDayTop}>
        <div className={s.cityName}>
          <MapPin />
          <div>
            <p className={s.city}>City Name</p>
            <p className={s.country}>Country</p>
          </div>
        </div>
        <div className={s.time}>
          <p>Sunday, Aug 31</p>
          <p>15:00</p>
        </div>
      </div>

      <div className={s.thisDayTemp}>
        <div>
          <p className={s.temp}>
            <span>32</span>℃
          </p>
          <p className={s.weather}>Sunny</p>
        </div>
        <div>
          <Sun className={s.weatherImage} />
        </div>
      </div>
    </div>
  );
};

export default ThisDay;
