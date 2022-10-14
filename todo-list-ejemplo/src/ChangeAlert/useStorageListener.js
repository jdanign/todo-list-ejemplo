import React from "react";


/**
 * Custom hook
 * @returns 
 */
function useStorageListener(syncronize){
    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener('storage', (change)=>{
        if (change.key === 'TODOS_V1'){
            console.log('HUBO CAMBIOS EN TODOS LOS TODOS_V1')
            setStorageChange(true);
        }
    });

    function toggleShow(){
        syncronize();
        setStorageChange(false);
    }

    return {
        show:storageChange,
        toggleShow
    };
}

export {useStorageListener};