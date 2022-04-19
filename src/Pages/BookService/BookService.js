import React, { useState } from 'react';
import { Button, Container, Form, Row, Toast } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './BookService.css';


const BookService = () => {
    const [show, setShow] = useState(false);

    const handleUserRegister = event => {
        event.preventDefault();
    }
    const {serviceId} = useParams();
    return (
        <>
            <Container className='form-container'>
                <Row className='login-form'>
                    <h2 className='form-title text-center'> Thanks for Booking</h2>
                    <p className='text-center'> Please Fill up this Form </p>
                    <Form onSubmit={handleUserRegister}  className='p-0 '>
                        <Form.Group className="input-group mb-3" controlId="formBasicName">
                            <Form.Label>Name: </Form.Label>
                            <Form.Control className='rounded' type="name" required />
                        </Form.Group>

                        <Form.Group className="input-group mb-3" controlId="formBasicEmail">
                            <Form.Label>Email: </Form.Label>
                            <Form.Control className='rounded' type="email" required />
                        </Form.Group>

                        <Form.Group className="input-group mb-3" controlId="formBasicAddress">
                            <Form.Label>Address:</Form.Label>
                            <Form.Control className='rounded' type="text" required />
                        </Form.Group>

                        <Form.Group className="input-group mb-4" controlId="formBasicPhone">
                            <Form.Label>Phone:</Form.Label>
                            <Form.Control className='rounded' type="phone" required />
                        </Form.Group>
                        
                        <Button onClick={() => setShow(true)} className='form-submit' variant="primary" type="submit">Submit</Button>
                    </Form>
            
                </Row>
            </Container>
            <Toast className='toast-container' onClose={() => setShow(false)} show={show} delay={3000} autohide>
                <Toast.Header></Toast.Header>
                <Toast.Body>Thanks for booking service: {serviceId}</Toast.Body>
            </Toast>
         </>
    );
};

export default BookService;