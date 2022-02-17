import React, { useState } from 'react';
import "./MessageSender.css";
// import { Avatar } from "@mui/icons-material/core";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonicon from "@mui/icons-material/InsertEmoticon";
import { useStateValue } from '../../../StateProvider';
// import * as firebase from "firebase/app";
// import db from '../../../firebase/app';
// import firebase from 'firebase';


function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // db.collection('post').add({
        //     message: input,
        //     timestamp: firebase.firestore.FieldValue.
        //     serverTimestamp(),
        //     profilePic: user.photoURL,
        //     username: user.displayName,
        //     image: imageUrl,
        // })
        // setImageUrl("")  
        // setInput("")
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                {/* <Avatar src={user.photoURL} /> */}
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} className="messageSender__input" placeholder={`What on your mind, ${user.displayName}?`} />
                    <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="image URL (optional)" />
                    <button onClick={handleSubmit} type="submit">Hidden Submit</button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: 'red',}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: 'green',}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonicon style={{ color: 'orange',}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender