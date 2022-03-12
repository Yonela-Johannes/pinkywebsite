import './card.css'
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from "@firebase/firestore";
import { useEffect, useState } from "react";
import {
  ChatIcon,
  HeartIcon,
  ShareIcon,
  SwitchHorizontalIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import {
  HeartIcon as HeartIconFilled,
  ChatIcon as ChatIconFilled,
} from "@heroicons/react/solid";
import { useRecoilState } from "recoil";
import { modalState, postIdState } from "../../atoms/modalAtom";
import { db } from "../../firebase";
import { Link } from 'react-router-dom'
import logo from "../../img/logopinky.png"
import Moment from 'react-moment'


export default function BlogCard(props) {
  const {blog, user, id} = props;
  const [likes, setLikes] = useState([]);
  const [liked, setLiked] = useState(false);
  console.log({props})
  useEffect(
    () =>
      onSnapshot(collection(db, "blog", id, "likes"), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db, id]
  );

useEffect(
    () =>
      setLiked(
        likes.findIndex((like) => like.id === user?.uid) !== -1
      ),
    [likes]
  );

const likePost = async () => {
    if (liked) {
      await deleteDoc(doc(db, "blog", id, "likes", user.uid));
    } else {
      await setDoc(doc(db, "blog", id, "likes", user.uid), {
        username: user.displayName,
      });
    }
  };

  return (
      <div className='card'>
        {/* <Link blog={blog} to={`/post/${props.id}`}> */}
            <p className='title'>{blog?.title}</p>
          <div className="blogPostHead">
            <img className='img' src={blog?.image} alt='' />
          </div>
          <div className="blogPostContent">
            <div className='blogPostDesc'>
              <p className='desc'>{blog.description}</p>
            </div>
            <div className="blogPostBody">
              <div className='userDetailsContainer'>
                <img className='userImage blogImage' src={logo} alt='' />  
              <p className='releaseDate'><Moment fromNow>{blog?.timestamp.toDate()}</Moment></p>
              </div>
            </div>

            <div className="bottomContainer">
                <div
                className="flex items-center space-x-1 group"
                onClick={(e) => {
                  e.stopPropagation();
                  likePost();
                }}
              >
                <div className="icon group-hover:bg-pink-600/10">
                  {liked ? (
                    <HeartIconFilled className="h-5 text-[#fa133a]" />
                  ) : (
                    <HeartIcon className="h-5 group-hover:text-pink-600" />
                  )}
                </div>
                {likes.length > 0 && (
                  <span
                    className={`group-hover:text-[#fa133a] text-sm ${
                      liked && "text-[#fa133a]"
                    }`}
                  >
                    {likes.length}
                  </span>
                )}
              </div>

              <div className="icon group">
                <ShareIcon className="h-5 ml-10 group-hover:text-[#ffb1fb]" />
              </div>  
            </div>
          </div>

        {/* </Link> */}
      </div>
  ) 
}
