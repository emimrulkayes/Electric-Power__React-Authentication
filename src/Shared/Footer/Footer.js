import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
            <div className='footer-container mt-5 py-2'>
                <p className='text-center m-0'> &#169;<small>{year} by <strong>Electric Power</strong> All Rights Reserved.</small></p>
            </div>
    );
};

export default Footer;