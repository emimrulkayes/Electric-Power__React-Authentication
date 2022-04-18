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
        <Container>
            <h2 className='section-title mt-5'> My Awesome <span>Services</span> </h2>
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