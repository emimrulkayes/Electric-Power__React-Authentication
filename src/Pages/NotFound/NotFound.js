import React from 'react';
import { Button, Container, Figure, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import error from '../../images/error.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <>
            <Container>
                <Row>
                    <Figure className='error'>
                      <img src={error} alt="Error" className='error-img img-fluid' />
                    </Figure>

                    <div className='text-center'>
                        <Link to='/'>
                            <Button type='button' variant="warning">Back to Home</Button>
                        </Link>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default NotFound;