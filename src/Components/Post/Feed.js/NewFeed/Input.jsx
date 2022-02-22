import './newsfeed.css';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import { useState, useRef } from 'react';
import { MdMonochromePhotos } from "react-icons/md";
import { HiPhotograph } from "react-icons/hi";
import { BsEmojiDizzyFill } from "react-icons/bs";
// import { IconName } from "react-icons/ai";

export default function Input({user, admin }) {
  const [input, setInput ] = useState();
  const [selectedFile, setSelectedFile] = useState(null);
  const [ showEmojis, setShowEmojis ] = useState(false)
  const filePickerRef = useRef(null);



  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };
  
console.log(input)
  const addImageTopPost = () => {

  }

  return (
    <div className='inputContainer'>
      <div className="userDetails">
        <p className='userName'>{user?.userName}</p>
          <img src={user?.image} alt='' className='adminImage' />
      </div>
            <div className='emojisWrapper'>
              <textarea  rows='2' className='textInput' onChange={(e) => setInput(e.target.value)}/>
                <div className='IconsEmojiContainer'>
                  <div className='iconsContainer'>
                    <img src={selectedFile} alt="" className='selectedImage'></img>
                  </div>
                  <div className=''>
                    <div className='inputIcon' onClick={() => filePickerRef.current.click()}>
                      <HiPhotograph className='iconColor' />
                      <input type='file' onChange={addImageTopPost} ref={filePickerRef} hidden/>
                    </div>
                  </div>
                  <div className=''>
                    <div className='inputIcon' onClick={() => setShowEmojis(!showEmojis)}>
                      <BsEmojiDizzyFill className='iconColor' />
                    </div>
                  </div>
                <button disabled={!input.trim() && selectedFile} className="postButton" 
              // onClick={sendPost}
            >Post News</button>
                </div>
            </div>
            {showEmojis && (
              <Picker 
              title="Pick emoji"
                onSelect={addEmoji} className="emojiPicker"
                style={{
                  position: "absolute",
                  marginTop: '90px',
                  maxWidth: '500px',
                  borderRadius: '10px',
                }}
                skintones = {{
                  1: 'Medium-Light Skin Tone',
                  2: 'Medium Skin Tone',
                  3: 'Medium-Dark Skin Tone',
                  4: 'Dark Skin Tone',
                }}
                theme='dark'
              />
            )}
    </div>
  )
}
