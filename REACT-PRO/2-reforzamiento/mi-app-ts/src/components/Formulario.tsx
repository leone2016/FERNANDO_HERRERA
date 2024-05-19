import {useState, ChangeEvent} from "react";
import {useForm} from "../hook/useForm";

interface FormData {
    email: string;
    nombre: string;
    password: string;

}
export const Formulario = () => {
/*    const [formulario, setFormulario] = useState({
        email: '',
        nombre: '',
        password: ''
    });

    const handleInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        console.log(target);
        const {name, value} = target;
        console.log(name, value)
        setFormulario({
            ...formulario,
            [name]: value
        });

    }*/

    const {formulario, handleInputChange, reset} = useForm<FormData>({
        email: 'leoz.31@hotmail.com',
        nombre: 'Leonardo Medina',
        password: ''
    });

    const {nombre, password, email} = formulario;

    return (
        <form>
            <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input type="text"
                       placeholder="Nombre"
                       name={"nombre"}
                       value={nombre}
                       className="form-control"
                       onChange={handleInputChange}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input type="email"
                       placeholder="Email"
                       name={"email"}
                       value={email}
                       className="form-control"
                       onChange={handleInputChange}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Password:</label>
                <input type="password"
                       placeholder="Password"
                       name={"password"}
                       className="form-control"
                       onChange={handleInputChange}/>
            </div>
            <pre>{ JSON.stringify(formulario)}</pre>
            <button type="submit" className={"btn btn-outline-danger mt-6"}>Enviar</button>
        </form>
    )
}