import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Task from './pages/Task';
import About from './pages/About';
import Error from './pages/Error';
import Logo from './img/Logo.svg'
import './styles/style.css';

const App = () => {
  return (
    <BrowserRouter>
      <header className='header'>
        <div className="logo">
          <Link className='nigation__list' to='/' >
            <img src={Logo} alt="Logo" width={100} />
          </Link>
        </div>
        <div className="navigation">
          <nav className="nigation__menu">
            <Link className='nigation__list' to='/' >Главная</Link>
            <Link className='nigation__list' to='/about' >О сайте</Link>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Task />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter >
  );
};

export default App;