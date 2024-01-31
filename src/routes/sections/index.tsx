import { Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import MainLayout from 'src/layouts/main';
import HomePage from 'src/pages/home/main';

import { LoadingScreen } from 'src/components/loading-screen';

import { mainRoutes } from './main';
import { authRoutes } from './auth';
import { dashboardRoutes } from './dashboard';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <Suspense fallback={<LoadingScreen />}>
            <HomePage />
          </Suspense>
        </MainLayout>
      ),
    },

    // Auth routes
    ...authRoutes,

    // Dashboard routes
    ...dashboardRoutes,

    // Main routes
    ...mainRoutes,

    // No match 404
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
