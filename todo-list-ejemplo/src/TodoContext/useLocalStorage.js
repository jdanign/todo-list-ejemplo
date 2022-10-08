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

			} catch (error){
				setLoading(false);
				setError(error);
			}
			
		}, 3000);
	});


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

	return {item, saveItem, loading, error};
}


export {useLocalStorage};