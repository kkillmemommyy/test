import { memo, useMemo } from 'react';
import cls from './Cart.module.scss';
import { ProductCard } from '../ProductCard/ProductCard';
import { useTypedSelector } from '../../../../hooks/useTypedRedux';

export const Cart = memo(() => {
  const totalCount = useTypedSelector((state) => state.cart.totalCount);
  const productsIds = useTypedSelector((state) => state.cart.ids);
  const allProducts = useTypedSelector((state) => state.cart.entities);

  const totalPrice = useMemo(() => {
    const total = productsIds.reduce((total, id) => {
      const { count, price } = allProducts[id];
      return total + count * price;
    }, 0);
    return total.toFixed(2);
  }, [allProducts, productsIds]);

  return (
    <>
      <div className={cls.wrap}>
        <div>
          <h2 className={cls.title}>Корзина</h2>
          <span className={cls.subtitle}>{totalCount} товаров</span>
        </div>
        <div className={cls.total}>
          <p>ИТОГ</p>
          <p className={cls.price}>${totalPrice}</p>
        </div>
      </div>

      <div className={cls.produtsList}>
        {productsIds.map((id) => (
          <ProductCard id={id} />
        ))}
      </div>
    </>
  );
});
