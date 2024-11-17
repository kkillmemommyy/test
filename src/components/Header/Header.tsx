import { NavLink } from 'react-router-dom';
import { Counter } from '../UI/Counter/Counter';
import cls from './Header.module.scss';
import clsx from 'clsx';
import { RouteNames } from '../../routers/appRouter';

type Tabs = { lable: string; path: RouteNames }[];

export const Header = () => {
  const tabs: Tabs = [
    { lable: 'Главная', path: RouteNames.PRODUCTS },
    { lable: 'Кошелек', path: RouteNames.WALLET },
    { lable: 'Корзина', path: RouteNames.CART },
  ];

  return (
    <header className={cls.header}>
      <div className={cls.container}>
        <span className={cls.logo}>Market</span>
        <nav className={cls.nav}>
          <ul className={cls.navList}>
            {tabs.map(({ path, lable }) => (
              <li key={path} className={cls.navItem}>
                {path === RouteNames.CART && <Counter />}
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
