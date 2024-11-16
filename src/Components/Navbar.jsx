import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const {user} = useContext(AuthContext);

    return (
        <div className='flex justify-between items-center'>
            <div>{user.name}</div>

            <div className="nav space-x-5">
                <Link to="/">Home</Link>
                <Link to="/carrier">Carrier</Link>
                <Link to="/about">About</Link>
            </div>

            <div className="login flex gap-2 items-center">
                <img src={userIcon} alt="" />
                <Link to="/auth/login" className='btn btn-neutral rounded-none'>Login</Link>
            </div>
            
        </div>
    );
};

export default Navbar;