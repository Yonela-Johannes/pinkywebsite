import './styles.css';
import React, {useState, useEffect} from 'react';
import BlogCard from '../Components/BlogCard/BlogCard';
import { client } from '../client';
import Spinner from '../Components/Post/Feed.js/Spinner';
import { post } from '../utils/data';

export default function Blog({user, admin}) {
    const [load, setLoad ] = useState(false)
    const [blogPost, setBlogPost] = useState(null) 
    
    useEffect(() => {
        setLoad(true)
          client.fetch(post)
          .then((data) => {
              setBlogPost(data);
            })
            setLoad(false)
    }, []); 

   const message = 'We are loading blogs from database!'
    return (
        <div className='main'>
          <h2 className='head'>Explore</h2>
            {blogPost && !load ? (
                <div className='blogHome'>
                    {blogPost.map(post => (
                        <BlogCard key={post._id} post={post} admin={admin} user={user} />
                        ))
                    }
                </div>

                ): (
                    <div className='blogHome'>
                        <Spinner message={message} />
                    </div>
            )}
        </div>
    )
}
