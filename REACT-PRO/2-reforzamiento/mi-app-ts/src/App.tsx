import React, {useState} from 'react';
import {Counter} from "./components/Counter";
import {Usuario} from "./components/Usuario";

function App() {
  return (
    <div className="App">
      <h1>Hola mundo</h1>
        <hr/>
        <Counter/>
        <Usuario/>
    </div>
  );
}

export default App;
