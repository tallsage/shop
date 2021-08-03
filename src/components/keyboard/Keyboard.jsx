import React, { useState, setState } from "react";
import s from './Keyboard.module.css'
import PhoneButton from "./phoneButton/PhoneButton";
import Display from "./display/Display";
import Keypad from "./keypad/Keypad";

const Keyboard = (props) =>{

    const [state, setState] = useState({
        data: ''
      })

    return(
        <div className={s.Keyboard}>
            <Display data={state.data}/>
            <Keypad>
                <PhoneButton label={'1'} value='1'/>
                <PhoneButton label={'4'} value='4'/>
                <PhoneButton label={'7'} value='7'/>
                <PhoneButton label={'+'} value='+'/>

                <PhoneButton label={'2'} value='2'/>
                <PhoneButton label={'5'} value='5'/>
                <PhoneButton label={'8'} value='8'/>
                <PhoneButton label={'0'} value='0'/>

                <PhoneButton label={'3'} value='3'/>
                <PhoneButton label={'6'} value='6'/>
                <PhoneButton label={'9'} value='9'/>
                <PhoneButton label={'backspase'} value='backspase'/>
            </Keypad>
        </div>
    )
}

export default Keyboard