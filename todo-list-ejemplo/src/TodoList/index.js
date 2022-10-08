import React from "react";
import './TodoList.css';


function TodoList(props){
    return(
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    )
}

// De esta manera, exporta el componente con su nombre exacto
export {TodoList};