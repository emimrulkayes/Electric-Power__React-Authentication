import React from 'react';
import { Button, Col, Container, Figure, Image, Row } from 'react-bootstrap';
import './About.css';
import aboutMe from '../../images/aboutMe.png';

const About = () => {
    return (
        <Container className='container-height'>
            <div className='section-top  my-5'>
                <h1 className='section-title text-center'>About Me</h1>
            </div>
            <Row className='align-items-center'>
               <Col xs={12} sm={12} md={6} lg={5} >
                    <Figure className='about-img-box'>
                        <Image src={aboutMe} className="img-fluid" alt="Profile" />
                    </Figure>
               </Col>
               <Col xs={12} sm={12} md={6} lg={7} >
                    <div className='about-info mb-5'>
                        <h3 className='about-title mb-3'>The art of repairing since 2022</h3>
                        <p>Hey there! I'm an electrician I can do my work designing, installing, maintaining, and repairing the electrical systems and products used in residential homes, businesses, and factories. I work inside or outside buildings to ensure lights, industrial equipment, and appliances operate safely and reliably.</p>
                    </div>
                    <Button type="button" className='btn contact-btn'> Contact Me</Button>
               </Col>
            </Row>  
        </Container>
    );
};

export default About;