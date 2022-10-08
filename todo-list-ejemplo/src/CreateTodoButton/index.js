import React from "react";
import './CreateTodoButton.css';


function CreateTodoButton(props){
    function onClickButton() {
        // Las funciones que actualizan el estado, permiten recibir el valor a establecer o 
        // recibir una función que nos da el estado anterior a la acción
        // En este caso se usa una función flecha que devuelve el contrario al estado anterior
        props.setOpenModal(prevState => !prevState);
    }
    
    return(
        <button 
            className="CreateTodoButton"
            // Si se realiza una acción directamente, hay que envolverla en una función anónima
            //onClick={()=>{alert('Aquí se debería abrir el modal')}}
            // Si la función lleva parámetros, también hay que envolverla en una función anónima
            // onClick={()=>{onClickButton('Aquí se debería abrir el modal')}}
            // Si la función no lleva parámetros, se puede escribir el nombre directamente
            onClick={onClickButton}
        >
            +
        </button>
    )
}

// De esta manera, exporta el componente con su nombre exacto
export {CreateTodoButton};