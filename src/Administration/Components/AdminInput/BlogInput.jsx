import { PhotographIcon, XIcon } from '@heroicons/react/outline';
import { useRef, useState } from 'react';
import logo from '../../../img/logopinky.png';
import Spinner from '../../../Components/Post/Feed.js/Spinner';
import { db, storage } from "../../../firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "@firebase/firestore";
import { getDownloadURL, ref, uploadString } from "@firebase/storage";


export default function BlogInput({user}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [longDes, setLongDes] = useState('');
    const [selectedBlogImage, setSelectedBlogImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const filePickerRef = useRef(null)


    const message= '...loading'
    const postBlog = async () => {
        if(loading) return <Spinner message={message} />;
        setLoading(true);

        const docRef = await addDoc(collection(db, "blog"), {
            title: title,
            description: description,
            longDesc: longDes,
            timestamp: serverTimestamp(),
          });
        const imageRef = ref(storage, `blog/${docRef.id}/image`);

        if (selectedBlogImage) {
            await uploadString(imageRef, selectedBlogImage, "data_url").then(async () => {
              const downloadURL = await getDownloadURL(imageRef);
              await updateDoc(doc(db, "blog", docRef.id), {
                image: downloadURL,
              });
            });
          }
      
          setLoading(false);
          setTitle("");
          setDescription("");
          setLongDes("");
          setSelectedBlogImage(null);
    }
    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
          reader.readAsDataURL(e.target.files[0]);
        }
    
        reader.onload = (readerEvent) => {
          setSelectedBlogImage(readerEvent.target.result);
        };
      };

  return (
    <>
        {!loading && (
        <div className={`border-b border-t flex space-x-3 overflow-y-scroll `}>
            <img src={logo} alt='logo' className='h-11 w-9 rounded-full cursor-pointer' />

            <div className="w-full divide-y divide-gray-300">
                <input className="bg-transparent outline-none text-[black] text-[14px] placeholder-gray-400 tracking-wide w-full" 
                placeholder='Blog title'
                value={title} onChange={(e)=> setTitle(e.target.value)}/>
                <div className={`${selectedBlogImage && "pb-7"}`}>
                    <textarea rows="2" className="bg-transparent outline-none text-[black] text-[14px] placeholder-gray-400 tracking-wide w-full min-h-[55px]" 
                        placeholder="Short Description"
                        value={description} onChange={(e) => setDescription(e.target.value)}
                        />
                    <textarea rows="4" className="bg-transparent outline-none text-[black] text-[14px] placeholder-gray-400 tracking-wide w-full min-h-[55px]" 
                    placeholder='Description Details'
                        value={longDes} onChange={(e) => setLongDes(e.target.value)}
                    />
                    {selectedBlogImage && (
                        <div className="relative">
                            <div className="absolute w-8 h-8 bg-[black] hover:bg-[grey] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
                                onClick={() => setSelectedBlogImage(null)}
                                >
                                <XIcon className="text-[white] h-5" />
                            </div>
                                <img src={selectedBlogImage} alt="select" className="rounded-2xl max-h-60 object-contain" />
                        </div>
                        )}
                        {!loading && (
                            <div className="flex items-center justify-between p-2.5">
                                <div className='flex items-center'>
                                    <div className="icon" onClick={() => filePickerRef.current.click()}>
                                        <PhotographIcon className="text-[12px] h-[18px] text-[#000000]" />
                                        <input type="file" hidden onChange={addImageToPost} ref={filePickerRef} />
                                    </div>
                                </div>
                                <button className="text-[12px] text-[gray] border-[gray] py-1 font-bold shadow-md hover:bg-[pink]
                                    disabled:hover:bg-[#dddddd] disabled:opacity-50 disabled:cursor-default
                                "
                                    disabled={!title.trim() | !description.trim() | !longDes.trim() && !selectedBlogImage} 
                                    onClick={postBlog}
                                >Post Blog</button>
                            </div>
                        )}    
                </div>
            </div>
        </div>
        )}
    </>
  )
}
