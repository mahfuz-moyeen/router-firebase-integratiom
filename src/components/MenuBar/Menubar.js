import React from 'react';
import useFirebase from '../../Hooks/useFirebase';
import CustomLink from '../CustomLink/CustomLink';
import './Menubar.css'

const Menubar = () => {
    const { user, userSignOut } = useFirebase()
    return (
        <nav >
            <CustomLink className='link' to="/">Home</CustomLink>
            <CustomLink className='link' to="/register">Register</CustomLink>
            {user?.uid && <span className='link'> {user?.displayName && user.displayName} </span>}
            {
                user?.uid ?
                    <button onClick={userSignOut} className='link' >logout</button>
                    :
                    <CustomLink className='link' to="/login">Login</CustomLink>}
        </nav>
    );
};

export default Menubar;