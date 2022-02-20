import React from 'react'
import Sidebar from '../Components/Sidebar'
import AddProducts from '../Components/AddProducts'
import Users from '../Components/Users'
export default function Admin() {
  return (
    <div className='main container'>
      <>
        <Sidebar />
        {/* <AddProducts /> */}
        <Users />
      </>
    </div>
  )
}
