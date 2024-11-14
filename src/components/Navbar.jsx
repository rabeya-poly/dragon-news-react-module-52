import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between'>
            <div></div>
            <div className='nav space-x-2'>
             <Link to=''>Home</Link>
             <Link to=''>Career</Link>
             <Link to=''>About</Link>
            </div>
          <div className='login'>
            <div className='flex items-center space-x-2'>
                <img src={userIcon} alt="" />
            <button className='btn btn-neutral'>Login</button>
            </div>
          </div>
        </div>
    );
};

export default Navbar;