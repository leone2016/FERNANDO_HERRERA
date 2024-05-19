//this is a hook to manage the form state
import {ChangeEvent, useState} from 'react';
export const  useForm = <T extends object>(initialState: T)=>  {

  const [formulario, setFormulario] = useState(initialState);
  const reset = () => {
    setFormulario(initialState);
  };

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
      const {name, value} = target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };
  return {formulario, handleInputChange, reset};
}