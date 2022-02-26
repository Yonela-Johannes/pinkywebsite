import './Feed.css'
import { useEffect, useState } from "react";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from "../../../firebase";
import Post from '../Post';
import { RiKakaoTalkLine} from "react-icons/ri";
import Input from '../Feed.js/NewFeed/Input'

function Feed( {user, admin} ) {
    const [ posts, setPosts ] = useState([])
    // if(loading) return <Spinner message="We are refreshing your data" />

    useEffect(
        () =>
          onSnapshot(
            query(collection(db, "posts"), orderBy("timestamp", "desc")),
            (snapshot) => {
              setPosts(snapshot.docs);
            }
          ),
        [db]
      );

    return (
        <div className="text-white max-w-2xl sm:ml-[73px] xl:ml-[370px]">
            <div className='text-[gray] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-gray border-b border-gray-700'>
                <h2 className='head'>Descussion</h2>
                <div className='w-9 h-9 flex items-center justify-center xl:px-0 ml-auto'>
                    <RiKakaoTalkLine className='icon'/>
                </div>
            </div>
            <Input user={user} />
            <div className='pb-72'>
                {posts.map((post) => (
                    <Post user={user} key={post.id} id={post.id} post={post.data()} />
                ))}
            </div>
        </div>
    );
}

export default Feed