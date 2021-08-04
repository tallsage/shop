import React from "react";
import s from './lastMsg.module.css'

const LastMsg = (props) =>{
    return(
        <div className={s.main}>
            <div className={s.big}>
                ЗАЯВКА ПРИНЯТА
            </div>
            <div className={s.mini}>
                Держите телефон под рукой.
            </div>
            <div className={s.mini}>
                Скоро с Вами свяжется наш менеджер.
            </div>
        </div>
    )
}

export default LastMsg