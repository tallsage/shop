import React, { useState, setState } from "react";
import s from './SecondFrame.module.css'
import Keyboard from '../keyboard/Keyboard'
import LastMsg from '../congr/LastMsg'

const SecondFrame = (props) =>{

    const [state, setState] = useState({
        click: false,
      })

    const compliteClick = () =>{
        setState({...state, click: true})
    }

    return(
        <div className={s.body}>
            <div className={s.phone}>
                {(!state.click) ? (<Keyboard compliteClick={compliteClick}/>) : (<LastMsg/>)}
            </div>
            <div className={s.pic}>
            </div>
        </div>
    )
}

export default SecondFrame