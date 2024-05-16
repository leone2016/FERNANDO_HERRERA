// @flow
import * as React from 'react';
import {useState} from "react";
interface User{
    uid: string,
    name: string
}

type Props = {};
export const Usuario = (props: Props) => {

    const [user, setUser] = useState<User>()

    const login = () => {
      setUser({
          uid: "123123-123123-123123",
          name: 'Leonardo Medina'
      })
    }
    return (
        <div className={'mt-5'}>
            <h3> Usuario: useState </h3>
            <button onClick={login} className="btn btn-outline-primary"></button>
            {
                (!user) ? <pre>No hay usuario</pre> : <pre> {JSON.stringify(user)}</pre>
            }

        </div>
    );
};