import cls from './CartCard.module.scss';
import { useAppSelector, useAppDispatch } from '../../services';
import { increaseProductCount, decreaseProductCount } from '../../services/slices/cartSlice/cartSlice';

import { memo } from 'react';

interface IProps {
  id: number;
}

export const CartCard = memo(({ id }: IProps) => {
  const dispatch = useAppDispatch();

  const product = useAppSelector((state) => state.cart.entities[id]);
  const { thumbnail, title, count, price } = product;

  const incrementHandle = () => {
    dispatch(increaseProductCount({ id }));
  };

  const decrementHandle = () => {
    dispatch(decreaseProductCount({ id }));
  };

  return (
    <div className={cls.product}>
      <img className={cls.img} src={thumbnail} />
      <p className={cls.description}>{title}</p>
      <div className={cls.counter}>
        <button onClick={decrementHandle}>-</button>
        <p>{count}</p>
        <button onClick={incrementHandle}>+</button>
      </div>
      <p className={cls.price}>${price}</p>
    </div>
  );
});
