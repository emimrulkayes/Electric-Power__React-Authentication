import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <Container className='pt-5'>
            <div className='section-top mt-5 mb-5'>
                <h2 className='section-title mb-4'> My Awesome <span>Services</span> </h2>
            </div>
            <Row>
                {
                    services.map(service => 
                        <Service
                            key={service.id}
                            service = {service}
                        ></Service>
                    )
                }
            </Row>
        </Container>
    );
};

export default Services;