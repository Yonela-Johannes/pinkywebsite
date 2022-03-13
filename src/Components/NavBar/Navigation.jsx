import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { MdOutlineDynamicFeed } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineShop } from "react-icons/ai";
import { VscFeedback } from "react-icons/vsc";
import { AiOutlineWoman } from "react-icons/ai";
import { Badge } from '@mui/material';
import { GrBlog } from "react-icons/gr";
import './style.css'
import {NavLink, Link} from 'react-router-dom'
import { useGoogleLogout } from "react-google-login";

const Navigation = (props) => {

    const {countCartItems, user, admin } = props;
    return (
        <nav className={user ? 'appBar' : 'appBar line'}>
                    <div className='grow'>
                        <div className='button'>
                                <ul className='navList'>
                                    <li className='navLink'>
                                        <NavLink to='/'>
                                            <div aria-label='Show cart items' color='inherit'>
                                                <AiOutlineShop className='icon' />
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li className='navLink'>
                                        <NavLink to='/cart'>
                                            <div aria-label='Show cart items'>
                                                <Badge className='badge' badgeContent={countCartItems} />
                                                    <MdOutlineShoppingBag className='icon' />
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li className='navLink'><NavLink to='/feeds'>
                                            <div aria-label='Newsfeeds' color='inherit'>
                                                <MdOutlineDynamicFeed className={user ? 'icon' : 'iconDisabled'}/>
                                            </div>
                                        </NavLink></li>
                                    <li className='navLink'>
                                        <NavLink to='/blog'>
                                            <div aria-label='Blog' color='inherit'>
                                                <GrBlog className='icon' />
                                            </div>                                   
                                        </NavLink></li>
                                        {
                                            admin ? (
                                                <li className='navLink'><NavLink to='/admin'>
                                                        <div className='headerButtons' aria-label='Administration' color='inherit'>
                                                        <MdOutlineAdminPanelSettings className='icon adminIcon' />
                                                        </div>                                   
                                                    </NavLink></li>

                                            ) : ''
                                        }
                                        <li className='navLink'>
                                            <NavLink to='/signin'>
                                                <div aria-label='Feedback' color='inherit'>
                                                    <AiOutlineWoman className='icon' />
                                                </div>                                   
                                            </NavLink></li>
                                </ul>
                        </div>

                    </div>    
        </nav>
    )
};

export default Navigation;