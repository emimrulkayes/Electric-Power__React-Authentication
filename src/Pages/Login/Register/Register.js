import React, { useState } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    if(user){
        navigate('/')
    }

    const handleUserRegister = event => {
        event.preventDefault();
        if(password !== confirmPassword){
            setError("Your two password didn't match");
            return;
        }
        if(password.length < 8){
            setError("Password must 8 character or longer");
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }
    return (
        <Container className='form-container'>
            <Row className='login-form'>
                <h2 className='form-title text-center'> Register </h2>
                <Form onSubmit={handleUserRegister} className='p-0 '>
                    <Form.Group className="input-group mb-3" controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                        <Form.Control onBlur={handleEmailBlur} className='rounded' type="email" required />
                    </Form.Group>

                    <Form.Group className="input-group mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordBlur} className='rounded' type="password" required />
                    </Form.Group>

                    <Form.Group className="input-group mb-4" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control onBlur={handleConfirmPasswordBlur} className='rounded' type="password" required />
                    </Form.Group>
                    <p className='text-danger'> {error} </p>
                    
                    <Button className='form-submit' variant="primary" type="submit"> Register </Button>
                </Form>
                <Form.Text> Already have an account? <Link className='form-link' to="/login">Login</Link> </Form.Text>
                <Form.Text className='alternative-line'> or </Form.Text>
                <Button className='submit-google-btn rounded' variant="primary" type="submit"> Continue with google </Button>
            
               
            </Row>
        </Container>
    );
};

export default Register;