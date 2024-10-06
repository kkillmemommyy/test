import cls from './CartPage.module.scss';
import { useMemo } from 'react';
import { useAppSelector } from '../../services';
import { CartCard } from '../../components/CartCard/CartCard';

export const CartPage = () => {
  const totalCount = useAppSelector((state) => state.cart.totalCount);
  const productsIds = useAppSelector((state) => state.cart.ids);
  const allProducts = useAppSelector((state) => state.cart.entities);

  const totalPrice = useMemo(() => {
    const total = productsIds.reduce((total, id) => {
      const { count, price } = allProducts[id];
      return total + count * price;
    }, 0);
    return total.toFixed(2);
  }, [allProducts, productsIds]);

  return (
    <div className={cls.wrap}>
      <div className={cls.container}>
        <div className={cls.content}>
          <h1 className={cls.title}>Корзина</h1>
          <span className={cls.subtitle}>{totalCount} товаров</span>

          <div className={cls.produtsList}>
            {productsIds.map((id) => (
              <CartCard id={id} />
            ))}
          </div>

          <div className={cls.total}>
            <p>ИТОГ</p>
            <p className={cls.price}>${totalPrice}</p>
          </div>
        </div>

        <div className={cls.content}>XXX</div>
      </div>
    </div>
  );
};
