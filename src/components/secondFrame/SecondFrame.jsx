import React from "react";
import s from './SecondFrame.module.css'
import Keyboard from '../keyboard/Keyboard'

const SecondFrame = (props) =>{
    return(
        <div className={s.body}>
            <div className={s.phone}>
                <Keyboard/>
            </div>
            <div className={s.pic}>
            
            </div>
        </div>
    )
}

export default SecondFrame