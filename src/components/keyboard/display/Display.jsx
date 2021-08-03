import React from "react";
import s from './Display.module.css'

const Display = (props) =>{
    return(
        <div className={s.Display}>
            {props.data}
        </div>
    )
}

export default Display