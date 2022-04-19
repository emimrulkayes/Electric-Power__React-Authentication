import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id, name, img, description, price} = service;
    const navigate = useNavigate();

    const navigateToBookService = id => {
        navigate(`/booking/${id}`);
    }

    return (
        <Col xs={12} sm={6} md={6} lg={4} >
            <CardGroup>
                <Card className='service-card mb-4'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title> {name} </Card.Title>
                        <p className='text-info'> <strong>Price: {price}</strong> </p>
                        <Card.Text>
                            {description} 
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <button onClick={() => navigateToBookService(id)} className='booking-btn' type="button">Book Now</button>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </Col>
    );
};

export default Service;