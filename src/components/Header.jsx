import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 py-2  text-gray-500'>
            <div className='logo'>
           <img className='w-[300px]' src={logo} alt="" />
        </div>
        <h4 className='text-xl font-poppins ' >Journalism Without Fear or Favour</h4>
        <p className='text-sm font-semibold'>Sunday, November 27, 2025</p>
       <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;