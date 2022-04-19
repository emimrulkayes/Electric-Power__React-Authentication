import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './BookService.css';


const BookService = () => {
    const {serviceId} = useParams();
    return (
        <Container className='book-service-container'>
            <Row>
                <h2 className='text-center my-5'>Thank you for the booking: {serviceId} </h2>
            </Row>
        </Container>
    );
};

export default BookService;