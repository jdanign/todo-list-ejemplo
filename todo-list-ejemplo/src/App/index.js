import React from 'react';
// Llama al provider del context
import {TodoProvider} from '../TodoContext';
// Aquí se usan las llaves porque en el archivo del componente se obliga a hacerlo en el export con las llaves
import {AppUI} from './AppUI';


/* const defaultTodos = [
	{text: 'Cortar cebolla', completed: false},
	{text: 'Hacer el curso de React', completed: false},
	{text: 'Llorar con la llorona', completed: true}
]; */




function App(){
	return ( 
		<TodoProvider>
			<AppUI/>
		</TodoProvider>
	);
}

export {App};