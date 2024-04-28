import { Link, NavLink } from "react-router-dom";
import user1 from '../../assets/user.png'
import { useContext } from "react";
import { authContext } from "../provider/AuthProvider";

const Header = () => {

     const { user, logOut } = useContext(authContext)

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/addArt'>Add Product</NavLink></li>
        {user && <>
            <li><NavLink to='/profile'>Profile</NavLink></li>
            <li><NavLink to='/myCurt'>My Curt</NavLink></li>
        </>
        }
        <li><NavLink to='/allArts'>All Arts</NavLink></li>
        <li><NavLink to='/contact'>Contact Us</NavLink></li>
        
    </>

    return (
        <div>
            <div className="navbar bg-[#F4F3F0] rounded-xl mb-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <Link to='/'>
                        <a className="btn btn-ghost text-xl">Ideal Properties Ltd</a>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                {
                    user ?
                        <div className="navbar-end gap-3">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        {
                                            user.photoURL ?
                                                <img alt="user" src={user.photoURL} />
                                            :
                                            <img alt="user" src={user1} />    
                                        }

                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    
                                    <Link to='/profile'> <li><a>Profile</a></li> </Link>
                                    <Link to='/profile'> <li><a>Setting</a></li> </Link>
                                    <li onClick={handleSignOut}><a>Logout</a></li>
                                </ul>
                            </div>
                            <button onClick={handleSignOut} className="btn">Sign Out</button>
                        </div>
                        :
                        <div className="navbar-end gap-3">
                            <img className="w-1/12 rounded-full" src={user1} alt="" />
                            <Link to='/login'><a className="btn">Login</a></Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Header;