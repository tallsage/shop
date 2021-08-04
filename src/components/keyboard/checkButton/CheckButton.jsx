import React from "react";
import s from './CheckButton.module.css'
import checkImg from './checkImg.png'

const CheckButton = (props) =>{
    return(
        <div className={s.main}>
        <button 
            className={s.CheckButton}
            onClick={props.onClick}
            >
                {(props.check) ? (<img src={checkImg} alt='check' className={s.img}/>) : (null)}
        </button>
        <div className={s.text}>Согласие на обработку персональных данных</div>
        </div>
    )
}

export default CheckButton