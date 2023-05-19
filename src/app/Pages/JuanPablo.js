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
        // navigate('/ingresar');
        navigate('/ingresar');
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
        <h1>Welcome to my app</h1>
        <button onClick={handleClick}>
        I'm a button
        </button>
    </div>
  );
}

export default Inicio;