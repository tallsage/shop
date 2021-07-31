import s from './Button.module.css'
import React from "react";

const Button = (props) =>{

    return(
        <div className={s.body}>
            <button className={s.button} onClick={props.callBack}>подробнее</button>
        </div>
    )
}

export default Button