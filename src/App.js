import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import NavBar from './Components/NavBar';
import Trends from './Pages/Trends';
import Movies from './Pages/Movies,';
import Series from './Pages/Series';
import Home from './Pages/Home';
import './App.css';
import '../src/Style/styled.css'
import SinglePage from './Pages/SinglePage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/trends/:page' element={<Trends/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/series' element={<Series/>}/>
          <Route path='/single-page/:id' element={<SinglePage/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
