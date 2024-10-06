import { TProduct } from '../productsSlice/types';

export type TCartProduct = TProduct & { count: number };

export type TCartState = { entities: {[key: number]: TCartProduct}, totalCount: number, ids: number[] };
