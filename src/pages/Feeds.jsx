import React from 'react';
import Feed from '../Components/Post/Feed.js/Feed'

const Feeds = (props) => {
  const {user , admin } = props;
  return <div className='main'>
    <div className="bg-[#fcbdbd] min-h-screen m-w[1500px">
      <Feed user={user} admin={admin}/>
    </div>
  </div>;
};

export default Feeds;
