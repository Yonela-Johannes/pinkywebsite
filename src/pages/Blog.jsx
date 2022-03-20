import './styles.css';
import React, { useEffect,useState} from 'react';
import BlogCard from '../Components/BlogCard/BlogCard';
import BlogInput from '../Administration/Components/AdminInput/BlogInput';
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from "../firebase";
export default function Blog({user, admin}) {
    const [blogs, setBlogs] = useState([]) 

    useEffect(
        () =>
          onSnapshot(
            query(collection(db, "blog"), orderBy("timestamp", "desc")),
            (snapshot) => {
              setBlogs(snapshot.docs);
            }
          ),
        [db]
      );
    return (
        <div className='main'>
          <h2 className='head'>Explore</h2>
          {admin && (
            <div className='inputContainer'>
            <BlogInput user={user} admin={admin} />
            </div>
          )}
            <div className='blogHome'>
                {blogs.map(blog => (
                    <BlogCard key={blog.id} id={blog.id} blog={blog.data()} admin={admin} user={user} />
                ))
                }
            </div>
        </div>
    )
}
