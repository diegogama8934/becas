import React, { useState, useEffect, useRef } from "react";
import '../../Styles/recuperar.css';
import logo from '../../static_image/logo-uaq.png'
import {
    useNavigate
} from "react-router-dom";
// import { HOST } from '../../config/config';

function Inicio() {

const navigate = useNavigate();

    const [store, setStore] = useState([]);

    const handleClick = (id, name) => {
        // navigate('/editar', {state: {id:id, name: name}});
    }
    


    const fetchStore = async () => {

        // try {
        //     const response = await fetch(HOST + `/show_store`);
        //     const data = await response.json();
        //     console.log(data.data);
        //     const data2 = data.data.map(store => ({
        //         value: store.address_id,
        //         label: store.address,
        //       }));
        //     console.log(data2)
        //     setStore(data2);
        // } catch (err) {
        //     console.log(err);
        // }
    };


  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
        <div className="login">
            <img className="img-login" src={logo} alt="Logo-UAQ"/>
            <h1>Recuperar contraseña</h1>
            
                <div className="left-label">
                    <label for="">Nueva contraseña</label>
                </div>
            <input type="password"/>
            <div className="left-label">
                <label for="">Repetir contraseña</label>
            </div>
            <input type="password"/>
            <button>Actualizar contraseña</button>
        </div>
        <img className="img-background"src={logo} alt="Logo UAQ"/>
    </div>
  );
}

export default Inicio;