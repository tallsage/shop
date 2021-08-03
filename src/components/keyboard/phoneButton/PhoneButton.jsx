import React from "react";
import s from './PhoneButton.module.css'

const PhoneButton = (props) =>{
    return(
        <div 
            className={s.PhoneButton}
            onClick={props.onClick}
            data-size={props.size}
            data-value={props.value}>
            {props.label}
        </div>
    )
}

export default PhoneButton