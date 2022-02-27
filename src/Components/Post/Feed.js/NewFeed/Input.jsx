import './newsfeed.css';
import 'emoji-mart/css/emoji-mart.css';
import { getDownloadURL, ref, uploadString } from "@firebase/storage";
import { Picker } from 'emoji-mart';
import { useState, useRef } from 'react';
import { MdMonochromePhotos } from "react-icons/md";
import { HiPhotograph } from "react-icons/hi";
import { BsEmojiDizzyFill } from "react-icons/bs";
import { BiMessageSquareAdd } from "react-icons/bi";
// import { IconName } from "react-icons/ai";
import Spinner from '../Spinner';
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "@firebase/firestore";
import { db, storage } from '../../../../firebase';


export default function Input({user, admin }) {
  const [input, setInput ] = useState();
  const [selectedFile, setSelectedFile] = useState(null);
  const [ showEmojis, setShowEmojis ] = useState(false)
  const filePickerRef = useRef(null);
  const [loading, setLoading] = useState(false)

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  const message = 'loading updates!'
  
  const sendPost = async () => {
    loading && <Spinner message={message}/>;
    setLoading(true);

    const docRef = await addDoc(collection(db, "posts"), {
      id: user.uid,
      username: user.userName,
      userImg: user.image,
      text: input,
      timestamp: serverTimestamp(),
    });

    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    if (selectedFile) {
      await uploadString(imageRef, selectedFile, "data_url").then(async () => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadURL,
        });
      });
  }

  setLoading(false);
  setInput("");
  setSelectedFile(null);
  setShowEmojis(false); 
}

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };



  return (
    <div className={`border-b border-gray-700 p-3 flex-space-x3 overflow-y-scroll ${loading && 'opacity-60'}`}>

        <p className='userName'>{user?.userName}</p>
          <img src={user?.image} alt='' className='h-11 w-11 rounded-full cursor-pointer' />
        <div className='w-full divide-y divide-gray-700'>
          <div className={`${selectedFile && "pb-7"} ${input && "space-y-2.5"}`}>
            <textarea placeholder="What's is happening?" rows='2' className='bg-transparent outline-none text-gray placeholder-gray-500 txt-lg tracking-wide w-full min-h-[50px]' value={input} onChange={(e) => setInput(e.target.value)}/>

            {selectedFile && ( 
              <div className='relative'>
                <div className='absolute w-8 h-8 bg-[pink] hover:[bg-gray] bg-opacity-75 rounded-full flex items-center 
                  justify-center top-1 left-1 cursor-pointer' onClick={() => selectedFile(null)}><BiMessageSquareAdd />
                </div>
                  <img src={selectedFile} alt=" select " className='rounded-2xl max-h-80 0bject-contain' />
              </div>
            )}
          </div>               
             {!loading && (
              <div className='flex item-center justify-between pt-2.5'>
                  <div className='flex items-center'>
                    <div className='feedIcon' onClick={() => filePickerRef.current.click()}>
                      <HiPhotograph className='h-[22px] text-[#aaaaaa]' />
                      <input type='file' onChange={addImageToPost} ref={filePickerRef} hidden/>
                    </div>
                    <div className='feedIcon' onClick={() => setShowEmojis(!showEmojis)}>
                      <BsEmojiDizzyFill className='h-[22px] text-[#aaaaaa]' />
                    </div>
                      {showEmojis && (
                        <Picker 
                        title="Pick emoji"
                          onSelect={addEmoji} className="emojiPicker"
                          style={{
                            position: "absolute",
                            marginTop: '485px',
                            marginLeft: -40,
                            maxWidth: '500px',
                            borderRadius: '10px',
                          }}
                          skintones = {{
                            1: 'Medium-Light Skin Tone',
                            2: 'Medium Skin Tone',
                            3: 'Medium-Dark Skin Tone',
                            4: 'Dark Skin Tone',
                          }}
                          theme='light'
                        />
                      )}
                  </div>
                <button  className="postButton" onClick={sendPost}
                >Post News</button>
              </div>
             )}           
        </div>              
    </div>
  );
}
