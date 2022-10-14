import React from "react";
import './TodoForm.css';


function TodoForm({addTodo, setOpenModal}){
    // Estado local para el formulario (los estados hay que crearlos en el nivel mínimo donde vaya a usarse, en este caso, este estado solo será usado a nivel de formulario)
    const [newTodoValue, setnewTodoValue] = React.useState('');

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
                placeholder="Añade el texto del TODO"
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