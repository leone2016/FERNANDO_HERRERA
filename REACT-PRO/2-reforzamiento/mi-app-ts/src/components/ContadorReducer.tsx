import {useReducer} from "react";

const initialState = {
    contador: 10
}

type ActionType =
| { type: 'incrementar' }
| { type: 'decrementar' }
| { type: 'reset' }
| { type: 'custom', payload: number}

const reducer = (state: typeof initialState, action: ActionType) => {
    switch (action.type) {
        case 'incrementar':
            return {
                ...state,
                contador: state.contador + 1
            }
        case 'decrementar':
            return {
                ...state,
                contador: state.contador - 1
            }
        case 'reset':
            return {
                ...state,
                contador: 0
            }
        case 'custom':
            return {
                ...state,
                contador: action.payload
            }
        default:
            return state;
    }
}
export const ContadorReducer = () => {

    const [contadorState, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h3>Contador: {contadorState.contador}</h3>
            <button className="btn btn-outline-primary" onClick={()=>dispatch({ type: "incrementar"})}>+1</button>
            <button className="btn btn-outline-primary" onClick={()=>dispatch({ type: "decrementar"})}>-1</button>
            <button className="btn btn-outline-primary" onClick={()=>dispatch({ type: "custom" , payload: 100})}>100</button>
        </div>
    )

}