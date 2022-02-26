import {
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    orderBy,
    query,
    setDoc,
  } from "@firebase/firestore";
//   import { useSession } from "next-auth/react";
//   import { useRouter } from "next/router";
  import { useEffect, useState } from "react";
  import {
    ChartBarIcon,
    ChatIcon,
    DotsHorizontalIcon,
    HeartIcon,
    ShareIcon,
    SwitchHorizontalIcon,
    TrashIcon,
  } from "@heroicons/react/outline";

  import {
    HeartIcon as HeartIconFilled,
    ChatIcon as ChatIconFilled,
  } from "@heroicons/react/solid";
  import Moment from "moment";
//   import { useRecoilState } from "recoil";
//   import { modalState, postIdState } from "../atoms/modalAtom";
  import { db } from "../../firebase";
import './Post.css';
// import { Avatar } from "@material-ui/core";

function Post({id, profilePic, username, timestamp, message, post, postPage, user }) {
    // const { data: session } = useSession();
    // const [isOpen, setIsOpen] = useRecoilState(modalState);
    // const [postId, setPostId] = useRecoilState(postIdState);
    const [comments, setComments] = useState([]);
    // const [likes, setLikes] = useState([]);
    // const [liked, setLiked] = useState(false);
    // const router = useRouter()

    console.log(post)
    return (
        <div className={`p-3 flex cursor pointer border-b border-gray`}>
            {!postPage && (
                <img src={user?.image} alt=' profile avatar ' className='h-11 w-11 rounded-full mr-4'/>
            )}
            <div className={`flex flex-col space-y-1 w-full`}>
                <div className={`flex ${!postPage && "justify-between"}`}>
                    {postPage && (
                         <img src={user?.image} alt='profile avatar' className='h-11 w-11 rounded-full mr-4'/>
                    )}
                    <div className="text-[gray]">
                        <div className="inline-block group">
                            <p className={`font-bold text-[14px] sm: text-base group-hover:underline ${!post && 'inline-block'}`}>{user?.userName}</p>
                            <span className={`text-sm sm:text-[12px] ${!postPage && "ml-1.5"}`}>@bepleasuredbypinky</span>
                        </div>
                        <span className="hover:underline text-sm sm:text-[13px]">
                            {/* <Moment fromNow>{post?.timestamp.toDate()}</Moment> */}
                            {/* <img src={image} alt="" /> */}
                        </span>
                        {!postPage && (
                            <p className="text-[#272727] text-[14px] sm:text-base mt-0.5">{post?.text}</p>
                        )}
                    </div>
                </div>
                {postPage && (
                     <p className="text-[#272727] text-[14px] sm:text-base mt-0.5">{post?.text}</p>
                )}
                <img src={post?.image} alt='' className="rounded-2xl max-h-[700px] object-cover mr-2" />
                <div className={`text-[gray] flex justify-between w-10/12 ${postPage && "mx-auto"}`}>
                <div
            className="flex items-center space-x-1 group"
            onClick={(e) => {
            //   e.stopPropagation();
            //   setPostId(id);
            //   setIsOpen(true);
            }}
          >
            <div className="icon group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10">
              <ChatIcon className="h-5 group-hover:text-[#1d9bf0]" />
            </div>
            {comments.length > 0 && (
              <span className="group-hover:text-[#1d9bf0] text-sm">
                {comments.length}
              </span>
            )}
          </div>

          {/* {session.user.uid === post?.id ? (
            <div
              className="flex items-center space-x-1 group"
              onClick={(e) => {
                e.stopPropagation();
                deleteDoc(doc(db, "posts", id));
                // router.push("/");
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
          )} */}

          {/* <div
            className="flex items-center space-x-1 group"
            onClick={(e) => {
              e.stopPropagation();
            //   likePost();
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
          </div> */}

          <div className="icon group">
            <ShareIcon className="h-5 group-hover:text-[#1d9bf0]" />
          </div>
        </div>       
                </div>
            </div>
    )
}

export default Post