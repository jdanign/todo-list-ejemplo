import React from "react";
import {useLocalStorage} from "./useLocalStorage";


// Custom hook
function useTodos(){
    // Uso del customHook
	const {item: todos, saveItem: saveTodos, syncronizeItem: syncronizeTodos, loading, error} = useLocalStorage('TODOS_V1', []);

	// El input search se establece como un estado
	const [searchValue, setSearchValue] = React.useState('');

	// Se establece el estado para el modal
	const [openModal, setOpenModal] = React.useState(false);

	// Calcula los TODOs completados (filtra el array con los objetos TODO que tienen completed a 'true')
	const completedTodos = todos.filter(todo => todo.completed).length;
	// Total de TODOs (tamaño del array de TODOS)
	const totalTodos = todos.length;

	// TODOs filtrados según lo que se escribe en el cuadro de búsqueda
	let searchedTodos = [];

	// Si hay texto en la variable del estado enlazado el cuadro de búsqueda
	if (searchValue.length){
		searchedTodos = todos.filter(todo =>{
			const todoText = todo.text.toLowerCase();
			const searchText = searchValue.toLowerCase();
			return todoText.includes(searchText);
		});
	}
	// Si no hay texto en el cuadro de búsqueda, muestra el listado por defecto
	else
		searchedTodos = todos;
	

	/**
	 * Marca como completado un TODO identificándolo a través del texto que contiene.
	 * @param {*} text 
	 */
	function completeTodos(text){
		// Examina cada TODO para encontrar el que tenga un texto que coincida con el recibido
		const todoIndex =  todos.findIndex(todo => todo.text === text);

		// Copia el array de TODOS
		const newTodos = [...todos];

		// Establece la propiedad 'completed' a 'true' del TODO
		newTodos[todoIndex].completed = true;

		// Hace la persistencia en localStorage y actualiza el estado
		saveTodos(newTodos);
	}


	/**
	 * Añade un TODO.
	 * @param {*} text 
	 */
	 function addTodo(text){
		// Copia el array de TODOS
		const newTodos = [...todos];

		// Establece la propiedad 'completed' a 'true' del TODO
		newTodos.push({
			completed: false,
			text
		});

		// Hace la persistencia en localStorage y actualiza el estado
		saveTodos(newTodos);
	}


	/**
	 * Elimina un TODO identificándolo a través del texto que contiene.
	 * @param {*} text 
	 */
	function deleteTodos(text){
		// Examina cada TODO para encontrar el que tenga un texto que coincida con el recibido
		const todoIndex =  todos.findIndex(todo => todo.text === text);

		// Copia el array de TODOS
		const newTodos = [...todos];

		// Elimina, en la posición indicada, un único elemento (segundo parámetro de la función splice)
		newTodos.splice(todoIndex, 1);

		// Hace la persistencia en localStorage y actualiza el estado
		saveTodos(newTodos);
	}


	// console.log('Render antes del USE EFFECT')

	// Hook que ejecuta el código justo cuando se hace el render y se repite cada vez que se renderiza
	// El segundo parámetro de la función arrow define cuando se ejecuta el useEffect
	// Enviado un array vacío, el efecto solo se ejecuta la primera vez que se renderiza la app
	// Añadiendo una variable, el useEffect se ejecuta cada vez que cambie esa variable, además del primer renderizado de la app
	/* React.useEffect(()=>{
		console.log('USE EFFECT SE EJECUTA')
	}, [totalTodos]);

	console.log('Render después del USE EFFECT') */


    return{
		loading,
		error,
		totalTodos,
		completedTodos,
		searchValue,
		setSearchValue,
		searchedTodos,
		addTodo,
		completeTodos,
		deleteTodos,
		openModal,
		setOpenModal,
		syncronizeTodos
    };
}


export {useTodos};