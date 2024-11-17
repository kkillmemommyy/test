import cls from './ProductCard.module.scss';
import { useTypedSelector, useTypedDispatch } from '../../../../hooks/useTypedRedux';
import { increaseProductCount, decreaseProductCount } from '../../../../services/slices/cartSlice';

import { memo } from 'react';

interface IProps {
  id: number;
}

export const ProductCard = memo(({ id }: IProps) => {
  const dispatch = useTypedDispatch();

  const product = useTypedSelector((state) => state.cart.entities[id]);
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
