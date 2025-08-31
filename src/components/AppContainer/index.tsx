import { type FC, type ReactNode } from 'react';
import s from './index.module.css';

interface IProps {
  children: ReactNode;
}

const AppContainer: FC<IProps> = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default AppContainer;
