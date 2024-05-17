import {Timer} from "./Timer";
import {useState} from "react";

export const TimerPadre = () => {

    const [milisec, setMilisec] = useState(1000)
    return (
        <>
            <h2>Milisegundos {milisec}</h2>
            <button className={'btn btn-outline-success'} onClick={()=>setMilisec(1000)}>1000</button>
            <button className={'btn btn-outline-success'}  onClick={()=>setMilisec(2000)}>2000</button>
            <Timer milisec={milisec}/>
        </>
    )
}