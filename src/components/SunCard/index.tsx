import { type FC, type ReactNode } from 'react';
import s from './index.module.css';

interface IProps {
  icon: ReactNode;
  label: string;
  time: string | undefined;
  cn: string;
}

const SunCard: FC<IProps> = ({ icon, label, time, cn }) => {
  return (
    <div className={`${s.sunCard} ${cn}`}>
      {icon}
      <div className={s.sunCardDetails}>
        <p className={s.sunTimeLabel}>{label}</p>
        <p className={s.sunTimeValue}>{time}</p>
      </div>
    </div>
  );
};

export default SunCard;
