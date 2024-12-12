import React, { useContext } from 'react';
import {  Link, NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const Navbar = () => {
    const { user , signOutUser} = useContext(AuthContext)

    const handleSignOut = () => {
        signOutUser()
        .then(result => {
            alert('User SignOut Successfully')
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    const links = <>
        <li><NavLink to='/' >Home</NavLink></li>
        <li><NavLink to='/addJob' >Add Job</NavLink></li>
        <li><NavLink to='/myApplications' >My Applications</NavLink></li>
    </>

    return (
        <div className=' bg-[#f2f6fd] border-b-2'>
            <div className="navbar max-w-7xl mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">


                            {links}
                        </ul>
                    </div>
                    <Link to='/' className="cursor-pointer  text-xl font-bold text-[#05264E]">Job-Portal</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div>
                            <button onClick={handleSignOut} className='btn bg-[#3c65f5] text-white'>Logout</button>
                        </div> 

                        : 

                        <div className='flex gap-2'>
                            <Link  to='/register' className="btn bg-[#3c65f5] text-white">Register</Link>
                            
                            <Link to='/login' className="btn bg-[#3c65f5] text-white">Login</Link>
                        </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;