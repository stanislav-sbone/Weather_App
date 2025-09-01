import { type FC } from 'react';
import s from './index.module.css';
import Temperature from '../Temperature';
import WeatherCards from '../WeatherCards';
import SunTime from '../SunTime';
import CurrentDayInfo from '../ThisDayInfo';

const CurrentDay: FC = () => {
  return (
    <div className={s.currentDay}>
      <CurrentDayInfo />
      <Temperature />
      <WeatherCards />
      <SunTime />
    </div>
  );
};

export default CurrentDay;
