import { useAppSelector } from '../../../services';
import cls from './Counter.module.scss';

export const Counter = () => {
  const totalCount = useAppSelector((state) => state.cart.totalCount);

  if (totalCount === 0) {
    return;
  }
  return <div className={cls.counter}>{totalCount}</div>;
};
