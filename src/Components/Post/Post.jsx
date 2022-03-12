import Moment from "react-moment";
import './Post.css';
import logo from '../../img/logopinky.png'
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
   import { useRoutes } from "react-router-dom";
  import {
    HeartIcon as HeartIconFilled,
    ChatIcon as ChatIconFilled,
  } from "@heroicons/react/solid";
  import { useRecoilState } from "recoil";
  import { modalState, postIdState } from "../../atoms/modalAtom";
  import { db } from "../../firebase";


function Post(props) {
    const{post, postPage, user, id } = props;
    const [isOpen, setIsOpen] = useRecoilState(modalState);
    const [postId, setPostId] = useRecoilState(postIdState);
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState([]);
    const [liked, setLiked] = useState(false);
    const router = useRoutes    

    useEffect(
        () =>
          onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
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
          await deleteDoc(doc(db, "posts", id, "likes", user.uid));
        } else {
          await setDoc(doc(db, "posts", id, "likes", user.uid), {
            username: user.displayName,
          });
        }
      };

    return (
        <div className={`p-3 flex cursor pointer border-b border-gray`} onClick={() => router.push(`/${id}`)} >
            {!postPage && (
                <img src={logo} alt='profile avatar' className='h-11 w-9 rounded-full mr-4'/>
            )}
            <div className={`flex flex-col space-y-1 w-full`}>
                <div className={`flex ${!postPage && "justify-between"}`}>
                    {postPage && (
                         <img src={logo} alt='profile avatar' className='h-11 w-11 rounded-full mr-4 cursor-pointer'/>
                    )}
                    <div className="text-[gray]">
                        <div className="inline-block group">
                            <span className={`text-sm sm:text-[16px] pb-1 mr-4 cursor-pointer ${!postPage && "ml-1.5"}`}>BePleasuredByPinky</span>
                            <p className={`font-bold text-[14px] sm: text-base group-hover:underline ${!post && 'inline-block'}`}>{user?.userName}</p>
                            <span className={`text-sm sm:text-[12px] cursor-pointer ${!postPage && "ml-1.5"}`}>@bepleasuredbypinky</span>
                        </div>
                        <span className="hover:underline text-sm sm:text-[13px] cursor-pointer">
                            <Moment fromNow>{post?.timestamp.toDate()}</Moment>
                        </span>
                        {!postPage && (
                            <p className="text-[#272727] text-[16px] sm:text-base mt-2 ml-10 cursor-pointer">{post?.text}</p>
                        )}
                    </div>
                </div>
                {postPage && (
                     <p className="text-[#272727] text-[16px] sm:text-base mt-2 ml-10 cursor-pointer">{post?.text}</p>
                )}
                <img src={post?.image} alt='' className="rounded-2xl max-h-[700px] object-cover mr-2" />
                <div className={`text-[gray] flex justify-between w-10/12 ${postPage && "mx-auto"}`}>
                <div
            className="flex items-center space-x-1 group"
            onClick={(e) => {
              e.stopPropagation();
              setPostId(id);
              setIsOpen(true);
            }}
          >
            <div className="icon group-hover:bg-[#575757] group-hover:bg-opacity-10">
              <ChatIcon className="h-[22px] group-hover:text-[#000000]" />
            </div>
            {comments.length > 0 && (
              <span className="group-hover:text-[#1d9bf0] text-sm">
                {comments.length}
              </span>
            )}
          </div>
          {user.uid === post?.id ? (
            <div
              className="flex items-center space-x-1 group"
              onClick={(e) => {
                e.stopPropagation();
                deleteDoc(doc(db, "posts", id));
                router.push("/feeds");
              }}
            >
              <div className="icon group-hover:bg-red-600/10">
                <TrashIcon className="h-5 group-hover:text-red-600" />
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-1 group">
              <div className="icon group-hover:bg-green-500/10">
                <SwitchHorizontalIcon className="h-5 group-hover:text-green-500" />
              </div>
            </div>
          )}

        <div
            className="flex items-center space-x-1 group"
            onClick={(e) => {
              e.stopPropagation();
              likePost();
            }}
          >
            <div className="icon group-hover:bg-pink-600/10">
              {liked ? (
                <HeartIconFilled className="h-5 text-pink-600" />
              ) : (
                <HeartIcon className="h-5 group-hover:text-pink-600" />
              )}
            </div>
            {likes.length > 0 && (
              <span
                className={`group-hover:text-pink-600 text-sm ${
                  liked && "text-pink-600"
                }`}
              >
                {likes.length}
              </span>
            )}
          </div>

          <div className="icon group">
            <ShareIcon className="h-5 group-hover:text-[#1d9bf0]" />
          </div>  
          </div>

      </div>
    </div>
    )
}

export default Post