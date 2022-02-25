import Comments from './Comments/Comments';
import { useParams } from 'react-router-dom';
import './Feed.css'


function Feed( {user, admin} ) {

    // if(loading) return <Spinner message="We are refreshing your data" />
    return (
        <div className="feed">
            <Comments user={user} />
        </div>
    );
}

export default Feed