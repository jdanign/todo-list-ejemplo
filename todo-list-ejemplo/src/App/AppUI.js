import React from 'react';
import {TodoContext} from '../TodoContext';
import {TodosError} from '../TodosError';
import {TodosLoading} from '../TodosLoading';
import {EmptyTodos} from '../EmptyTodos';
import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';
import {Modal} from '../Modal';
import {TodoForm} from '../TodoForm';


// Genera la vista de la app a partir de los componentes necesarios
function AppUI(){
	// Hook de contexto: Recibe toda la información del atributo 'value' del TodoContext.Provider
	// Se puede usar un nombre de variable o también se puede usar un objeto para encapsular las propiedades de 'value' que queremos utilizar
	const {
		error, 
		loading, 
		searchedTodos, 
		completeTodos, 
		deleteTodos,
		openModal,
		setOpenModal
	} = React.useContext(TodoContext);


	return(
		// Es obligatorio empezar con un DIV o bien usar este componente 'React.Fragment', que hace como una etiqueta invisible
		<React.Fragment>
			<TodoCounter/>
			
			<TodoSearch/>
			
			<TodoList>
				{error && <TodosError error={error}/>}
				{loading ? <TodosLoading/> : (!error && !searchedTodos.length && <EmptyTodos/>)}
				{/* Es necesario enviar un identificador único en los bucles de listas */}
				{searchedTodos.map(todo =>(
					<TodoItem 
						key={todo.text} 
						text={todo.text}
						completed={todo.completed}
						onComplete={()=>completeTodos(todo.text)}
						onDelete={()=>deleteTodos(todo.text)}
					/>
				))}
			</TodoList>

			{!!openModal && (
				<Modal>
				<TodoForm/>
			</Modal>
			)}
			

			<CreateTodoButton
				setOpenModal={setOpenModal}
			/>
		</React.Fragment>
	);
}


export {AppUI};