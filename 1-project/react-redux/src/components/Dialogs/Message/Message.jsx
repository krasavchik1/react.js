import React from 'react' ;
import s from './../Dialogs.module.css';


const Message = (props) => {

    let newMessageElement= React.createRef();

    let addMessage = () => {
        let text=newMessageElement.current.value;
            alert(text);
    }
    return (
        <div className={s.dialogs}>{props.message}</div>
    )
}

export default Message;