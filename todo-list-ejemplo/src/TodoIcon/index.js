import React from "react";

import {ReactComponent as CompleteIcon} from "./check.svg";
import {ReactComponent as DeleteIcon} from "./delete.svg";

import './TodoIcon.css';


const iconTypes = {
    complete: color=>(
        <CompleteIcon className="Icon-svg Icon-svg--complete" fill={color}/>
    ),
    delete: color=>(
        <DeleteIcon className="Icon-svg Icon-svg--delete"/>
    )
};


function TodoIcon({type, color, onClick}){
    return(
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export {TodoIcon};