import React from 'react';
import CustomLink from './CustomLink';
 
const Navbar = () => {
  
    return (
        <div >
            <div className="navbar bg-gray-300 "  >
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 m-auto">
                        <li><CustomLink to='/home'>Home</CustomLink></li>
                        <li><CustomLink to='/control'>Product Control</CustomLink></li>li>

                        </ul>
                    </div>
                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full" data-aos="fade-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1500">
                            <img src="https://i.ytimg.com/vi/KfIegZFtVUo/maxresdefault.jpg" alt="imran" />
                        </div>
                    </label>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><CustomLink to='/home'>Home</CustomLink></li>
                        <li><CustomLink to='/control'>Product Control</CustomLink></li>
                       
                        

                    </ul>
                </div>
                 
            </div>
     
        </div >
    );
};

export default Navbar;