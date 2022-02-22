import React from 'react';
import Feed from '../Components/Post/Feed.js/Feed'

const Feeds = (props) => {
  const {user , admin } = props;
  // console.log('admin', admin)
  return <div className='main'>
      <Feed user={user} admin={admin}/>
  </div>;
};

export default Feeds;
