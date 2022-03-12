import './card.css'
import { Link } from 'react-router-dom'
import logo from "../../img/logopinky.png"
import Moment from 'react-moment'
export default function BlogCard(props) {
  const {blog} = props;

  return (
      <div className='card'>
        <Link blog={blog} to={`/post/${props.id}`}>
            <p className='title'>{blog?.title}</p>
          <div className="blogPostHead">
            <img className='img' src={blog?.image} alt='' />
          </div>
          <div className="blogPostContent">
            <div className='blogPostDesc'>
              <p className='desc'>{blog.description}</p>
            </div>
            <div className="blogPostBody">
              <div className='userDetailsContainer'>
                <img className='userImage blogImage' src={logo} alt='' />  
              <p className='releaseDate'><Moment fromNow>{blog?.timestamp.toDate()}</Moment></p>
              </div>
            </div>
          </div>
        </Link>
      </div>
  ) 
}
