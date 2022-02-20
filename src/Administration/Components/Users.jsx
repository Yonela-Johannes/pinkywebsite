import React from 'react';
import { users } from '../../data/users'
import User from './User';
const Users = () => {
    return (
        <>
            <div className='usersContainer'>
                {
                    users.map(user => (
                        <User key={user.id} user={user}/>
                    ))
                }
            </div>
            <div className="totalUsers">
                <p className='userLabel'>Total Users:</p><p className="userCount">{users.length}</p>
            </div>
        </>

    );
}

export default Users;
