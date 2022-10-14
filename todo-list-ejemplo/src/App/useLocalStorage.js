import React from "react";


/**
 * React customHook (el nombre es personalizado, pero debe empezar por 'use').
 * Utiliza localStorage para almacenar los datos de los TODOS
 * @param {*} itemName Cadena con el nombre que se usará como item de localStorage.
 */
function useLocalStorage(itemName, initialValue){
	// Hook estado para 'error'
	const [error, setError] = React.useState(false);

	// Hook estado para 'cargando'
	const [loading, setLoading] = React.useState(true);

	// El array de objetos de TODOS se establece como un estado
	const [item, setItem] = React.useState(initialValue);

	// Hook estado para controlar si la aplicación está actualizada entre pestañas
	const [syncronizedItem, setSyncronizedItem] = React.useState(true);


	// Al recibir un array vacío como segundo parámetro solo se ejecuta una vez
	React.useEffect(()=>{
		// Simula un tiempo de espera para poder visualizar el efecto
		setTimeout(() => {
			try{
				// Uso de localStorage del navegador
				const localStorageItem = localStorage.getItem(itemName);
				let parsedItem;

				// Hay datos en localStorage
				if (localStorageItem && localStorageItem.length > 2)
					parsedItem = JSON.parse(localStorageItem);
				// No hay datos en localStorage
				else{
					localStorage.setItem(itemName, JSON.stringify(initialValue));
					parsedItem = initialValue;
				}

				setItem(parsedItem);
				setLoading(false);
				setSyncronizedItem(true);

			} catch (error){
				setLoading(false);
				setError(error);
			}
			
		}, 3000);
	}, [syncronizedItem]);
	/* Cada vez que haya un cambio en 'syncronizedItem' se ejecutará este efecto */


	/**
	 * Almacena los datos de los TODO en localStorage y actualiza el estado
	 * @param {*} newItem 
	 */
	function saveItem(newItem){
		try{
			const stringifiedItem = JSON.stringify(newItem);
			localStorage.setItem(itemName, stringifiedItem);

			// Se usa la función del estado 'setItem()' para re-renderizar los componentes que usen este estado
			setItem(newItem);

		} catch (error){
			setLoading(false);
			setError(error);
		}
		
	}


	/**
	 * Lanza cambios en los estados.
	 * Se establece el estado de cargando y cambia el estado de sincronizado para que se lance el hook del efecto.
	 */
	function syncronizeItem(){
		setLoading(true);
		setSyncronizedItem(false);
	}

	return {item, saveItem, syncronizeItem, loading, error};
}


export {useLocalStorage};