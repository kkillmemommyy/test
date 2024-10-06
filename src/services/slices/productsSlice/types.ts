export interface IApiData {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  [key: string]: unknown;
}

export type TProduct = Pick<IApiData, 'id' | 'title' | 'price' | 'thumbnail'>

export interface IProductsResponse <T> {
  products: T[];
  total: number;
  limit: number;
  skip: number;
}

export interface IProductsState {
  entities: TProduct[];
  isLoading: boolean;
  error: string | null;
  total: number;
  limit: number;
  skip: number;
}
