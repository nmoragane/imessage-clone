import { Avatar } from '@material-ui/core';
import React from 'react';
import { selectUser } from './features/userSlice';
import './Message.css'

function Message({id, contents: {
    timestamp, displayName, email, message, photo, uid
}}) {

    const user = useSelector(selectUser)
    
    return (
        <div className={`mesage ${user.email === email &&"message__sender"}`}>
            <Avatar src={photo}/>
            <p>{message}</p>
            <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
        </div>
    );
}

export default Message;