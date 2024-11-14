import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-2 items-center justify-center bg-base-200'>
            <p className='text-white bg-[#D72050] px-3 py-1'>latest</p>
           
           <Marquee
           pauseOnHover={true} speed={100}
           className='space-x-20  gap-5'>
             <Link to='/news'>Lorem ipsum dolor,Nam consequuntur eaque explicabo.</Link>
             <Link to='/news'>sit amet consectetur adipisicing elit 👨‍🦲 </Link>
             <Link to='/news'>tempora praesentium soluta hic consectetur quod voluptate quas quos.🤗 </Link>
             <Link to='/news'> nobis quas vero excepturi maxime.😄</Link>
             <Link to='/news'>Aut laborum molestiae explicabo??? 🦋 </Link>
             </Marquee>      
            </div>
    );
};

export default LatestNews;