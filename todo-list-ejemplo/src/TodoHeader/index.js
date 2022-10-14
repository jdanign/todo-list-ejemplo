import React from "react";


function TodoHeader({children, loading}){
    return(
        <header>
            {/* Puede recibir ninguno o varios elementos, los almacena como array */}
            {React.Children.toArray(children)
                .map(child => React.cloneElement(child, {loading}))}
                {/* En cada vuelta del array clona un único elemento como primer parámetro, se le asignan las propiedades necesarias con un objeto como segundo parámetro */}
        </header>
    );
}

export {TodoHeader};