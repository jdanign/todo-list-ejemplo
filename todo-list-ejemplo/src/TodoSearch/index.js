import React from "react";
import './TodoSearch.css';


// Obtiene un objeto con las propiedades necesarias
function TodoSearch({searchValue, setSearchValue, loading}){
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
            disabled={loading}
        />
    );
}

// De esta manera, exporta el componente con su nombre exacto
export {TodoSearch};