import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { UserCircleIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [user] = useAuthState(auth);

    const handleLogOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    const menuItems = <>
        <li><Link className='text-accent btn btn-ghost' to='/'>Home</Link></li>
        <li><Link className='text-accent btn btn-ghost' to='/blog'>Blogs</Link></li>
        {
            user && <li><Link className='text-accent btn btn-ghost' to='/dashboard'>Dashboard</Link></li>
        }

        {user
            ?
            <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <UserCircleIcon></UserCircleIcon>
                    </div>
                </label>
                <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-full md:w-52">
                    <li>
                        <span className='text-sm'>Logged in as:</span> <Link className='text-accent text-lg font-semibold' to='/dashboard'>{user?.displayName}
                        </Link>
                    </li>
                    <li><button className='btn btn-ghost text-accent' onClick={handleLogOut}>Log Out</button></li>
                </ul>
            </div>
            :
            <li><Link className='text-accent btn btn-ghost' to='/login'>Log In</Link></li>}
    </>
    return (
        <div className='sticky top-0 z-10'>
            <div>
                <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                <label htmlFor="my-modal-4" className="modal cursor-pointer">
                    <label className="modal-box relative p-10" htmlFor="">
                        <h3 className="text-xl font-bold">Name:{user?.displayName}</h3>
                        <p className="py-4 text-xl">Email: {user?.email}</p>
                    </label>
                </label>
            </div>
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
                    <Link className="btn btn-ghost uppercase text-xl md:text-3xl" to="/">Manu<span className='text-accent'>Factory</span> </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 flex items-center">
                        {menuItems}
                    </ul>
                </div>
                <div className='navbar-end lg:hidden'>

                    {/* deshboard sidebar icon 
                    
                    <label htmlFor="dashboard-sidebar" tabIndex="1" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label> */}
                    <label htmlFor="dashboard-sidebar" className="btn btn-sm lg:hidden">DashMenu</label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;