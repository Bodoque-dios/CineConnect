import React from 'react'
import SideNav from '../main/SideNav'
import logo from '../images/logo.png'; // Import the image

export default function Header() {
    return (
        <div className="flex flex-row justify-between mb-3">
            <div className='hidden md:flex flex-row justify-center items-center my-4 ml-3'>
                <div className='max-h-[70px] max-w-[50px] mr-2'>
                    <img src={logo} className='object-cover w-full h-full' alt="Logo" /> {/* Use the imported image */}
                </div>
                <h1 className="text-4xl font-limelight text-rojovintage-600 glow">CineConnect</h1>
            </div>
            <div className='md:hidden w-[80px]'></div>
            <div className='max-h-[70px] max-w-[50px] md:hidden'>
                <img src={logo} className='object-cover w-full h-full' alt="Logo" />
            </div>
            <SideNav />
        </div>
    );
}
