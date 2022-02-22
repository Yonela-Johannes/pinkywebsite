import './card.css'
import { client } from '../../client';
import { Link } from 'react-router-dom'

export default function BlogCard( { admin, user,post } ) {
  return (
      <div className='card'>
          <Link to={`/post/${post.slug}`}> 
            <img className='img' src={post?.image.asset.url} alt='' />
            <p className='desc'>{post.description}</p>
              <button className='blogButton' >read more</button>
            <p className='releaseDate'>{post.releaseDate}</p>
            <div className='userDetailsContainer'>
              <img className='userImage blogImage' src={user?.image} alt='' />
            </div>
          </Link>
      </div>
  ) 
}
