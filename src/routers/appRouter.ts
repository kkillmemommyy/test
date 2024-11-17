import { ComponentType, lazy } from 'react';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const CartPage = lazy(() => import('../pages/CartPage/CartPage'));
const WalletPage = lazy(() => import('../pages/WalletPage/WalletPage'));

export enum RouteNames {
  PRODUCTS = '/',
  CART = '/cart',
  WALLET = '/wallet',
}

interface IRoute {
  path: RouteNames;
  component: ComponentType;
  isPrivate: boolean;
}

export const appRoutes: IRoute[] = [
  { path: RouteNames.PRODUCTS, component: MainPage, isPrivate: false },
  { path: RouteNames.CART, component: CartPage, isPrivate: false },
  { path: RouteNames.WALLET, component: WalletPage, isPrivate: false },
];
