import React from "react";
import s from './CompliteButton.module.css'

const CompliteButton = (props) =>{
    return(
        <button 
            className={s.CompliteButton}
            onClick={props.onClick}
            disabled={(props.complite || !props.check) ? (true) : (false)}
            >
            Подтвердить номер
        </button>
    )
}

export default CompliteButton