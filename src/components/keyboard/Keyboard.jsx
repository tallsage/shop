import React, { useState, setState } from "react";
import s from './Keyboard.module.css'
import PhoneButton from "./phoneButton/PhoneButton";
import Display from "./display/Display";
import Keypad from "./keypad/Keypad";
import CompliteButton from "./compliteButton/CompliteButton";
import CheckButton from './checkButton/CheckButton'

const Keyboard = (props) =>{

    const [state, setState] = useState({
        data: [],
        complite: true,
        check: false
      })

    const handleClick = (e) =>{
        const value = e.target.getAttribute('data-value')
        var buffArr = state.data

        switch (value) {
            case 'backspase':
                switch (buffArr.length) {
                    case 3:
                        buffArr.pop();
                        buffArr.pop();
                        setState({...state, data: buffArr})
                        break;
                    case 7:
                        buffArr.pop();
                        buffArr.pop();
                        setState({...state, data: buffArr})
                        break;
                    case 11:
                        buffArr.pop();
                        buffArr.pop();
                        setState({...state, data: buffArr})
                        break;
                    case 14:
                        buffArr.pop();
                        buffArr.pop();
                        setState({...state, data: buffArr})
                        break;
                    default:
                        buffArr.pop();
                        (buffArr.length === 14) ? (setState({...state, data: buffArr, complite: true})) : (setState({...state, data: buffArr}))
                        break;
                }
                break;
            case 'enter':
                
                break;
            default:
                switch (buffArr.length) {
                    case 1:
                        buffArr.push('(');
                        buffArr.push(value);
                        setState({...state, data: buffArr})
                        break;
                    case 5:
                        buffArr.push(')');
                        buffArr.push(value);
                        setState({...state, data: buffArr})
                        break;
                    case 9:
                        buffArr.push('-');
                        buffArr.push(value);
                        setState({...state, data: buffArr})
                        break;
                    case 12:
                        buffArr.push('-');
                        buffArr.push(value);
                        setState({...state, data: buffArr})
                        break;
                    case 15:
                        break;
                    default:
                        buffArr.push(value);
                        (buffArr.length === 15) ? (setState({...state, data: buffArr, complite: false})) : (setState({...state, data: buffArr}))
                        break;
                }
                break;
        }
    }

    const checkClick = () =>{
        (state.check) ? (setState({...state, check: false})) : (setState({...state, check: true}))
        console.log(state.check);
    }

    const compliteClick = () =>{
        console.log(123);
    }

    return(
        <div className={s.Keyboard}>
            <Display data={state.data}/>
            <Keypad>
                <PhoneButton onClick={handleClick} label={'1'} value='1'/>
                <PhoneButton onClick={handleClick} label={'4'} value='4'/>
                <PhoneButton onClick={handleClick} label={'7'} value='7'/>
                <PhoneButton onClick={handleClick} label={'⌫'} value='backspase'/>

                <PhoneButton onClick={handleClick} label={'2'} value='2'/>
                <PhoneButton onClick={handleClick} label={'5'} value='5'/>
                <PhoneButton onClick={handleClick} label={'8'} value='8'/>
                <PhoneButton onClick={handleClick} label={'0'} value='0'/>

                <PhoneButton onClick={handleClick} label={'3'} value='3'/>
                <PhoneButton onClick={handleClick} label={'6'} value='6'/>
                <PhoneButton onClick={handleClick} label={'9'} value='9'/>
            </Keypad>
            <CheckButton onClick={checkClick} check={state.check}/>
            <CompliteButton onClick={props.compliteClick} complite={state.complite}  check={state.check}/>
        </div>
    )
}

export default Keyboard