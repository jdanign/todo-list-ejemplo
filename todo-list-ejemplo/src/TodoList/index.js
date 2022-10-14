import React from "react";
import './TodoList.css';


function TodoList({children, error, onError, loading, onLoading, searchedTodos, onEmptyTodos, onEmptySearchResults, totalTodos, render}){
    // Permite usar una render function o una render prop según lo que le llegue
    const renderFunc = children || render;

    return(
        <section className="TodoList-container">
            {/* Hay errores, muestra un mensaje de error */}
            {error && onError()}
            {/* No hay errores. Si existen TODOs y no se encuentran resultados de búsqueda, muestra un mensaje de aviso; si no existen TODOs muestra otro mensaje de aviso. */}
            {loading ? onLoading() : (!error && !!totalTodos ? (!searchedTodos?.length && onEmptySearchResults()) : onEmptyTodos())}

            <ul>
                {/* Con estas validaciones solo se muestran los TODOs mientras no haya errores ni esté cargando */}
                {!loading && !error && searchedTodos.map(renderFunc)}
            </ul>
        </section>
    );
}

// De esta manera, exporta el componente con su nombre exacto
export {TodoList};