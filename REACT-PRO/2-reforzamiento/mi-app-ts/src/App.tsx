import React, {useState} from 'react';
import {Counter} from "./components/Counter";
import {Usuario} from "./components/Usuario";
import {TimerPadre} from "./components/TimerPadre";
import {ContadorReducer} from "./components/ContadorReducer";

function App() {
  return (
    <div className="App">
      <h1>Hola mundo</h1>
        <hr/>
        <Counter/>
        <Usuario/>

      <h2>UserEffect - userRef</h2>
      <TimerPadre/>
        <hr/>
        <ContadorReducer/>
    </div>
  );
}

export default App;
