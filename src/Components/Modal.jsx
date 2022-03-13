import { useRecoilState } from "recoil";
import logo from '../img/logopinky.png'
import { modalState, postIdState } from "../atoms/modalAtom";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  onSnapshot,
  doc,
  addDoc,
  collection,
  serverTimestamp,
} from "@firebase/firestore";
import { db } from "../firebase";

import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";
import Moment from "react-moment";

function Modal(props) {
  const {user, id,  admin} = props;
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const [postId, setPostId] = useRecoilState(postIdState);
  const [post, setPost] = useState();

  const [comment, setComment] = useState("");
  const navigate = useNavigate()



  useEffect(
    () =>
      onSnapshot(doc(db, "posts", postId), (snapshot) => {
        setPost(snapshot.data());
      }),
    [db]
  );

  const sendComment = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "posts", postId, "comments"), {
      uid: user.uid,
      comment: comment,
      username: user.displayName,
      userImg: user.photoURL,
      timestamp: serverTimestamp(),
    });

    setIsOpen(false);
    setComment("");

    navigate(`/${postId}`);
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed z-50 inset-0 pt-[150px]" onClose={setIsOpen}>
        <div className="flex items-start justify-center min-h-[850px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-[#443e47] bg-opacity-40 transition-opacity" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
              <div className="flex items-center px-1.5 py-2 border-b border-gray-700">
                <div
                  className="w-9 h-9 flex items-center justify-center xl:px-0"
                  onClick={() => setIsOpen(false)}
                >
                  <XIcon className="h-[22px] text-black" />
                </div>
              </div>
              <div className="flex px-4 pt-5 pb-2.5 sm:px-6">
                <div className="w-full">
                  <div className="text-[#677b8d] flex gap-x-3 relative">
                    <span className="w-0.5 h-full z-[-1] absolute left-5 top-11 bg-gray-600" />
                    <img
                      src={logo}
                      alt=""
                      className="h-11 w-[32px] rounded-full"
                    />
                    <div>
                      <div className="inline-block group">
                        <h4 className="font-bold text-[#272525] inline-block text-[15px] sm:text-base">
                          Be Pleasure By Pinky
                        </h4>
                        <span className="ml-1.5 text-sm sm:text-[15px]">
                          @bepleasuredbypinky{" - "}
                        </span>
                      </div>{" "}
                      {" "}
                      <span className="hover:underline text-sm sm:text-[12px]">
                        <Moment fromNow>{post?.timestamp?.toDate()}</Moment>
                      </span>
                      <p className="text-[#000000] text-[15px] sm:text-base">
                        {post?.text}
                      </p>
                    </div>
                  </div>

                  <div className="mt-[50px] flex space-x-4 w-full">
                    <img
                      src={user?.photoURL}
                      alt=" avatar "
                      className="h-[35px] w-[35px] rounded-full"
                    />
                    <div className="flex-grow mt-2">
                      <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="comment..."
                        rows="2"
                        className="bg-transparent outline-none text-[#000000] text-[16px] placeholder-[#9e9e9e] tracking-wide w-full min-h-[80px]"
                      />

                      <div className="flex items-center justify-between pt-2.5">
                        <button        
                          type="submit"
                          onClick={sendComment}
                          disabled={!comment.trim()}
                        >
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Modal;