import React, {useState, useEffect} from 'react'
import './Feed.css'
import MessageSender from "../MessageSender/MessageSender"
// import db from '../../firebase'
import Post from "../Post"

function Feed() {
    const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     db.collection("post").orderBy('timestamp', 'desc').onSnapshot((snapshot) => 
    //         setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data()
    //         })))
    //     );
    // }, []);

    return (
        <div className="feed">
            {/* <MessageSender /> */}
            <Post />
            {/* {posts.map((post) => (
                <Post
                key={post.data.id}
                profilePic={post.data.profilePic}
                message={post.data.message}
                timestamp={post.data.timestamp}
                username={post.data.username}
                image={post.data.image}
                />
            ))} */}
        </div>
    );
}

export default Feed