import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './view/pages/home';
import CakeConfigurator from './view/pages/cake-configurator';
import Layout from './view/components/layout/layout';
import FlavorFinder from './view/pages/flavor-finder';

function App() {
  return (
    <Layout>
      <Routes>
          <Route path='*' element={<Home/>}/>
          <Route path='cake-configurator' element={<CakeConfigurator/>}/>
          <Route path='flavor-finder' element={<FlavorFinder/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
