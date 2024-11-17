import cls from './Payment.module.scss';
import { useState, memo } from 'react';
import clsx from 'clsx';
import { TCurrency } from '../../../../services/slices/walletSlice/types';
import { useTypedSelector } from '../../../../hooks/useTypedRedux';

export const Payment = memo(() => {
  const [activeCurrency, setActiveCurrency] = useState<TCurrency>('dollar');
  const wallet = useTypedSelector((state) => state.wallet);

  const getClassName = (currency: TCurrency) => clsx({ [cls.btn]: true, [cls.active]: activeCurrency === currency });

  return (
    <>
      <h2 className={cls.title}>Выберите способ оплаты</h2>
      <div className={cls.currency}>
        <button onClick={() => setActiveCurrency('dollar')} className={getClassName('dollar')}>
          Dollar
        </button>
        <button onClick={() => setActiveCurrency('coin')} className={getClassName('coin')}>
          Coin
        </button>
      </div>
      <div className={cls.wallet}>
        Доступно: {wallet[activeCurrency]}
      </div>
      <div className={cls.pay}>
        <button className={cls.btn}>К оплате</button>
      </div>
    </>
  );
});
