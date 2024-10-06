import { ComponentType } from 'react';
import { MainPage, CartPage, WalletPage } from '../pages';

interface IRoute {
  path: string;
  component: ComponentType;
  isPrivate: boolean;
}

export const appRoutes: IRoute[] = [
  { path: '/', component: MainPage, isPrivate: false },
  { path: '/cart', component: CartPage, isPrivate: false },
  { path: '/wallet', component: WalletPage, isPrivate: false },
];
