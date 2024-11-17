import cls from './CartPage.module.scss';
import { Cart } from './components/Cart/Cart';
import { Payment } from './components/Payment/Payment';

const CartPage = () => {
  return (
    <div className={cls.wrap}>
      <div className={cls.container}>
        <div className={cls.section}>
          <Cart />
        </div>
        <div className={cls.section}>
          <Payment />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
