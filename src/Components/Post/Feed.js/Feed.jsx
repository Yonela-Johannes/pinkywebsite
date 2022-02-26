import './Feed.css'
import Post from '../Post';
import { RiKakaoTalkLine} from "react-icons/ri";
import Input from '../Feed.js/NewFeed/Input'
function Feed( {user, admin} ) {

    // if(loading) return <Spinner message="We are refreshing your data" />
    return (
        <div className="text-white max-w-2xl sm:ml-[73px] xl:ml-[370px]">
            <div className='text-[gray] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-gray border-b border-gray-700'>
                <h2 className='head'>Descussion</h2>
                <div className='w-9 h-9 flex items-center justify-center xl:px-0 ml-auto'>
                    <RiKakaoTalkLine className='icon'/>
                </div>
            </div>
            <Input user={user} />
        </div>
    );
}

export default Feed