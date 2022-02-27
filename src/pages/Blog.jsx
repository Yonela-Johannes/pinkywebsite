import './styles.css';
import React, {useState, useEffect} from 'react';
import BlogCard from '../Components/BlogCard/BlogCard';
import Spinner from '../Components/Post/Feed.js/Spinner';
import BlogInput from '../Administration/Components/AdminInput/BlogInput';

export default function Blog({user, admin}) {
    const [load, setLoad ] = useState(false)
    const [blogPost, setBlogPost] = useState(null) 
    

   const message = 'We are loading blogs from database!'
    return (
        <div className='main'>
          <h2 className='head'>Explore</h2>
            <BlogInput />
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
