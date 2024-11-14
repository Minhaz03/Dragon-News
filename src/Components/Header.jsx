import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 py-2'>
            <div className='logo mt-10'>
                <img className='w-[350px]' src={logo} alt="" />
            </div>
            <h1 className='text-gray-400'>Journalism Without Fear or Favour</h1>
            <p>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;