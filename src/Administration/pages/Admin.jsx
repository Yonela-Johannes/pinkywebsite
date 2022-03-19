import Sidebar from '../Components/Sidebar'
import AddProducts from '../Components/AddProducts'
import Users from '../Components/Users'
import './admin.css'
export default function Admin() {
  return (
    <div className='main'>
      <div className='container'>
        <div className="adminContainer">
          <div className='ml-6'>
            <AddProducts />
          </div>
        </div>
            {/* <Users /> */}
      </div>
    </div>
  )
}
