import { useState } from "react";
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <>
      {/* Only show Navbar if the current path is not '/blog' */}
      {location.pathname !== '/blog' && <Navbar />}
      <Outlet />
      {/* This is where the Blog and other child routes will render */}
    </>
  );
}

export default App;
