const BASE_URL = 'https://dummyjson.com';

type TApiRoutes = {
  products: () => string;
};

export const apiRoutes: TApiRoutes = {
  products: () => `${BASE_URL}/products`,
};
