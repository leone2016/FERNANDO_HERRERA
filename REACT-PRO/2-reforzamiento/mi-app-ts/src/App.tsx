import React, {useState} from 'react';
import {Counter} from "./components/Counter";
import {Usuario} from "./components/Usuario";
import {TimerPadre} from "./components/TimerPadre";

function App() {
  return (
    <div className="App">
      <h1>Hola mundo</h1>
        <hr/>
        <Counter/>
        <Usuario/>

      <h2>UserEffect - userRef</h2>
      <TimerPadre/>
    </div>
  );
}

export default App;
