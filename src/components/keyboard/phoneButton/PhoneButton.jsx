import React from "react";
import s from './PhoneButton.module.css'

const PhoneButton = (props) =>{
    return(
        <button 
            className={s.PhoneButton}
            onClick={props.onClick}
            data-value={props.value}>
            {props.label}
        </button>
    )
}

export default PhoneButton