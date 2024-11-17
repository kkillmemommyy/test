import { IApiData, TProduct } from '../services/slices/productsSlice/types';

export const normalizeData = (data: IApiData[]): TProduct[] => {
  return data.map((item) => ({
    id: item.id,
    title: item.title,
    price: item.price,
    thumbnail: item.thumbnail,
  }));
};
