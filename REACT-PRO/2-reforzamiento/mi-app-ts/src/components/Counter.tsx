// @flow 
import * as React from 'react';
import {useState} from "react";

type Props = {
    
};
export const Counter = (props: Props) => {
    const [counter, setCounter] = useState(0)

    const incrementar = (numero: number = 0): void => {
      setCounter(counter +numero);
    }
    return (
        <div className="mt-5">
            <h3>Counter: useState</h3>
            <span>Valor: {counter}</span>
            <br/>
            <button
                onClick={()=>incrementar(1)}
                className="btn btn-outline-primary"
            > +1</button>
            <button
                onClick={()=>incrementar(2)}
                className="btn btn-outline-primary"
            > +2</button>
            <button
                onClick={()=>setCounter(0)}
                className="btn btn-outline-danger mt-2"
            > RESET</button>
        </div>
    );
};