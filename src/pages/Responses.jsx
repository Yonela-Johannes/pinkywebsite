import React, { useEffect, useState } from 'react'
import { feedbackQuery } from '../utils/data';
import { client } from '../client';
import './styles.css'
export default function Responses() {
  const [response, setResponse ] = useState([])
  useEffect(() => {
    client.fetch(feedbackQuery)
    .then((data) => {
      setResponse(data);
    })
  }, []);
  return (
    <div className='main'>
      <h2 className='head'>Feedback</h2>
        <main className="bg-[white]">
          {/* Left Widget */}
          <div className="flex-grow border-l bg-[#2c2e2e] border-r border-[#b1b1b1] max-w-2xl sm:ml-[73px] xl:ml-[370px]">
            <div className="flex items-center px-1.5 py-2 border-b  text-[#000000] text-[16px] gap-x-4 sticky top-0 z-50 bg-[pink]">
              Responses
            </div>
            {response.map((user) => {
              return (
                <div key={user._id} id={user._id} className='responseContainer'>
                  <div className='name responseName'>- {user?.name}</div>
                  <div className="responseImage">
                    <img  src={user?.image?.asset?.url} alt='display' />
                  </div>
                  <div className='message'>
                    <p>{user?.message}</p>
                  </div>
                </div>
              )
            })}
          </div>
          {/* Right widget */}
        </main>
    </div>
  )
}
