import { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import MainLayout from 'src/layouts/main';
import HomePage from 'src/pages/home/main';
import CorporateLayout from 'src/layouts/corporate';

import { mainRoutes } from './main';
import { dashboardRoutes } from './dashboard';

const MostWantedDestinationsPage = lazy(() => import('src/pages/most-wanted-destinations'));
const PackageDetails = lazy(() => import('src/pages/package-details'));
const SplashScreen = lazy(() => import('src/components/loading-screen/splash-screen'));
const AboutPage = lazy(() => import('src/pages/about'));
const ServicesPage = lazy(() => import('src/pages/services'));
const HelpPage = lazy(() => import('src/pages/help'));
const CorporatePage = lazy(() => import('src/pages/corporate'));

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
      path: '/corporate',
      element: (
        <CorporateLayout>
          <Suspense fallback={<SplashScreen />}>
            <CorporatePage />
          </Suspense>
        </CorporateLayout>
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
      path: 'serviços',
      children: [
        {
          element: (
            <MainLayout>
              <Suspense fallback={<SplashScreen />}>
                <ServicesPage />
              </Suspense>
            </MainLayout>
          ),
          index: true,
        },
      ],
    },
    {
      path: 'ajuda',
      children: [
        {
          element: (
            <MainLayout>
              <Suspense fallback={<SplashScreen />}>
                <HelpPage />
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

    // Dashboard routes
    ...dashboardRoutes,

    // Main routes
    ...mainRoutes,

    // No match 404
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
