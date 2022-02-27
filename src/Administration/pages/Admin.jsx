import Sidebar from '../Components/Sidebar'
import AddProducts from '../Components/AddProducts'
import Users from '../Components/Users'

export default function Admin() {
  return (
    <div className={`main flex justify-start items-start`}>
        <Sidebar />
        <div className='ml-6'>
          <AddProducts />
          {/* <Users /> */}
        </div>
    </div>
  )
}
