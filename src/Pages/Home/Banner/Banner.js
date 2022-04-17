import React, { useState } from 'react';
import { Carousel, Figure } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';
import './Banner.css';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            
            <Carousel className='banner-slider' activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <Figure className='m-0'>
                        <span className='banner-ovarlay'></span>
                        <img className="d-block w-100 h-100" src={banner1} alt="First slide" />
                    </Figure>
                    <Carousel.Caption className='banner-caption'>
                        <h1>Fast Electrical Service Provider</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <button className='contact-btn btn' type="button">Contact Now</button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <Figure className='m-0'>
                        <span className='banner-ovarlay'></span>
                        <img className="d-block w-100" src={banner2} alt="Second slide" />
                    </Figure>
                    <Carousel.Caption className='banner-caption'>
                        <h1>Fast Electrical Service Provider</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className='contact-btn btn' type="button">Contact Now</button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <Figure className='m-0'>
                        <span className='banner-ovarlay'></span>
                        <img className="d-block w-100" src={banner3} alt="Third slide" />                    
                    </Figure>
                    <Carousel.Caption className='banner-caption'>
                        <h1>Fast Electrical Service Provider</h1>
                        <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur. </p>
                        <button className='contact-btn btn' type="button">Contact Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;