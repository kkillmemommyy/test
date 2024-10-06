import { NavLink } from 'react-router-dom';
import { Counter } from '../UI/Counter/Counter';
import cls from './Header.module.scss';
import clsx from 'clsx';

type Tabs = { lable: string; path: string }[];

export const Header = () => {
  const tabs: Tabs = [
    { lable: 'Главная', path: '' },
    { lable: 'Кошелек', path: 'wallet' },
    { lable: 'Корзина', path: 'cart' },
  ];

  return (
    <header className={cls.header}>
      <div className={cls.wrap}>
        <span className={cls.logo}>Market</span>
        <nav className={cls.nav}>
          <ul className={cls.navList}>
            {tabs.map(({ path, lable }) => (
              <li key={path} className={cls.navItem}>
                {lable === 'Корзина' && <Counter />}
                <NavLink to={path} className={({ isActive }) => clsx({ [cls.active]: isActive })}>
                  {lable}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
