import React from 'react';
import { Accordion, Container, Row } from 'react-bootstrap';
import './Faq.css';

const Faq = () => {
    return (
        <Container className='faq-container'>
            <Row>
                <div className='section-top mt-5 mb-5'>
                    <h2 className='section-title mb-4'> frequently asked question </h2>
                </div>
                <Accordion className='faq-container mt-5 p-0'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='faq-title'>Difference between authorization and authentication?</Accordion.Header>
                        <Accordion.Body>
                        <h5>Authorization:</h5>
                        The authorization is a process utilized in an app that helps in controlling the informational access and limiting actions performed by users. <br/><br/>
                        <h5>Authentication:</h5>
                        The authentication server generates a JSON Web Token using a private key and then sends the JSON Web Token back to your React app. Your React app stores this JSON Web Token and sends it to your backend server whenever your user needs to make a request.
                        
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header className='faq-title'>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                        <Accordion.Body>
                        Firebase is a general-purpose very easy-to-use API and easy the features. it's very easy to use and, I can easily build a Project. It has a lot of different products that cover much of what's needed to build a project. It would take a lot of time to describe the complete set of situations where Firebase can be helpful.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header className='faq-title'>What other services does firebase provide other than authentication?</Accordion.Header>
                        <Accordion.Body>
                        There are many services which Firebase provides, Most useful of them are: <br/>
                        Cloud Firestore, Cloud Functions, Authentication, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
        </Container>
    );
};

export default Faq;