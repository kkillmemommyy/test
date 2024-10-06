import { Routes, Route } from 'react-router-dom';

import { appRoutes } from '../../routers/appRouter';

export const AppRouter = () => {
  return (
    <Routes>
      {appRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  );
};
