import { useLocation } from 'react-router-dom'
import { posts } from '../../data/data'
import CommentForm from './CommentForm'


export default function Post() {
  
    const location = useLocation()
    const path = location.pathname.split('/')[2]
    console.log(path)
    const post = posts.find((p) => p.id.toString() === path)
  console.log(post)

  return (
    <>
      <div className='post'>
          <img className='postImage' src={post.img} alt='' />
          <h1 className='postTitle'>{post.title}</h1>
          <p className='postDesc'>{post.desc}</p>
          <p className='postLongDesc'>{post.longDesc}</p>
      </div>
      <CommentForm />
    </>
  )
}
