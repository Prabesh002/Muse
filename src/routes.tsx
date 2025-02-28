import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '@/pages/home';
import About from '@/pages/about';
import Features from '@/pages/features';
import Pricing from '@/pages/pricing';
import MainLayout from '@/layouts/main-layout'; 
import { Toaster } from '@/components/ui/toaster';


interface RouteDefinition {
  path: string;
  element: React.ReactNode;
  layout?: React.ComponentType<{ children: React.ReactNode }>; 
}

const routesConfig: RouteDefinition[] = [
  {
    path: '/',
    element: <Home />,
    layout: MainLayout,
  },
  {
    path: '/about',
    element: <About />,
    layout: MainLayout,
  },
  {
    path: '/features',
    element: <Features />,
    layout: MainLayout,
  },
  {
    path: '/pricing',
    element: <Pricing />,
    layout: MainLayout,
  },
];


const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routesConfig.map((route) => {
          const RouteElement = route.layout ? (
            <route.layout>
              {route.element}
            </route.layout>
          ) : (
            <>{route.element}</> 
          );

          return (
            <Route key={route.path} path={route.path} element={RouteElement} />
          );
        })}
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default AppRoutes;
