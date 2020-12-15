import { IconButton } from '@material-ui/core';
import MicNoneIcon from "@material-ui/icons/MicNone";
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Chat.css'
import { selectChatId, selectChatName } from './features/chatSlice';
import db from './firebase';
import Message from './Message';

function Chat() {
    const [input, setInput] = useState("");
    const chatName = useSelector(selectChatName);
    const chatId = useSelector(selectChatId);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (chatId) {
            db.collection('chats').doc(chatId).collection("messages").orderBy('timestamp', 'desc').onSnapshot(snapshot => {
                setMessages(snapshot.docs.map(doc => ({
                    id:doc.id,
                    data: doc.data()
                })))
            })
        }
    })

    const sendMessage = (e) => {
        e.preventDefault();


        //firebase
        setInput("");

    };

    return (
        <div className="chat">
            {/* chat header */}
            <div className="chat__header">
                <h4>To: <span className="chat__name">{toString(chatName)}</span></h4>
                <strong>Details</strong>
            </div>

            {/* chat messages */}
            <div className="chat__messages">
                <Message/>
                <Message/>
                <Message/>
            </div>

            {/* chat input */}
            <div className="chat__input">
                <form>
                    <input value = {input} onChange = {(e) => setInput(e.target.value)} type="text" placeholder="iMessage"/>
                    <button onClick={sendMessage}>Send Message</button>
                </form>

                <IconButton>
                    <MicNoneIcon className="chat__mic"/>
                </IconButton>
            </div>
        </div>
    );
}

export default Chat;