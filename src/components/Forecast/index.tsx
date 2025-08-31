import { type FC } from 'react';
import s from './index.module.css';
import { Calendar } from 'lucide-react';

const Forecast: FC = () => {
  return (
    <div className={s.forecast}>
      <div className={s.title}>
        <Calendar />
        <h3>Forecast for the week</h3>
      </div>
    </div>
  );
};

export default Forecast;
