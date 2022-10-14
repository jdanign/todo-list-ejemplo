import React from "react";
// Estilo en CSS
import './TodoCounter.css';


// Estilo en línea
const estilos = {
    color: 'red',
    backgroundColor: 'yellow'
}


function TodoCounter({totalTodos, completedTodos}){
    return(
        <h2 className='TodoCounter' style={estilos}>Has completado {completedTodos} de {totalTodos} TODOs</h2>
    )
}

// De esta manera, exporta el componente con su nombre exacto
export {TodoCounter};