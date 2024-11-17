import { useTypedSelector } from '../../../hooks/useTypedRedux';
import cls from './Counter.module.scss';

export const Counter = () => {
  const totalCount = useTypedSelector((state) => state.cart.totalCount);

  if (totalCount === 0) {
    return;
  }
  return <div className={cls.counter}>{totalCount}</div>;
};
