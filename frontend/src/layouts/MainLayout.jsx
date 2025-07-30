import React from 'react';
import { Outlet } from 'react-router-dom';
import MainHeader from '../components/Header/MainHeader';
import Footer from '../components/Footer/Footer';

function MainLayout() {
  return (
    <>
      <MainHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
