import './Feed.css'
import Post from '../Post';

function Feed( {user, admin} ) {

    // if(loading) return <Spinner message="We are refreshing your data" />
    return (
        <div className="text-white max-w-2xl sm:ml-[73px] xl:ml-[370px]">
            <div className='text-[gray] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-gray border-b border-gray-700'>
                <Post />
            </div>
        </div>
    );
}

export default Feed