import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <>
            <Container className='mt-5'>
                <p className='text-center'> <small>Copyright@{year} || <strong>Electric Power</strong> </small></p>
            </Container>
        </>
    );
};

export default Footer;