import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Menubar.css'

const Menubar = () => {
    return (
       <nav >
           <CustomLink className='link' to="/">Home</CustomLink>
            <CustomLink className='link' to="/login">Login</CustomLink>
       </nav>
    );
};

export default Menubar;