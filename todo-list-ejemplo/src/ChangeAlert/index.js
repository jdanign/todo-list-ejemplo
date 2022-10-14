import React from "react";
import { useStorageListener } from "./useStorageListener";
import './ChangeAlert.css'


function ChangeAlert({syncronize}){
    // Custom hook
    const {show, toggleShow} = useStorageListener(syncronize);

    let result = null;

    if (show)
        result = (
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                    <p>Se han detectado cambios en otra pestaña o ventana.</p>
                    <p>¿Quieres sincronizar tus TODOs?</p>
                    <button 
                        className="TodoForm--button TodoForm-button--add"
                        onClick={() => toggleShow(false)}
                    >
                        OK
                    </button>
                </div>
            </div>
        );

    return result;
}

export {ChangeAlert}