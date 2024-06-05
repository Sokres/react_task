import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Task from './pages/Task';
import About from './pages/About';
import Error from './pages/Error';
import Logo from './img/Logo.svg'
import './styles/style.css';



const App = () => {
  //   const fetchPost = async () => {
  //     const q = query(collection(db, "bd_task"), limit(3))
  //     const querySnapshot = await getDocs(q);
  //     console.log(Object.keys(querySnapshot).length);
  //     console.log(query(collection(db, "bd_task"), orderBy("name"), limit(3)));
  //     const arr = []
  //     querySnapshot.forEach((num) => {
  //       arr.push(num.data())
  //     });
  //     console.log(arr);
  // }
  //   useEffect(() => {    
  //     fetchPost()
  //   }, [])
  return (
    <BrowserRouter basename="/">
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
        <Route path='/' element={<Task />} />
        <Route path='/about' element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter >
  );
};

export default App;