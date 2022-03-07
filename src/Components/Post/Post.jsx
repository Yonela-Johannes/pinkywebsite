import Moment from "react-moment";
import './Post.css';
import logo from '../../img/logopinky.png'
function Post({post, postPage, user }) {


    return (
        <div className={`p-3 flex cursor pointer border-b border-gray`} >
            {!postPage && (
                <img src={user?.image} alt=' profile avatar ' className='h-11 w-11 rounded-full mr-4'/>
            )}
            <div className={`flex flex-col space-y-1 w-full`}>
                <div className={`flex ${!postPage && "justify-between"}`}>
                    {postPage && (
                         <img src={logo} alt='profile avatar' className='h-11 w-11 rounded-full mr-4'/>
                    )}
                    <div className="text-[gray]">
                        <div className="inline-block group">
                            <p className={`font-bold text-[14px] sm: text-base group-hover:underline ${!post && 'inline-block'}`}>{user?.userName}</p>
                            <span className={`text-sm sm:text-[12px] ${!postPage && "ml-1.5"}`}>@bepleasuredbypinky</span>
                        </div>
                        <span className="hover:underline text-sm sm:text-[13px]">
                            <Moment fromNow>{post?.timestamp.toDate()}</Moment>
                        </span>
                        {!postPage && (
                            <p className="text-[#272727] text-[14px] sm:text-base mt-0.5">{post?.text}</p>
                        )}
                    </div>
                </div>
                {postPage && (
                     <p className="text-[#272727] text-[14px] sm:text-base mt-0.5">{post?.text}</p>
                )}
                <img src={post?.image} alt='' className="rounded-2xl max-h-[700px] object-cover mr-2" />
    
      </div>
    </div>
    )
}

export default Post