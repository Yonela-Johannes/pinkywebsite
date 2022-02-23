import './card.css'
import { client } from '../../client';
import { Link } from 'react-router-dom'
import logo from "../../img/logopinky.png"
export default function BlogCard( { admin, user,post } ) {
  return (
      <div className='card'>
        <Link to={`/post/${post.slug}`}> 
          <div className="blogPostHead">
            <img className='img' src={post?.image.asset.url} alt='' />
          </div>
          <div className="blogPostContent">
            <div className='blogPostDesc'>
              <p className='desc'>{post.description}</p>
            </div>
            <div className="blogPostBody">
              <div>
                <button className='blogButton' >read more</button>
              </div>
              <div className='userDetailsContainer'>
                <img className='userImage blogImage' src={logo} alt='' />
              <p className='releaseDate'>{post.releaseDate}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
  ) 
}
