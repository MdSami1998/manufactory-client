import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const handleLogOut = () => {
        signOut(auth);
    }

    const menuItems = <>
        <li><Link className='text-accent' to='/'>Home</Link></li>
        <li><Link className='text-accent' to='/blog'>Blogs</Link></li>
        {user ? <button onClick={handleLogOut} className='text-accent'>Log Out</button> : <li><Link className='text-accent' to='/login'>Log In</Link></li>}
    </>
    return (
        <div className='sticky top-0 z-10'>
            <div className="navbar bg-base-100 text-xl px-0 md:px-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost uppercase text-3xl" to="/">Manu<span className='text-accent'>Factory</span> </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;