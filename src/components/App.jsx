import React from 'react'
import './app.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import ClassComponent from './ClassComponent';
import Timer from './timer/Timer';
import PropComponent from './PropComponent';
import StateLessComponent from './StatelessComponent';
import StatefulClassComponent from './StatefulClassComponent';
import Products from './Products';
import CicloDeVida from './CicloDeVida';
import Header from './Header';
import Status404 from './Status-404';
import User from './User';
import Form from './Form';
import PokeComponent from './PokeComponent';

let users = [
  "Jona", "Maximo","Mati", "Yami", "Martin", "Pablo", "Román"
]

let apiResponse = false

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<StatefulClassComponent/>}/>
          <Route path="/timer" element={<Timer/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/ciclodevida" element={<CicloDeVida/>}/>
          <Route path="/user/:id" element={<User/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/pokemons" element={<PokeComponent/>}/>
          <Route path="*" element={<Status404/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
