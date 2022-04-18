import React from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {

    const handleCreateUser = event => {
        event.preventDefault();
    }
    return (
        <>
            <Container className='form-container'>
                <Row className='login-form'>
                    <h2 className='form-title text-center'>Login </h2>
                    <Form onSubmit={handleCreateUser} className='p-0'>
                        <Form.Group className="input-group mb-3 " controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className='rounded' type="email" required />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="input-group mb-4" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control className='rounded' type="password" required />
                        </Form.Group>
                        
                        <Button className='form-submit' variant="primary" type="submit"> Login </Button>
                    </Form>
                    <Form.Text> New to Electric Power? <Link className='form-link' to="/register">Create an account</Link> </Form.Text>
                    <Form.Text className='alternative-line'> or </Form.Text>
                    <Button className='submit-google-btn rounded' variant="primary" type="submit"> Continue with google </Button>
                </Row>
            </Container>
        </>
    );
};

export default Login;