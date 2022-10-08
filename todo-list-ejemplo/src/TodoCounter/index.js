import React from "react";
import {TodoContext} from "../TodoContext";
// Estilo en CSS
import './TodoCounter.css';


// Estilo en línea
const estilos = {
    color: 'red',
    backgroundColor: 'yellow'
}


function TodoCounter(){
    // Hook de contexto: Obtiene las propiedades en un objeto con el recuento del total de TODOS, el recuento de TODOS completados, y los añade al elemento H2
    const {totalTodos, completedTodos} = React.useContext(TodoContext);


    return(
        <h2 className='TodoCounter' style={estilos}>Has completado {completedTodos} de {totalTodos} TODOs</h2>
    )
}

// De esta manera, exporta el componente con su nombre exacto
export {TodoCounter};