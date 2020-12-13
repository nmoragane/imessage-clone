import { IconButton } from '@material-ui/core';
import MicNoneIcon from "@material-ui/icons/MicNone";
import React, { useState } from 'react';
import './Chat.css'

function Chat() {
    const [input, setInput] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();


        //firebase
        setInput("");

    };

    return (
        <div className="chat">
            {/* chat header */}
            <div className="chat__header">
                <h4>To: <span className="chat__name">Channel Name</span></h4>
                <strong>Details</strong>
            </div>

            {/* chat messages */}
            <div className="chat__messages">
                <h2>I am a message</h2>
                <h2>I am a message</h2>
                <h2>I am a message</h2>
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