import { useEffect, useState } from 'react';
import { useTypedSelector, useTypedDispatch } from '../../hooks/useTypedRedux';

import clsx from 'clsx';
import cls from './MainPage.module.scss';

import { fetchProducts } from '../../services/slices/productsSlice';

import { usePagination } from '../../hooks/usePagination';
import { useScrollToTop } from '../../hooks/useScrollTop';

import { ProductCard } from '../../components/ProductCard/ProductCard';

import { getSkip } from '../../utils/getSkip';

const MainPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  useScrollToTop(currentPage);
  const dispatch = useTypedDispatch();

  const { entities: products, total, limit } = useTypedSelector((state) => state.products);

  const pages = usePagination(total, limit);

  const getClassName = (p: number) => clsx(cls.page, { [cls.activePage]: p === currentPage });

  useEffect(() => {
    dispatch(fetchProducts(getSkip(currentPage, limit)));
  }, [dispatch, currentPage, limit]);

  return (
    <div className={cls.wrap}>
      <div className={cls.container}>
        {products.map((p) => (
          <ProductCard key={p.id} title={p.title} thumbnail={p.thumbnail} price={p.price} id={p.id} />
        ))}
      </div>
      <div className={cls.pagination}>
        {pages.map((p) => (
          <button className={getClassName(p)} onClick={() => setCurrentPage(p)} key={p}>
            {p}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
