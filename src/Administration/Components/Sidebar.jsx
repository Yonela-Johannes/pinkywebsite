import './sidebar.css'
import { FaUsers } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
// import { Fab } from '@mui/material';
import { MdOutlineFeed } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";
import { RiProductHuntLine } from "react-icons/ri";
import { BsShopWindow } from "react-icons/bs";
export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className='sidebarTitle'>Dashboard</h3>
                <ul className='sidebarList'>
                    <li className="sidebarListItem">
                        <GrTransaction className='sidebarIcon' />Transactions Details
                    </li>
                    <li className="sidebarListItem">
                        <BsShopWindow className='sidebarIcon' />All Products
                    </li>
                    <li className="sidebarListItem">
                        <RiProductHuntLine className='sidebarIcon' />Add Products
                    </li>
                    <li className="sidebarListItem">
                        <FaUsers className='sidebarIcon' />Users
                    </li>
                </ul>
            </div>
            <hr></hr>
            <div className="sidebarMenu">
                <h3 className='sidebarTitle'>Staff</h3>
                <ul className='sidebarList'>
                    <li className="sidebarListItem">
                        <RiAdminFill />Staff
                    </li>
                </ul>
            </div>
            <hr></hr>
        </div>
    </div>
  )
}
