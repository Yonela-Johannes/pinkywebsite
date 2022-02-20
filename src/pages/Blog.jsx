import './styles.css';
import { posts } from '../data/data';
import BlogCard from '../Components/BlogCard/BlogCard';
import Post from '../Components/BlogCard/Post';
import { client } from '../client';
import { Link, useParams } from 'react-router-dom'
import { blogPost } from '../utils/data';

export default function Blog() {
  return (
    <div className='main'>
        {/* <div className='blogHome'>
            {posts.map(post => (
                <BlogCard key={post.id} post={post}/>
            ))
            }
        </div> */}
        <div className='blogHome'>
            {posts.map(post => (
                <BlogCard key={post.id} post={post}/>
            ))
            }
        </div>
    </div>
  )
}
