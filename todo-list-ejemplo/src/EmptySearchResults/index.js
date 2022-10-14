import React from "react";


function EmptySearchResults({searchValue}){
    return <p>No hay resultados para <b>{searchValue}</b></p>;
}

export {EmptySearchResults};