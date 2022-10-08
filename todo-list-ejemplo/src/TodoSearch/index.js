import React from "react";
import {TodoContext} from "../TodoContext";
import './TodoSearch.css';


// Obtiene un objeto con las 
function TodoSearch(){
    // Hook de contexto: Obtiene las propiedades en un objeto con el valor del estado 'searchValue' y la función 'setSearchValue'; usándolos en el elemento INPUT
    const {searchValue, setSearchValue} = React.useContext(TodoContext);


    function onSearchValueChange(event){
        console.log(event.target.value)
        setSearchValue(event.target.value);
    }

    return(
        <input 
            className="TodoSearch" 
            placeholder="Busca TODOs"
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
}

// De esta manera, exporta el componente con su nombre exacto
export {TodoSearch};