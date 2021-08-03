import React from "react";
import s from './Keypad.module.css'

const Keypad = (props) =>{
    return(
        <div className={s.main}>
            {props.children}
        </div>
    )
}

export default Keypad