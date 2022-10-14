import React from 'react';
// Custom hook
import {useTodos} from './useTodos';
// Aquí se usan las llaves porque en el archivo del componente se obliga a hacerlo en el export con las llaves
import {TodosError} from '../TodosError';
import {TodosLoading} from '../TodosLoading';
import {EmptyTodos} from '../EmptyTodos';
import {EmptySearchResults} from '../EmptySearchResults';
import {TodoHeader} from '../TodoHeader';
import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';
import {Modal} from '../Modal';
import {TodoForm} from '../TodoForm';
import {ChangeAlert} from '../ChangeAlert';


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
		setSearchValue,
		syncronizeTodos
	} = useTodos();

	return(
		// Es obligatorio empezar con un DIV o bien usar este componente 'React.Fragment', que hace como una etiqueta invisible
		<React.Fragment>
			<TodoHeader
				loading={loading}
			>
				<TodoCounter
					totalTodos={totalTodos}
					completedTodos={completedTodos}
				/>
				
				<TodoSearch
					searchValue={searchValue}
					setSearchValue={setSearchValue}
				/>
			</TodoHeader>
			

			{/* Render props */}
			<TodoList
				error={error}
				loading={loading}
				searchedTodos={searchedTodos}
				totalTodos={totalTodos}
				onError={()=> <TodosError/>}
				onLoading={()=> <TodosLoading/>}
				onEmptyTodos={()=> <EmptyTodos/>}
				onEmptySearchResults={() => <EmptySearchResults searchValue={searchValue}/>}
				// render={todo => (
				// 	<TodoItem 
				// 		key={todo?.text} 
				// 		text={todo?.text}
				// 		completed={todo?.completed}
				// 		onComplete={()=> completeTodos(todo?.text)}
				// 		onDelete={()=> deleteTodos(todo?.text)}
				// 	/>
				// )}
			>
				{/* Render function */}
				{todo => (
					<TodoItem 
						key={todo?.text} 
						text={todo?.text}
						completed={todo?.completed}
						onComplete={()=> completeTodos(todo?.text)}
						onDelete={()=> deleteTodos(todo?.text)}
					/>
				)}
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

			<ChangeAlert 
				syncronize={syncronizeTodos}
			/>
		</React.Fragment>
	);
}

export default App;