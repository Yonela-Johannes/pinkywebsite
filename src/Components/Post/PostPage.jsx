import {
    collection,
    doc,
    onSnapshot,
    orderBy,
    query,
  } from "@firebase/firestore";
  import { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { useLocation } from 'react-router-dom'
  import Post from "../../Components/Post/Post";
  import Comment from "./Comment";
  import { db } from "../../firebase";

function PostPage(props) {
    const navigate = useNavigate()
    const {user, admin } = props;
    const [post, setPost] = useState();
    const [comments, setComments] = useState([]);
    const location = useLocation()
    const path = location.pathname.split('/')[2]
    const id = path

    useEffect(
        () =>
          onSnapshot(doc(db, "posts", id), (snapshot) => {
            setPost(snapshot.data());
          }),
        [db]
      );

      useEffect(
        () =>
          onSnapshot(
            query(
              collection(db, "posts", id, "comments"),
              orderBy("timestamp", "desc")
            ),
            (snapshot) => setComments(snapshot.docs)
          ),
        [db, id]
      );
  return (
    <div className='main'>
        <div>
            <main className="bg-[white] min-h-screen flex max-w-[1500px] mx-auto">
                <div className="flex-grow border-l border-r border-[#b1b1b1] max-w-2xl sm:ml-[73px] xl:ml-[370px]">
                <div className="flex items-center px-1.5 py-2 text-[#000000] text-[16px] gap-x-4 sticky top-0 z-50 bg-[pink]">
                    <div
                    className="w-9 h-9 flex items-center justify-center xl:px-0"
                    onClick={() => navigate("/feed")}
                    >
                    </div>
                    Descussion
                </div>
                <Post user={user} id={id} post={post} />
                {comments.length > 0 && (
                    <div className="pb-72">
                    {comments.map((comment) => (
                        <Comment
                        key={comment.id}
                        id={comment.id}
                        comment={comment.data()}
                        />
                    ))}
                    </div>
                )}
                </div>
            </main>
        </div>
    </div>
  )
}

export default PostPage