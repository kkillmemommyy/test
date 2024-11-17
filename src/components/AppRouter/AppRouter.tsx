import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import { appRoutes } from '../../routers/appRouter';
import { RouteNames } from '../../routers/appRouter';

export const AppRouter = () => {
  return (
    <Routes>
      {appRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <route.component />
            </Suspense>
          }
        />
      ))}
      <Route path='*' element={<Navigate to={RouteNames.PRODUCTS} />} />
    </Routes>
  );
};
