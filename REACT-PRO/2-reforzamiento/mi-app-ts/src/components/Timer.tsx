import {useEffect, useRef, useState} from "react";
type TimerArgs = {
    milisec: number,
}
export const Timer = ({milisec}: TimerArgs) => {
    const [segundos, setSegundos] = useState(0)
    const ref = useRef<NodeJS.Timeout>();

    useEffect(() => {
        ref.current && clearInterval(ref.current)
        ref.current  = setInterval(() => {
            setSegundos(s => s + 1);
        }, milisec);
   ;
    }, [milisec]);
    return (
        <>
            <h4>Timer: <small>{segundos}</small></h4>
        </>
    )
}