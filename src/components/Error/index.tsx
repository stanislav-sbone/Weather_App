import { type FC } from 'react';
import s from './index.module.css';
import { TriangleAlert } from 'lucide-react';

const Error: FC = () => {
  return (
    <div className={s.errorContainer}>
      <TriangleAlert className={s.alert} />
      <p className={s.errorText}>
        Не удалось загрузить данные
        <br />
        Кажется, такого города нет. Попробуйте ещё раз
      </p>
    </div>
  );
};

export default Error;
