import React from 'react';
import { Outlet } from 'react-router-dom';
import AuthHeader from '../components/Header/AuthHeader';

function AuthLayout() {
  return (
    <>
      <AuthHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AuthLayout;
