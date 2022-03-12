import React from 'react';
import Feed from '../Components/Post/Feed.js/Feed'
import Modal from '../Components/Modal';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';


const Feeds = (props) => {
  const[isOpen, setIsOpen] = useRecoilState(modalState)
  const {user , admin } = props;
  return <div className='main'>
    <div className="bg-[#f3f3f3] min-h-screen m-w[1500px">
      <Feed user={user} admin={admin}/>
      {isOpen &&
        <Modal />
      }
    </div>
  </div>;
};

export default Feeds;
