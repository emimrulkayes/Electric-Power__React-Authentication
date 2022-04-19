import React, { useState } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] =useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if(user){
        navigate(from, {replace: true});
    }

    const handleUserLogin = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    
    return (
        <Container className='form-container container'>
            <Row className='login-form'>
                <h2 className='form-title text-center'>Login </h2>
                <Form onSubmit={handleUserLogin} className='p-0'>
                    <Form.Group className="input-group mb-3 " controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} className='rounded' type="email" required />
                    </Form.Group>

                    <Form.Group className="input-group mb-4" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordBlur} className='rounded' type="password" required />
                    </Form.Group>
                    <p className='text-danger'> {error?.message} </p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <Button className='form-submit' variant="primary" type="submit"> Login </Button>
                </Form>
                <Form.Text> New to Electric Power? <Link className='form-link' to="/register">Create an account</Link> </Form.Text>
                <Form.Text className='alternative-line'> or </Form.Text>
                <Button className='submit-google-btn rounded' variant="primary" type="submit"> Continue with google </Button>
            </Row>
        </Container>
    );
};

export default Login;