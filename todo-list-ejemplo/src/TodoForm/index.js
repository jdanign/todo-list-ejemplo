import React from "react";
import {TodoContext} from "../TodoContext";
import './TodoForm.css';


function TodoForm(){
    // Estado local para el formulario
    const [newTodoValue, setnewTodoValue] = React.useState('');
    // Contexto
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    function onChange(event){
        setnewTodoValue(event.target.value);
    }

    function onCancel(){
        setOpenModal(false);
    }

    function onSubmit(event){
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return(
        <form
            onSubmit={onSubmit}
        >
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla para el almuerzo"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button 
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export {TodoForm}