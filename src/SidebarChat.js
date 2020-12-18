import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setChat } from './features/chatSlice';
import db from './firebase';
import "./SidebarChat.css"

function SidebarChat({id, chatName}) {
    const dispatch = useDispatch();
    const [chatInfo, setChatInfo] = useState([])

    console.log("chatname ->", chatName.chatName);

    useEffect(() => {
        db.collection('chats').doc(id)
        .collection('messages')
        .orderBy("timestamp", "desc")
        .onSnapshot(snapshot => (
            setChatInfo(snapshot.docs.map(doc => doc.data()))
        )

        )
        
    }, [id]);

    //console.log("doc ->", chatInfo);
    return (
        <div onClick={() => {
            dispatch(
                setChat({
                    chatId: id,
                    chatName: chatName,
                })
            )
        }} className="sidebarChat">
            <Avatar src={chatInfo[0]?.photo}/>
            <div className="sidebarChat__info">
                <h3>{chatName.chatName}</h3>
                <p>{chatInfo[0]?.message}</p>
                <small>{new Date(chatInfo[0]?.timestamp?.toDate()).toLocaleString()}</small>
            </div>
        </div>
    );
}

export default SidebarChat;