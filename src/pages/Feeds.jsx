import React from 'react';
import Feed from '../Components/Post/Feed.js/Feed'

const Feeds = (props) => {
  const {user , admin } = props;
  return <div className='main'>
      <Feed user={user} admin={admin}/>
  </div>;
};

export default Feeds;
