import React from 'react';
// Custom hook
import {useTodos} from './useTodos';
// Aquí se usan las llaves porque en el archivo del componente se obliga a hacerlo en el export con las llaves
import {TodosError} from '../TodosError';
import {TodosLoading} from '../TodosLoading';
import {EmptyTodos} from '../EmptyTodos';
import {TodoHeader} from '../TodoHeader';
import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';
import {Modal} from '../Modal';
import {TodoForm} from '../TodoForm';


/* const defaultTodos = [
	{text: 'Cortar cebolla', completed: false},
	{text: 'Hacer el curso de React', completed: false},
	{text: 'Llorar con la llorona', completed: true}
]; */




function App(){
	// Hook de contexto: Recibe toda la información del atributo 'value' del TodoContext.Provider
	// Se puede usar un nombre de variable o también se puede usar un objeto para encapsular las propiedades de 'value' que queremos utilizar
	const {
		error, 
		loading, 
		totalTodos, 
		completedTodos,
		searchedTodos, 
		completeTodos, 
		deleteTodos,
		openModal,
		setOpenModal,
		addTodo,
		searchValue, 
		setSearchValue
	} = useTodos();

	return(
		// Es obligatorio empezar con un DIV o bien usar este componente 'React.Fragment', que hace como una etiqueta invisible
		<React.Fragment>
			<TodoHeader>
				{/* El  'TodoCounter' usa el hook context en su propio archivo */}
				<TodoCounter
					totalTodos={totalTodos}
					completedTodos={completedTodos}
				/>
				
				{/* El  'TodoSearch' usa el hook context desde aquí, su componente padre */}
				<TodoSearch
					searchValue={searchValue}
					setSearchValue={setSearchValue}
				/>
			</TodoHeader>
			
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
				<TodoForm
					setOpenModal={setOpenModal}
					addTodo={addTodo}
				/>
			</Modal>
			)}
			

			<CreateTodoButton
				setOpenModal={setOpenModal}
			/>
		</React.Fragment>
	);
}

export default App;