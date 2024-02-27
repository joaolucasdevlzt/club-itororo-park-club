import { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import MainLayout from 'src/layouts/main';
import HomePage from 'src/pages/home/main';

import { mainRoutes } from './main';
import { authRoutes } from './auth';
import { dashboardRoutes } from './dashboard';

const MostWantedDestinationsPage = lazy(() => import('src/pages/most-wanted-destinations'));
const PackageDetails = lazy(() => import('src/pages/package-details'));
const SplashScreen = lazy(() => import('src/components/loading-screen/splash-screen'));
const AboutPage = lazy(() => import('src/pages/about'));

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <Suspense fallback={<SplashScreen />}>
            <HomePage />
          </Suspense>
        </MainLayout>
      ),
    },
    {
      path: 'pacotes/detalhes',
      children: [
        {
          element: (
            <MainLayout>
              <Suspense fallback={<SplashScreen />}>
                <PackageDetails />
              </Suspense>
            </MainLayout>
          ),
          index: true,
        },
        {
          path: ':id',
          element: (
            <MainLayout>
              <Suspense fallback={<SplashScreen />}>
                <PackageDetails />
              </Suspense>
            </MainLayout>
          ),
        },
      ],
    },
    {
      path: 'destinos-mais-procurados/:id',
      children: [
        {
          element: (
            <MainLayout>
              <Suspense fallback={<SplashScreen />}>
                <MostWantedDestinationsPage />
              </Suspense>
            </MainLayout>
          ),
          index: true,
        },
      ],
    },
    {
      path: 'sobre',
      children: [
        {
          element: (
            <MainLayout>
              <Suspense fallback={<SplashScreen />}>
                <AboutPage />
              </Suspense>
            </MainLayout>
          ),
          index: true,
        },
      ],
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
