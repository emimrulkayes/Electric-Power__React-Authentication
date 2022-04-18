import React, { useState } from 'react';
import { Carousel, Figure } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';
import './Banner.css';

const Banner = () => {
 
    return (
        <div>
            
            <Carousel className='banner-slider'>
                <Carousel.Item>
                    <Figure className='m-0'>
                        <span className='banner-ovarlay'></span>
                        <img className="d-block w-100 h-100" src={banner1} alt="First slide" />
                    </Figure>
                    <Carousel.Caption className='banner-caption'>
                        <h1 className='title'>TrobleShooting and repairing</h1>
                        <p className='banner-desc'>Here provide reliable and affordable services.</p>
                        <button className='contact-btn btn' type="button">Contact Now</button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <Figure className='m-0'>
                        <span className='banner-ovarlay'></span>
                        <img className="d-block w-100" src={banner2} alt="Second slide" />
                    </Figure>
                    <Carousel.Caption className='banner-caption'>
                        <h1 className='title'>Fast Electrical Service Provider</h1>
                        <p className='banner-desc'>Here provide reliable and affordable services.</p>
                        <button className='contact-btn btn' type="button">Contact Now</button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <Figure className='m-0'>
                        <span className='banner-ovarlay'></span>
                        <img className="d-block w-100" src={banner3} alt="Third slide" />                    
                    </Figure>
                    <Carousel.Caption className='banner-caption'>
                        <h1 className='title'> Fast and Reliable services</h1>
                        <p className='banner-desc'>Here provide reliable and affordable services. </p>
                        <button className='contact-btn btn' type="button">Contact Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;