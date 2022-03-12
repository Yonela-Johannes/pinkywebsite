import { useLocation } from 'react-router-dom'

export default function BlogPost(props) {

    const location = useLocation()
    const path = location.pathname.split('/')[2]
    const blogData = props.blogs.find((p) => p.id.toString() === path)
    const blog = blogData.data()
    console.log(blog)

  return (
    <div className='blogContainer'>
      <div className='post'>
          <img className='postImage' src={blog?.image} alt=' info ' />
          <h1 className='postTitle'>{blog?.title}</h1>
          <p className='postDesc'>{blog?.description}</p>
          <p className='postLongDesc'>{blog?.longDesc}</p>
      </div>
    </div>
  )
}
