import { type FC } from 'react';
import s from './index.module.css';
import { Calendar } from 'lucide-react';

const Forecast: FC = () => {
  return (
    <div className={s.forecast}>
      <div className={s.title}>
        <Calendar />
        <h3>Прогноз погоды на неделю</h3>
      </div>
    </div>
  );
};

export default Forecast;
