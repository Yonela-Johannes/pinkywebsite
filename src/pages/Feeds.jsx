import React from 'react';
import Feed from '../Components/Post/Feed.js/Feed'
import Modal from '../Components/Modal';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';
import { useNavigate } from 'react-router-dom';

const Feeds = (props) => {
  const[isOpen, setIsOpen] = useRecoilState(modalState)
  const navigate = useNavigate()
  const {user , admin } = props;
  return <div className='main'>
    <div className="bg-[#f3f3f3] min-h-screen m-w[1500px">
      <Feed user={user} admin={admin}/>
      {isOpen & user &&
        <Modal user={user} admin={admin} />
      }
    </div>
  </div>
};

export default Feeds;
