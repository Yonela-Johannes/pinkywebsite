import './card.css'
import { useState, useEffect } from 'react';
import { client } from '../../client';
import { Link, useParams } from 'react-router-dom'
import { blogPost } from '../../utils/data';

export default function BlogCard( { post } ) {
  const [ Post, setPost ] = useState([])

  return (
      <div className='card'>
        <Link to={`/post/${post.id}`}>
          <span className='title'>{post.title}</span>
          <img className='img' src={post.img} alt='' />
          <p className='desc'>{post.desc}</p>
          <button className='cardButton'>read more</button>
        </Link>
      </div>
  ) 
}
