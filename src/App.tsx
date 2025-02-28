import React from 'react';
import MainLayout from '@/layouts/main-layout';
import Home from '@/pages/home';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <MainLayout>
        <Home />
      </MainLayout>
      <Toaster />
    </>
  );
}

export default App;