import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
      <section className='container'>
        <Routes>
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </section>
    </Fragment>
  </BrowserRouter>
);

export default App;