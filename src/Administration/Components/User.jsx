import React from 'react'

const User = ( {user} ) => {
  return (
    <div className='usersContainer'>
        <div className='usersList'>
            <div className='user'>
                <img src={user.image} alt="" className='userImage' /> 
                <p>{user.name}</p>
            </div>
        </div>
    </div>
  )
}

export default User;