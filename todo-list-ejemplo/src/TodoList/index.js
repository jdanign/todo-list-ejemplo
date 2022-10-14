import React from "react";
import './TodoList.css';


function TodoList({children}){
    // Composición: Utiliza un objeto para controlar el contenido de la lista (nº de elementos y propiedades que tendrá)
    return(
        <section>
            <ul>
                {children}
            </ul>
        </section>
    )
}

// De esta manera, exporta el componente con su nombre exacto
export {TodoList};