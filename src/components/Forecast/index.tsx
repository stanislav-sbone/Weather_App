import { type FC } from 'react';
import s from './index.module.css';
import { Calendar } from 'lucide-react';
import ForecastCard from '../ForecastCard';
import { useWeather } from '../../hooks/useWeather';

const Forecast: FC = () => {
  const { weeklyForecast } = useWeather();
  // const cardsRef = useRef<HTMLDivElement>(null);

  // let isDown = false;
  // let startY = 0;
  // let scrollTop = 0;

  // const handleMouseDown = (e: React.MouseEvent) => {
  //   if (!cardsRef.current) return;
  //   isDown = true;
  //   startY = e.pageY - cardsRef.current.offsetTop;
  //   scrollTop = cardsRef.current.scrollTop;
  // };

  // const handleMouseUp = () => {
  //   isDown = false;
  // };

  // const handleMouseLeave = () => {
  //   isDown = false;
  // };

  // const handleMouseMove = (e: React.MouseEvent) => {
  //   if (!isDown || !cardsRef.current) return;
  //   e.preventDefault();
  //   const y = e.pageY - cardsRef.current.offsetTop;
  //   const walk = (y - startY) * 1;
  //   cardsRef.current.scrollTop = scrollTop - walk;
  // };

  return (
    <div className={s.forecast}>
      <div className={s.title}>
        <Calendar />
        <h3>Прогноз погоды на 5 дней</h3>
      </div>

      <div
        className={s.cards}
        // ref={cardsRef}
        // onMouseDown={handleMouseDown}
        // onMouseUp={handleMouseUp}
        // onMouseLeave={handleMouseLeave}
        // onMouseMove={handleMouseMove}
      >
        {weeklyForecast?.map((forecast) => (
          <ForecastCard key={forecast.date} forecast={forecast} />
        ))}
      </div>
    </div>
  );
};

export default Forecast;
